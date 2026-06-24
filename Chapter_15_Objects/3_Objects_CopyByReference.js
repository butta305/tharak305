
let a = {status : "pass"};
console.log(a.status);
console.log(a["status"]);    // using array

let a1 = {status : "pass"};
console.log(a1.status);

// same object key: value pair can be created for 2 different object references
// obj references are a and a1
// key: value are {status : "pass"}


// copy by reference  (b=a)

let b = a;
b.status = "fail";
console.log(b.status);
console.log(a.status);

if( b === a )
{
    console.log("true");
}
else
{
    console.log("false");
}

// both obj references are same now here 'a' and 'b' , since b is assigned to a