
function gettoken()
{
    return Promise.resolve("abc");
}

async function run() {
   let token =  await gettoken();
   console.log(token);
}

run();



/* any function() which returns promise() (gettoken()), we use awaits infront of
 it. 
 Any function, if we think can work with promise, we use async before it */