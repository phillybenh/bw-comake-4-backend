const router = require('express').Router();
const Profiles = require('./profiles-model.js')


router.get('/:id', (req, res) => {
    Profiles.getBy(req.params.id)
    .then(profile => {
        res.status(200).json(profile)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router;