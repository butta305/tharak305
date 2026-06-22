let tests = ["login", "checkout", "logout"];

for(let i=0; i<tests.length ;i++)
{
  console.log(tests[i]);
}

for(num of tests)
{
  console.log(num);
}

tests.forEach((k,index) => {
  console.log(k,index)
});

let students = ["sahoo", "bigil", "roger"];

for(let student in students)
{
    console.log(student, "->", students[student]);
}