const root = 'https://swapi.dev/api/';
const outputDiv = document.getElementById('result');

//async allows for fetch to complete entirely
async function displayList(file, check) {
    fetch(file)
        //response is set to json data
        .then(response => response.json())
        .then(data => {
            //clears list 
            outputDiv.innerHTML = '';

            //results is the page of 10 items
            let results = data.results;
            //needs to be delcared outside for loop to wrap up at the end of the loop
            let ul = document.createElement('ul');
            for (let i = 0; i < results.length; i++) {
                //create font awesome icon  
                let fa = document.createElement('i');
                fa.classList.add('fas');
                fa.classList.add('fa-chevron-right');

                //add li and boxes to make it look nicer
                let li = document.createElement('li');
                //insert result name
                li.innerHTML = results[i].name;

                //adds click and touchend events to each li element
                li.addEventListener('click', () => {
                    displayDetails(li, results);
                });
                li.addEventListener('touchend', () => {
                    displayDetails(li, results);
                });

                //wrap up li
                li.appendChild(fa);
                ul.appendChild(li);
            }
            outputDiv.appendChild(ul);

            //page number display variables
            let page_counter = checkCounter(check);
            let page_max = Math.floor(data.count / 10);

            // if the count is not divisible by 10, then add 1 to the page max, because there will be a page without a full 10 results
            if (data.count % 10 != 0) {
                page_max++;
            }

            //creates back and forward buttons, and adds or decreases page counter
            createButtons(data, page_counter);

            //makes sure page counter does not go below 1 or above the maximum number of pages
            if (page_counter > page_max) {
                page_counter = page_max;
            }
            if (page_counter === 0) {
                page_counter = 1;
            }
            //diplay counter
            document.getElementById('page_num').innerHTML = page_counter + ' / ' + page_max;
        })
}

//on first run, check will be null, so the page counter is set to 1, but if code has been run, then there will be a number, so return that number
function checkCounter(check) {
    if (check == null) {
        return 1;
    } else {
        return check;
    }
}

//create back and forward buttons
function createButtons(data, page_counter) {
    //element variables
    let button_wrapper = document.getElementById('button_wrapper');
    let back = document.getElementById('back');
    let forward = document.getElementById('forward');

    // when page is first loaded, buttons will be hidden, if they are, at this point they can be shown and interacted with
    if (button_wrapper.classList.contains('none')) {
        button_wrapper.classList.remove('none');
    }

    // add specific back and forward links
    back.onclick = addLink(back, data, page_counter);
    forward.onclick = addLink(forward, data, page_counter);
    // adds mobile functionality
    back.ontouchend = addLink(back, data, page_counter);
    forward.ontouchend = addLink(forward, data, page_counter);
}

//adds links to the forwards and backwards buttons
function addLink(item, data, page_counter) {
    return function () {
        //onclick is set to everything past this
        let new_link = '';
        //find which button was clicked and set new_link to whatever the button was set to and add or remove page_counter
        if (item.innerHTML === 'Forward') {
            new_link = data.next;
            page_counter++;
        } else {
            new_link = data.previous;
            page_counter--;
        }
        //call displayList with the new_link that was set, and return page_counter
        displayList(new_link, page_counter);
        return;
    }
}

function displayDetails(item, results) {
    // if li is closed, switch chevron to down, if not change it back to right, delete items and return
    if (item.children[0].classList.contains('fa-chevron-right')) {
        item.children[0].classList.remove('fa-chevron-right');
        item.children[0].classList.add('fa-chevron-down');
        } else {
        item.children[0].classList.remove('fa-chevron-down');
        item.children[0].classList.add('fa-chevron-right');
        item.children[1].remove();
        return;
    }

    //create empty object variable to store current character/ship's details
    let current_item = {};

    //find which list number was clicked on
    for (let i = 0; i < results.length; i++) {
        if (results[i].name === item.innerText) {
            current_item = results[i];
            break;
        }
    }

    //create the div outside the loop so that it can be wrapped up correctly, but used in the loop
    let div = document.createElement('div');
    div.id = 'desc_box';
    div.classList.add('desc-box');
    //iterate current item and pull out all values to display
    for (const property in current_item) {
        let property_value = current_item[property];
        //ensures loops grabs correct property names and values
        if (current_item.hasOwnProperty(property)) {
            // if the property is name, don't display, since the name will be shown on the main list
            // don't display created, edited, or url to condense description and to visual appeal
            // don't display empty properties
            if (!(property === 'name' || property === 'created' || property === 'edited' || property === 'url' || property_value.length == 0)) {

                getValue(property_value, current_item, property, div)

            }
        }
        item.appendChild(div);
    }
}

async function getValue(property_value, current_item, property, div) {
    // if the value is an url, fetch the value and insert the name into property_value
    if (property_value.includes('http')) {
        await fetch(property_value)
            .then(response => { 
                if (!response.ok) { throw response }
                return response.json()
            })
            .then(data => {
                property_value = data.name;
            })
            .catch( error => { console.log('There was an error ' + error)});
        // if value is an array and the array holds urls, then iterate array and insert each name into property value
    } else if (typeof property_value == 'object') {
        //create array to iterate easily
        for (let i = 0; i < current_item[property].length; i++) {
            await fetch(current_item[property][i])
                .then(response => { 
                    //if (!response.ok) { throw response }
                    return response.json()
                })
                .then(data => {
                    
                    let property_name = ''
                    if (data.hasOwnProperty('name')) {
                        property_name = 'name';
                    } else if (data.hasOwnProperty('title')) {
                        property_name = 'title';
                    }
                    
                    //first iteration, set property_value
                    if (i == 0) {
                        if (property_value.length == 1) {
                            property_value = data[property_name];
                        } else {
                            property_value = data[property_name] + ', ';
                        }
                        
                    } else if (i == current_item[property].length - 1) {
                        //last iteration, add value to property_value and no comma
                        property_value += data[property_name];
                    } else {
                        //any iteration between, add value plus comma
                        property_value += data[property_name] + ', ';
                    }
                    
                })
                .catch( error => { console.log('There was an error ' + error)});
        }
    }
    let li = document.createElement('li');

    //covert lowercased and underlined property to capitalized and spaces
    if (property.includes('_')) {
        property = property.split('_');
        for (let i = 0; i < property.length; i++) {
            property[i] = property[i].charAt(0).toUpperCase() + property[i].substring(1);
        }
        property = property.join(' ');
    } else {
        property = property.charAt(0).toUpperCase() + property.substring(1);
    }
    li.innerHTML = property + ': ' + property_value;
    div.appendChild(li);
}

//call display list and pass url based on which radio was clicked on
function getInput(value) {
    displayList(root + value + '/');
    return;
}

//select the radio inputs
let input = document.querySelectorAll('input[type=radio]');
//when radio is selected, call get input, pass the value of input
input.forEach(input => {
    input.addEventListener('change', () => getInput(input.value))
});
