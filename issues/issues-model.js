//Imports
const db = require("../data/dbconfig.js");

// Use env, knex to use knex.raw
const knex = require("knex")(knexfile[environment]);
const knexfile = require("../knexfile");

// Exports
module.exports = {
  get,
  getBy,
  insert,
  update,
  votes,
  remove,
};

function get() {
  return db("issues");
}

function getBy(filter) {
  return db("issues")
    .where(filter)
    .then((issues) => {
      if (issues.length !== 0) {
        return issues;
      } else {
        return { errorMessage: "No issue with that ID" };
      }
    });
}

function insert(issue) {
  return db("issues")
    .returning("id")
    .insert(issue)
    .then(([id]) => {
      return getBy({ id });
    });
}

function update(id, changes) {
  return db("issues")
    .where({ id })
    .update(changes)
    .then(() => {
      return getBy({ id });
    });
}

function votes(id, number) {
  return db("issues")
    .where({ id })
    .update({ upvotes: knex.raw(`?? + ${number}`, ["upvotes"]) })
    .then(() => {
      return db.select("upvotes").from("issues").where({ id });
    });
}

function remove(id) {
  return db("issues").where({ id }).del();
}
