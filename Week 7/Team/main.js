import hikes_list from './hikes.js';
import {show_all_comments, show_hike_comments} from './comments.js';
import { ls_check } from './ls.js';

// Convert hikes_list to const to prevent tampering
const hikes_obj = hikes_list;

const ul_wrapper = document.getElementById("hike_wrapper");

function display_hikes() {
    //Wipe page
    ul_wrapper.innerHTML = "";
    document.getElementById('comment_wrapper').innerHTML = '';

    for (let i = 0; i < hikes_obj.length; i++) {
        // Create Elements
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let div = [];
        let h3 = [];
        let p = [];

        // Use for loop to create multiple of one type of element and put in an  array
        for (let j = 0; j < 4; j++) {
            div[j] = document.createElement('div');
        }

        for (let k = 0; k < 2; k++) {
            h3[k] = document.createElement('h3');
        }

        for (let m = 0; m < 2; m++) {
            p[m] = document.createElement('p');
        }

        // Insert data into elements

        h2.innerHTML = hikes_obj[i].name;

        img.src = hikes_obj[i].img_src;
        img.alt = hikes_obj[i].img_alt;

        h3[0].innerHTML = "Distance";
        h3[1].innerHTML = "Difficulty";

        p[0].innerHTML = hikes_obj[i].distance;
        p[1].innerHTML = hikes_obj[i].difficulty;

        //Append children in a specific order to ensure correct display
        div[0].appendChild(img);

        div[1].appendChild(h3[0]);
        div[1].appendChild(p[0]);

        div[2].appendChild(h3[1]);
        div[2].appendChild(p[1]);

        div[3].appendChild(div[1]);
        div[3].appendChild(div[2]);

        li.appendChild(h2);
        li.appendChild(div[0]);
        li.appendChild(div[3]);

        ul_wrapper.appendChild(li);
    }

    //show all comments at the bottom of the page
    show_all_comments();

    let li = document.querySelectorAll('li');

    li.forEach(item => {
    item.addEventListener('click', () => {
        display_one_hike(item);
    })
    item.addEventListener('touchend', () => {
        display_one_hike(item);
    })
});

}

function display_one_hike(item) {
    document.getElementById('comment_wrapper').innerHTML = '';
    //find with hike was clicked on
    let clicked_hike;
    for (let i = 0; i < hikes_list.length; i++) {
        if (item.firstChild.innerHTML == hikes_list[i].name) {
            clicked_hike = hikes_list[i];
            break;
        }
    }

    ul_wrapper.innerHTML = "";
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let div = [];
    let h3 = [];
    let p = [];
    let button = document.createElement('button');

    for (let j = 0; j < 6; j++) {
        div[j] = document.createElement('div');
    }

    for (let k = 0; k < 4; k++) {
        h3[k] = document.createElement('h3');
    }

    for (let m = 0; m < 4; m++) {
        p[m] = document.createElement('p');
    }

    h2.innerHTML = clicked_hike.name;

    img.src = clicked_hike.img_src;
    img.alt = clicked_hike.img_alt;

    h3[0].innerHTML = "Distance";
    h3[1].innerHTML = "Difficulty";
    h3[2].innerHTML = "Description";
    h3[3].innerHTML = "Directions";

    p[0].innerHTML = clicked_hike.distance;
    p[1].innerHTML = clicked_hike.difficulty;
    p[2].innerHTML = clicked_hike.description;
    p[3].innerHTML = clicked_hike.directions;

    button.type = "button";
    button.innerHTML = "Go Back";


    div[0].appendChild(img);

    div[1].appendChild(h3[0]);
    div[1].appendChild(p[0]);

    div[2].appendChild(h3[1]);
    div[2].appendChild(p[1]);

    div[3].appendChild(h3[2]);
    div[3].appendChild(p[2]);

    div[4].appendChild(h3[3]);
    div[4].appendChild(p[3]);

    div[5].appendChild(div[1]);
    div[5].appendChild(div[2]);
    div[5].appendChild(div[3]);
    div[5].appendChild(div[4]);

    li.appendChild(h2);
    li.appendChild(div[0]);
    li.appendChild(div[5]);
    li.appendChild(button);

    button.addEventListener('click', () => {
        display_hikes();
    });

    button.addEventListener('touchend', () => {
        display_hikes();
    });

    ul_wrapper.appendChild(li);

    show_hike_comments(clicked_hike.name);

    //compare item.name to hikes_list and grab thst one
}

ls_check(hikes_list);
display_hikes();






// Click on li -> for each li add event listener 'click, touchend' which wipes screen and displays full hike stats

// Back button wipes screen and calls diplay_hikes()