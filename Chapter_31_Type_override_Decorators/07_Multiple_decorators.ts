
function f1(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        console.log("EAT");
        return originalMethod.call(this);
    };
    return descriptor;
}

function f2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        console.log("SLEEP");
        return originalMethod.call(this);
    };
    return descriptor;
}

class Dog {
    @f1
    @f2
    bark() {
        return "woof";
    }
}

let r = new Dog().bark();
console.log(r);