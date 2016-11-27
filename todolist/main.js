
var toDoList = new ToDoList({
    title: "ToDo List",
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