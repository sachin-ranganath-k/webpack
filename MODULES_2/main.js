/********** Single function import ***********/
//import add.js and subtract.js

// const add=require("./functions/add")
// const result=add(3,4);
// console.log(result);



/********** Multiple functions import ***********/
const  {addition, addMultiply}= require("./functions/add")
const result=addMultiply(3,5,7)  //(3+5)*7
console.log(result)