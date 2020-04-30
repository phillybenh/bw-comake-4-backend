// Imports
const db = require('../data/dbconfig.js');
const knexfile = require('../knexfile')
// Use env, knexfile to use knex.raw
const environment = process.env.DB_ENV || 'development';
const knex = require('knex')(knexfile[environment])

// Exports
module.exports = {
  get,
  getBy,
  add,
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
}

// function add(issue) {
//   return db("issues")
//     .insert(issue)
//     .returning("short_description")
//     .then(([short_description]) => {
//       return getBy({ short_description });
//     });
// }

function add(issue) {
  return db("issues")
    .insert(issue)
    .then(() => {
      return get()
    })
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
