
function greet(name, callback)
{
    console.log("my name is " + name);
    callback();
}


function welcome ()                   
{
    console.log("this is india");
}

greet("keshu", welcome);    // welcome is callback function here

/* when we use callback (can use any name) as an argument and also as return (callback()) in
a function, then we can use any other function (welcome) as an argument in that function(greet()) .
here we have used 'welcome' as a callback function in 'greet' function */