let a = 1;
do
{
    console.log(a);
    a++;
}
while(a<1);

let retry = 0;
do
{
    console.log("Execute a code!");
    console.log("retrying " + retry);
    retry++;
}
while(retry<4);