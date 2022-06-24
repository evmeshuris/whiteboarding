// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

// Questions:
// - Can I always expect a string as an input?

// Possible cases: 
// - An empty string
// - String with a space at the end

//without recursion
const space20 = (inputStr) => {
  let output = ""; // empty array
  for (let i = 0; i < inputStr.length; i++) { //loop thru all elements checking for spaces
    if (string[i] === ' ') {
      output += "%20";  //replace space with %20
    } else {
      output += string[i]; //if no space rerurn a character
    }
  }
  return output;
};

//with recursion
const space20wr = (inputStr) => {
    if (inputStr[0] === ' ') {
    
  }
};
// Solution with recursion:
// break the recursion loop I'll write a function that checks for empty strings. If the string is an empty string, the loop will break and return "%20"



//test
console.log(space20("Jasmine Ann Jones")); //"Jasmine%20Ann%20Jones"


