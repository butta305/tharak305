
//let x=10;
//console.log(x); // 10

if (true)
    {
    
    // TDZ for block-scoped "x" starts here
    // console.log(x);   // ReferenceError (NOT "global"!)

 //   console.log(x); // 10
    let x=20;                     // TDZ ENDS HERE AS X IS DECLARED
    console.log(x); // 20
}


console.log(x); // 10 (global x unaffected by block-scoped x)