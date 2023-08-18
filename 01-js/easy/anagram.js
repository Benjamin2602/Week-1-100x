/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  //checking if the length of the strings are equal
  if (len1 != len2) {
    return false;
  }
  //converting the string into an array
  //.sort used to sort the individual elements of the array
  let str1Arr = str1.split("").sort();
  let str2Arr = str2.split("").sort();

  //converting the array back to string
  let arr1Str = str2Arr.join("");
  let arr2Str = str1Arr.join("");

  if (arr1Str === arr2Str) {
    console.log("True , It is an anagram");
  } else {
    console.log("false, it is not an anagram");
  }
}
isAnagram("spar", "rasp");

module.exports = isAnagram;
