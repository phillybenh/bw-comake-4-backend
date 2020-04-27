const db = require('../data/dbconfig.js');

module.exports = {
    getBy,
    update,
    insert, 
    remove
}

function getBy(filter){
    return db('user_profiles')
    .where(filter)
}


function update(id, changes){
    return db('user_profiles')
    .where({id})
    .update(changes)
    .then(() => {
        return getBy({id})
    })
}

function insert(profile){
    return db('user_profiles')
    .insert(profile)
    .then(id => {
        return getBy({id: id[0]})
    })
}

function remove(id){
    return db('issues')
    .where({id})
    .del()
    .then(number => {
        console.log(number)
        if(number){
            return {message: 'Success'}
        } else{
            return {message: 'Failure'}
        }
    })
}