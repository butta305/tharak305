let lockout = 3;

if(lockout === 0)
{
    console.log("login successful");
}
else if(lockout ===1)
{
  console.log("2 attempt left before lockout");
}
else if(lockout ===2)
{
  console.log("1 attempt left before lockout");
}
else if(lockout ===3)
{
  console.log("🔒 Account Locked — Contact support");
}
else
{
    console.log("invalid entry");
}