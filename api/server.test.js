const request = require('supertest');

const server = require('./server.js');
const db = require('../data/dbconfig.js');

describe('server', () => {
    describe('GET /', () => {
        it('should return 200 as status code', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
    })
    describe('POST /register', () => {
        beforeEach(async () => {
            await db('users').truncate();
        })
        it('should return 201 when successful', () => {
            return request(server)
            .post('/register')
            .send({username: 'tester1', password: 'tester1'})
            .then(res => {
                expect(res.status).toBe(201)
            })
        })
    })
})