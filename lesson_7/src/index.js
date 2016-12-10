import ToDoList from './todolistJQ';

// import * as $ from '../../node_modules/jquery/dist/jquery';
// import * as jQuery from '../../node_modules/jquery/dist/jquery';

//import * from '../../node_modules/jquery-ui/ui/core';
// export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;
import $ from 'jquery';
import 'jquery-ui';

// $( "#datepicker" ).datepicker();
// $( "#datepicker" ).datepicker("option", "dateFormat", "dd/mm/yy");
// $(".task-container").droppable();
// $(".todo-task").draggable({ revert: "valid", revertDuration:200 });

let todolist = new ToDoList($);

todolist.render();




