const router = require('express').Router();
const Profiles = require('./profiles-model.js')


router.get('/:id', (req, res) => {
    const id = req.params.id
    Profiles.getBy({id})
    .then(profile => {
        if(profile){
            res.status(200).json(profile[0])
        }else{
            res.status(404).status({error: 'No resource profile found at that ID'})
        }  
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {
    if(req.body){
        Profiles.insert(req.body)
        .then(profile => {
            res.status(201).json(profile)
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    }else{
        res.status(400).json({error: 'The request must have a body with the object to post'})
    }
})

router.put('/:id', (req, res) => {
    if(req.params.id && req.body){
        Profiles.update(req.params.id, req.body)
        .then(profile => {
            res.status(202).json(profile)
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    }else{
        res.status(400).json({error: 'The request must include a body with the object being changed and the ID of the profile to change'})
    }

})

router.delete('/:id', (req, res) => {
    Profiles.remove(req.params.id)
    .then(message => {
        res.status(200).json(message)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

module.exports = router;