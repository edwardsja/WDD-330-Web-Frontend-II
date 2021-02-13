import {todo} from './ToDos.js';
import {build_ls, build_default} from './utils.js';


// if there is anything in localstorage, display the tasks, if not display the default display
function ls_check() {
    if (!(localStorage.length === 0)) {
        build_ls();
    } else {
        build_default();
    }
}

/* 
compare clicked task name to todo task name to get todo id 
input todo id with task text and toggle id with boolean into localstorage
 */
function add_ls(task_text) {
    let task_id = 0;
    let toggle_state = new Boolean(false);
    for (let i = 0; i < todo.length; i++) {
        if (task_text === todo[i].task) {
            task_id = todo[i].id;
            break;
        }
    }

    let toggle_id = String(task_id + '-complete');
    localStorage.setItem(task_id, task_text);
    localStorage.setItem(toggle_id,  toggle_state);
}


//find todo id and toggle id and remove from local storage
function delete_ls(task_text) {
    for (let i = 0; i < todo.length; i++) {
        if (task_text === todo[i].task) {
            localStorage.removeItem(todo[i].id);
            localStorage.removeItem(String(todo[i].id + '-complete'));
            break;
        }
    }
}


// compare clicked task text to todo text to find correct todo, then change completed boolean
function toggle_ls(task_text) {
    for (let k = 0; k < todo.length; k++) {
        if (task_text === todo[k].task) {
            if (todo[k].complete) {
                localStorage.setItem(String(todo[k].id + '-complete'), 'true');
                break;
            } else {
                localStorage.setItem(String(todo[k].id + '-complete'), 'false');
                break;
            }
        }
    }
}

export {add_ls, delete_ls, toggle_ls, ls_check};