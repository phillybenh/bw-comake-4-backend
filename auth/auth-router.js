const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js');
const secrets = require('../api/secrets.js');


router.post('/register', (req, res) => {
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 12);

  user.password = hash;

  Users.add(user)
    .then((user) => {
      const token = generateToken(user)  
      res.status(201).json({user, token});
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err.message });
    });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(202).json({ message: 'Welcome', token });
      } else {
        res.status(401).json({ message: 'Authentication failed' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

function generateToken(user) {
  const payload = {
    userId: user.id,
    username: user.username,
  };
  const secret = secrets.jwtSecret;
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
