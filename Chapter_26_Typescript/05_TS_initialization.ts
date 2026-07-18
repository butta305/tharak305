
let unknown : unknown = "hello";

if(typeof unknown === "string")
{
    console.log("hi");
}

let message: string = "Hello";

let username: string;
let userId: number;

//Function

function greet(name: string): string
{
    return `Hello, ${name}`;
}

// Arrow function

const multiply = (a: number, b: number): number => a*b;

// object

let user: {name: string; age: number} =
{
   name: "john",
   age : 35
};
