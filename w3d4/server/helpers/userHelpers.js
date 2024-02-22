const bcrypt = require("bcryptjs");

const getUserByEmail = (users, email) => {
  const currentUser = users[email];

  if (!currentUser) {
    return { err: "User not found", user: undefined };
  }

  return { err: undefined, user: currentUser };
};

const authenticateUser = (users, email, password) => {
  const currentUser = users[email];

  if (!currentUser) {
    return { err: "User not found", user: undefined };
  }

  // if (currentUser.password !== password) {
  if (!bcrypt.compareSync(password, currentUser.password)) {
    return { err: "Bad password", user: undefined };
  }

  return { err: undefined, user: currentUser };
};

const createUser = (users, userInfo, salt) => {
  const { email, password, name, secret } = userInfo;

  if (!email || !password || !name || !secret) {
    return { err: "One of the fields is not defined", user: undefined };
  }

  if (users[email]) {
    return { err: "User exists with that email", user: undefined };
  }

  const newUser = { email, password: bcrypt.hashSync(password, salt), name, secret };
  users[email] = newUser;

  return { err: undefined, user: newUser };
};

module.exports = { getUserByEmail, authenticateUser, createUser };

// const result = getUserByEmail(users, "pontiac1@bandit.com");
// const result = authenticateUser(users, "pontiac@bandit.com", "rosa1");

// const newUser = {
//   password: "bob",
//   secret: "It's not actually bob.",
//   name: "Bob",
//   email: "periodic@table.com",
// };
// const result = createUser(users, newUser);

// console.log(result);
