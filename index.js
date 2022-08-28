function isPalindrome(word) {
  // Write your algorithm here
  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("hi"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  let reversedWord = reversedString(word);
  return word ==reversedWord;
}
function reversedString(word){
  return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  word.split tturns string ino array
  .reverse() turns array to reverse form
  join turns array to string
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
