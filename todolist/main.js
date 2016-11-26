
var menu = new ToDoList({
    title: "ToDo List",
    items: [
         "Pay bills",
        "Meet Marina",
        "Go to the bank",
        "Read a book",
        "Make homework"
    ]
});

var elem = menu.getElem();

document.getElementById('todolist').appendChild(elem);