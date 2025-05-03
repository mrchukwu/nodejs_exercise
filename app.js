// require('./xyz')
// const obj = require('./sum') //one way of accessing the private variables & functions using "obj";
// const {x , calculateSum} = require('./sum')

//ES6 Modules
import {x, calculateSum} from './sum.js';


const courseName = "Namsta Nodejs course";
const a = 10;
const b = 20;

// obj.calculateSum(a, b);
calculateSum(a,b);


console.log(courseName);
// console.log(obj.x)
console.log(x)
// console.log(global)
console.log(globalThis === global)