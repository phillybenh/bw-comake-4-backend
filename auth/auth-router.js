// Imports
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model.js");
const generateToken = require("./generateToken.js");

// Create a new user
router.post("/register", (req, res) => {
  const user = req.body;
  // Salt the password
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  // Add the user to the database
  Users.insert(user)
    .then((user) => {
      console.log(user)
      // Send the user a JWT and their user info
      const token = generateToken(user);
      res.status(201).json({ user, token });
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ errorMessage: err.message });
    });
});

// Login as an existing user
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Fetch the user info
  Users.getBy({ username })
    .then(([user]) => {
      // Check that the username and password match up
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(202).json({ user, token });
      } else {
        // If it doesn't match, send a failed authentication message
        res.status(401).json({ message: "Authentication failed" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

//Exports
module.exports = router;
