
//concat

let a = [1,2];
let b = [4,5];

let add = a.concat(b);
console.log(add);

let ab = ["one" , "two"];
let cd = ["three" , "four"];
console.log(ab.concat(cd));

//spread (modern way) - concatenation. (...)

let m = [...ab,...cd];
console.log(m);

//join

let s = ["pass", "fail", "skip"].join(" ");
console.log(s);