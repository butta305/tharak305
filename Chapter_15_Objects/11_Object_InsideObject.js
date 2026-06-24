
const data = {
    user:
    {
        name: "john",
        age: 30,
        address: 
        {
           city: "USA"
        }
    }
};

const { user: { address : { city }}} = data;
console.log(city);

const { user: { name, age}} = data;
console.log(name);
console.log(age);

// another way of printing output

console.log(data.user.address.city);   // prints city
console.log(data.user.name);
console.log(data.user.address);       // prints address

