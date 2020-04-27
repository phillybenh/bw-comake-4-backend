const router = require('express').Router();
const Issues = require('./issues-model.js')

router.get('/', (req, res) => {
    if(req.query.zip_code){
        Issues.getBy({zip_code: req.query.zip_code})
        .then(issues => {
            res.status(200).json(issues)
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    } else {
        Issues.getBy({user_id: req.query.user_id})
        .then(issues => {
            res.status(200).json(issues)
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    }
})

router.get('/:id', (req, res) => {
    Issues.getBy(req.params.id)
    .then(issue => {
        res.status(200).json(issue)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {
    Issues.insert(req.body)
    .then(issue => {
        res.status(201).json(issue)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.put('/:id', (req, res) => {
    Issues.update(req.params.id, req.body)
    .then(issue => {
        res.status(202).json(issue)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router;