for (var i = 0; i < 3; i++) {
     setTimeout(() => console.log(i), 100);  // FUNCTION SCOPE
   }

   for (let j = 0; j < 3; j++) {
     setTimeout(() => console.log(j), 100);  // BLOCK SCOPE
   }

   /*

   block scope:
   {
   let j = 0;
   setTimeout(() => console.log(j), 100);
}

{
   let j = 1;
   setTimeout(() => console.log(j), 100);
}

{
   let j = 2;
   setTimeout(() => console.log(j), 100);
}


*/