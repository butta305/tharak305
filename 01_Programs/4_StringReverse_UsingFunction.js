

function Stringreverse(word)
{

let h1 = "";

for( let i=word.length-1 ; i>=0 ; i--)
{
    h1 = h1 + word.charAt(i);    // OR h2 = h2 + h1[i];
    
}

console.log(word);

if( h1.toLowerCase() === word.toLowerCase() )
{
    console.log(word + " is a palindrome number");
}
else 
{
    console.log(word + " is not a palindrome number");
}
}

Stringreverse("pramod");
Stringreverse("madaM");

