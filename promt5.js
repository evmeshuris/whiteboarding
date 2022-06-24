// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:
//     Quick sort
//     Merge sort
//     Heap sort
//     Insertion sort
//     Bubble sort
//     Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().
// Example
// Input: [9, 2, 7, 12] this is not a good input to fully test a naive implementation - one pass of the inner loop below will "solve" it correctly, but will not solve all inputs
// Output: [2, 7, 9, 12]

// Questions for interviewers:
// - Will the elements in the array always be integers?
// - Sorting greatest to least or least to greatest?

// Possible edge cases: 
// - 0
// - Negtative ints
// - Decimals


//solution
// const sort = (array) => {
//   for (
//   }
//   return array;
// }

// check if i is <= i+1, but it leaves a bunch behind; doesn't really work 
// What if I have 2 arrays? Does that help me somehow?
// I can compare the values in array1 to the values in array 2
// So copyArray = array, and we go is array[i] <= copyArray[i]? If so, we don't want to push it immediately, because...it might be bigger than a later number? Or move it to the beginning? Can I move things? I'm sure I can.
// I don't think I need 2 arrays for this.
// probably nested loop would a better solution

// using nested for loops
// check if current element is greater than next element in array (array[j] > array[j+1])
// if true, swap elements like varible = array[j]

// start back over at step 1 with next set of elements
