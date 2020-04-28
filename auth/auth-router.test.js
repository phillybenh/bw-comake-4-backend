const request = require('supertest');

const authRouter = require('./auth-router.js');
const db = require('../data/dbconfig.js');

describe('auth router', () => {
    describe('POST /register ', () => {
        it('should return status code 201', () => {
            return request(authRouter)
            .post('/register') 
            .send({username: 'tester', password: 'tester'})
            .then(res => {
                expect(res.status).toBe(201);
            })
        })
    })
})