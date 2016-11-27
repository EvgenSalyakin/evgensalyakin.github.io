
var toDoList = new ToDoList({
    title: "Home to do:",
    items: [
         "Pay bills",
        "Meet Marina",
        "Go to the bank",
        "Read a book",
        "Make homework"
    ]
});

var elem = toDoList.getElem();

document.getElementById('todolist').appendChild(elem);

var toDoList2 = new ToDoList({
    title: "Work to do:",
    items: [
        "Print report",
        "Send invoice",
        "Recive email",
        "Read a manual"
    ]
});

var elem2 = toDoList2.getElem();

document.getElementById('todolist2').appendChild(elem2);