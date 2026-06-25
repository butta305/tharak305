
let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

// reduce

let rowsum = scores.map( row => row.reduce((a,b) => a+b, 0));
console.log(rowsum);

// starts with 0, (0+85= 85, 85+90 = 175, 175+78 = 253)
// first row output is 253.

let rowsubract = scores.map( row => row.reduce((c,d) => c-d, 0));
console.log(rowsubract);

// starts with 0, (0-85= -85, -85-90 = -175, -175-78 = -253)
// first row output is -253.

let rowmultiply = scores.map( row => row.reduce((e,f) => e*f, 1));
console.log(rowmultiply);
console.log();

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

// I want all the test cases which have failed. 

for(let i=0 ; i<suiteResults.length ; i++)
{
    for(let j=0 ; j<suiteResults[i].length ; j++)
    {
        if(suiteResults[i][j].includes("fail"))
        {
            console.log(suiteResults[i][j]);
        }
    }
}