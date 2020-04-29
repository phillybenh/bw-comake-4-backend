// Imports
const db = require("../../data/dbconfig.js");
const bcrypt = require("bcryptjs");
const request = require("supertest");
const server = require("../../api/server.js");

// Constants
const user = { username: "tester11", password: "tester1" };
const registered = { username: "registered", password: "registered" };
const post = {
  short_description: "Big Ole Pothole",
  zip_code: 12345,
  user_id: 1,
};

// Functions
function gets(path) {
  return request(server).get(path);
}

function registers(person) {
  return request(server).post("/register").send(person);
}

function logsIn(person) {
  return request(server).post("/login").send(person);
}

function posts(badPost) {
  return request(server)
    .post("/login")
    .send(registered)
    .then((res) => {
      return request(server)
        .post("/issues")
        .set("Authorization", res.body.token)
        .send(badPost || post);
    });
}

function setup() {
  return db("users")
    .truncate()
    .then(() => {
      return db("users").insert({
        username: registered.username,
        password: bcrypt.hashSync(registered.password, 12),
      });
    });
}

// Exports
module.exports = {
  user,
  registered,
  post,
  posts,
  setup,
  gets,
  registers,
  logsIn,
};
