'use strict';

var _todolistJQ = require('./todolistJQ');

var _todolistJQ2 = _interopRequireDefault(_todolistJQ);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _jqueryUi = require('jquery-ui');

var _jqueryUi2 = _interopRequireDefault(_jqueryUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'jquery-ui/ui/core';
// import 'jquery-ui/ui/widgets/draggable';
// import 'jquery-ui/ui/widgets/datepicker';
// import 'jquery-ui/ui/widgets/droppable';


// import * as $ from '../../node_modules/jquery/dist/jquery';
// import * as jQuery from '../../node_modules/jquery/dist/jquery';

//import * from '../../node_modules/jquery-ui/ui/core';
// export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;
(0, _jquery2.default)("#datepicker").datepicker();
(0, _jquery2.default)("#datepicker").datepicker("option", "dateFormat", "dd/mm/yy");
(0, _jquery2.default)(".task-container").droppable();
(0, _jquery2.default)(".todo-task").draggable(); //{ revert: "valid", revertDuration:200 });


var todolist = new _todolistJQ2.default(_jquery2.default);

todolist.render();
(0, _jquery2.default)('#btnadd').click(todolist.add.bind(todolist));