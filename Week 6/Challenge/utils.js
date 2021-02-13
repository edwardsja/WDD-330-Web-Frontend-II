import {
    add_todo,
    new_todo,
    delete_todo,
    toggle_todo,
    todo
} from './ToDos.js';
import {
    add_ls,
    delete_ls,
    toggle_ls
} from './ls.js';

const task_list = document.getElementById("todo_wrapper");

// create task list from localstorage
function build_ls() {
    //wipe task list
    task_list.innerHTML = '';

    let ls_array = [];
    // grab localstorage key names that doesn't include '-complete' and put in array
    for (let i = 0; i < localStorage.length; i++) {
        if (!(localStorage.key(i).includes('-complete'))) {
            ls_array.push(localStorage.key(i));
        }
    }
    for (let i = 0; i < ls_array.length; i++) {
        let li = document.createElement('li');

        let span = [];

        for (let j = 0; j < 3; j++) {
            span[j] = document.createElement('span');
        }

        //use newly created array to grab items from localstorage to use as task text
        span[1].innerHTML = localStorage.getItem(ls_array[i]);
        span[2].innerHTML = 'X';

        //take localstorage toggle boolean string (e.g. 'false' or 'true') and convert string to actual boolean value
        var new_boolean = (localStorage.getItem(String(ls_array[i] + '-complete')) === 'true');

        //add comments and put todo code in ToDos-
        add_todo(ls_array[i], new_boolean);

        // if task is completed, input completed symbol and add strikethrough
        if (new_boolean === true) {
            span[0].innerHTML = "&#9746;";
            span[1].classList.add('strikethrough');
        }

        li.appendChild(span[0]);
        li.appendChild(span[1]);
        li.appendChild(span[2]);

        task_list.appendChild(li);

        // create task footer
        task_counter();
        // add click and touchend listeners to each localstorage 
        add_listener(li);
    }
}

// if there is no localstorage, add default li with instructions
function build_default() {
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');

        let span = [];

        for (let j = 0; j < 3; j++) {
            span[j] = document.createElement('span');
        }

        switch (i) {
            case 0:
                span[1].innerHTML = 'Add new task below';
                break;
            case 1:
                span[1].innerHTML = 'Delete tasks with the X to the right';
                break;
            case 2:
                span[1].innerHTML = 'Mark complete with the box to the left';
                break;
        } 

        span[2].innerHTML = 'X';

        li.appendChild(span[0]);
        li.appendChild(span[1]);
        li.appendChild(span[2]);

        task_list.appendChild(li);

        add_listener(li);
    }
    task_counter();
}

// when + button is clicked, add new task with user input
function add_task() {
    let li = document.createElement('li');
    let span = [];

    for (let i = 0; i < 3; i++) {
        span[i] = document.createElement('span');
    }

    span[1].innerHTML = document.getElementById('new_task').value;
    span[2].innerHTML = 'X';


    //Add task to todo object
    new_todo(span[1].innerHTML);

    //add to localstorage
    add_ls(span[1].innerHTML);

    console.log(todo);

    li.appendChild(span[0]);
    li.appendChild(span[1]);
    li.appendChild(span[2]);

    task_list.appendChild(li);

    task_counter();
    add_listener(li);
}

//parentElement is the clicked task li, so find the parent li, then delete
function delete_task(item) {
    let parent_li = item.parentElement;

    // delete from localstorage
    delete_ls(parent_li.childNodes[1].innerHTML);

    //delete todo object
    delete_todo(parent_li);

    parent_li.remove();
    task_counter();
}

/* 
when an li is created, the span with the 'X' will get event listeners 

also adds listeners to first span, which is the empty box that acts as the checkbox
*/
function add_listener(li) {
    let new_li = li;
    let x_span = new_li.lastElementChild;
    x_span.addEventListener('click', () => {
        delete_task(x_span);
    });
    x_span.addEventListener('touchend', () => {
        delete_task(x_span);
    });

    let checkbox_span = new_li.firstElementChild;
    checkbox_span.addEventListener('click', () => {
        toggle_complete(checkbox_span);
    });

    checkbox_span.addEventListener('touchend', () => {
        toggle_complete(checkbox_span);
    });
}

/*
if the first span of an li is completely empty, then add the check symbol and add strikethrough to task text, if not, delete the check symbol and get rid of strikethrough from task text
*/
function toggle_complete(checkbox) {
    if (checkbox.childElementCount === 0 && checkbox.childNodes.length === 0) {
        checkbox.innerHTML = "&#9746;";
        checkbox.nextElementSibling.classList.add('strikethrough');
    } else {
        checkbox.innerHTML = "";
        checkbox.nextElementSibling.classList.remove('strikethrough');
    }
    task_counter();

    // change boolean value from todo object
    toggle_todo(checkbox);
    
    // change boolean value from localstorage
    toggle_ls(checkbox.parentElement.childNodes[1].innerHTML);
}

//counts number of li in todo list, subtracts number of completed tasks and displays result
function task_counter() {
    let num_tasks = task_list.querySelectorAll('li').length;
    let li = task_list.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        // if the first span (complete toggle box) is completely empty (has no text nodes or elements), subtract from num_task, because that task is now completed
        if (li[i].firstElementChild.childElementCount != 0 || li[i].firstElementChild.childNodes.length != 0) {
            num_tasks--;
        }
    }
    // if there is only one task left, change task footer text to singular
    if (num_tasks === 1) {
        document.getElementById('num_tasks').innerHTML = num_tasks + ' task left';
    } else {
        document.getElementById('num_tasks').innerHTML = num_tasks + ' tasks left';
    }
}

//make a list of element's children so the forEach method can work correctly
let filter_list = Array.from(document.getElementById('filter').children);
//adds listeners to each filter button
filter_list.forEach(item => {
    item.addEventListener('click', () => {
        select_filter(item);
    });
    item.addEventListener('touchend', () => {
        select_filter(item);
    });
});

//removes 'selected' class from all filter buttons and add selected class to current item
function select_filter(item) {
    for (let i = 0; i < filter_list.length; i++) {
        filter_list[i].classList.remove('selected');
    }
    item.classList.add('selected');
    filter_tasks(item);
}

/* 
Finds which filter was clicked on and hides or shows li depending on which filter was set
*/
function filter_tasks(item) {
    let filter_name = item.innerHTML;
    let li = task_list.children;

    if (filter_name === "All") {
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove('hide');
        }
    } else if (filter_name === "Active") {
        for (let i = 0; i < li.length; i++) {
            //if li is completed, hide it, show active
            if (li[i].firstChild.hasChildNodes()) {
                li[i].classList.add('hide');
            } else {
                li[i].classList.remove('hide');
            }
        }
    } else {
        for (let i = 0; i < li.length; i++) {
            //if li is completed, show it, hide active
            if (li[i].firstChild.hasChildNodes()) {
                li[i].classList.remove('hide')
            } else {
                li[i].classList.add('hide');
            }
        }
    }
    // adds border-top to top li, if li[0] is hidden, and removes border-top if li[0] is not hidden
    if (li[0].classList.contains('hide')) {
        for (let i = 1; i < li.length; i++) {
            if (!(li[i].classList.contains('hide'))) {
                li[i].style.border = '1px solid black';
                break;
            }
        }
    } else {
        for (let i = 1; i < li.length; i++) {
            li[i].style.borderTop = 'none';
        }
    }
}


export {
    add_task,
    delete_task,
    add_listener,
    build_ls,
    build_default,
    task_list
};