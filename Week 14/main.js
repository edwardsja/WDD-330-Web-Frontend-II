
import { ls_check, ls_update } from './ls.js';
import { dragons, store } from './objects.js';

// set global coin variable
var coin_counter = 0;

//set global setInterval timer variable
var timer_interval;
// set global timer variable
var breed_timer = 0;
// set global timer result (for ls)
var breed_timer_result = '';

// check if items are in ls before running any other code
// if there aren't any items, display the default data
ls_check();

//will display info from ls or if ls is empty, will display the starting data
function display_default(dragon_list = ['common fire', 'common grass'], current_coins = 50, current_timer, current_breed_result) {
    let inv_ul = document.getElementById('inv_list');
    inv_ul.innerHTML = '';

    // if dragon_list is coming from ls,
    // change dragon_list to an array
    if (typeof dragon_list == 'string') {
        dragon_list = dragon_list.split(',');
    }
    for (let i = 0; i < dragon_list.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = dragon_list[i];
        inv_ul.appendChild(li);
    }
    add_inv_events();
    display_elements();

    coin_counter = current_coins;

    // if there was a timer stored in ls, redisplay that timer
    if (current_timer > 0 && current_breed_result != '') {
        breed_timer = current_timer;
        display_result(current_breed_result);
    }

    return;
}

async function display_elements() {
    let response = await fetch('./dragons.json');
    let data = await response.json();

    let owned_dragon = document.querySelectorAll('#inv_list li');
    owned_dragon.forEach(item => {
        let dragon_name = item.innerHTML.split(' ')[1];
        let element_array = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].name == dragon_name) {
                for (let j = 0; j < data[i].elements.length; j++) {
                    element_array.push(data[i].elements[j]);
                }
                break;
            }
        }
        // display element icons for the current dragon
        for (let i = 0; i < element_array.length; i++) {
            let img = document.createElement('img');
            img.src = 'icons/' + element_array[i] + '.svg';
            img.alt = 'icon of ' + element_array[i] + ' element';
            img.setAttribute('data-element', element_array[i]);

            item.appendChild(img);
        }
    });
    //element icon event listeners
    let element = document.querySelectorAll('#inv_list img');
    element.forEach(image => {
        image.addEventListener('click', (event) => {
            let element_name = document.createElement('div');
            element_name.id = 'icon_desc';

            // set class and position from user mouse click
            let x = event.pageX;
            let y = event.pageY;
            element_name.classList = 'icon-desc';
            element_name.style.top = y + 'px';
            element_name.style.left = x + 'px';

            element_name.innerHTML = image.getAttribute('data-element');
            image.parentElement.parentElement.appendChild(element_name);
            icon_name_handler(element_name);
        })
        image.addEventListener('touchend', (event) => {
            let element_name = document.createElement('div');
            element_name.id = 'icon_desc';

            // set class and position from user mouse click
            let x = event.pageX;
            let y = event.pageY;
            element_name.classList = 'icon-desc';
            element_name.style.top = y + 'px';
            element_name.style.left = x + 'px';

            element_name.innerHTML = image.getAttribute('data-element');
            image.parentElement.parentElement.appendChild(element_name);
            icon_name_handler(element_name);
        })
    })
}

//sets up setTimeout (this was the only way I could pass element name to setTimeout, arrow function did not work)
function icon_name_handler(element_name) {
    setTimeout(() => {
        return remove_icon_name(element_name)
    }, 1000);
    return;
}

function remove_icon_name(element_name) {
    element_name.remove();
}

// Updates coin counter every second based on dragon rarity
setInterval(add_coins(), 1000);

function add_coins() {
    return () => {
        let inv = document.getElementById('inv_list');
        inv.querySelectorAll('li').forEach(item => {
            let str = item.innerHTML;
            let rarity = str.split(" ")[0];
            switch (rarity) {
                case 'common':
                    coin_counter += 1 / 5;
                    break;
                case 'uncommon':
                    coin_counter += 2 / 5;
                    break;
                case 'rare':
                    coin_counter += 4 / 5;
                    break;
                case 'veryrare':
                    coin_counter += 8 / 5;
                    break;
                case 'epic':
                    coin_counter += 16 / 5;
                    break;
                case 'legendary':
                    coin_counter += 32 / 5;
                    break;
            }
            // create number formatter
            let number_format = new Intl.NumberFormat('en-US');
            // display coin counter
            document.getElementById('num_coins').innerHTML = " " + number_format.format(Math.floor(coin_counter));
        })
    }
}

async function grab_input() {
    // check if there is a dragon timer, if so, tell user to wait until timer is done
    if (breed_timer > 0) {
        let breed_div = document.getElementById("breeding");
        let h3 = document.createElement('h3');

        h3.id = 'breed_alert';

        h3.innerHTML = "You already have an incubating dragon, please wait until the incubation is done."
        breed_div.appendChild(h3);
        setTimeout(() => {
            clear_warning();
        }, 5000);
        return;
    }

    let class_selector = document.getElementsByClassName("breed-input");
    var user_selection = [];
    let inv_check = false;
    let new_list = [];
    for (let i = 0; i < class_selector.length; i++) {
        //set user input to a specific formatting and grab only the dragon name, not rarity
        user_selection[i] = class_selector[i].value;
        user_selection[i] = user_selection[i].trim();
        user_selection[i] = user_selection[i].toLowerCase();
        user_selection[i] = user_selection[i].split(" ")[1];

        //grab inventory list
        let inv = document.getElementById('inv_list');
        let li = inv.querySelectorAll("li");

        /* i == class_selector.length - 1, meaning that this code won't run until the loop is done
        the code compares the entire inventory against the first input, and then the entire inventory against the second input 
        If both match, then inv_check = true and code continues, if one or both fail, then inv_check = false and code stops and throws error */
        if (i == class_selector.length - 1) {
            //removing rarity from inventory list and putting in array 
            li.forEach(item => {
                new_list.push(item.innerHTML.split('<')[0].split(" ")[1])
            });
            inv_check = new_list.some(item => {
                return item == user_selection[0];
            }) && new_list.some(item => {
                return item == user_selection[1];
            });
        }
    }
    // check if user_selection 0 and 1 are the same dragon, if so, 
    // check if user has at least 2 of those types of dragpns in inv
    let same_result = check_same(user_selection);
    if (same_result == 0) {
        let breed_div = document.getElementById("breeding");
        let h3 = document.createElement('h3');

        h3.id = 'breed_alert';

        h3.innerHTML = "You do not have two of that dragon."
        breed_div.appendChild(h3);
        setTimeout(() => {
            clear_warning();
        }, 5000);
        return;
    }
    // check if selected dragons are opposite types
    let opposites_result = check_opposites(user_selection);
    if (opposites_result == 0) {
        let breed_div = document.getElementById("breeding");
        let h3 = document.createElement('h3');

        h3.id = 'breed_alert';

        h3.innerHTML = "The selected dragons are opposite elements and cannot be bred."
        breed_div.appendChild(h3);
        setTimeout(() => {
            clear_warning();
        }, 5000);
        return;
    }

    if (inv_check == false) {
        let breed_div = document.getElementById("breeding");
        let h3 = document.createElement('h3');

        h3.id = 'breed_alert';

        h3.innerHTML = "You do not have one of the selected dragons. Check your spelling or choose a different dragon from your inventory."
        breed_div.appendChild(h3);
        setTimeout(() => {
            clear_warning();
        }, 5000);
        return;
    }
    let bred_rarity = get_rarity();

    if (bred_rarity == 'fail') {
        let breed_div = document.getElementById("breeding");
        let h3 = document.createElement('h3');

        h3.id = 'breed_alert';

        h3.innerHTML = "Dragon breeding failed. Try again with the same dragons, or choose new ones."
        breed_div.appendChild(h3);
        setTimeout(() => {
            clear_warning();
        }, 5000);
        return;
    }

    breed_timer = get_timer(bred_rarity);

    let bred_dragon = await get_new_dragon(bred_rarity, user_selection);
    if (bred_dragon == 'exit') {
        return;
    }

    display_result(bred_dragon);
}

function check_same(user_selection) {
    if (user_selection[0] == user_selection[1]) {
        let dragon_list = document.querySelectorAll('#inv_list li')
        let matched_counter = 0;

        dragon_list.forEach(item => {
            let test = item.innerHTML.split('<')[0].split(" ")[1];
            if (item.innerHTML.split('<')[0].split(" ")[1] == user_selection[0]) {
                matched_counter++;
            }
        })

        if (matched_counter >= 2) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 1;
    }
}

function check_opposites(user_selection) {
    switch (user_selection[0]) {
        case 'fire':
            if (user_selection[1] == 'ice') {
                return 0;
            } else {
                return 1;
            }
        case 'grass':
            if (user_selection[1] == 'metal') {
                return 0;
            } else {
                return 1;
            }
        case 'water':
            if (user_selection[1] == 'lightning') {
                return 0;
            } else {
                return 1;
            }
        case 'rock':
            if (user_selection[1] == 'air') {
                return 0;
            } else {
                return 1;
            }
        case 'metal':
            if (user_selection[1] == 'grass') {
                return 0;
            } else {
                return 1;
            }
        case 'lightning':
            if (user_selection[1] == 'water') {
                return 0;
            } else {
                return 1;
            }
        case 'air':
            if (user_selection[1] == 'rock') {
                return 0;
            } else {
                return 1;
            }
        case 'ice':
            if (user_selection[1] == 'fire') {
                return 0;
            } else {
                return 1;
            }
    }
}

function get_timer(bred_rarity) {
    let seconds = 1000;
    let minutes = 60000;
    switch (bred_rarity) {
        case 'exit':
            break;

        case 'common':
            return 10 * seconds;

        case 'uncommon':
            return 1 * minutes;

        case 'rare':
            return 5 * minutes;

        case 'veryrare':
            return 60 * minutes;

        case 'epic':
            return 720 * minutes;

        case 'legendary':
            return 1440 * minutes;

    } 
}

// Gets a random number between 0 and 100 and returns rarity
function get_rarity() {
    let percent = Math.floor(Math.random() * 100);

    if (percent >= 0 && percent <= 60) {
        return 'common';
    } else if (percent > 60 && percent <= 80) {
        return 'uncommon';
    } else if (percent > 80 && percent <= 88) {
        return 'rare';
    } else if (percent > 88 && percent <= 93) {
        return 'veryrare';
    } else if (percent > 93 && percent <= 99) {
        return 'epic';
    } else {
        return 'legendary';
    }
}

/* Iterates through the user's first input's breeding outcomes and compares it to the second input's breeding outcomes. If there are any matches, it gets added to matched_dragons. 

If, for some reason, there is a failure during iteration, and matched_dragons is empty or undefined, the program will grab another rarity to compare the inputs to. This will repeat indefinately until a successful comparison is achieved

The matched_dragons array will have from 1 to infinite strings. The program will then choose a random index of the matched_dragons to then return to the user. */
async function get_new_dragon(bred_rarity, user_selection) {
    let matched_dragons = [];

    for (let i = 0; i < dragons[user_selection[0]][bred_rarity].length; i++) {
        for (let j = 0; j < dragons[user_selection[1]][bred_rarity].length; j++) {
            if (dragons[user_selection[0]][bred_rarity][i] == dragons[user_selection[1]][bred_rarity][j]) {
                matched_dragons.push(dragons[user_selection[0]][bred_rarity][i]);
            }
        }
    }

    for (; matched_dragons[0] == '' || matched_dragons[0] == 'undefined' || matched_dragons.length == 0;) {
        let new_rarity = get_rarity();
        let new_dragon = await get_new_dragon(new_rarity, user_selection);
        breed_timer = get_timer(new_rarity);
        if (new_dragon != 'exit') {
            display_result(new_dragon);
            return 'exit';
        }
        return 'exit';
    }

    let length = matched_dragons.length;
    let selected_num = 0;

    //needs to be anything but 0 to start the loop
    let check_result = 0;
    // get array from json file
    let data = await fetch_json();
    //keep running until a match is found
    for (let i = 0, j = 0; check_result == 0; i++, j++) {
        selected_num = get_random_num(1, length);
        check_result = check_elements(matched_dragons[selected_num], user_selection, data);

        if (i >= 100) {
            check_result = check_elements(matched_dragons[selected_num], user_selection, data);
        }
        // checks if the loop has run over 100 times, if so, gets new rarity, because dragons may not have matching dragons at that rarity
        // if loop is still gets to 1000, meaning, that new rarity was called 9 times, then end loop and outputs error
        // loop only generally usually needs 5-10 max, so over 100 times would mean something went wrong
        // and over 1000 means that the dragons don't match at all, or some other error
        if (i >= 100) {
            let new_rarity = get_rarity();
            let new_dragon = await get_new_dragon(new_rarity, user_selection);
            breed_timer = get_timer(new_rarity);
            if (new_dragon != 'exit') {
                display_result(new_dragon);
                return 'exit';
            }
        }
        if (j >= 1000) {
            let breed = document.getElementById('breeding');
            let button = document.getElementById('breed_button');
            let p = document.createElement('p');
            p.id = 'inv_alert';
            p.innerHTML = 'Unexpected error occured. Please try again.';
            breed.insertBefore(p, button);
            setTimeout(() => {
                clear_warning();
            }, 5000);
            return;
        }
    }
    return bred_rarity + ' ' + matched_dragons[selected_num];
}

/*
    in the dragon breed list, a pair of dragons might match, where it is not possible
    ex. laser and steel both have laser as a potential breed result, but neither dragon
    has lightning element, so that result shouldn't be possible

    this function checks to see if the pair of dragons meets those requirements, and if not, 
*/
function check_elements(chosen_dragon, user_selection, data) {
    let first_elements = [];
    let second_elements = [];
    let chosen_elements = [];

    for (let i = 0; i < data.length; i++) {
        if (user_selection[0] == data[i].name) {
            first_elements = data[i].elements;
        } else if (user_selection[1] == data[i].name) {
            second_elements = data[i].elements;
        } else if (chosen_dragon == data[i].name) {
            chosen_elements = data[i].elements;
        }

        // if all 3 variables are filled, then break. no need to continue loop
        if (first_elements.length != 0 && second_elements.length != 0 && chosen_elements.length != 0) {
            break;
        }
    }

    // check if user selections have the same element in both arrays, 
    // if true, remove element from one of the array to end up with unique elements between each array
    // decrementing loop so when splice happens, reindexing doesn't affect the next item in iteration
    for (let i = first_elements.length - 1; i > -1; i--) {
        for (let j = 0; j < second_elements.length; j++) {
            if (first_elements[i] == second_elements[j]) {
                first_elements.splice(i, 1);
            }
        }
    }
    // add the unique elements to second elements so that there is only one array to match to chosen_elements
    let combined_elements = first_elements.concat(second_elements);


    // resets check_result for clean slate
    let check_result = 0;
    // check chosen_elements against combined elements
    // if there is a match, add to check_result
    for (let i = 0; i < chosen_elements.length; i++) {
        for (let j = 0; j < combined_elements.length; j++) {
            if (chosen_elements[i] == combined_elements[j]) {
                check_result++;
            }
        }
    }

    // if the number of matched elements equals the length of the array for the bred dragon, 
    // then function will return true and the loop will stop
    // if false, then the bred dragon can't happen and needs to be rerolled
    return (check_result == chosen_elements.length);
}

async function fetch_json() {
    let response = await fetch("./dragons.json");
    let data = response.json();
    return data;
}

function get_random_num(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min) - 1;
}


// Creates a new li to display the new dragon
async function display_result(bred_dragon) {

    let ul = document.getElementById("inv_list");
    let li = document.createElement('li');

    timer_interval = setInterval(function () {
        if (breed_timer <= 0) {
            clearInterval(timer_interval);

            let timer_display = document.querySelector('#breeding li');
            if (timer_display != null) {
                timer_display.remove();
            }
            let ul = document.getElementById("inv_list");
            let li = document.createElement('li');

            li.innerHTML = bred_dragon;
            ul.appendChild(li);

            //clear breed inputs
            let breed_inputs = document.querySelectorAll('.breeding input');
            breed_inputs[0].value = '';
            breed_inputs[1].value = '';
            //clear sell input to prevent accidental sell
            document.querySelector('.inventory input').value = '';
            //add event to new dragon
            add_inv_events();
            // add element icons
            display_elements();

            //resert breed timer and result
            breed_timer = 0;
            breed_timer_result = '';
        } else {
            let breed_div = document.getElementById('breeding');
            if (breed_div.childNodes[11] != undefined) {
                breed_div.childNodes[11].remove();
            }

            breed_timer_result = bred_dragon;
            
            let hours = get_hours();
            let minutes = get_minutes(hours);
            let seconds = get_seconds(minutes);

            if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
                clearInterval(timer_interval);
                return;
            }

            if (hours < 10) {
                hours = '0' + Math.floor(hours);
            } else {
                hours = Math.floor(hours);
            }

            if (minutes < 10) {
                minutes = '0' + Math.floor(minutes);
            } else {
                minutes = Math.floor(minutes);
            }

            if (seconds < 10) {
                seconds = '0' + Math.floor(seconds);
            } else {
                seconds = Math.floor(seconds);
            }

            let format_time = hours + ':' + minutes + ':' + seconds;

            // grab old li and replace the text if it exists, if not create new li and insert timer
            let old_timer_display = document.querySelector('#breeding li');
            if (old_timer_display != null) {
                old_timer_display.innerHTML = "Incubation will finish in " + format_time;
            } else {
                let li = document.createElement('li');
                li.innerHTML = "Incubation will finish in " + format_time;
            }

            breed_div.appendChild(li);
        }
        if (breed_timer > 0) {
            breed_timer -= 1000;
        }
    }, 1000); 
}

function get_hours() {
    return breed_timer / 3600000;
}

function get_minutes(hours) {
    return (hours - Math.floor(hours)) * 60;
}

function get_seconds(minutes) {
    return Math.floor((minutes - Math.floor(minutes)) * 60);
}

// sell dragon button event listeners
let sell_button = document.querySelector('#sell_button');
sell_button.addEventListener('click', () => {
    sell_dragon();
});
sell_button.addEventListener('touchend', () => {
    sell_dragon();
});

// when first called, confirmation will be 0, and modal will be displayed to confirm sell
// if user confirms, confirmation will be 1, then Compares all the li from the inventory and deletes first matching result, starting from the bottom
function sell_dragon(confirmation = 0) {
    let inv = document.getElementById('inv_list');
    let li = inv.querySelectorAll("li");
    let user_input = document.getElementById('sell_dragon').value;
    user_input = user_input.trim();
    user_input = user_input.toLowerCase();

    if (confirmation == 1) {
        for (let i = li.length - 1; i >= 0; i--) {
            let test = li[i].innerHTML.split("<")[0];
            if (user_input == li[i].innerHTML.split("<")[0]) {
                let rarity = user_input.split(" ")[0];
                switch (rarity) {
                    case 'common':
                        coin_counter += 10;
                        document.getElementById('num_coins').innerHTML = Math.floor(coin_counter);
                        break;
                    case 'uncommon':
                        coin_counter += 100;
                        document.getElementById('num_coins').innerHTML = Math.floor(coin_counter);
                        break;
                    case 'rare':
                        coin_counter += 500;
                        document.getElementById('num_coins').innerHTML = Math.floor(coin_counter);
                        break;
                    case 'veryrare':
                        coin_counter += 3750;
                        document.getElementById('num_coins').innerHTML = Math.floor(coin_counter);
                        break;
                    case 'epic':
                        coin_counter += 33750;
                        document.getElementById('num_coins').innerHTML = Math.floor(coin_counter);
                        break;
                    case 'legendary':
                        coin_counter += 455625;
                        document.getElementById('num_coins').innerHTML = Math.floor(coin_counter);
                        break;
                }

                li[i].remove();
                modal.style.display = 'none';
                modal.setAttribute('data-modal', '0');
                return;
            }
        }
    } else {
        modal_handler('Sell Dragon', `Are you sure you want to sell <strong>${user_input}</strong>?`);
        return;
    }
}

// set header text and body text, show modal
function modal_handler(header, body) {
    let modal_header = document.querySelector('#modal_header h2');
    let modal_body = document.querySelector('#modal_body p');

    modal_header.innerHTML = header;
    modal_body.innerHTML = body;

    modal.style.display = 'block';
}

// modal variables
let modal = document.getElementById('modal');
modal.setAttribute('data-modal', '0');
let modal_close = document.querySelector('#modal span');
let modal_confirm = document.getElementById('modal_confirm');
let modal_cancel = document.getElementById('modal_cancel');

// modal event listeners
modal_close.addEventListener('click', () => {
    modal.style.display = "none";
});
modal_close.addEventListener('touchend', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
window.addEventListener('touchend', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

modal_cancel.addEventListener('click', () => {
    modal.style.display = "none";
});
modal_cancel.addEventListener('touchend', () => {
    modal.style.display = "none";
});

modal_confirm.addEventListener('click', () => {
    confirm_modal();
});
modal_confirm.addEventListener('touchend', () => {
    confirm_modal();
});

function confirm_modal() {
    // regrab modal header to determine which function called modal_handler
    let orig_function = document.querySelector('#modal_header h2');
    modal.setAttribute('data-modal', '1');
    // select function based on modal header
    switch (orig_function.innerHTML) {
        case 'Sell Dragon':
            sell_dragon(1);
            break;

        case 'Buy Item':
            if (typeof modal.getAttribute('data-storeItem') == 'string') {
                buy_item(modal.getAttribute('data-storeItem'), 1);
                break;
            }

        case 'Reset Progress':
            reset_progress(1);
            break;
    }
}

//breed event listeners 
let breed_button = document.getElementById('breed_button');
breed_button.addEventListener('click', () => {
    grab_input();
});
breed_button.addEventListener('touchend', () => {
    grab_input();
});


// set up store and event listeners
let store_name = document.getElementById('store_list_name');
let store_price = document.getElementById('store_list_price');
store.names.forEach(item => {
    let ul = store_name;
    let li = document.createElement('li');

    li.innerHTML = item;
    ul.appendChild(li);
});
store.prices.forEach(item => {
    let ul = store_price;
    let li = document.createElement('li');

    li.innerHTML = item + ' Coins';
    ul.appendChild(li);
});

store_name.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        modal.setAttribute('data-storeItem', item.innerHTML);
        buy_item(item);
    });
})
store_price.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        buy_item(item);
    });
})

function buy_item(item, confirmation) {
    // set up variables
    let str;
    let store_item
    // if buy_item is called from the model_confirm event,
    // then item will already be a string
    if (typeof item != 'string') {
        //  if the user clicked on the right part of the store, the coins will be grabbed, 
        // and finds which store item the item belongs to
        if (item.innerHTML.includes('Coins')) {
            let store_price = document.getElementById('store_list_price');
            let store_name = document.getElementById('store_list_name');
            for (let i = 0; i < store_price.children.length; i++) {
                if (store_price.children[i] == item) {
                    str = store_name.children[i].innerHTML;
                    store_item = str.split(" ")[0];
                }
            }

        } else {
            str = item.innerHTML;
            store_item = str.split(" ")[0];
        }
        
    } else {
        // grab just the first word if item is already a string
        store_item = item.split(" ")[0];
    }

    if (confirmation == 1) {
        switch (store_item) {
            case 'Fire':
                if (coin_counter >= store.prices[0]) {
                    coin_counter -= store.prices[0];
                    let inv_ul = document.getElementById('inv_list');
                    let li = document.createElement('li');
                    li.innerHTML = 'common fire';

                    inv_ul.appendChild(li);
                    break;
                } else {
                    store_warning();
                    break;
                };
            case 'Grass':
                if (coin_counter >= store.prices[1]) {
                    coin_counter -= store.prices[1];
                    let inv_ul = document.getElementById('inv_list');
                    let li = document.createElement('li');
                    li.innerHTML = 'common grass';

                    inv_ul.appendChild(li);
                    break;
                } else {
                    store_warning();
                    break;
                };
            case 'Water':
                if (coin_counter >= store.prices[2]) {
                    coin_counter -= store.prices[2];
                    let inv_ul = document.getElementById('inv_list');
                    let li = document.createElement('li');
                    li.innerHTML = 'common water';

                    inv_ul.appendChild(li);
                    break;
                } else {
                    store_warning();
                    break;
                };
            case 'Rock':
                if (coin_counter >= store.prices[3]) {
                    coin_counter -= store.prices[3];
                    let inv_ul = document.getElementById('inv_list');
                    let li = document.createElement('li');
                    li.innerHTML = 'common rock';

                    inv_ul.appendChild(li);
                    break;
                } else {
                    store_warning();
                    break;
                };
            case 'Air':
                if (coin_counter >= store.prices[4]) {
                    coin_counter -= store.prices[4];
                    let inv_ul = document.getElementById('inv_list');
                    let li = document.createElement('li');
                    li.innerHTML = 'uncommon air';

                    inv_ul.appendChild(li);
                    break;
                } else {
                    store_warning();
                    break;
                };
            case 'Ice':
                if (coin_counter >= store.prices[5]) {
                    coin_counter -= store.prices[5];
                    let inv_ul = document.getElementById('inv_list');
                    let li = document.createElement('li');
                    li.innerHTML = 'uncommon ice';

                    inv_ul.appendChild(li);
                    break;
                } else {
                    store_warning();
                    break;
                };
            case 'Lightning':
                if (coin_counter >= store.prices[6]) {
                    coin_counter -= store.prices[6];
                    let inv_ul = document.getElementById('inv_list');
                    let li = document.createElement('li');
                    li.innerHTML = 'uncommon lightning';

                    inv_ul.appendChild(li);
                    break;
                } else {
                    store_warning();
                    break;
                };
            case 'Metal':
                if (coin_counter >= store.prices[7]) {
                    coin_counter -= store.prices[7];
                    let inv_ul = document.getElementById('inv_list');
                    let li = document.createElement('li');
                    li.innerHTML = 'uncommon metal';

                    inv_ul.appendChild(li);
                    break;
                } else {
                    store_warning();
                    break;
                };
        }
        modal.style.display = 'none';
        modal.setAttribute('data-modal', '0');
        add_inv_events();
        display_elements();
    } else {
        modal_handler('Buy Item', `Are you sure you want to buy <strong>${str}</strong>?`)
    }
}


function store_warning() {
    document.getElementById('store_alert').innerHTML = "You do not have enough gold!"
    setTimeout(() => {
        clear_warning();
    }, 5000);
}

//clears any warnings after 5 seconds
function clear_warning() {
    document.querySelectorAll('[id*="alert"]').forEach(item => {
        item.remove();
    })
}

//when owned dragon is clicked or tapped, add that dragon to the breed station and sell section. 
function add_inv_events() {
    let owned_dragons = document.querySelectorAll('#inv_list li');

    owned_dragons.forEach(item => {
        if (item.getAttribute('data-event') == '' || item.getAttribute('data-event') == null) {
            item.addEventListener('click', select_dragon(item));
            item.addEventListener('touchend', select_dragon(item));
            item.setAttribute('data-event', 'true');
        }
    })
}

// do initial run at refresh
add_inv_events();

function select_dragon(item) {
    return function () {
        let dragon_name = item.innerHTML.split('<')[0];
        let breed_title = document.getElementById('inventory');
        let breed_inputs = document.querySelectorAll('.breeding input');
        let sell_input = document.querySelector('.inventory input');

        // switch betwwen input 1 and 2
        if (breed_title.getAttribute('data-input') != '1' && breed_title.getAttribute('data-input') != '0') {
            breed_inputs[0].value = dragon_name;
            breed_title.setAttribute('data-input', '1');
        } else if (breed_title.getAttribute('data-input') == '1') {
            breed_inputs[1].value = dragon_name;
            breed_title.setAttribute('data-input', '0');
        } else {
            breed_inputs[0].value = dragon_name;
            breed_title.setAttribute('data-input', '1');
        }

        sell_input.value = dragon_name;
        return;
    }
}

// mobile_button event listeners
let mobile_buttons = document.querySelectorAll('#mobile_buttons div');
mobile_buttons.forEach(button => {
    button.addEventListener('click', button => {
        let inventory = document.getElementById('inventory');
        let breeding = document.getElementById('breeding');
        let store = document.getElementById('store');
        let options = document.getElementById('delete_progress');
        let button_name = button.currentTarget.innerHTML;
        // remove mobile-focus class from all buttons, then add it to the button that was clicked on
        for (let i = 0; i < mobile_buttons.length; i++) {
            mobile_buttons[i].classList.remove('mobile-focus');
        }
        button.currentTarget.classList.add('mobile-focus');
        if (button_name == 'Inventory') {
            inventory.style.display = 'block';
            breeding.style.display = 'block';
            store.style.display = 'none';
            options.style.display = 'none';
            options.previousElementSibling.style.display = 'none';
            // if user was on options page and clicked first warning, 
            // but not the second button and clicks to a different tab, 
            // reset the options page to first warning again
            let first_warning = document.getElementById('first_warning');
            if (first_warning == null || first_warning == 'undefined') {
                display_default_reset();
            }
        } else if (button_name == 'Store') {
            inventory.style.display = 'none';
            breeding.style.display = 'none';
            store.style.display = 'block';
            options.style.display = 'none';
            options.previousElementSibling.style.display = 'none';
            
            let first_warning = document.getElementById('first_warning');
            if (first_warning == null || first_warning == 'undefined') {
                display_default_reset();
            }
        } else {
            inventory.style.display = 'none';
            breeding.style.display = 'none';
            store.style.display = 'none';
            options.style.display = 'block';
            options.children[0].style.display = 'block';
            options.previousElementSibling.style.display = 'block';
        }
    })
})


// every 5 minutes, update data in ls
setInterval(() => {
    let inv_list = document.querySelectorAll('#inv_list li');
    ls_update(inv_list, coin_counter, breed_timer, breed_timer_result)
}, 300000);

// manual save button
let manual_save = document.querySelector('#manual_save div');
manual_save.addEventListener('click', () => {
    let inv_list = document.querySelectorAll('#inv_list li');
    ls_update(inv_list, coin_counter, breed_timer, breed_timer_result);
});
manual_save.addEventListener('touchend', () => {
    let inv_list = document.querySelectorAll('#inv_list li');
    ls_update(inv_list, coin_counter, breed_timer, breed_timer_result);
    //removes success message in 5 seconds
    clear_warning();
});

//first warning reset progress event listener to display second warning
let first_warning = document.getElementById('first_warning');
first_warning.addEventListener('click', () => {
    //delete first warning, so second warning can be shown
    first_warning.remove();
    display_reset_warning();
});
first_warning.addEventListener('touchend', () => {
    //delete first warning, so second warning can be shown
    first_warning.remove();
    display_reset_warning();
});

function display_reset_warning() {
    let second_warning = document.getElementById('reset_button');
    let warning_p = document.querySelector('#delete_progress p');
    second_warning.style.display = 'block';
    warning_p.style.display = 'block';
}

// reset progress button event listeners
let reset_button = document.querySelector('#delete_progress #reset_button');
reset_button.addEventListener('click', () => {
    reset_progress();
});
reset_button.addEventListener('touchend', () => {
    reset_progress();
});

function reset_progress(confirmation = 0) {
    if (confirmation == 1) {
        //clear current timer and result
        if (breed_timer > 0) {
            clearInterval(timer_interval);
        }
        //clear timer display
        let timer_display = document.querySelector('#breeding li');
        if (timer_display != null) {
            timer_display.remove();
        }
        //reset global timer variables
        breed_timer = 0;
        breed_timer_result = '';

        display_default();

        let inv_ul = document.getElementById('inv_list');
        ls_update(inv_ul, coin_counter);

        display_default_reset();

        modal.style.display = 'none';
        modal.setAttribute('data-modal', '0');
    } else {
        modal_handler('Reset Progress', 'Are you sure you want to reset your progress?');
        return;
    }
}

function display_default_reset() {
    //hide second warning
    let second_warning = document.getElementById('reset_button');
    let warning_p = document.querySelector('#delete_progress p');
    second_warning.style.display = 'none';
    warning_p.style.display = 'none';

    // create first warning div again
    let div = document.createElement('div');
    div.id = 'first_warning';
    div.classList.add('first-warning', 'button');
    div.innerHTML = 'Reset Progress';
    // create event listener again
    div.addEventListener('click', () => {
        let first_warning = document.getElementById('first_warning');
        first_warning.remove();
        display_reset_warning();
    });
    div.addEventListener('touchend', () => {
        let first_warning = document.getElementById('first_warning');
        first_warning.remove();
        display_reset_warning();
    });

    let parent_div = document.getElementById('delete_progress');
    parent_div.prepend(div);
}

// create show/hide hint button event listeners
let show_hints = document.getElementById('show_hints');
let hide_hints = document.getElementById('hide_hints');
let hints_wrapper = document.getElementById('hints_wrapper');

// these buttons will be hidden on mobile, so no need to add ontouch
show_hints.addEventListener('click', () => {
    show_hints.style.display = "none";
    hide_hints.style.display = "block";
    hints_wrapper.style.display = "block";
});
hide_hints.addEventListener('click', () => {
    show_hints.style.display = "block";
    hide_hints.style.display = "none";
    hints_wrapper.style.display = "none";
});

export {
    display_default
};