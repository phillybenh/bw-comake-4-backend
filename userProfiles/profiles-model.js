const db = require('../data/dbconfig.js');

module.exports = {
    getBy,
    update,
    insert, 
    remove
}

function getBy(filter){
    return db('users')
    .where(filter)
}


function update(id, changes){
    return db('users')
    .where({id})
    .update(changes)
    .then(() => {
        return getBy({id})
    })
}

function insert(profile){
    return db('users')
    .insert(profile)
    .then(id => {
        return getBy({id: id[0]})
    })
}

function remove(id){
    return db('users')
    .where({id})
    .del()
    .then(number => {
        if(number){
            return {message: 'Success'}
        } else{
            return {message: 'Failure'}
        }
    })
}