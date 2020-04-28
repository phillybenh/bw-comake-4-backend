const jwt = require('jsonwebtoken');
const secrets = require('../api/secrets.js');

module.exports = function generateToken(user) {
  const payload = {
    userId: user.id || 0,
    username: user.username || 'newlyregistereduser',
  };
  const secret = secrets.jwtSecret;
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, secret, options);
};
