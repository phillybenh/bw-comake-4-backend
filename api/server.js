// Node imports
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Local imports
const authenticate = require("../auth/authenticator.js");
// Router Imports
const issues = require("../issues/issues-router.js");
const profiles = require("../userProfiles/profiles-router.js");
const authRouter = require("../auth/auth-router.js");

// Constants
const server = express();

// General use functions
server.use(cors());
server.use(helmet());
server.use(express.json());

// Router use functions
server.use("/issues", authenticate, issues);
server.use("/users", authenticate, profiles);
server.use("/", authRouter);

// Server check
server.get("/", (req, res) => {
  res.status(200).json({ api: `Running properly` });
});

// Exports
module.exports = server;
