import { getLocation } from './utilities.js';
import Quake from './Quake.js';
import QuakesView from './QuakesView.js';

// Quake controller
export default class QuakesController {
  constructor(parent, position = null) {
    this.parent = parent;
    // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
    this.parentElement = null;
    // let's give ourselves the option of using a location other than the current location by passing it in.
    this.position = position || {
      lat: 0,
      lon: 0
    };
    //user can set radius if they want
    this.radius = 100;
    // user set start date
    this.startDate = '2019-01-01';
    //use set end date
    this.endDate = '2019-03-02';
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.quakes = new Quake();
    this.quakesView = new QuakesView();
  }
  async init() {
    //grab inputs
    this.radius = document.getElementsByTagName('input')[0].value;
    let startYear = document.getElementsByTagName('input')[3].value;
    let startMonth = document.getElementsByTagName('input')[1].value;
    let startDay = document.getElementsByTagName('input')[2].value;
    let endYear = document.getElementsByTagName('input')[6].value;
    let endMonth = document.getElementsByTagName('input')[4].value;
    let endDay = document.getElementsByTagName('input')[5].value;
    this.startDate = `${startYear}-${startMonth}-${startDay}`;
    this.endDate = `${endYear}-${endMonth}-${endDay}`;

    // use this as a place to grab the element identified by this.parent, do the initial call of this.initPos(), and display some quakes by calling this.getQuakesByRadius()
    this.parentElement = document.querySelector(this.parent);
    await this.initPos();
    this.getQuakesByRadius(this.radius);
  }
  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        // try to get the position using getLocation()
        let userPosition = await getLocation();
        // if we get the location back then set the latitude and longitude into this.position
        if (typeof userPosition == 'object') {
            this.position.lat = userPosition.coords.latitude;
            this.position.lon = userPosition.coords.longitude;
        } else {
            throw Error(userPosition);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius) {
    // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
    //set loading message
    this.parentElement.innerHTML = 'Loading...';
    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quakes.getEarthQuakesByRadius(this.position, this.radius, this.startDate, this.endDate);
    // render the list to html
    this.quakesView.renderQuakeList(quakeList, this.parentElement);
    // add a listener to the new list of quakes to allow drill down in to the details
    this.parentElement.addEventListener('touchend', e => {
      this.getQuakeDetails(e.target.dataset.id);
    });
    this.parentElement.addEventListener('click', e => {
        this.getQuakeDetails(e.target.dataset.id);
      });
  }
  async getQuakeDetails(quakeId) {
    // get the details for the quakeId provided from the model, then send them to the view to be displayed
    let matchedItem = await this.quakes.getQuakeById(quakeId);
    if (matchedItem == 'undefined' || matchedItem == null) {
        return;
    } 

    let selectedElement;
    //find which li to insert details
    for (let i = 0; i < this.parentElement.childNodes.length; i++) {
        if (this.parentElement.childNodes[i].getAttribute('data-id') == matchedItem.id) {
            selectedElement = this.parentElement.childNodes[i];
        }
    }

    this.quakesView.renderQuake(matchedItem, selectedElement);
  }
}