
let str = "Login_Test_pass_001";

// slice means slice(index1, index2-1). A part of string
// splice means splice(index, deletecount, addelement)

console.log(str.slice(0,5));  // prints (0,4)
console.log(str.slice(10)); 

console.log(str.slice(-4));    

// index is -1 from behind, 0 from front

console.log(str.substring(0,7));
console.log(str.substring(0));
console.log(str.substring(-5));

// slice(start, end-1) — negative indexes supported
// substring(start, end-1) — no negatives (treats as 0)

// substring and slice both gives same result for positive index.
// for negative index, substring consider -negative as 0 and returns full String
