const db = require('../data/dbconfig.js');
const knexfile = require('../knexfile')

const environment = process.env.DB_ENV || 'development';
const knex = require('knex')(knexfile[environment])

module.exports = {
    get,
    getBy,
    insert,
    update,
    votes,
    remove
}

function get(){
    return db('issues')
}

function getBy(filter){
    return db('issues')
    .where(filter)
    .then(issues => {
        if(issues.length !== 0){
            return issues
        } else {
            return {errorMessage: 'No issue with that ID'}
        }
    })
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

function votes(id, number){
    return db('issues')
    .where({id})
    // .update({upvotes: knex.raw('?? + 1', ['upvotes'])})
    .update({upvotes: knex.raw(`?? + ${number}`, ['upvotes'])})
    .then(() =>{
        return db.select('upvotes').from('issues').where({id})
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