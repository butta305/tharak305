

class Person {

    static nationality = "India";
    constructor(name) {
        this.name = name;
    }
    static common_fn() {

    }
}

// nationality is common to all indians, so we can use static
// where name, age are different to everyone, so thet are non-static