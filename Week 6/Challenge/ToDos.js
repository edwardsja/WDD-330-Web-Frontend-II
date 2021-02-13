var todo = [];

// add new object to todo
function new_todo(task_text) {
    todo.push({
        id: Date.now(),
        task: task_text,
        complete: false
    });
}

// build todo object from localstorage variables
function add_todo(task_id, complete) {
    todo.push({
        id: task_id,
        task: localStorage.getItem(task_id),
        complete: complete
    });
}

// compare texts to find correct todo object and delete match
function delete_todo(parent_li) {
    for (let i = 0; i < todo.length; i++) {
        if (parent_li.childNodes[1].innerHTML === todo[i].task) {
            todo.splice(i, 1);
            console.log(todo);
        }
    }
}

// compare texts to find correct todo, grab boolean, and flip 
function toggle_todo(checkbox) {
    for (let i = 0; i < todo.length; i++) {
        if (todo[i].task === checkbox.parentElement.childNodes[1].innerHTML) {
            todo[i].complete = !todo[i].complete;
            console.log(todo);
            break;
        }
    }
}

export {todo, add_todo, delete_todo, toggle_todo, new_todo};