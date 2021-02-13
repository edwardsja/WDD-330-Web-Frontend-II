"use strict";

var _utils = require("./utils.js");

//import list_of_todos from 'ToDos.js';
//console.log(list_of_todos);
window.add_task = _utils.add_task;

var li = _utils.task_list.querySelectorAll('li');

var x_span = [];

for (var i = 0; i < li.length; i++) {
  x_span[i] = li[i].lastElementChild;
  x_span[i].addEventListener('click', function () {
    (0, _utils.delete_task)(item);
  });
  x_span[i].addEventListener('touchend', function () {
    (0, _utils.delete_task)(item);
  });
} // x_span.forEach(item => {
//     document.addEventListener('click', () => {
//         delete_task(item);
//     });
//     document.addEventListener('touchend', () => {
//         delete_task(item);
//     });
// });