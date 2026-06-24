const avg = function (name)   // function as expression using const or let
{
     return `HI ${name}`;
}

let k = avg("keshu");
console.log(k);

// Type 4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}


console.log(greet1("Bob"));