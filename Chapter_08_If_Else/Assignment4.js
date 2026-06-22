let percentage = 65;
if (percentage === 100)
{
    console.log("Green Build");
}
else if (percentage >= 90 && percentage <= 99) 
    {
        console.log("Stable — Investigate failures");
    }
    else if (percentage >= 70 && percentage <= 89) 
    {
        console.log("Unstable");
    }
        else (percentage < 70) 
    {
        console.log("Broken Build — Block deployment");
    }