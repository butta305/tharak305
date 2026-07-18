
class TestCase
{
    constructor(name, status, priority)
    {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display()   // method
    {
        console.log(this.name+ "->" +this.status+ ", "+this.priority);
    }
}

function f1()     // function
{
    
}

let loginTC = new TestCase("Login test", "pass", "P0");
let signupTC = new TestCase("signup", "fail", "p1");

loginTC.display();
signupTC.display();


// Function inside the Class becomes Method
// All methods are Function, but Functions are not Methods