
let order = new Promise(function(re, rj)
{
    let foodready = true;
    if(foodready)
    {
        re("order is delivered");
    }
    else
    {
        rj("order cancelled");
    }
});

console.log(order);