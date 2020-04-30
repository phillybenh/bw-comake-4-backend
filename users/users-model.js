const db = require("../data/dbconfig.js");

module.exports = {
  getAll,
  getBy,
  insert,
  update,
  remove,
};

function getAll() {
  return db("users");
}

function getBy(filter) {
  return db("users").first().where(filter);
}

function insert(user) {
  return db("users")
    .returning("id")
    .insert(user)
    .then(([id]) => {
      return getBy({ id });
    });
}

function update(changes, id) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(out => {
      console.log(out)
      return getBy({ id });
    });
}

function remove(id) {
  return db("users").where({ id }).del();
}
