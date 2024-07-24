// Day-11: Promises and Async/Await

// Activity-1: Promises

// Task-1-2: Use resolve and reject
const promises = () => {
    new Promise(function(res,rej){
        setTimeout(() => {
            console.log("2 sec timeout");
            err = false;
            if(err === true){
                res("Hello this is resolve")
            } else {
                rej("Hello this is reject")
            }
        },2000)
    }).then((e) => {
        console.log("promises One");
        console.log(e);
    }).catch((err) => {
        console.log("err:",err);
    })
}

// Activity-2: Chaining Promises

// Task-3: Use channing promises.
const chaningProm = () => {
    new Promise(function(res, rej){
        setTimeout(() => {
            res({
                id: 1,
                name: "John Snow"
            })
        })
    }).then((user) => {
        console.log(user);
        return user.id
    }).then((id) => {
        console.log(id);
    })
}

// Activity-3: Using Async/Await

// Task-4-5: async fun taht resolve and rehect the promises
const asyncOne = async () => {
    const funOne = () => {
        return new Promise((resolve,) => {
            setTimeout(() => {
                resolve("Ayns fun")
            })
        })
    }
    try {
        const resut = await funOne()
        console.log(resut);
    } catch (error) {
        console.log(error.message);
    }

    const funTwo = () => {
        return new Promise((res,rej) => {
            setTimeout(() => {
                const err = false;
                if(err){
                    res("Solved")
                } else{
                    rej("rejected")
                }
            })
        })
    }
    try {
        const resultOne = await funTwo();
        console.log(resultOne);
    } catch (error) {
        console.log("Rejct",error);
    }

}

// Acitvity-4: Fetching Data

// Task-4: Fetch data and log by promises
const fetchPromises = () => {
    fetch("https://api.agify.io?name=Aditya")
        .then((response) => {
            const json = response.json()
            return json
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
}

// Task-5: Ftech the data using async/Await
const fetchAsync = async() => {
    try {
        const res = await fetch("https://api.agify.io?name=Aditya");
        const json = await res.json()
        console.log(json);
    } catch (error) {
        console.log(error.message);
    }
}

// Activity-5: Concurrent Promises

// Task-8: Use Promises.all
const promisesAll = () => {
    const promisesOne = new Promise((res,rej) => {
        res("Promiese 1")
    })
    const promisesTwo = new Promise((res,rej) => {
        res("Promiese 2")
    })
    const promisesThree = new Promise((res,rej) => {
        res("Promiese 3")
    })
    const promisesFourth = new Promise((res,rej) => {
        res("Promiese 4")
    })

    Promise.all([promisesOne, promisesTwo, promisesThree, promisesFourth])
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}

const promisesRace = () => {
    const promisesOne = new Promise((res,rej) => {
        res("Promiese 1")
    })
    const promisesTwo = new Promise((res,rej) => {
        res("Promiese 2")
    })
    const promisesThree = new Promise((res,rej) => {
        res("Promiese 3")
    })
    const promisesFourth = new Promise((res,rej) => {
        res("Promiese 4")
    })

    Promise.race([promisesOne, promisesTwo, promisesThree, promisesFourth])
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}