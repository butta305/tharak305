console.log(w);
let w = 10;

{

 // ---- TDZ for "score" starts here ----
    // console.log(score);  // ReferenceError!
    // score = 50;          // ReferenceError!
    // typeof score;        // ReferenceError!
    // ---- TDZ for "score" ends here ----
    
let w=10;               // Declaration reached, TDZ ends
console.log(w);             // 100 (safe to access now)

}