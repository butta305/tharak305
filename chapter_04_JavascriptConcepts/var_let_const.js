var v=10;
let a=20;
const c=30;

var browser="chrome";
var browser="firefox";     // redeclaration of var is allowed
browser="edge";            // reassignment of var is allowed

// let browser="chrome";     // redeclaration of let is not allowed
// const browser="chrome";   // redeclaration of const is not allowed

// for, functions

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);



console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from Function");
}


say();
say();

