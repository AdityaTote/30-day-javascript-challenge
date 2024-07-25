// Day-13: Module

// Activity-1: Creating and exporting module

// Task-1: Creating fn for adding number
const {add} = require('./add.js');
const addFn = (a,b) => {
    add(a,b)
}

// Task-2: Ceating obj for perosn data
const {personData} = require('./person.js');
const person = () => {
    console.log(personData.data());
}

// Activity-2: Named and Default Exports

// Task-3: Create a module that export multiple fn
const { sub, div, mul } = require("./multipleFn.js")
const namedFn = (a,b) => {
    add(a,b);
    sub(a,b);
    div(a,b);
    mul(a,b);
}

// Task-4: creating a fn using fn default port
const defaultFn = () => {
    add(3,4)
}

// Activity-3: Importing entire module

// Task-5: create a module which export constant, func, obj and import as a obj
const obj = require("./multipleValues.js")
const fn = () => {
    obj.g;
    obj.u,
    obj.displacement,
    obj.t,
    obj.finalVel,
    obj.info
}

// Activity-4: Use of Thrid-Party Modules

// Task-6: Install loadash ad use it 
const _ = require("lodash");
const useOfLodash = () => {
    const res =  _.reduce([7,9,6,4], function(sum,num){
        return sum+num;
    },0)
    console.log(res);
}

// Task-7: Insatll axios and use
const axios = require("axios");
const handleAxios = async () => {
    const res = await axios.get("https://api.agify.io?name=Aditya")
    console.log(res.data)
}