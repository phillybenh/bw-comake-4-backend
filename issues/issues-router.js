// Imports
const router = require("express").Router();
const Issues = require("./issues-model.js");

// Get issues by user ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Issues.getBy({ id })
    .then((issue) => {
      // Check that issue(s) were returned
      if (issue) {
        res.status(200).json(issue);
      } else {
        res.status(404).json({ error: "No issues available at this resourse" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
// Edit an issue
router.put("/:id", (req, res) => {
  // Check to see if the edit is an upvote
  if (req.body.value) {
    // If the edit is an upvote, pass it to the votes helper
    Issues.votes(req.params.id, req.body.value)
      .then(([votes]) => {
        res.status(200).json(votes);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
    //Check if it's an actual issue edit, send it to the update helper
  } else if (req.body.user_id && req.body.short_description) {
    Issues.update(req.params.id, req.body)
      .then((issue) => {
        res.status(202).json(issue);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
    // Return an error if there's is no adequate object in the request
  } else {
    res
      .status(401)
      .json({ error: "Must include a user ID and short description" });
  }
});
// Get a an array of all issues
router.get("/", (req, res) => {
  // Check for a zip_code query
  if (req.query.zip_code) {
    Issues.getBy({ zip_code: req.query.zip_code })
      .then((issues) => {
        if (issues.length !== 0) {
          res.status(200).json(issues);
        } else {
          res.status(404).json({ errorMessage: "No issues by that user" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
    // Check for a user_id query
  } else if (req.query.user_id) {
    Issues.getBy({ user_id: req.query.user_id })
      .then((issues) => {
        if (issues.length !== 0) {
          res.status(200).json(issues);
        } else {
          res.status(404).json({ errorMessage: "No issues by that user" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
    // Get all issues if no queries
  } else {
    Issues.get()
      .then((issues) => {
        res.status(200).json(issues);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
});

// Post a new issue
router.post("/", (req, res) => {
  // Check that an adequate object was posted
  if (req.body.short_description && req.body.user_id) {
    // Insert the post to the database
    Issues.insert(req.body)
      .then(([issue]) => {
        console.log(issue)
        res.status(201).json(issue);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    res
      .status(400)
      .json({ error: "Must include short description and user_id" });
  }
});

// Delete an issue
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Issues.remove(id)
    .then((result) => {
      if (result) {
        res.status(200).json(message);
      } else {
        res
          .status(401)
          .json({ errorMessage: "No item exists at this location" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
