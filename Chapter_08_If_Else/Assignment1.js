let HTTP_status = 200;

if(HTTP_status>=200 && HTTP_status<=299)
{
    console.log("Success");
}
else if (HTTP_status>=300 && HTTP_status<=399)
{
    console.log("Redirection");
}
else if (HTTP_status>=400 && HTTP_status<=499)
{
    console.log("Client Error");
}
else if (HTTP_status>=500 && HTTP_status<=599)
{
    console.log("Server Error");
}
else
{
    console.log("Invalid");
}
