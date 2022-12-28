const sequelize = require("../config/db.config");
const user = require("../models/user");
const { validationResult } = require("express-validator");
const addUser = async (req, res) => {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    const userData = await user.create({
      username,
      password,
    });

    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send({ message: "500 error to user data" });
  }
};

module.exports = { addUser };
