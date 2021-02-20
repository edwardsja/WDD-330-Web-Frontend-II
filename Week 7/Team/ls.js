import {comment_list } from './comments.js';

function ls_check(hikes_list) {
    if (!(localStorage.length === 0)) {
        build_ls(localStorage.length, hikes_list);
    } 
}

function add_ls(new_comment) {
    let miliseconds = new_comment.date.getTime();
    let hike_name = new_comment.name.split(' ').join('').toLowerCase();

    let comment_id = String(miliseconds + '-' + hike_name)
    localStorage.setItem(comment_id, new_comment.content);

    for (var i = 0; i < localStorage.length; i++){
        console.log(localStorage.key(i));
    }
    for (var i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
    }
}

function build_ls(length, hikes_list) {
    for (let i = 0; i < length; i++) {
        let hike_name = '';
        //selects hike name from ls key
        let ls_name = localStorage.key(i).split('-')[1];

        for (let j = 0; j < hikes_list.length; j++) {
            //formats hike name the same way it looks in ls, so it is comparable
            let hikes_name_squish = hikes_list[j].name.split(' ').join('').toLowerCase();
            if (ls_name === hikes_name_squish) {
                hike_name = hikes_list[j].name;
                break;
            }
        }

        //selects only miliseconds from ls key
        let ls_time = new Date(parseInt(localStorage.key(i).split('-')[0]));

        let user_input = localStorage.getItem(localStorage.key(i))
        
        comment_list.push({
            name: hike_name,
            date: ls_time,
            content: user_input
        });
    }
}

export { add_ls, ls_check };