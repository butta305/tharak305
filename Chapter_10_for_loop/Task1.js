let a=5, b=9, c=5;
if( a === b && a === c )
{
    console.log("equilateral triangle");
}
else if( a===b || a===c || b===c )
{
    console.log("Isolateral triangle");
}
else
{
    console.log("scalene");
}