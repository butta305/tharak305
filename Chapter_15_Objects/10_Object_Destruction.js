
const user = { name : "haina", age: 20, grade: 'A'};

// Basic destructing

const { name, age } = user;
const { grade } = user;

console.log(name);
console.log(grade);

// Rename variables

const { name: username, age: userage} = user;
console.log(username);
console.log(userage);

// default values

const { country = "INDIA"} = user;
console.log(country);
console.log(user);

user.country = "USA";        // ADD
console.log(user);

/* const { country = "CANADA"} = user;
console.log(country);
console.log(user);  */     // GIVES ERROR AS COUNTRY IS ALREADY DECLARED