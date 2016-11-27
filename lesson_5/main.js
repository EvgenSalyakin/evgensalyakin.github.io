let myNodelist = document.getElementById("myUL").getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {

    let spanEdt = document.createElement("SPAN");
    let edt = document.createTextNode("\u270E");
    spanEdt.className = "edit";
    spanEdt.appendChild(edt);

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(spanEdt);
    myNodelist[i].appendChild(span);
}

document.getElementById("TabList").firstElementChild.firstElementChild.click();

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = delEl;
}

let edit = document.getElementsByClassName("edit");
for (let i = 0; i < edit.length; i++) {
    edit[i].onclick = edtEl;
}

let list = document.querySelector('#myUL');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function archive() {
    var checked = document.getElementsByClassName('checked');
    var arcList = document.getElementById("myUL");
    for (var i=checked.length-1;i>=0; i--) {
        var item = arcList.removeChild(checked[i]);
        var li = document.createElement("li");
        var t = document.createTextNode(item.firstChild.nodeValue);
        li.appendChild(t);
        document.getElementById("myULArc").appendChild(li);
    }
}

function sort() {
    var list = document.getElementById("myUL");
    var elements = document.getElementById("myUL").getElementsByTagName("LI");
    var n = elements.length;

    for (let i = 0; i < n; i++) {
        {
            var min = i;
            for (let j = i + 1; j < n; j++) {
                if (elements[j].innerText < elements[min].innerText) min = j;
            }
            var element = elements[min];
            var first = elements[i];
            list.insertBefore(element, first);
        }

    }
}

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let spanEdt = document.createElement("SPAN");
    let edt = document.createTextNode("\u270E");
    spanEdt.className = "edit";
    spanEdt.appendChild(edt);

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(spanEdt);
    li.appendChild(span);

    span.onclick = delEl;
    spanEdt.onclick = edtEl;
}

function delEl() {
    var div = this.parentElement;
    div.style.display = "none";
}

function edtEl() {

    let div = this.parentElement;
    let el = div.firstChild;
    if (el.tagName == "INPUT") {
        div.firstChild.remove();
        let t = document.createTextNode(el.value);
        div.insertBefore(t, div.firstChild);
    }
    else {
        div.firstChild.remove();

        let input = document.createElement("INPUT");
        input.value = el.nodeValue;
        input.onkeydown = function (event) {
            if (event.keyCode == 13) {
                let div = event.target.parentElement;
                let el = div.firstChild;
                div.firstChild.remove();
                let t = document.createTextNode(el.value);
                div.insertBefore(t, div.firstChild);
            }
        };
        div.insertBefore(input, div.firstChild);
    }
}

function openTab(evt, tabName) {

    var tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}