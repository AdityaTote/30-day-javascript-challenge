// Number using var
var num = 10;
console.log(`This data type is number and its value is: ${num}`)
console.log(`This data type is: ${typeof num}`)

// String using str
let str = "Hey, this is 1st day of javascript challenge";
console.log(`This data type is string and its value is: ${str}`);
console.log(`This data type is: ${typeof str}`);

// Boolean using const
const bool = true;
console.log(`This data type is boolean and its value is: ${bool}`);
console.log(`This data type is: ${typeof bool}`);

// Object
const obj = {
    username: "John",
    email: "john@ail.com"
}
console.log(obj);
console.log(`The data type is: ${typeof obj}`);

// Array
const arr = ["csgo", "valorant", "pubg", "warzone"];
console.log(arr);
console.log(`The data type is: ${typeof arr}`);     // Type of array is object

// Reassign value using let
let valueOne = 85;
console.log("Intail Value:",valueOne);
valueOne =23;
console.log("Manipulated Value:",valueOne);

// Reassign value using const
const valueTwo = 79;
console.log("Initail Value:", valueTwo);
// valueTwo = 25;
// console.log("Manipulated Value:",valueTwo);     //TypeError: Assignment to constant variable.

// Script for log datatype and its value
const checkDataType = (value) => {
    console.log("Value isoe fucntion");
    console.log("Value:", value);
    console.log("DataType:", typeof value);
}
checkDataType(5);

const checkBehavior = () => {
    let valueOne = 85;
    console.log("Intail Value:",valueOne);
    valueOne =23;
    console.log("Manipulated Value:",valueOne);
    const valueTwo = 79;
    console.log("Initail Value:", valueTwo);
    try {
        valueTwo = 25;
    } catch (error) {
        console.log("Error:",error.message)
    }
}
checkBehavior();