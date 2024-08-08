// Day-16: Recursion

// Activity-1: Basic Recursion

// Task-1: Print factorial using recursion
const recurOne = (num) => {
    if (num === 1) {
      console.log(1);
      return 1;
    } else {
      const result = num * recurOne(num - 1);
      console.log(result);
      return result;
    }
};

// Task-2: Print fibonnaci series
const recurTwo = (num) => {
    if(num <= 2){
        return 1; 
    } else{
        const result = recurTwo(num - 1) + recurTwo(num - 2);
        console.log(result);
        return result
    }
}

// Activity-2: Recursion with Array

// Task-3: Recursion function for sum of all element in array
const recurThree = (arr) => {
    if(arr.length === 0 ){
        console.log(0);
        return 0;
    } else {
        const result = arr[0] +recurThree(arr.slice(1));
        console.log(result);
        return result
    }
}

// Task-4: Recursion function for maximum element in array.
const recurFour = (arr) => {
    if(arr.length === 1){
        console.log(arr[0]);
        return 0;
    } else {
        const restElems = recurFour(arr.slice(1));
        const result = arr[0] > restElems ? arr[0] : restElems
        console.log(result);
        return result;
    }
}

// Activity-3: String Manupalution

// Task-5: Recursion function to reverse the string
const recurFive = (str) => {
    if(str === ""){
        return "";
    } else {
        const result = recurFive(str.substr(1)) + str.charAt(0);
        console.log(result);
        return result;
    }
}

// Task-6: Recrusion function to chect palamdrme string
const recurSix = (str) => {

    if (str.length <= 1) {
        return str;
    }

    if (str.charAt(0) === str.charAt(str.length - 1)) {
        const result = recurSix(str.substring(1, str.length - 1));
        console.log(result);
        return result;
    } else {
       return str;
    }
}

// Activity-4: Recursive Search

// Task-7: Use recursive serach for binary serach of sorted array
const recurSeven = () => {

    const arry = (arr, num, start, end) => {
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
    
            if (arr[mid] === num) {
                console.log(mid, "Found!");
                return mid;
            } else if (arr[mid] > num) {
                return arry(arr, num, start, mid - 1);
            } else {
                return arry(arr, num, mid + 1, end); 
            }
        }
        return -1;
    }

    let arr = [1,5,9,12,47,62,98]
    const start = 0;
    const end = arr.length -1;
    arry(arr, 5, start, end);
}

// Task-8: recursive function for counting the no. of occurnce of element in array
const recurEight = () => {

    const count = (arr, num) => {
        if(arr.length === 0){
            return 0; 
        } else {
            const match = arr[0] === num ? 1 : 0
            return match + count(arr.slice(1), num)
        }
    }

    let arr = [1,7,9,6,5,4,5,2,1,9,6,3,1,4,7,1,5,1,5,1,5,1]
    console.log(count(arr, 1));
}