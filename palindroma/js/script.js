
function isPalindrome(word) {
  // trasforma tutto in lettere minuscole per il confronto
  word = word.toLowerCase();

  // confronta la parola originale con la sua versione invertita
  return word === word.split('').reverse().join('');
}


