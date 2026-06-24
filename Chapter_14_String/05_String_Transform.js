let str = "  Hello, World!  ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());

// trim() removes whitespace from the beginning and end of a string.

console.log(str.trimStart());
console.log(str.trimEnd());

let msg = "Test: FAIL. Retry: FAIL.";

console.log(msg.replace("FAIL", "PASS"));
console.log(msg.replaceAll("FAIL", "PASS"));

console.log(msg.replace(/FAIL/g, "PASS"));    // using regex

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));

// concatination

console.log("Hello" + " " + "world");
console.log("Hello".concat(" concat world"));
console.log(`${"template literal "} ${"World"}`);

// split , joins

let r = "pass_01,fail_02,skip_03".split(",");
console.log(r);
console.log(r.join(" : "));

let rr = "test_login_pass".split("_").join(" ");
console.log(rr);

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);

