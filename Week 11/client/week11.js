import {makeRequest} from './authHelpers.js';
import Auth from './auth.js';

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
    });

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    let newAuth = new Auth;
    newAuth.login();
});