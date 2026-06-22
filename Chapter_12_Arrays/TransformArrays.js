let scores = [45,34,5,6,77];

let grades = scores.map(s => s>40 ? "pass" : "fail");
console.log(grades);

// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 

// filter — keeps elements that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);

// reduce , // reduce — accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());