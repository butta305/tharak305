// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a"); // []
console.log(result1);

// every & some

let a1 = [34,55,76];
let b1 = [34,6,7,88];

let c = a1.every( s => s >= 30 ); // every element should pass the condition (AND)
let d = b1.every( s => s < 72);

console.log(c);
console.log(d);

// Playwright API 
[200, 201, 203].every(statuscode => statuscode > 200); // true

let a2 = [34,55,76];
let b2 = [34,6,7,88];

let k = a1.some( s => s >= 75 );  // atleast 1 element should pass the condition (OR)
let l = b1.some( s => s < 6);

console.log(k);
console.log(l);