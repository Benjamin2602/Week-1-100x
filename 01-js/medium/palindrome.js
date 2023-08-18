/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  //converting into an lower case
  const strLower = str.toLowerCase();
  //converting the string to an array
  const str2Arr = strLower.split('');
  // reversing the value 
  const reverse = str2Arr.reverse();
  //converting the array back to string
  const reverseStr = reverse.join('');

  if(reverseStr===strLower){
    console.log('it is an palindrome')
  }else{
    console.log("it is not an palindrome")
  }
  return true;
}

isPalindrome("ben")

module.exports = isPalindrome;
