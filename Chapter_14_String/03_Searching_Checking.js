
// searching and checking

let url = "https://staging.vwo.com/api/login?retry=true";

//includes

console.log(url.includes("staging"));
console.log(url.includes("prod"));       // returns true of false

// starts with and endswith

console.log(url.startsWith("https"));
console.log(url.startsWith("www"));
console.log(url.endsWith("https"));

//indexof and lastindexof

console.log(url.indexOf("a"));
console.log(url.indexOf("zing"));   // not available means prints -1

console.log(url.lastIndexOf("a"));  

// search - part of regex
// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 

console.log(url.search(/login/));

console.log(url.search(/logout/));

// returns -1 if string is not present.
// returns starrting index of the string if present..
//  eg: login: INDEX of 'l' is '28'