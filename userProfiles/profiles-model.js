const db = require('../data/dbconfig.js');

module.exports = {
    getBy,
    update
}

function getBy(id){
    return db('user_profiles')
    .where({id})
}

function update(id, changes){
    return db('user_profiles')
    .where({id})
    .update(changes)
    .then(() => {
        return getBy({id})
    })
}