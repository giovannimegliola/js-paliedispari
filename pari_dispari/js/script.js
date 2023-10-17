

const playBtn = document.getElementById('submitBtn');
const result = document.getElementById('message');


playBtn.addEventListener('click', playGame);


function playGame() {
const userChoice = document.getElementById('choice').value;
const userNum = parseInt(document.getElementById('number').value);
const computerNum = getRndInteger(1, 5);
const somma = sumNumbers(userNum, computerNum);

const gameResult = isEven(somma) ? 'pari' : 'dispari';

message.innerText = (userChoice === gameResult) ? 'Hai vinto! Il numero del computer era ' + computerNum + ', la somma è ' + somma + ' (' + gameResult + ').' : 'Il computer ha vinto. Il numero del computer era ' + computerNum + ', la somma è ' + somma + ' (' + gameResult + ').';
}

function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumNumbers(num1, num2) {
return num1 + num2;
}

function isEven(num) {
return num % 2 === 0;
}