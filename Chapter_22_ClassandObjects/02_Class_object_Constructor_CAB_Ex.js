
class car
{
    // constructor
    constructor(name_given_during_obj_creation)
    {
        this.name = name_given_during_obj_creation;  
        // this keyword is used to assign new created object in constructor("model S")
        // HERE we just assigned the object, we can also print using console
    }


// Attribute

// Behavior
drive()
{
    console.log("i will drive " + this.name);
}

// Attribute and Behavior can use 'this' keywords

}

const tesla = new car("model S");
tesla.drive();

let i10 = new car("i10 grand");
i10.drive();