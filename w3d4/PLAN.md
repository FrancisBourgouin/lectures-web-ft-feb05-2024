# Project

Secret vault of destiny!

# Purpose

Store a terrible secret, only accessible w/ username + password

# DATA

## User

```jsx
const user = {
  name:
  email:
  password:
  secret:
};
```

## Users

```jsx
const usersArr = [user1, user2];

usersArr.find((user) => user.email === "periodic@table.com");

const usersObj = {
  "periodic@table.com": user1,
  "pontiac@bandit.com": user2,
};

usersObj["periodic@table.com"];
```

# Helpers

## getUserByEmail

INPUT: email
OUTPUT: Error (not found), userObject
OUTPUT SHAPE: { err:"", user:{} }

```jsx
const getUserByEmail = (email) => {
  const currentUser = usersObj[email];

  if (!currentUser) {
    return { err: "User not found", user: undefined };
  }

  return { err: undefined, user: currentUser };
};
```

## authenticateUser

INPUT: email, password
OUTPUT: Error (not found || bad password), userObject
OUTPUT SHAPE: { err:"", user:{} }

```jsx
const authenticateUser = (email, password) => {
  const currentUser = usersObj[email];

  if (!currentUser) {
    return { err: "User not found", user: undefined };
  }

  if (currentUser.password !== password) {
    return { err: "Bad password", user: undefined };
  }

  return { err: undefined, user: currentUser };
};
```

## createUser

INPUT: email, password, name, secret
OUTPUT: Error (invalid field || existing user), userObject
OUTPUT SHAPE: { err:"", user:{} }

```jsx
const getUserByEmail = (email, password, name, secret) => {
  if (!email || !password || !name || !secret) {
    return { err: "One of the fields is not defined", user: undefined };
  }

  if (userObj[email]) {
    return { err: "User exists with that email", user: undefined };
  }

  const newUser = { email, password, name, secret };
  userObj[email] = newUser;

  return { err: undefined, user: newUser };
};
```
