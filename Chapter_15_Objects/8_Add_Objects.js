
const user = { name : "harshit", age:30, grade: 'A'};

console.log(user);
console.log(user.name);
console.log(user["age"]);

// dynamic property access

const key = "age";
console.log(user[key]);

// Adding and modifying properties

user.grade = 'B';            // modify
user.city = "bangalore";     // add

console.log(user);



let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }