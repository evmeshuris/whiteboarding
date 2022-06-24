// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

// Questions for interviewers:
// - Will the input always be a string?
// - Do I need to account for special characters?

// Possible cases: 
// - Spaces?
// - Empty string?

//without recursion
function compressString(inputStr) {
	let count = 1; // each letter will already occur at least once
	let outputStr = ""; // string to return
	for (let i = 0; i < inputStr.length; i++) {
		if(inputStr[i] === inputStr[i + 1]) { // if current index is equal to next index, increment count
			count++;
		} else { // if current index is not equal to next index
			if (count === 1) { // count is equal to one, add index to output string
				outputStr += inputStr[i];
			} else { // add count to the string index and add that to the output string
				outputStr += count + inputStr[i]
			}
			count = 1; // reset count
		}
	}
	return outputStr; // return output string
}
console.log(compressString("aaabccdddda")); //"3ab2c4da"

//with recursion
const compressRecurse = (string) => {
  if (string.length === 0) return string;
  let count = 1;
  for (let i = 0; string[i] === string[i+1]; i++) count++;
  if (count > 1) {
    return count.toString() + string[0] + compressRecurse(string.substring(count));
  } else {
    return string[0] + compressRecurse(string.substring(1));
  }
};

//test
console.log(compressRecurse("aaabccdddda")); //"3ab2c4da"



