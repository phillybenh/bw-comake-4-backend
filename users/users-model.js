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
    .insert(user)
    .then(id => {
        return db('users')
        .where({id: id[0]})
        .first()
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
