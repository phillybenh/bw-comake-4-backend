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

function findBy(id){
    return db('users')
    .where({id})
    

}
function add(user){
    return db('users')
    .insert(user)
    .then(([id]) => {
        console.log('iiiiii', id)
        return findBy(id)
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
        console.log(toBeDeleted)
        return toBeDeleted;
    })
}
