let fruits = ["banana", "avacado" , "jamun", "apple" ];
fruits.sort();
console.log(fruits);

let numbers = [1,3,5,88,33];
numbers.sort();                    // Natural Sorting, lexicographic Sorting)
console.log(numbers);

numbers.sort((a,b) => a-b);  // ascending
console.log(numbers);

numbers.sort((a,b) => b-a);  // descending
console.log(numbers);


