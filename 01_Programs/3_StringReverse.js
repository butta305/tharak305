

let h1 = "Madam";
let h2 = "";

for( let i=h1.length-1 ; i>=0 ; i--)
{
    h2 = h2 + h1.charAt(i);    // OR h2 = h2 + h1[i];
}

console.log(h2);

if( h2.toLowerCase() === h1.toLowerCase() )
{
    console.log(h2 + " is a palindrome number");
}
else 
{
    console.log(h2 + " is not a palindrome number");
}


