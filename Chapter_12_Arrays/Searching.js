let b = [ "pass", "fail","pass", "skip","error","pass", "skip"];

console.log(b.indexOf("pass"));     // 0 ,  indexOf — returns first index, or -1 if not found
console.log(b.indexOf("firstclass"));  // -1

console.log(b.lastIndexOf("skip"));  //6
console.log(b.lastIndexOf("pass"));   //5 

// if there are duplicates, index of prints 1st element
//                        , lastindexof prints last element


console.log(b.includes("fail"));
console.log(b.includes("secondclass"));

// find — returns first matching element
let nums = [10, 25, ,30,30, 45];

let r = nums.find(x => x > 25);
console.log(r);

//find index

let k = nums.findIndex(n => n > 20);  // 1 (25);
console.log(k);


let j = nums.findLast(n => n > 20);
console.log(j);

let m = nums.findLastIndex(n => n > 20);
console.log(m);