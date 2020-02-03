const User = require("../models/user.model");
const encrypt = require("../helpers/encrypt");

module.exports.create = async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const cryptedPassword = encrypt(password);
    const userBody = { password: cryptedPassword, ...rest };
    const newUser = new User(userBody);
    newUser.save(function(err, response) {
      if (err) return console.log(err);
      res.json(201, {
        status: 201,
        success: "OK",
        response
      });
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.login = async (req, res) => {
  console.log("sasss");
  console.log(req, res, "reqres22s");

  try {
    console.log(req, res, "reqress");
  } catch (error) {
    res.status(400).send(error);
  }
};
