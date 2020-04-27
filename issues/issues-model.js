const db = require('../data/dbconfig.js');

module.exports = {
    get,
    getBy,
    insert,
    update
}

function get(){
    return db('issues')
}

function getBy(filter){
    return db('issues')
    .where(filter)
}

function insert(issue){
    return db('issues')
    .insert(issue)
    .then(id => {
        return getBy({id: id[0]})
    })
}

function update(id, changes){
    return db('issues')
    .where({id})
    .update(changes)
    .then(() => {
        return getBy({id})
    })
}