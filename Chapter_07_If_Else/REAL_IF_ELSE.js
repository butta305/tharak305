let loggedin = true;
let userid = "Admin";

if(loggedin){
    
    if(userid === "Admin")
    {
     console.log("admin can do all things");
    }
     else if(userid === "editor")
    {
     console.log("editor can do few things");
    }
     else if(userid === "viewer")
    {
     console.log("viewer can do few things");
    }
    else 
    {
        console.log("user is a guest");
    }
}
else
{
    console.log("user not logged in");
}