// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

// questions: 
// - Empty string?
// -lowercase

//solution
function unique(string) {
  let noDupes = ""; //empty string
  for(let i = 0; i <string.length; i++) { //loop thru check if character is in this string
    if(noDupes.includes(string[i]) === false) {
      noDupes += string[i]; //push to noDupes if unique
    }
  }
  if (noDupes === string) { //compare giving string with new string
    return true;
  } else {
    return false;
  }
}

//test
console.log(unique("hello")); //"false"
console.log(unique("copyright")) //"true"



