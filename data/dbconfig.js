// Imports
const knex = require("knex");
const config = require("../knexfile.js");

// Set environment
const environment = process.env.DB_ENV || "development";

// Export the knex config dependent upon environment
module.exports = knex(config[environment]);
