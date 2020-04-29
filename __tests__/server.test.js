// Import helper functions and constants
const helpers = require("./helpers/testhelpers.js");

// Endpoint Testing Begins
describe("server", () => {
  beforeEach(() => {
    return helpers.setup()
  });

  describe("GET /", () => {
    it("should return 200 as status code", () => {
      return helpers.gets('/')
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe("POST /register", () => {
    it("should return 201 when successful", () => {
        return helpers.registers(helpers.user)
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
    it("should return a web token when successful", () => {
      return helpers.registers(helpers.user)
        .then((res) => {
          expect(res.body.token).toEqual(
            expect.stringMatching(
              /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
            )
          );
        });
    });
    it("should return an error if the user already exists", () => {
      return helpers.registers(helpers.registered)
        .then((res) => {
          expect(res.status).toBe(500);
        });
    });
  });
  describe("POST to /login", () => {
    it("should return 201 status if succesful", () => {
      return helpers.logsIn(helpers.registered)
        .then((res) => {
          expect(res.status).toBe(202);
        });
    });
    it("should return a JSON web token if succesful", () => {
      return helpers.logsIn(helpers.registered)
        .then((res) => {
          expect(res.body.token).toEqual(
            expect.stringMatching(
              /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
            )
          );
        });
    });
    it("should return a message indicated authorization failed when that is the case", () => {
      return helpers.logsIn(helpers.user)
        .then((res) => {
          expect(res.body.message).toEqual("Authentication failed");
        });
    });
  });
  describe("POST to /issues", () => {
    it("should return status 202 if successful", () => {
      return helpers.posts().then((res) => {
        expect(res.status).toBe(201);
      });
    });
    it("should return an object containing the issue", () => {
        return helpers.posts().then((res) => {
            expect(res.body.short_description).toBe("Big Ole Pothole")
        })
    })
    it("should not allow posts without a user_id", () => {
        return helpers.posts({short_description: "Hope this doesn't work"}).then((res) => {
            expect(res.status).toBe(401)
        })
    })
  });
});
