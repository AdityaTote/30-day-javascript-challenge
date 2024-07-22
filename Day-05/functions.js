// Day-5: Functions

// Activity-1: Function declaration

// Task-1: Check num is even or odd
function evenOd(num){
    if( num%2 ===0 ){
        console.log(`${num} is even number.`);
    } else {
        console.log(`${num} is odd number.`);
    }
}

// Task-2: Sqaure of num
function squOfNum(num){
    console.log(`${num} square is ${num ** 2}`);
    return `${num} square is ${num ** 2}`;
}

// Acitivity-2: Function Expression

// Task-3: Maxium of two numbrs
const maxNum = function (numOne, numTwo) {
    if ( numOne > numTwo ) {
        console.log(`${numOne} is greater than ${numTwo}`);
    } else {
        console.log(`${numTwo} is greater than ${numOne}`);
    }
}

// Task-4: Concatenataion of two strings
const concateString = function (strOne, strTwo) {
    console.log(`${strOne} ${strTwo}`);
    return strOne + "" + strTwo
}

// Activity-3: Arrow Function

// Task-5: Sum of tw num
const sumNum = (numOne, numTwo) => {
    const sum = numOne + numTwo;
    console.log(`Sum is: ${sum}`);
    return sum;
}

// Task-6: check if specific character present in string
const checkChar = (str, char) => {
    const res = str.includes(char);
    console.log(res);
    return res;
}

// Activity-4: Function Parameter and Default value

// Task-7: product of numbers
const product = (numOne, numTwo = 4) => {
    const pro = numOne * numTwo;
    console.log(pro);
    return pro
}

// Task-8: greeting msg for age and name
const greetMsg = (name, age = 18) => {
    const msg = `Hello ${name}, your age is ${age}`
    console.log(msg);
}

// Acitivity-5: Higher Order Function

// Task-9: takes function and number and call the fuction as number times
const higherFuncOne = (funtionName, num) => {
    for(let i = 1; i <= num; i++){
        funtionName();
    }
}

// Task-10: take two funtion and a value as argument and applies the first functio to value and applies second fun to result.
const higherFuncTwo = (funcOne, funcTwo, value) => {
    const result = funcTwo(funcOne(value));
console.log(result);
}

function addNum(num){
    return num + num
}
function mulNum(num){
    return num * num
}

higherFuncTwo(addNum, mulNum, 5)