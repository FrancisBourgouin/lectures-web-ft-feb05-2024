require("dotenv").config();

const express = require("express"); // Requires Express Framework (Routing / Server)
const path = require("path"); // Requires Path (Multiple OS path support)
const logger = require("morgan"); // Require Morgan (Logs the requests received)
const cookieParser = require("cookie-parser"); // Require Cookie Parser (Parse string to cookie)
const cookieSession = require("cookie-session");

const { users } = require("./data/users");
const generateUserHelpers = require("./helpers/userHelpers");

const { authenticateUser, getUserByEmail } = generateUserHelpers(users);

const app = express(); // Create an express server and reference with app
// view engine setup
app.set("views", path.join(__dirname, "views")); // Where the views are
app.set("view engine", "ejs"); // The rendering engine will be EJS

// Middlewares
app.use(logger("dev")); // Logs, always triggered
app.use(express.json()); // Parse incoming body (POST / PUT)
app.use(express.urlencoded({ extended: false })); // Parse incoming body (POST / PUT)
app.use(cookieParser()); // Parse cookie values, always triggered
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
app.use(
  cookieSession({
    name: "session",
    keys: ["139wasn!&SAM", "The little chicken in the prairie"],
  })
);

app.use((req, res, next) => {
  console.log(`A user went to ${req.path} using ${req.method} method.`);

  res.cookie("lastTimeVisited", JSON.stringify(new Date()));
  next();
});

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/secret", (req, res) => {
  // const { email } = req.cookies;
  const { email } = req.session;

  const { err, user } = getUserByEmail(email);

  if (err) {
    console.log(err);
    return res.redirect("/");
  }

  const templateVars = { user };
  return res.render("secret", templateVars);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.post("/login", (req, res) => {
  // const email = req.body.email
  // const password = req.body.password

  const { email, password } = req.body;

  const { err, user } = authenticateUser(email, password);

  if (err) {
    console.log(err);
    return res.redirect("/");
  }

  // res.cookie("email", user.email);
  req.session.email = user.email;
  return res.redirect("/secret");
});

module.exports = app;
