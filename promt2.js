
// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

// Questions for interviewers:
// - Will numbers always be passed as integers?dedimals (no numbers as strings?)

// Possible cases: 
// - An empty array

//without recursion

function dedupeNoRecurse(array) {
  let singleArray = []; //empty array
  for (let i = 0; i < array.length; i ++ ) { //loop thru check if array has the element
    if (singleArray.includes(array[i]) === false) {
      singleArray.push(array[i]); //push to a singleArray if element is unique
    }
  }
  return singleArray;
}
console.log(dedupeNoRecurse([7, 9, "hi", 12, "hi", 7, 53])); //[7, 9, "hi", 12, 53]

//with recursion
const dedupeRecurse = (array) => {
  const checkAgainst = array.slice(0, array.length-1); //sliced array //array.slice(start, end)
  const elementToCheck = array[array.length-1]; // last element of array
  if (array.length === 0) {
    return array;
  } else if (//check if array has this element//) {  
    return dedupeRecurse;
  } else {
    return //add elementToCheck to dedupeRecurse//; 
  }
};

//with filter

function dedupeFilter(array) {
	let filteredArray = array.filter(function(element, index) {
		return array.indexOf(element) === index;
	});
	return filteredArray;
}

// array.filter(function(currentValue, index, arr), thisValue)
//return array.indexOf(currentValue) === index;

console.log(dedupeFilter([7, 9, "hi", 12, "hi", 7, 53])); //[7, 9, "hi", 12, 53]

