
let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

// for loop  , print all elements

for(let i=0 ; i<testMatrix.length ; i++)
{
    for(let j=0 ; j<testMatrix[i].length ; j++)
    {
         console.log(testMatrix[i][j]);
    }
    console.log();
}

// of loop

for(let row of testMatrix)
{
    for(let column of row)
    {
        process.stdout.write(column + " ");
    }
    console.log();
}

// forEach loop

testMatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
});

