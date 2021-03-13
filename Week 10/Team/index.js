import QuakesController from './QuakesController.js';
import QuakesView from './QuakesView.js';

let view = new QuakesView();
view.renderInputs();

let controller = new QuakesController('ul');
controller.init();
