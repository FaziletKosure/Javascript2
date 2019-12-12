'use strict';
//x is a variable and a value of x is a number
const x = 9;

//declaring a function whose name is f1 and parameter val
// and f1 function is Passed by Value.
//f1 function is  passing the value of x variable as the argument.
//This function is returning val= 10, but this is not accessible outside the function. (Private) 
function f1(val) {
    val = val + 1;
    return val;
}

f1(x);

console.log(x);

const y = {
    x: 9
};

function f2(val) {
    val.x = val.x + 1;
    return val;
}

f2(y);

console.log(y);


//The second function changes the value of y to y={x:10}. This is accessible also outside of the function. (Global variable)
//Because objects are passed by reference.
//Object outside a function is passed into a function by giving a reference to the outside object. When we use that 
//reference to manipulate its object, the object outside is thus affected. However, if inside the function we decided 
//to point the reference to something else, we did not affect the object outside at all, because all we did was 
//re-direct the reference to something else.