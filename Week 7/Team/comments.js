var comment_list = [];

import { add_ls } from './ls.js';

function show_all_comments() {
    let comment_wrapper = document.getElementById('comment_wrapper');

    //wraps only added comments
    let posted_comments = document.createElement('div');
    
    for (let i = 0; i < comment_list.length; i++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let span = document.createElement('span');
        let h5 = document.createElement('h5');

        h5.innerHTML = comment_list[i].name;
        span.innerHTML = comment_list[i].date;
        
        p.innerHTML = comment_list[i].content;
        
        h5.appendChild(span);

        
        div.appendChild(h5);
        div.appendChild(p);

        posted_comments.appendChild(div);     
    }
    let h4 = document.createElement('h4');
    h4.innerHTML = 'Hike Comments';
    comment_wrapper.appendChild(h4);
    comment_wrapper.appendChild(posted_comments);
}

function show_hike_comments(hike_name) {
    //wraps both comment box and added comments
    let comment_wrapper = document.getElementById('comment_wrapper');

    comment_wrapper.innerHTML = '';

    // put the add new comment box in the comment_wrapper div
    let comment_box = add_comment_box();
    comment_wrapper.appendChild(comment_box);

    //wraps only added comments
    let posted_comments = document.createElement('div');
    // create array with comments for specific hike
    let clicked_hike_comments = [];
    for (let i = 0; i < comment_list.length; i++) {
        if (comment_list[i].name === hike_name) {
            clicked_hike_comments.push(comment_list[i]);
        }
    }

    for (let i = 0; i < clicked_hike_comments.length; i++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let h5 = document.createElement('h5');

        h5.innerHTML = clicked_hike_comments[i].date;
        
        p.innerHTML = clicked_hike_comments[i].content;

        div.appendChild(h5);
        div.appendChild(p);

        posted_comments.appendChild(div);     
    }
    comment_wrapper.appendChild(posted_comments);
}

function add_comment_box() {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let textarea = document.createElement('textarea');
    let button = document.createElement('button');


    let current_hike = document.getElementsByTagName('h2')[0].innerHTML;
    h4.innerHTML = 'Share your experience from ' + current_hike + ' !';

    textarea.placeholder = 'Type new comment here';
    textarea.cols = '50';
    textarea.rows = '6';

    button.innerHTML = "Add Comment";
    button.addEventListener('click', () => {
        add_new_comment();
    });

    button.addEventListener('touchend', () => {
        add_new_comment();
    });


    div.appendChild(h4);
    div.appendChild(textarea);
    div.appendChild(button);

    return div;
}

function add_new_comment() {
    let user_input = document.getElementsByTagName('textarea')[0].value;

    let current_hike = document.getElementsByTagName('h2')[0].innerHTML;

    let new_comment = comment_list.push({
        name: current_hike,
        date: new Date(),
        content: user_input
    });

    add_ls(comment_list[new_comment - 1]);

    show_hike_comments(current_hike);

    document.getElementsByTagName('textarea')[0].innerHTML = '';
}



export { comment_list, show_all_comments, show_hike_comments };

// set localstorage id with -[hikename] 
// when clicked on hike get hike.name and compare to -[hikename], if match, show comment
