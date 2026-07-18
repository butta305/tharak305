
class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}

let test = new APIPage();
test.setup();

let test1 = new BaseTest();
test1.setup();