// Returns a value
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

getStatus(200);
getStatus(404);
getStatus(500);

function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}
let result = logTest("Login");
// console.log(result);

// output gives error as there is no return type and printing it will give error

greet("Alice");

function greet(name) {
    return `Hello, ${name}!`;
}

/* sayHi("Bob");

const sayHi = function (name) {
    return `Hi, ${name}!`;
}; */

// gives error as name is defined before const funtion
// normal funtion wont give error