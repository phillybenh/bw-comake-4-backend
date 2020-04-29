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
    } else if(req.query.user_id) {
        Issues.getBy({user_id: req.query.user_id})
        .then(issues => {
            res.status(200).json(issues)
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    } else {
        Issues.get()
        .then(issues => {
            res.status(200).json(issues)
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    }
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Issues.getBy({id})
    .then(issue => {
        if(issue){
            res.status(200).json(issue)
        }else{
            res.status(404).json({error: 'No issues available at this resourse'})
        }
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {
    Issues.insert(req.body)
    .then(([issue]) => {
        if(issue){
            res.status(201).json(issue)
        }else{
            res.status(400).json({error: 'Issue is missing necessary parameters'})
        }
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.put('/:id', (req, res) => {
    if(req.body.value){
        Issues.votes(req.params.id, req.body.value )
        .then(([votes]) => {
            res.status(200).json(votes)
        })
        .catch(err => {
            console.log(req.params.id)
            res.status(500).json({error: err.message})
        })
    } else {
        Issues.update(req.params.id, req.body)
        .then(issue => {
            res.status(202).json(issue)
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Issues.remove(id)
    .then(message => {
        res.status(200).json(message)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})


module.exports = router;