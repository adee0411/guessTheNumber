
//select SHOW DESCRIPTION BUTTON
let showDescriptionButton = document.querySelector('#description-btn');

//select CLOSE DESCRIPTION BUTTON
let closeDescriptionButton = document.querySelector('#close-description-btn');

//select the INPUT
let guessedNumberField = document.querySelector('#game-box-input');

//select the GUESS BUTTON
let guessBtn = document.querySelector('#game-box-btn');

//select ERROR MESSAGE field
let errorMsg = document.querySelector('.game-box__error-msg');

//select ALL GUESS GRID BOXES
let guessFields = document.querySelectorAll('.guess-item');

//select LOW OR HIGH MESSAGE FIELD
let lowOrHigh = document.querySelector('.tries-cont__low-or-hi');

//select the GUESSES "SPAN" ELEMENTS
let triesSpans = document.querySelectorAll('.tries-cont__guesses > span');

//select the END OF THE GAME text field
let endOfGameText = document.querySelector('.end-of-game-text');

//select the PLAY NEW GAME BUTTON
let nextGameBtn = document.querySelector('#next-game-btn');

//generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

//get the value of input field


// defining the main function that checks the guessed and random number
guessBtn.addEventListener('click', checkNumbers);

let counter = 0;
nextGameBtn.style.visibility = "hidden";

function checkNumbers() {
    let guessedNumber = Number(guessedNumberField.value)
    lowOrHigh.style.visibility = 'visible';

    if(guessedNumber === 0 || guessedNumber > 100 || isNaN(guessedNumber)) {
        errorMsg.innerHTML = "You must enter a number between 1 and 100!";
    } else {
        errorMsg.innerHTML = "";
        // displaying the current guess on the appropriate guess box
        guessFields[counter].innerHTML = "<i class='fas fa-times'></i><p class='guess-item__number'>" + guessedNumber + "</p>";
        guessFields[counter].style.backgroundColor = "rgba(255, 0, 0, 0.445)";

        // displaying the number of guesses
        triesSpans[0].innerHTML = counter + 1;
        // displaying the number of tries left
        triesSpans[1].innerHTML = 10 - counter - 1;

        // displaying if the guess was low / high / equeal
        if(counter === 9) {
            lowOrHigh.innerHTML = "You ran out of guesses. Try again!";
            lowOrHigh.style.backgroundColor = "rgba(255, 0, 0, 0.445)";
            guessedNumberField.disabled = true;
            guessBtn.disabled = true;
            nextGameBtn.style.visibility = "visible";

            nextGameBtn.addEventListener('click', nextGame);
        }
        else if(guessedNumber === randomNumber) {
            guessFields[counter].innerHTML = "<i class='fas fa-check'></i><p class='guess-item__number'>" + guessedNumber + "</p>";
            lowOrHigh.innerHTML = "CONGRATULATIONS!";
            lowOrHigh.style.backgroundColor = "rgba(0, 192, 96, 0.445)";
            guessFields[counter].style.backgroundColor = "rgba(0, 192, 96, 0.445)";
            guessedNumberField.disabled = true;
            guessBtn.disabled = true;
            nextGameBtn.style.visibility = "visible";

            nextGameBtn.addEventListener('click', nextGame);
        }else if(guessedNumber > randomNumber) {
            lowOrHigh.innerHTML = "Your guess is HIGH.";
            counter++;
        }else {
            lowOrHigh.innerHTML = "Your guess is LOW.";
            counter++;
        }
    }
    console.log(counter);
    guessedNumberField.value = ''; //resetting the content of the input field
    guessedNumberField.focus();
}

function nextGame() {
    counter = 0;
    guessedNumberField.value = '';
    triesSpans[0].innerHTML = counter;
    triesSpans[1].innerHTML = 10 - counter;
    lowOrHigh.style.visibility = 'hidden';
    errorMsg.innerHTML = '';
    lowOrHigh.style.backgroundColor = "transparent";
    lowOrHigh.innerHTML = "";
    guessedNumberField.focus();


    for(let i = 0; i < guessFields.length; i++) {
        guessFields[i].innerHTML = '';
        guessFields[i].style.backgroundColor = 'rgba(204, 204, 204, 0.445)';
    }

    guessedNumberField.disabled = false;
    guessBtn.disabled = false;

    randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    nextGameBtn.style.visibility = "hidden";
}


showDescriptionButton.addEventListener('click', showDescription);
closeDescriptionButton.addEventListener('click', closeDescription);

let descriptionBox = document.querySelector('.popup-description');
function showDescription() {
    descriptionBox.style.transform = "translateX(0%)";
}

function closeDescription() {
    descriptionBox.style.transform = "translateX(-100%)";
}