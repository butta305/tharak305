
console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2 : API response received!")
}, 2000);

console.log("Test 3: Moving to next last");


// Test 2 executed only after condition '2000' passes, 
// Execution is not done in step-by-step manner, hence it is async in nature