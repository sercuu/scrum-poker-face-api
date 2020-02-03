const jwt = require("express-jwt");
const dotenv = require("dotenv");
dotenv.config();
// process.env.secret

module.exports = genereteToken;

const genereteToken = ({ id, username }) => {
  console.log(id, username);
};
