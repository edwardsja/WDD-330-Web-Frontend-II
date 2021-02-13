import {add_task} from './utils.js';
import {ls_check} from './ls.js';

//allows use for onclick in html
window.add_task = add_task; 

 
//on refresh, checks localstorage size
ls_check();
