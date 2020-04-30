// Import helper functions and constants
const helpers = require("./helpers/testhelpers.js");

// Endpoint Testing Begins
describe("server", () => {
  beforeEach(() => {
    return helpers.setup();
  });
  // GET to root endpoint works
  describe("GET /", () => {
    it("should return 200 as status code", () => {
      return helpers.gets("/").then((res) => {
        expect(res.status).toBe(200);
      });
    });
  });
  // POST to register
  describe("POST /register", () => {
    // Success situations
    it("should return 201 when successful", () => {
      return helpers.registers(helpers.user).then((res) => {
        expect(res.status).toBe(201);
      });
    });
    it("should return a web token when successful", () => {
      return helpers.registers(helpers.user).then((res) => {
        expect(res.body.token).toEqual(
          expect.stringMatching(
            /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
          )
        );
      });
    });
    // Error situations
    it("should return an error if the user already exists", () => {
      return helpers.registers(helpers.registered).then((res) => {
        expect(res.status).toBe(500);
      });
    });
  });
  // POST to /login
  describe("POST to /login", () => {
    // Success situations
    it("should return 201 status if succesful", () => {
      return helpers.logsIn(helpers.registered).then((res) => {
        expect(res.status).toBe(202);
      });
    });
    it("should return a JSON web token if succesful", () => {
      return helpers.logsIn(helpers.registered).then((res) => {
        expect(res.body.token).toEqual(
          expect.stringMatching(
            /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
          )
        );
      });
    });
    // Error situations
    it("should return a message indicated authorization failed when that is the case", () => {
      return helpers.logsIn(helpers.user).then((res) => {
        expect(res.body.message).toEqual("Authentication failed");
      });
    });
  });
  // POST to /issues
  describe("POST to /issues", () => {
    // Success situations
    it("should return status 202 if successful", () => {
      return helpers.posts().then((res) => {
        expect(res.status).toBe(201);
      });
    });
    it("should return an object containing the issue", () => {
      return helpers.posts().then((res) => {
        expect(res.body.short_description).toBe("Big Ole Pothole");
      });
    });
    // Error situations
    it("should not allow posts without a user_id", () => {
      return helpers
        .posts({ short_description: "Hope this doesn't work" })
        .then((res) => {
          expect(res.status).toBe(400);
        });
    });
    it("should not allow posts without a short_description", () => {
      return helpers.posts({ user_id: 1 }).then((res) => {
        expect(res.status).toBe(400);
      });
    });
  });
  describe("GET to issues", () => {
    it("should not allow unregistered users access, giving a 401 status code ", () => {
      return helpers.gets('/issues').then((res) => {
        expect(res.status).toBe(401)
      })
    })
    it("should respond with an error message if the user is not logged in", () => {
      return helpers.gets('/issues').then((res) => {
        expect(res.body).toHaveProperty("errorMessage", 'Must provide credentials')
      })
    })
    it("should return a status code of 200 if the user is logged in", () => {
      return helpers.getsWithAuth('/issues').then(res => {
        expect(res.status).toBe(200)
      })
    })
    it("should return a list of all issues", () => {
      return helpers.getsWithAuth('/issues').then(res => {
        expect(res.body.length).toBeTruthy()
      })
    })
  })
  describe("GET to issues?user_id=1", () => {
    it("should return a status code of 200", () => {
      return helpers.getsWithAuth('/issues?user_id=1').then(res => {
        expect(res.status).toBe(200)
      })
    })
    it("should return issues associated with the user ID", () => {
      return helpers.getsWithAuth('/issues?user_id=1').then(res => {
        res.body.map(issue => {
          expect(issue).toHaveProperty('user_id', 1)
        })
      })
    })
    it('should return a status code of 400 if there\'s no such user', () => {
      return helpers.getsWithAuth('/issues?user_id=100').then(res => {
        expect(res.status).toBe(404)
      })
    })
  })
  describe("GET to issues?zip_code=12345", () => {
    it("should return a status code of 200", () => {
      return helpers.getsWithAuth('/issues/zip_code=12345', () => {
        expect(res.status).toBe(200)
      })
    })
    it("should return issues associated with the zipcode", () => {
      return helpers.getsWithAuth('/issues?zip_code=12345').then(res => {
        res.body.map(issue => {
          expect(issue).toHaveProperty('zip_code', 12345)
        })
      })
    })
    it('should return a status code of 400 if there\'s no such user', () => {
      return helpers.getsWithAuth('/issues?user_id=100').then(res => {
        expect(res.status).toBe(404)
      })
    })
  })
});
