const express = require("express");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");

const app = express();

const sequelize = require("./config/db.config");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const user = require("./models/user");

const { addUser } = require("./controller/userController");

user.sync({ alter: true });

app.post(
  "/user",
  body("username").isEmail(),
  body("password").isLength({ min: 5 }),
  addUser
);

const port = process.env.port || 8000;

app.listen(port);
console.log("Server is running at http://localhost:8000");
