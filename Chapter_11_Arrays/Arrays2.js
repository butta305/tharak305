let browser = ["chrome", "edge", "firefox"]; // preferred way

let scores =  new Array(3); // 3 is the length of array
// scores[0]=1;
// scores[1]=2;
// scores[2]=3;     // if u initialize, it shows [1,2,3]

//Ctrl + K, then Ctrl + C → Comment selected lines
//Ctrl + K, then Ctrl + U → Uncomment selected lines

let score2 = new Array(1,2,3);
console.log(score2);
console.log(scores);

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]
console.log(chars);

// let numbers1 = Array.from("123456789");
// console.log(numbers1);
