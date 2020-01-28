const User = require("../../models/user");
const encrypt = require("../../helpers/encrypt");

module.exports.create = (req, res) => {
  const avatarPath = req.file && req.file.filename;
  const { password, ...rest } = req.body;
  const cryptedPassword = encrypt(password);
  const userBody = { password: cryptedPassword, avatarPath, ...rest };
  const newUser = new User(userBody);
  newUser.save(function(err, result) {
    if (err) return console.log(err);
    res.json(201, result);
  });
};
