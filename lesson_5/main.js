var myNodelist = document.getElementById("myUL").getElementsByTagName("LI");

for (var i = 0; i < myNodelist.length; i++) {

    var spanEdt = document.createElement("SPAN");
    var edt = document.createTextNode("\u270E");
    spanEdt.className = "edit";
    spanEdt.appendChild(edt);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(spanEdt);
    myNodelist[i].appendChild(span);
}

document.getElementById("TabList").firstElementChild.firstElementChild.click();

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = delEl;
}

var edit = document.getElementsByClassName("edit");
for (i = 0; i < edit.length; i++) {
    edit[i].onclick = edtEl;
}

var list = document.querySelector('#myUL');
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

    for (var i = 0; i < n; i++) {
        {
            var min = i;
            for (var j = i + 1; j < n; j++) {
                if (elements[j].innerText < elements[min].innerText) min = j;
            }
            var element = elements[min];
            var first = elements[i];
            list.insertBefore(element, first);
        }

    }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var spanEdt = document.createElement("SPAN");
    var edt = document.createTextNode("\u270E");
    spanEdt.className = "edit";
    spanEdt.appendChild(edt);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
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

    var div = this.parentElement;
    var el = div.firstChild;
    if (el.tagName == "INPUT") {
        div.firstChild.remove();
        var t = document.createTextNode(el.value);
        div.insertBefore(t, div.firstChild);
    }
    else {
        div.firstChild.remove();

        var input = document.createElement("INPUT");
        input.value = el.nodeValue;
        input.onkeydown = function (event) {
            if (event.keyCode == 13) {
                var div = event.target.parentElement;
                var el = div.firstChild;
                div.firstChild.remove();
                var t = document.createTextNode(el.value);
                div.insertBefore(t, div.firstChild);
            }
        };
        div.insertBefore(input, div.firstChild);
    }
}

function openTab(evt, tabName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}