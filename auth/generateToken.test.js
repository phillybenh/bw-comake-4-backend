const generateToken = require('./generateToken.js');

describe('generateToken', () => {
    const user = {id: 1, username: 'vader'}
    it('should return a JSON web token when given user information', () => {
        expect(generateToken(user)).toBeTruthy()
    })
    it('should not return any user information', () => {
        expect(generateToken(user)).toEqual(expect.not.stringContaining('vader'))
    } )
    it('should return a string matching the JWT pattern', () => {
        expect(generateToken(user)).toEqual(expect.stringMatching(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/))
        
    })
})