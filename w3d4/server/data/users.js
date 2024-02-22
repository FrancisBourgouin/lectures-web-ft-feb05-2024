const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const users = {
  "periodic@table.com": {
    name: "Dimitri Ivanovich Mendeleiv",
    email: "periodic@table.com",
    password: bcrypt.hashSync(process.env.USER1_PASSWORD, salt),
    secret: "Actually prefers bilogy over chemistry",
  },
  "pontiac@bandit.com": {
    name: "Doug Judy",
    email: "pontiac@bandit.com",
    password: bcrypt.hashSync(process.env.USER2_PASSWORD, salt),
    secret: "Doesn't actually drive stick",
  },
};

module.exports = { users, salt };
