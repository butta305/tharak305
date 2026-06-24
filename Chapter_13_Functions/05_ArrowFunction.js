const arrow = function (name)
{
    return name;
}

let s = arrow("suhas");
console.log(s);

const arrow1 = (name1) => "Hi " + name1;
let k = arrow1("los angels");
console.log(k);

const a2 = n => n*2;
console.log(a2(10));  

// OR
let m = a2(10);
console.log(m);

const printIt = name => console.log(name);
printIt("Dutta");

function add(a,b)
{
    return a+b;
}

const add2 = (a,b) => a+b;

function say1()
{
    console.log("hi");
}

const say = () => console.log("hi");
say();
const say2 = () => "hi"

const greet = (name) => {
    const message = "Hi" + name;
    return message;
}