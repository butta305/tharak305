
// ../ means this file is in 1 folder above
// ./ means this file is in same folder
// ../../ means this file is the parent folder

import { Base_URL, formatTestName } from "../testUtils.js";

console.log(Base_URL);
let result = formatTestName("kesh");
console.log(result);