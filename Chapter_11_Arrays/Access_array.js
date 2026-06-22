let arr = ["pass", "fail", "skip", "na"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log(arr.at(1));
console.log(arr.at(-1));
console.log(arr.at(-2));
console.log(arr.at(-3));
console.log(arr.at(-5));

arr[1]= "not fail";
console.log(arr[1]);
console.log(arr);