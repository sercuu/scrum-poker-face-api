const User = require('../models/user.model');
const encrypt = require('../helpers/encrypt');

module.exports.create = (req, res) => {
  const { password, ...rest } = req.body;
  const cryptedPassword = encrypt(password);
  const userBody = { password: cryptedPassword, ...rest };
  const newUser = new User(userBody);
  newUser.save(function(err, response) {
    if (err) return console.log(err);
    res.json(201, {
      status: 201,
      success: 'OK',
      response
    });
  });
};
