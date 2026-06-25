
let a = [1,2,3,3,4];  // 1-D array , only rows

let grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let grids = [[1,2,3], [4,5,6], [7,8,9]];

// grid is nxn matrix, equal rows and columns

// print all elements

for (let i=0 ; i<grid.length ; i++)
{
    for(let j=0 ; j<grid.length ; j++)
    {
        console.log(grid[i][j]);
    }
    console.log("\n");
}