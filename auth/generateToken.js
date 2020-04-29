// Imports
const jwt = require('jsonwebtoken');
const secrets = require('../api/secrets.js');

// Export the generateToken function
module.exports = function generateToken(user) {
  // Constants
  const payload = {
    userId: user.id || 0,
    username: user.username || 'newlyregistereduser',
  };
  const secret = secrets.jwtSecret;
  const options = {
    expiresIn: "1d",
  };
  // Get the token
  return jwt.sign(payload, secret, options);
};
