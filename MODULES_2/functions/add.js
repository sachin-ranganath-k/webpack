/******************** Single function export ******************/
//  function add(a,b){
//     return a+b;
// }

// //export function and use it in main.js
// module.exports=add;


/*****************Multiple functions export ******************/
function add(a,b){
    return a+b;
}

function addAndMultiply(a,b,c){
    return (a+b)*c;
}

module.exports={
    addition:add,   //if add:add ===> Shorthand is ONLY add
    addMultiply:addAndMultiply
}