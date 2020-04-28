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
        const user = {username: 'tester11', password: 'tester1'}
        it('should return 201 when successful', () => {
            return request(server)
            .post('/register')
            .send(user)
            .then(res => {
                expect(res.status).toBe(201)
            })
        })
        it('should return a web token when successful', () => {
            return request(server)
            .post('/register')
            .send(user)
            .then(res => {
                expect(res.body.token).toEqual(expect.stringMatching(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/))
            })
        })
        it('should return an error if the user already exists', () => {
            return request(server)
            .post('/register')
            .send(user)
            .then(() => {
                return request(server)
                .post('/register')
                .send(user)
                .then(res => {
                    expect(res.status).toBe(500)
                })
            })
        })
    })
})