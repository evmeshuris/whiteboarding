// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]
// Output: [7, 9, "hi", 12, 53]

//create empty array;
//loop thru an array using include function

function dedupe (array) {
  let newArrya = [];
  for (let e = 0; e < array.lenght; e ++)
    if (newArrya.includes(array[e]) === false){
      newArrya.push(array[e]);
    }
    return newArrya;
}

//array.filter(function(currentValue, index, arr), thisValue)
//return array.indexOf(currentValue) === index;

function dedupeFilter(array) {
	let filteredArray = array.filter(function(element, index) {
		return array.indexOf(element) === index;
	});
	return filteredArray;
}

function dedupe = (array) => {
  new variable = slice an array;
  another variable = last element of array;
  if statement checks if array has element
  else statement will add not existed element to a dedupe;
}
