const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { fetchAllUsers, fetchUserById } = require("./helpers/userHelpers");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/users", (req, res) => {
  fetchAllUsers()
    .then((users) => {
      return res.json(users);
    })
    .catch((err) => {
      console.log("ERR", err);
      res.send("OH NO.");
    });
});

app.get("/api/users/:user_id", async (req, res) => {
  try {
    const user = await fetchUserById(req.params.user_id);
    return res.json(user);
    
  } catch (err) {
    console.log("ERR", err);
    return res.send("OH NO.");
  }
});

module.exports = app;
