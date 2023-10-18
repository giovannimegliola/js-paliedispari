/*
VERSIONE CON SPLIT, REVERSE , JOIN

function isPalindrome(word) {
  // trasforma tutto in lettere minuscole per il confronto
  word = word.toLowerCase();

  // confronta la parola originale con la sua versione invertita
  return word === word.split('').reverse().join('');
}

document.getElementById('submitBtn').addEventListener('click', function() {   //acquisizione della parole inserita dall'utente
  var inputWord = document.getElementById('word').value;
  var result = document.getElementById('message');
  
  if (isPalindrome(inputWord)) {       //stampa dell'esito
      result.innerText = 'La parola è palindroma!';
  } else {
      result.innerText = 'La parola non è palindroma.';
  }
});
*/




document.getElementById('submitBtn').addEventListener('click', function() {
  let inputWord = document.getElementById('word').value;
  let result = document.getElementById('message');
  
  if (isPalindrome(inputWord)) {
      result.innerText = 'La parola è palindroma!';
  } else {
      result.innerText = 'La parola non è palindroma.';
  }
});

function isPalindrome(word) {
  word = word.toLowerCase();

  // Inizializza un indice iniziale e uno finale
  let start = 0;
  let end = word.length - 1;

  // Continua finché gli indici non si incontrano
  while (start < end) {
    
    if (word[start] !== word[end]) {  // Se i caratteri alle due estremità non corrispondono, non è palindroma
      return false;
    }
    // Scorri su tutti gli indici per farli incontrare
    start++;
    end--;
  }

  return true;
};


