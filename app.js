import { getRandomThrow } from './functions.js';
import { didUserWin } from './functions.js';
// import functions and grab DOM elements
const button = document.getElementById('submit');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
const error = document.getElementById('error');
// initialize global state

let win = 0;
let loss = 0;
let draw = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

button.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked');

    if (!selected){
        return error.classList.remove('hidden');
    }

    error.classList.add('hidden');
    const userChoice = selected.value;
    const compChoice = getRandomThrow();
    
    if (userChoice === compChoice){
        draw++;
    } else if (didUserWin(userChoice, compChoice)){
        win++;
    } else {
        loss++;
    }

    winSpan.textContent = win;
    lossSpan.textContent = loss;
    drawSpan.textContent = draw;
});
