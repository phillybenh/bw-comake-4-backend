const generateToken = require('./generateToken.js');

describe('generateToken', () => {
    it('should return a JSON web token when given user information', () => {
        expect(generateToken({id: 1, username: 'vader'})).toBeTruthy()
    })
    it('should not return any user information', () => {
        expect(generateToken({id:1, username: 'vader'})).toEqual(expect.not.stringContaining('vader'))
    } )
})