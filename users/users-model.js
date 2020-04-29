const db = require('../data/dbconfig.js');

module.exports = {
    findAll,
    findBy,
    add,
    update,
    remove
};

function findAll(){
    return db('users')
}

function findBy(filter){
    return db('users')
    .where(filter)
}

function add(user){
    return db('users')
    .returning('id')
    .insert(user)
    .then(([id]) => {
        return findBy({id})
    })
}

function update(userChanges, id){
    return db('users')
    .where({id})
    .update(userChanges)
    .then(() => {
        return db('users')
        .where({id})
    })
}

function remove(id){
    const toBeDeleted = findById(id)
    .then(() => {
        return toBeDeleted;
    })
}
