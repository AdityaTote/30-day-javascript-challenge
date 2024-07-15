// Day-3: Control Statement

// Activity-1: If-Else

// Task-1: Check +ve, -ve or 0
const numberCheck = (num) => {
    if( num > 0 ){
        console.log(`${num} is a +ve number.`);
    } else if( num < 0 ){
        console.log(`${num} is -ve number.`)
    } else {
        console.log(`${num} is a zero.`);
    }
}

// Task-2: Check eligible person to vote
const ageCheck = (personName, age) => {
    if( age >= 18 ){
        console.log(`${personName} is a eligible for vote.`);
    } else {
        const ageReqFromToday = 18 - age
        console.log(`${personName} is a not eligible for vote.${ageReqFromToday} year more required to fullfill requirement.`);
    }
}

// Activity-2: Nested If-Else Statement

// Task-3: largest of three numbers.
const largeNum = (numOne, numTwo, numThree) => {
    if(numOne > numTwo){
        if( numTwo > numThree ){
            console.log(`Num Oreder: ${numOne}, ${numTwo}, ${numThree}`);
        } else{  // numThree> numTwo
            if( numOne > numThree ){
                console.log(`Num Oreder: ${numOne}, ${numThree}, ${numTwo}`);
            } else { // numThree > numOne
                console.log(`Num Oreder: ${numThree}, ${numOne}, ${numTwo},`);
            }
        }
    } else { // numTwo> numOne
        if( numOne > numThree ){
            console.log(`Num Oreder: ${numTwo}, ${numOne}, ${numThree}`);
        } else{  // numThree> numOne
            if( numTwo > numThree ){
                console.log(`Num Oreder: ${numTwo}, ${numThree}, ${numOne}`);
            } else { // numThree > numTwo
                console.log(`Num Oreder: ${numThree}, ${numTwo}, ${numOne},`);
            }
        }

    }
}

// Activity-3: Switch Case

// Task-4: Determine day by num(1-7)
const dayNum = (num) => {
    switch (num) {
        case 1:
            day = "Monday"
            break;

        case 2:
            day = "Tuesday"
            break;

        case 3:
            day = "Wednesday"
            break;

        case 4:
            day = "Thrusday"
            break;

        case 5:
            day = "Friday"
            break;

        case 6:
            day = "Saturday"
            break;

        case 7:
            day = "Sunday"
            break;
    
        default:
            break;
    }
    console.log(day);
}

// Task-5: Assign grade based on marks
const gradeBasedOnMarks = (marks) => {
    switch (true) {
        case marks >= 80 && marks <= 100:
            console.log("A");
            break;

        case marks >= 70 && marks < 80:
            console.log("B");
            break;
        
        case marks >= 60 && marks < 70:
            console.log("C");
            break;
    
        case marks >= 50 && marks < 60:
            console.log("D");
            break;
    
        case marks >= 40 && marks < 50:
            console.log("E");
            break;
    
        case marks < 40:
            console.log("F");
            break;
    
            default:
                console.log(`Invalid Marks! Please Entre Marks in (1-100)`);
    }
}

// Activity-4: Conditional Operator

// Task-6: Check even odd using ternary operator
const checkEvenOdd = (num) => {
    num % 2 === 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);
}

// Activity-5: Combining Conditions

// Task-7: Leap year Check
const leapYear = (year) => {
    if( year%4 === 0 ){
        if( year % 100 === 0 ){
            if( year % 400 === 0 ){
                console.log(`${year} is a leap year`);
            } else {
                console.log(`${year} is not a leap year`);
            }
        } else {
            console.log(`${year} is leap year`);
        }
    } else {
        console.log(`${year} is not a leap year`);
    }
}