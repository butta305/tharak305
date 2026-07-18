

// Every Class contains: CAB - Constructor, Attributes, Behavior

class person
{   
    // constructor
    constructor()
    {
        console.log("I will be created when object is created");
    }

    name;               // Attributes
    age;
    salary;
    address;

    eat() {}           // behavior
    study() {}
    sleep() {}

}

    const obj_ref = new person();
    
    // above is object creation code
    // new person() - object
    // obj_ref = object reference/variable

    console.log(obj_ref);

    
