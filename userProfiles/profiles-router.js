const router = require('express').Router();
const Profiles = require('./profiles-model.js')


router.get('/:id', (req, res) => {
    const id = req.params.id
    Profiles.getBy({id})
    .then(profile => {
        res.status(200).json(profile)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})


router.post('/', (req, res) => {
    Profiles.insert(req.body)
    .then(profile => {
        res.status(201).json(profile)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.put('/:id', (req, res) => {
    Profiles.update(req.params.id, req.body)
    .then(profile => {
        res.status(202).json(profile)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.delete('/:id', (req, res) => {
    Profiles.remove(req.params.id)
    .then(message => {
        res.status(200).json(message)
    })
})

module.exports = router;