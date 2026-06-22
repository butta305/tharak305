let bugscore = 18;

if(bugscore>=9 && bugscore<=10)
{
    console.log("Severity: Critical — Block release");
}
else if(bugscore>=7 && bugscore<=8)
{
    console.log("Severity: High");
}
else if(bugscore>=4 && bugscore<=6)
{
    console.log("Severity: Medium");
}
else if(bugscore>=1 && bugscore<=3)
{
    console.log("Severity: Low");
}
else
{
    console.log("invalid score");
}