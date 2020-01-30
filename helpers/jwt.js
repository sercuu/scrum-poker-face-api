const jwt = require('express-jwt');
const config = require('../config');

module.exports = jwt;

function jwt() {
  const jwtKey = config.development.secret;
  return expressJwt({ jwtKey }).unless({
    path: ['/api/auth/login', '/api/user/register']
  });
}
