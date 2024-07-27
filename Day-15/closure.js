// Day-15: Closure

// Activity-1: Closure

// Task-1: funtion retureing function insde it by accesing outer function variable
const closureOne = () => {
    function outerFunc(){
        const name = `John`
        function innerFunc() {
            console.log(`${name}, hello`);
        }
        innerFunc()
    }
    outerFunc()
}

// Task-2: create a closure that maintain counter
const closureTwo = () => {
    function outerFunc(){
        let count = 0;
        return{
            increment(){
                count ++
            },
            display(){
                console.log(count);
            }
        }
    }
    const count = outerFunc();
    count.increment()
    count.display()
    count.increment()
    count.display()
}

// Activity-2: Pratcial Closure

// Task-3: function generte unique id, store and icrement while calling
const closureThree = () => {
    const outerFunc = () => {
        let id = Math.floor(Math.random()*100);
        let oldId = id;
        let newId = oldId;
        return{
            display(){
                console.log(oldId);
                console.log(newId);
            },
            increment(){
                newId++;
            }
        }
    }
    const ids = outerFunc();
    ids.increment()
    ids.display()
}

// Task-4: Creta a closure that catch username and retuen a function with greetings
closureFour = (name) => {
    const outerFunc = () => {
        const username = name;

        return function(){
            console.log(`Hello! ${username}, HAve a good Day`);
        }
    }
    outerFunc()()
}

// Activity-3: Closure loop

// Task-5: create a array of functions and log its index

const closureFive = () => {
    const functionArray = () => {
        const functions = [];
        for (let i = 0; i < 10; i++) {
            functions.push((function(index) {
                return function() {
                    console.log(index);
                };
            })(i));
        }
        return functions
    }
    const count = functionArray()
    count[1]();
    count[5]();
}

// Activity-4: Module Pattern

// Task-6: Use cloure to add , remove and list item
const closureSix = () => {
    const outerFunc = () => {
        const items = [];
        return{
            addItem(item){
                items.push(item);
                console.log(`${item} is added`);
            },
            removeItem(item){
                const index = items.indexOf(item);
                if(index>-1){
                    items.splice(index, 1);
                    console.log(`${item} is Removes`);
                } else{
                    console.log(`${item} is not found`);
                }
            },
            listItem(){
                console.log(`Items: ${items.join(", ")}`);
            }
        }
    }
    const itemm = outerFunc()
    itemm.addItem("Paste")
    itemm.addItem("Brush")
    itemm.addItem("Soap")
    itemm.listItem()
    itemm.removeItem("i")
    itemm.listItem()
}

// Activity-5: Memonization

// Task-7-8: Using memonization in closure
const closureSeven = () => {
    function memo(fn){
        let result = {};
        return function(...args){
            const key= JSON.stringify(args);
            if(result[key]){
                result[key];
            } else {
                const value = fn(...args); 
                result[key] = value; 
                return value;
            }
        }
    }

    function factors(num){
        if(num<=1){
            return 1;
        } else {
            return num * factors(num-1)
        }
    }

    const res = memo(factors);
    console.log(res(4));
    console.log(res(2));
    console.log(res(-1));
}
closureSeven()