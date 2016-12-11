'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('jquery-ui/ui/core');

require('jquery-ui/ui/widget');

require('jquery-ui/ui/widgets/dialog');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    //ENTER_KEY : 13;

    //ESCAPE_KEY : 27;

    function _class($) {
        _classCallCheck(this, _class);

        this.$ = $;
        this.todo = this.todo || {}, this.data = JSON.parse(localStorage.getItem("todoData"));

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
            "1": "#pending",
            "2": "#inProgress",
            "3": "#completed"
        };

        // if (typeof window !== 'undefined') {
        //     this.element = document.getElementById(id);
        // }
    }

    _createClass(_class, [{
        key: 'render',
        value: function render(options) {
            var $ = this.$;
            options = options || {};
            options = $.extend({}, this.defaults, options);

            $.each(this.data, function (index, params) {
                this.generateElement(params);
            });

            // this.generateElement({
            //  id: "123",
            //  code: "1",
            //  title: "asd",
            //  date: "22/12/2013",
            //  description: "Blah Blah"
            //  });

            $.each(this.codes, function (index, value) {
                $(value).droppable({
                    drop: function drop(event, ui) {
                        var element = ui.helper,
                            css_id = element.attr("id"),
                            id = css_id.replace(options.taskId, ""),
                            object = this.data[id];

                        // Removing old element
                        this.removeElement(object);

                        // Changing object code
                        object.code = index;

                        // Generating new element
                        this.generateElement(object);

                        // Updating Local Storage
                        this.data[id] = object;
                        localStorage.setItem("todoData", JSON.stringify(this.data));

                        // Hiding Delete Area
                        $("#" + this.defaults.deleteDiv).hide();
                    }
                });
            });

            $("#" + options.deleteDiv).droppable({
                drop: function drop(event, ui) {
                    var element = ui.helper,
                        css_id = element.attr("id"),
                        id = css_id.replace(options.taskId, ""),
                        object = this.data[id];

                    // Removing old element
                    this.removeElement(object);

                    // Updating local storage
                    delete this.data[id];
                    localStorage.setItem("todoData", JSON.stringify(this.data));

                    // Hiding Delete Area
                    $("#" + this.defaults.deleteDiv).hide();
                }
            });
            // if (typeof window !== 'undefined') {
            //
            // }
        }
    }, {
        key: 'generateElement',
        value: function generateElement(params) {
            var parent = $(this.codes[params.code]),
                wrapper;

            if (!parent) {
                return;
            }

            wrapper = $("<div />", {
                "class": this.defaults.todoTask,
                "id": this.defaults.taskId + params.id,
                "data": params.id
            }).appendTo(parent);

            $("<div />", {
                "class": this.defaults.todoHeader,
                "text": params.title
            }).appendTo(wrapper);

            $("<div />", {
                "class": this.defaults.todoDate,
                "text": params.date
            }).appendTo(wrapper);

            $("<div />", {
                "class": this.defaults.todoDescription,
                "text": params.description
            }).appendTo(wrapper);

            wrapper.draggable({
                start: function start() {
                    $("#" + this.defaults.deleteDiv).show();
                },
                stop: function stop() {
                    $("#" + this.defaults.deleteDiv).hide();
                },
                revert: "invalid",
                revertDuration: 200
            });
        }
    }, {
        key: 'removeElement',
        value: function removeElement(params) {
            $("#" + this.defaults.taskId + params.id).remove();
        }
    }, {
        key: 'add',
        value: function add() {
            var inputs = $("#" + this.defaults.formId + " :input"),
                errorMessage = "Title can not be empty",
                id,
                title,
                description,
                date,
                tempData;

            if (inputs.length !== 4) {
                return;
            }

            title = inputs[0].value;
            description = inputs[1].value;
            date = inputs[2].value;

            if (!title) {
                this.generateDialog(errorMessage);
                return;
            }

            id = new Date().getTime();

            tempData = {
                id: id,
                code: "1",
                title: title,
                date: date,
                description: description
            };

            this.data[id] = tempData;
            localStorage.setItem("todoData", JSON.stringify(this.data));

            generateElement(tempData);

            inputs[0].value = "";
            inputs[1].value = "";
            inputs[2].value = "";
        }
    }, {
        key: 'generateDialog',
        value: function generateDialog(message) {
            var responseId = "response-dialog",
                title = "Messaage",
                responseDialog = $("#" + responseId),
                buttonOptions;

            if (!responseDialog.length) {
                responseDialog = $("<div />", {
                    title: title,
                    id: responseId
                }).appendTo($("body"));
            }

            responseDialog.html(message);

            buttonOptions = {
                "Ok": function Ok() {
                    responseDialog.dialog("close");
                }
            };

            responseDialog.dialog({
                autoOpen: true,
                width: 400,
                modal: true,
                closeOnEscape: true,
                buttons: buttonOptions
            });
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.data = {};
            localStorage.setItem("todoData", JSON.stringify(this.data));
            $("." + this.defaults.todoTask).remove();
        }
    }]);

    return _class;
}();

exports.default = _class;