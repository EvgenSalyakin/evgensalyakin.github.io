export default class {
    //ENTER_KEY : 13;

    //ESCAPE_KEY : 27;

    constructor($) {
        this.$ = $;
        this.todo = this.todo || {},
        this.data = JSON.parse(localStorage.getItem("todoData"));

        this.data = this.data || {};

        this.defaults = {
            todoTask: "todo-task",
            todoHeader: "task-header",
            todoDate: "task-date",
            todoDescription: "task-description",
            taskId: "task-",
            formId: "todo-form",
            dataAttribute: "data",
            deleteDiv: "delete-div"
            };
        this.codes = {
            "1" : "#pending",
            "2" : "#inProgress",
            "3" : "#completed"
        };

        // if (typeof window !== 'undefined') {
        //     this.element = document.getElementById(id);
        // }
    }


    render(options) {
        let $ = this.$;
        options = options || {};
        options = $.extend({}, this.defaults, options);

        // $.each(data, function (index, params) {
        //     generateElement(params);
        // });

        this.generateElement({
         id: "123",
         code: "1",
         title: "asd",
         date: "22/12/2013",
         description: "Blah Blah"
         });

        // if (typeof window !== 'undefined') {
        //
        // }
    }

    // Add Task
    generateElement(params){
        var parent = $(this.codes[params.code]),
            wrapper;

        if (!parent) {
            return;
        }

        wrapper = $("<div />", {
            "class" : this.defaults.todoTask,
            "id" : this.defaults.taskId + params.id,
            "data" : params.id
        }).appendTo(parent);

        $("<div />", {
            "class" : this.defaults.todoHeader,
            "text": params.title
        }).appendTo(wrapper);

        $("<div />", {
            "class" : this.defaults.todoDate,
            "text": params.date
        }).appendTo(wrapper);

        $("<div />", {
            "class" : this.defaults.todoDescription,
            "text": params.description
        }).appendTo(wrapper);

        wrapper.draggable({
            start: function() {
                $("#" + this.defaults.deleteDiv).show();
            },
            stop: function() {
                $("#" + this.defaults.deleteDiv).hide();
            },
            revert: "invalid",
            revertDuration : 200
        });

    };
}