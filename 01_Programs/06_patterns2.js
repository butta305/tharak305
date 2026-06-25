// n = 3
// *
// * *
// * * *

let n = 3;

for (let i=0 ; i<n ; i++)
{
    let row = " ";
    for (let j=0 ; j<=i ;j++)
    {
        row = row + "* ";   // row + = "* "; 
    }
    console.log(row.trim());
}


/* important: to solve patterns, analysing columns 'j' is important
  eg. above example j<=i is used, since there is '*' in array in those
  indexes only j<=i condition will satisfy. rest of the indexes condition
  will not satisfy. hence it is important to identify the condition
  according to the postion of '*' present in the indexes.

  for 3x3 size array, index is
  (0,0) (0,1) (0,2)      
  (1,0) (1,1) (1,2)
  (2,0) (2,1) (2,2)

  *
  * *
  * * *
  
  compare '*' position according to above index and write the 'j' condition
  */