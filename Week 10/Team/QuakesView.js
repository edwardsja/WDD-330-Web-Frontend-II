 import QuakesController from './QuakesController.js';
  // Quake View handler
  export default class QuakesView {
    renderInputs() {
        // radius
        let div = document.createElement('div');
        let label = document.createElement('label');
        let input = document.createElement('input');

        label.for = 'radius';
        label.innerHTML = 'Radius'

        input.type = 'number';
        input.min = '0';
        input.value = '100';
        div.appendChild(label);
        div.appendChild(input);
        // dates
        // for loop twice for dates 3 inputs and labels each loop
        let divDates = document.createElement('div');

        for (let i = 0; i < 2; i++) {
            let divDate = document.createElement('div');
            let labelMonth = document.createElement('label');
            let inputMonth = document.createElement('input');
            let labelDay = document.createElement('label');
            let inputDay = document.createElement('input');
            let labelYear = document.createElement('label');
            let inputYear = document.createElement('input');
            // variables to wrap lable/input pairs
            let span1 = document.createElement('span');
            let span2 = document.createElement('span');
            let span3 = document.createElement('span');

            // first iteration, do startDate, next iteration, do endDate
            if (i == 0) {
                labelMonth.for = 'startDate_month';
                inputMonth.id = 'startDate_month';
                inputMonth.value = '1';

                labelDay.for = 'startDate_day';
                inputDay.id = 'startDate_day';
                inputDay.value = '1';
                
                labelYear.for = 'startDate_year';
                inputYear.id = 'startDate_year';
            } else {
                labelMonth.for = 'endDate_month';
                inputMonth.id = 'endDate_month';
                inputMonth.value = '3';

                labelDay.for = 'endDate_day';
                inputDay.id = 'endDate_day';
                inputDay.value = '2';
                
                labelYear.for = 'endDate_year';
                inputYear.id = 'endDate_year';
            }
            // attributes for the start date month input and label
            labelMonth.innerHTML = 'Month';

            inputMonth.type = 'number';
            inputMonth.min = '1';
            inputMonth.max = '12';
            

            // attributes for the start date day input and label
            labelDay.innerHTML = 'Day';

            inputDay.type = 'number';
            inputDay.min = '1';
            inputDay.max = '31';

            // attributes for the start date year input and label
            labelYear.innerHTML = 'Year';

            inputYear.type = 'number';
            inputYear.min = '1970';
            inputYear.max = `${new Date().getFullYear()}`;
            inputYear.value = '2019';

            span1.appendChild(labelMonth);
            span1.appendChild(inputMonth);
            span2.appendChild(labelDay);
            span2.appendChild(inputDay);
            span3.appendChild(labelYear);
            span3.appendChild(inputYear);

            divDate.appendChild(span1);
            divDate.appendChild(span2);
            divDate.appendChild(span3);
            
            divDates.appendChild(divDate);
        }
        // set up input desc paragraph and input wrapper
        let inputWrapper = document.createElement('div');
        let pRadius = document.createElement('p');
        let pDates = document.createElement('p');

        pRadius.innerHTML = 'Select radius (in kilometers) from your location that earthquakes have been recorded';
        pDates.innerHTML = 'Select the start date and end date of recorded earthquakes';

        inputWrapper.appendChild(pRadius);
        inputWrapper.appendChild(div);
        inputWrapper.appendChild(pDates);
        inputWrapper.appendChild(divDates);

        // create button for inputs
        let divSubmit = document.createElement('div');

        divSubmit.type = 'button';
        divSubmit.innerHTML = 'Search for Earthquakes';
        divSubmit.classList.add('button');
        divSubmit.addEventListener('click', () => {
            let controller = new QuakesController('ul');
            controller.init();
        });
        divSubmit.addEventListener('touchend', () => {
            let controller = new QuakesController('ul');
            controller.init();
        });

        inputWrapper.appendChild(divSubmit);

        // variables to select the correct part of the document to insert
        let ul = document.querySelector('#quakeList');
        let main = document.querySelector('main');
        // insert inputs on top of ul list
        main.insertBefore(inputWrapper, ul);
    }
    renderQuakeList(quakeList, listElement) {
      //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
      listElement.innerHTML = quakeList.features
      .map(quake => {
        return `<li data-id = ${quake.id}>${quake.properties.title}, ${new Date(
          quake.properties.time
        )}</li>`
      })
      .join('');
    }
    renderQuake(quake, element) {
        // if details were already rendered, don't render again
        if (element.childNodes.length == 1) {
            const quakeProperties = Object.entries(quake.properties);
            // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
            let ul = document.createElement('ul');
            for (let i = 0; i < quakeProperties.length; i++) {
                let li = document.createElement('li');
                li.innerHTML = quakeProperties[i];
                ul.appendChild(li);
            }
            let div = document.createElement('div');
            div.innerHTML = 'Go Back';
            div.classList.add('button');
            div.addEventListener('click', () => {
                ul.remove();
            });
            div.addEventListener('touchend', () => {
                ul.remove();
            });

            ul.appendChild(div);
            element.appendChild(ul);
            
        }
    }
  }