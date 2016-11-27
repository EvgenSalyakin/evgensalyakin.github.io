function ToDoList(options) {
    var elem, list, selected, edited, saveValue, listArc, selectedElem;

    function getElem() {
        if (!elem) render();
        return elem;
    }

    function render() {
        elem = document.createElement('div');
        elem.className = "todolist";

        let titleElem = document.createElement('span');
        elem.appendChild(titleElem);
        titleElem.className = "todolist__title";
        titleElem.textContent = options.title;

        selectedElem = document.createElement('span');
        elem.appendChild(selectedElem);
        selectedElem.className = "todolist__selected";
        selectedElem.textContent = 'No selected item';
        //elem.onmousedown = function () {
        //  return false;
        //};

        elem.onclick = function (event) {
            if (event.target.closest('.todolist__title')) {
                toggle();
            } else if (event.target.closest('.todolist__item')) {
                if (event.target.closest('.todolist__item')!=selected) {saveItem()};
                select(event.target.closest('.todolist__item'));
            } else if (event.target.closest('.todolist__menu')) {
                if (edited != null) {
                    saveItem();
                    if (event.target.closest('.edit')) {
                        return;
                    }                }
                if (event.target.closest('.add')) {
                    addItem();
                } else if (event.target.closest('.edit')) {
                    editItem();
                } else if (event.target.closest('.check')) {
                    checkItem();
                } else if (event.target.closest('.delete')) {
                    deleteItem();
                } else if (event.target.closest('.up')) {
                    upItem();
                } else if (event.target.closest('.down')) {
                    downItem();
                } else if (event.target.closest('.sortAB')) {
                    sortABList();
                } else if (event.target.closest('.sortZY')) {
                    sortZYList();
                } else if (event.target.closest('.archive')) {
                    archiveList();
                }
            }
        }
    }

    function renderItems() {
        let items = options.items || [];
        list = document.createElement('ul');
        list.className = 'todolist__list';
        items.forEach(function (item) {
            let li = document.createElement('li');
            li.className = 'todolist__item';
            li.textContent = item;
            list.appendChild(li);
        });
        listArc = document.createElement('ul');
        listArc.className = 'todolist__listArc';
        elem.appendChild(list);
        elem.appendChild(listArc);
    }

    function renderMenu() {
        let menu = document.createElement('div');
        menu.className = 'todolist__menu';

        let spanAdd = document.createElement("SPAN");
        let add = document.createTextNode("+");
        spanAdd.className = "add";
        spanAdd.appendChild(add);

        let spanEdt = document.createElement("SPAN");
        let edt = document.createTextNode("\u270E");
        spanEdt.className = "edit";
        spanEdt.appendChild(edt);

        let spanChk = document.createElement("SPAN");
        let chk = document.createTextNode("\u2705");
        spanChk.className = "check";
        spanChk.appendChild(chk);

        let spanDel = document.createElement("SPAN");
        let del = document.createTextNode("\u00D7");
        spanDel.className = "delete";
        spanDel.appendChild(del);

        let spanUp = document.createElement("SPAN");
        let up = document.createTextNode("\u21D1");
        spanUp.className = "up";
        spanUp.appendChild(up);

        let spanDwn = document.createElement("SPAN");
        let dwn = document.createTextNode("\u21D3");
        spanDwn.className = "down";
        spanDwn.appendChild(dwn);

        let spanSAB = document.createElement("SPAN");
        let sab = document.createTextNode("\u2BEF");
        spanSAB.className = "sortAB";
        spanSAB.appendChild(sab);

        let spanSZY = document.createElement("SPAN");
        let szy = document.createTextNode("\u2BED");
        spanSZY.className = "sortZY";
        spanSZY.appendChild(szy);

        let spanArc = document.createElement("SPAN");
        let arc = document.createTextNode("\u25A4");
        spanArc.className = "archive";
        spanArc.appendChild(arc);

        menu.appendChild(spanAdd);
        menu.appendChild(spanEdt);
        menu.appendChild(spanChk);
        menu.appendChild(spanDel);
        menu.appendChild(spanUp);
        menu.appendChild(spanDwn);
        menu.appendChild(spanSAB);
        menu.appendChild(spanSZY);
        menu.appendChild(spanArc);

        elem.appendChild(menu);
    }

    function saveItem() {
        if (edited == null) return;
        if (edited.firstChild.value=='') { edited.remove(); edited = null; return; }
        edited.textContent = edited.firstChild.value;
        edited = null;
    }

    function cancelItem() {
        if (saveValue=='') edited.remove();
        else edited.textContent = saveValue;
        edited = null;
    }

    function addItem() {

        let li = document.createElement('li');
        li.className = 'todolist__item';
        saveValue = '';
        let input = document.createElement('INPUT');
        input.type = "text";
        input.onkeydown = function (event) {
            if (event.keyCode == 13) {
                saveItem();
            } else if (event.keyCode == 27) {
                cancelItem();
            }
        };
        li.appendChild(input);
        edited = li;
        select(li);
        list.appendChild(li);
    }

    function editItem() {

        if (selected == null) return;

        let li = selected;

        let input = document.createElement('INPUT');
        input.value = selected.textContent;
        saveValue = selected.textContent;
        selected.textContent = '';
        input.type = "text";
        input.onkeydown = function (event) {
            if (event.keyCode == 13) {
                saveItem();
            } else if (event.keyCode == 27) {
                cancelItem();
            }
        };
        li.appendChild(input);
        edited = li;
     }

    function checkItem() {
         selected.classList.toggle('checked');
     }

    function deleteItem() {
        if (selected == null) return;
        selected.remove();
        selected = null;
    }

    function upItem() {
        if (selected == null) return;
        let prev = selected.previousElementSibling;
        list.insertBefore(selected, prev);
    }

    function downItem() {
        if (selected == null) return;
        let next = selected.nextElementSibling;
        list.insertBefore(next, selected);
    }

    function sortABList() {
        let items = list.childNodes;
        let n = items.length;
        for (let i = 0; i < n; i++) {
            {
                let min = i;
                for (let j = i + 1; j < n; j++) {
                    if (items[j].innerText < items[min].innerText) min = j;
                }
                let element = items[min];
                let item = items[i];
                list.insertBefore(element, item);
            }
        }
    }

    function sortZYList() {
        let items = list.childNodes;
        let n = items.length;
        for (let i = 0; i < n; i++) {
            {
                let max = i;
                for (let j = i + 1; j < n; j++) {
                    if (items[j].innerText > items[max].innerText) max = j;
                }
                let element = items[max];
                let item = items[i];
                list.insertBefore(element, item);
            }
        }
    }

    function archiveList() {
        let checked = list.getElementsByClassName('checked');
        for (let i=checked.length-1;i>=0; i--) {
            let item = list.removeChild(checked[i]);
            listArc.appendChild(item);
        }
    }

    function open() {
        if (!elem.querySelector('.todolist__menu')) {
            renderMenu();
        }
        if (!elem.querySelector('.todolist__list')) {
            renderItems();
        }
        elem.classList.add('open');
    }

    function close() {
        elem.classList.remove('open');
        if (!selected) selectedElem.textContent = 'No selected item';
        else selectedElem.textContent = selected.textContent;
    }

    function toggle() {
        if (elem.classList.contains('open')) close();
        else open();
    }

    function select(item) {
        if (selected != undefined) {
            selected.classList.remove('selected');
        }
        selected = item;
        selected.classList.add('selected');
    }

    this.getElem = getElem;
    this.toggle = toggle;
    this.close = close;
    this.open = open;
}