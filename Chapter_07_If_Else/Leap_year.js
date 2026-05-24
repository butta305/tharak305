let leapyear = 2800;

if( leapyear%4 === 0 && leapyear%100 !==0 || leapyear%400 === 0)
{
   console.log(leapyear + " is a leap year");
}
else
{
    console.log(leapyear + " is not a leap year");
}