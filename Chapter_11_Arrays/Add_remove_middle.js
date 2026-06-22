let arr = [1, 2, 3];

arr.push(4, 5, 6);
console.log(arr);

// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

arr.splice(2,1);  // splice(index, deleteCount, ...itemsToAdd)
console.log(arr);

arr.splice(2,0,1);    // delete
console.log(arr);

arr.splice(2,1,12);   // replace
console.log(arr);

arr.splice(3,0,88);
console.log(arr);

arr.splice(3,2,22,33);
console.log(arr);