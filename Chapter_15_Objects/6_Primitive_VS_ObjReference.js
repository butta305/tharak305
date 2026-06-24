
// Primitive vs Reference Types

// primitive

let a = 10;
let b = a;

console.log(a);
console.log(b);

b = 99;
console.log(b);
console.log(a);

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function

let obj1 = { var : 101};
let obj2 = obj1;

console.log(obj1.var);

console.log(obj2.var);

obj2.var = 200;

console.log(obj2.var);
console.log(obj1.var);

/* difference between primitive and obj reference is after assigning a value to b,
and if b value is changed , then a value still remains unchanged, because both a and b
have different memory allocations ( diff boxes ) for normal primitive data type.

For object reference : if one obj reference is assigned to another obj reference,
both memory will be allocated in the same box. Hence if one value is changed,
automatically another value also changes. */
