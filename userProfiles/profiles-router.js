// Imports
const router = require("express").Router();
const Users = require("../users/users-model.js");

// Get a specific user's info
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Users.getBy({ id })
    .then((profile) => {
      // Check that there's a profile
      if (profile !== undefined) {
        console.log(profile);
        res.status(200).json(profile);
        // Return an error if there's no profile
      } else {
        res.status(404).json({ error: "No resource profile found at that ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Create a new profile
router.post("/", (req, res) => {
  // Check for a valid post
  if (req.body) {
    // Add the profile to the table
    Users.insert(req.body, req.body.id)
      .then((profile) => {
        // Send the new profile back
        res.status(201).json(profile);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    // Send an error message back if the right payload wasn't passed
    res
      .status(400)
      .json({ error: "The request must have a body with the object to post" });
  }
});

// Update a profile
router.put("/:id", (req, res) => {
  // Check for id and proper updates
  if (req.params.id && req.body) {
    Users.update(req.body, req.params.id)
      .then((profile) => {
        // Send the updated profile back
        res.status(202).json(profile);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    // Send an error message back if the right payload wasn't passed
    res.status(400).json({
      error:
        "The request must include a body with the object being changed and the ID of the profile to change",
    });
  }
});

// Remove a user
router.delete("/:id", (req, res) => {
  Users.remove(req.params.id)
    .then((result) => {
      // Check if the removal was succesful
      if (result) {
        res.status(200).json({ message: "Successfully deleted!" });
      } else {
        res.status(404).json({ message: "No user with that ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
