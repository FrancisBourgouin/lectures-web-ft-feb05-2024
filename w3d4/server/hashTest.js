const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);

const password1 = "Super secret!";
const password2 = "/90ush81!";

const result1 = bcrypt.hashSync(password1, salt);
const result2 = bcrypt.hashSync(password2, salt);
const result3 = bcrypt.hashSync(password1, salt);

console.log("result1", result1);
console.log("result2", result2);
console.log("result3", result3);

const result = bcrypt.compareSync("Super secret!", result1);

console.log(result);
