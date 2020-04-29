const request = require('supertest');
const bcrypt = require('bcryptjs');
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
        const user = {username: 'tester11', password: 'tester1'}
        const registered = {username: 'registered', password: 'registered'}
        beforeEach(() => {
            return db('users').truncate().then(() => {
                return db('users').insert({username:registered.username, password: bcrypt.hashSync(registered.password, 12)})
            })
        })
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
                .send(registered)
                .then(res => {
                    expect(res.status).toBe(500)
                })
            })
        describe('POST to /login', () => {
            it('should return 201 status if succesful', () => {
                    return request(server)
                    .post('/login')
                    .send(registered)
                    .then(res => {
                        expect(res.status).toBe(202)
                    })
            })
            it('should return a JSON web token if succesful', () => {
                return request(server)
                .post('/login')
                .send(registered)
                .then(res => {
                    expect(res.body.token).toEqual(expect.stringMatching(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/))
                })
            })
            it('should return a message indicated authorization failed when that is the case', () => {
                return request(server)
                .post('/login')
                .send(user)
                .then(res => {
                    expect(res.body.message).toEqual("Authentication failed")
                })
            })
        })
        describe('POST to /issues', () => {
            it('should return status 202 if successful', () => {
                return request(server)
                .send(registered)
                .then(res => {
                    return request(server)
                    .post('/')
                })
            })
        })
    })
})