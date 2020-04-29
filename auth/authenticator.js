// Imports
const jwt = require("jsonwebtoken");
const secrets = require("../api/secrets.js");

// Export the authenticator middleware
module.exports = (req, res, next) => {
  // Constants
  const token = req.headers.authorization;
  const secret = secrets.jwtSecret;
  // Verify the user has been authenticated
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      // Verify the user's token is legit
      if (error) {
        res.status(401).json({ message: "Bad token" });
        // Move on to next middleware function
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Must provide credentials" });
  }
};
