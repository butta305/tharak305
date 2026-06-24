
let c = { status: "pass" };
let d = { status: "pass" };

console.log(c);
console.log(d);

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}

// here obj references 'c' and 'd' both are different because d is NOT assigned to c 
// 

