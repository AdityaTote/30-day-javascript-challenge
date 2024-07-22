// Activity 1: Arithematic Operator

// Task 1: Add two no.
const addNum = () => {
  const a = 10,
    b = 15;
  const c = a + b;
  console.log(c);
};

// Task 2: Subtract two no.
const subNum = () => {
  const a = 10,
    b = 15;
  const c = a - b;
  console.log(c);
};

// Task 3: Multiply two no.
const multNum = () => {
  const a = 10,
    b = 15;
  const c = a * b;
  console.log(c);
};

// Task 4: Divide two no.
const divideNum = () => {
  const a = 10,
    b = 2;
  const c = a / b;
  console.log(c);
};

// Task 5: Find Remainder two no.
const reaminderNum = () => {
  const a = 100,
    b = 70;
  const c = a % b;
  console.log(c);
};

// Activity 2: Assignment Operator

// Task 6: Use of += Operator
const incrementNum = () => {
  let a = 52;
  a += 8;
  console.log(a);
};

// Task 6: Use of -= Operator
const decrementNum = () => {
  let a = 52;
  a -= 2;
  console.log(a);
};

// Activity 3: Comparison Operator

// Task 8-10: Compare numbers using <, >, >=, <=, ==, ===
const compareNum = () => {
  const a = 109,
    b = 354;
  // <
  const c = a > b;
  console.log(c);
  // >
  const d = a < b;
  console.log(d);
  // <=
  const e = a <= b;
  console.log(e);
  // >=
  const f = a >= b;
  console.log(f);
  // ==, ===
  const num = 5;
  const str = "5";
  const num4 = 5;
  const str1 = "5"
  if (num == str) console.log("lazy checking");
  if (num === num4) console.log("Strict hecking");
  if (str === str1) console.log("Strict hecking");
};

// Activity 4: Logical Operator

// Task 11-13: Use of &&, ||, !
const logicalOpra = () => {
    const str1 = "JOHN";
    const str2 = "JOFFREY"
    if(str1[0] == "J" && str2[0] == "J"){
        console.log(str1,str2);
    }
    if(str1[3] == "N" || str2[0] == "j"){
        console.log(str1,str2);
    }
    if(!(str1[0] == "p")){
        console.log(str1);
    }
}

// Activity 5: Ternary Operator

// Task 14:
const checkNumPositiveOrNegative = (num) => {
    num >0 ? console.log(`Number ${num} is postive`) : console.log(`Number ${num} is negative`);
}