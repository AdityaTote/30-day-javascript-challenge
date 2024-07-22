// Day-* ES6+

// Acityvity-1: Template Literals

// Task-1-2: Use template literals to create a string that will display.
const tempLate = (name, age) => {
    let str = `My name is ${name} and I am ${age} years old.`;
    console.log(str);
    let multiLineStr = `
    My name is ${name} and I am ${age} years old.
    I am Web developer using MERN stack.
    I am curious to learn about new technology
    `
    console.log(multiLineStr);
}

// Activity-2: Destructing

// Task-3: Use array destructing
const arrDes = () => {
    let arr = ["nextjs", "express", "hono", "fastapi", "flask", "django", "spring"];
    const [ , secondElem , ...remaingItems ] = arr
    console.log(secondElem);
    console.log(remaingItems);
}

// Task-4: Object descructing
const objDes = () => {
    const book = {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        year: 1997
    }

    // const { title, author } = book
    // console.log(title);
    // console.log(author);

    // accessing obj with new key
    // const { title:head, author: writer } = book;
    // console.log(head);
    // console.log(writer);

    // rest keys access
    const { title , ...rest} = book
    console.log(title);
    console.log(rest);
}

// Activity-3: Spread and Rest Operator

// Task-5: Used spread operator for array
const spreadOp = () => {
    let oldArr = [1,2,3,4];
    let newArray = [...oldArr,5,7,8,9,10];
    console.log(newArray);
}

// Task-6; Used rest operator
// spread op: used for assign the value
// Rest op: used for retriving the value
const restOp = () => {
    function add(...num){
        let sum  = num.reduce((sum, num) => sum + num);
        console.log(sum);
    }
    add(4,5,7,8,6,2,7)
}

// Actitvity-4: Default parameter

// Task-7: Using default parameter in func
const defaultPara = () => {
    function product(numOne, numTwo = 5){
        let product = numOne * numTwo
        console.log(product);
    }
    product(4)
    product(4,9)
}

// Acitivity-5: Enhance Object Literals

// Task-8: Create aobject and ehod inside it
const objLite = () => {
    let person = {
        name: "John Snow",
        age: 26,
        display(){
            console.log(this.name);
            console.log(this.age);
        }
    }
    person.display()
}

// Task-9: Create a obj with computed property name
const obj = () => {
    const name = `name`;
    const age = `age`;
    const getKey = (str, num) => `${str}${num}`

    const info = {
        [name]: "John Snow",
        [age]: "26",
        [getKey("skill",1)]: "Swordsmanship",
    }
    console.log(info);
}