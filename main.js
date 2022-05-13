// main.js
import { newMessage } from './messages.js';

console.log('main.js is loading');


let messageButton = document.getElementById('update');
let resetButton = document.getElementById('reset');
console.log('messageButton: ' + messageButton.innerHTML);
console.log('resetButton: ' + resetButton.innerHTML);

const myMessage = function () {
    document.getElementById('message1').innerHTML = newMessage();
    resetButton.hidden = false;
}

const myReset = function () {
    document.getElementById('message1').innerHTML = '';
    resetButton.hidden = true;
}

resetButton.hidden = true; // can be elimenated when initially set by style.css
messageButton.addEventListener('click', myMessage);
resetButton.addEventListener('click', myReset);

