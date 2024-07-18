// Day-6 Array

// Activity-1: Array Creation and Access

// Task-1-2: create an array and log and acces first and last element
const arrCreation = () => {
    let arr = [1,2,3,4,5];
    console.log(arr);
    const firstElem =  arr[0];
    const lastElem =  arr[4];
    console.log(`First Element: ${firstElem}`);
    console.log(`Last Element: ${lastElem}`);
}

// Activity-2: Array Methods (Basic)

// Task-3-6: Use of push, pop, shift, unshift
const arrMenthodOne = () => {
    let arr = [1,2,3,4]
    arr.push(8)             // Adds the element 8 to the end of the array, making it [1,2,3,4,8]
    console.log(arr);
    arr.pop()               // Removes the last element of the array, which is 8, making the array [1,2,3,4]
    console.log(arr);
    arr.shift()             // Removes the first element in array
    console.log(arr);
    arr.unshift(6)          // Adds the provided element to start of an array
    console.log(arr);
}

// Activity-3: Array Methods (Intermediate)

// Task-7-9: Use of map, filter, reduce
const arrMenthodTwo = () => {
    let arr = [1,5,6,9,8,7];
    const add = arr.map((num) => num + 2);                  // transforms each element of an array using a callback function and returns a new array with the results
    console.log(add);
    const checkNum = arr.filter((num) => num % 2 === 0);    // creates a new array with all elements that pass the test implemented by the provided callback function
    console.log(checkNum);
    const sum = arr.reduce((prev, next) => prev + next)     //  executes a reducer function on each element of the array, resulting in a single output value.
    console.log(sum);
}

// Activity-4: Array Iteration

// Task-10-11: Use of for and forEach loop
const arrIteration = () => {
    let arr = [1,2,3,4,5,6,7,,8,9];
    for(let i in arr){
        console.log(i);
    }
    arr.forEach(i => console.log(i));
}

// Activity-5: Multi-dimensation

// Task-12: create 2-D array and access it.
const multiDemArr = () => {
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log(matrix);
    console.log(matrix[1][2]);
}
// 2-D array creation
function create2DArray(rows, cols) {
    return Array(rows).fill().map(() => Array(cols).fill(0));
}