// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
//Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
// myArr[1] refers to the second element, which is 1.

// note: myArr: A simple array with numbers [0, 1, 2, 3, 4, 5]
// myHeors: A string array with ["shaktiman", "naagraj"]
// myArr2: Another way to create an array using the new Array() constructor.

// Array methods


//push() adds elements at the end of an array.

//pop() removes the last element from an array.

//unshift() adds an element to the beginning of an array.

//shift() removes the first element from an array.

//includes(value) checks if the array contains the given value.

//indexOf(value) returns the index of the first occurrence of a value.
//If the value is not found, it returns -1.

//join() converts an array into a string, separating elements with a comma by default.

//slice(start, end) extracts elements from start index to (end - 1) index.
//Original array remains unchanged.
//Example: myArr.slice(1,3) extracts elements from index 1 to 2.

// splice(start, deleteCount) removes elements starting from the start index.
// Modifies the original array by removing those elements.
// Also returns the removed elements.
// Example: myArr.splice(1,3) removes elements at index 1, 2, 3.

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);