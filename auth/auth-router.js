const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js');
const generateToken = require('./generateToken.js');
const db = require('../data/dbconfig.js');

function add(user){
  return db('users')
  .insert(user)
  .then(([id]) => {
      return db('users')
      .where({id})
  })
}

router.post('/register', (req, res) => {
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 12);

  user.password = hash;

  add(user)
    .then(([user]) => {
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
        res.status(202).json({ user, token });
      } else {
        res.status(401).json({ message: 'Authentication failed' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});



module.exports = router
