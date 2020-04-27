const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const issues = require('../issues/issues-router.js');
const profiles = require('../userProfiles/profiles-router.js');
const authRouter = require('../auth/auth-router.js')

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/issues', issues);
server.use('/users', profiles);
server.use('/', authRouter)

server.get('/', (req, res) => {
    res.status(200).json({api: `Running properly`});
})

module.exports = server;

