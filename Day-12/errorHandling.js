// Day-12: Error Handling

// Activity-1: Basic ahndling using try and catch

// Task-1: Thorw err using try and catch methd
const errHandle = () => {
    try {
        fn("hi")
    } catch (error) {
        console.log(error);
    }
}

// Task-2: Throw err
const divideErr = (a,b) => {
    try {
        if(b<1){
            throw error
        }
        const divide = a/b;
        console.log(divide);
    } catch (error) {
        console.log(error.message);
    }
}

// Activity-2: Finally Block
const tryFibal = () => {
    try {
        console.log("try block");
    } catch (error) {
        console.log(error.messaage);
    } finally {
        console.log("process end");
    }
}

// Activity-3: Custom Error Object

// Task-4: Create a custom error class
const customClass = () => {
    class ErrorRespose extends Error{
        constructor(
            messsage = "Something went wrong",
            error = []
        ){
            super(messsage)
            this.message = messsage;
            this.error = error
        }
    }

    try {
        fn("hi")
    } catch (error) {
        console.log(new ErrorRespose(
            error.essage
        ));
    }
}

// Task-5: Write fun that validate empty string using try-catch
const strigValidate = (string) => {
    try {
        if(string === ""){
            throw error
        }
        console.log(string);
    } catch (error) {
        console.log("string is empty");
    }
}

// Activity-4: Error Handling in Promises

// Task-6: Create a promises to handle error
const errorUsPromises = () => {
    new Promise((res, rej) => {
        res("hello")
    }).then((r) => {
        console.log(r);
    }).catch((err) => {
        rej(err)
        console.log(err);
    })
}

// Task-7: promises using try catch
const errorTry = async() => {
    try {
        const res = await new Promise((res,rej) => {
            res("Helllo")
        })
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

// Activity-5: Error handling

// Task-8: fetch url hanling usin then and catch
const fetchThen = () => {
    fetch("htttp:localhost:2546")
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}

// Task-9: fetch url handling try catch and async
const fetchAsync = async() => {
    try {
        const res = await fetch("htttp:localhost:2546");
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}