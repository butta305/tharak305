
function placeOrder(ClipboardItem, pramodCallback) {
    console.log("Hi, You order is placed " + ClipboardItem);
    pramodCallback();
}

function print() {
    console.log("Normal Function is called");
}

// First Way
placeOrder("Pizza", print);

console.log(" ");

// Sencond Way Anoy
placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});

console.log(" ");

// Third Way - Arrow Fn
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});