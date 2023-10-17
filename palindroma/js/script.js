
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

