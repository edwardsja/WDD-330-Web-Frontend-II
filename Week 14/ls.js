import { display_default } from './main.js';

// check if there is information in ls, if so, dislpay
// if not, display default data
function ls_check() {
    if (localStorage.length > 0) {
        if (localStorage.getItem('owned_dragons') && localStorage.getItem('owned_dragons') != ',' && localStorage.getItem('owned_dragons') != '') {
            ls_display();
            return 1;
        }
        else {
            display_default();
        }
    } else {
        display_default();
    }

}

//add data to ls every 5 minutes
// or when save button is pressed
// will also update list when dragon is deleted
function ls_update(owned_dragons, coins, timer = 0, timer_result = '') {
    //convert list into an array 
    let owned_array = [];
    for (let i = 0; i < owned_dragons.length; i++) {
        owned_array[i] = owned_dragons[i].innerHTML;
    }
    localStorage.setItem('owned_dragons', owned_array);
    localStorage.setItem('coins', coins);
    localStorage.setItem('timer', timer);
    localStorage.setItem('timer_result', timer_result);

    //get save button and display success
    let save_div = document.getElementById('manual_save');
    let insert_before = document.querySelector('#manual_save p');
    let p = document.createElement('p');
    p.innerHTML = "*Progress saved*";

    save_div.insertBefore(p, insert_before);

    // removes success message after 3 seconds
    setInterval(() => {p.remove();}, 3000);
}

function ls_display() {
    let inv_list = localStorage.getItem('owned_dragons');
    let coin_counter = parseInt(localStorage.getItem('coins'));
    let timer = parseInt(localStorage.getItem('timer'));
    let timer_result = localStorage.getItem('timer_result');

    display_default(inv_list, coin_counter, timer, timer_result);
}

export {ls_check, ls_update, ls_display};