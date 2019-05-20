const readline = require('readline-sync');

const str = readline.question("Enter word to check if it is palindrome ");

const palindrome = (str) => {
  const givenString = str.toLowerCase().replace(/\s/g, '').replace(/[^0-9a-z]/gi, '');
  const stringArray = givenString.split('');
  const stringJoined = stringArray.join('');
  const stringArrayRev = stringArray.reverse();

  const stringRevJoined = stringArrayRev.join('');
  return stringJoined !== stringRevJoined ? 
    'not a palindrome' : 'palindrome'
}

console.log(palindrome(str))
