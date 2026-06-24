function retry(testName, maxretries = 3, delay = 3000)
{
    console.log(`Retrying ${testName} upto ${maxretries} times, ${delay} ms apart`)
}

retry("login");
retry("adding", 5, 4000);