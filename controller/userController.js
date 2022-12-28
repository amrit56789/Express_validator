const sequelize = require("../config/db.config");
const user = require("../models/user");

const addUser = async (req, res) => {
  try {
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
