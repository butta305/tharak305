let expected = "login successful";
let actual ="Invalid Credentials";

if(expected === actual)
{
    console.log("☑️ Test Passed")
}

if(expected !== actual)
{
    console.log("❎ Test Failed — Expected: Login Successful, Got: Invalid Credentials")
}
