// Day-4: LOOPS

// Activity-1: For Loop

//  Task-1: Print number series from 0 to n num using for loop
const series = (num) => {
    for(let i = 0; i <= num; i++){
        console.log(i);
    }
}

// Task-2: Print Multipliation Table
const table = (num) => {
    for(let i = 1; i <= 10; i++){
        const mult = num * i;
        console.log(`${num} * ${i} = ${mult}`)
    }
}

// Activity-2: While Loop

// Task-3: Sum of series of numbers.
const sumOfSeries = (n) => {
    let num = 1
    let sum = 0
    while (num <= n) { 
        sum = sum + num  
        num++
        console.log(sum); 
    }
}

// Task-4: Print numbers in decending order
const desNum = () => {
    let num = 10;
    while( num >= 1 ){
        console.log(num);
        num --
    }
}

// Activity-3: Do..While Loop

// Task-5: Print number with do while loop
const doWhileLoop = () => {
    let count = 1
    do{
        console.log(count);
        count ++
    } while(count <= 5)
}

// Task-6: Print Multiple of number.
const multipleOfNum = (n) => {
    let result = 1;
    do{
        result *= n 
        console.log(result);
        n --
    } while (n > 1)
}

// Activity-4: Nested Loops

// Task-7: Print pattern
const patternPrint = () => {
    for(let i = 1; i <=5; i++ ){
        let rows = ""
        for(let j =1; j <= i; j++){
            rows += "*";
        }
        console.log(rows);
    }
}

// Activity-5: Loop and Control-Statement

// Task-8: Printing series and nglecting no.
const seriesNeglec = () => {
    for(let i = 1; i <= 10; i++){
        if(i === 5){
            continue
        } else {
            console.log(i);
        }
    }
}

// Task-9: printing series and breaking the series at num.
const seriesBreak = () => {
    for(let i = 1; i <= 10; i++){
        if (i === 7) {
            break
        } else {
            console.log(i);
        }
    }
}