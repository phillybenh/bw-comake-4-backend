# CoMake API

## Read the Docs on Postman:
https://documenter.getpostman.com/view/10960109/SzfDwQQK

### Base URL
https://comake-api.herokuapp.com

## - GET /issues
Returns an array of objects containing all issues. Each object includes an id, short_description, description, zip_code, user_id of the poster, and the number of upvotes.

## - GET /issues/:id
Returns an array containing one object. The object includes an id, short_description, description, zip_code, user_id of the poster, and the number of upvotes.

## - GET /issues?zip_code=12345
Returns an array of objects containing all issues in that zip_code. Each object incldues an id, short_description, description, zip_code, user_id of the poster, and the number of upvotes.

## - GET /issues?user_id=1
Returns an array of objects containing all issues posted by that user. Each object incldues an id, short_description, description, zip_code, user_id of the poster, and the number of upvotes.

## - DELETE /issues/:id
Deletes the indicated issue. Responds with a success message.

## - POST /issues
Requires a request body including short_description and zip_code. Other values optional. Creates a new issue. Responds with an array

## - PUT /issues/:id
Requires a request body including any desired changes to be made to the issue. Returns an array containing one object. The object includes an id, short_description, description, zip_code, user_id of the poster, and the number of upvotes.

## - GET /users/:id
Returns an array containing one object. Object includes the object describing the user's profile, including: id, username, password (hashed), first_name, last_name, zip_code, and bio.

## - PUT /users/:id
Requires a request body including any changes the user wants to make to their bio. Responds with an array containing the newly updated object.

## - POST /users/:id
Requires a request body including any details a new user wants to add to their profile. Responds with an array containing an object with the newly created profile information

## - DEL /users/:id
Removes a user. Responds with a success message

## Authorization Routes

## - POST /login
Requires a username and password. Upon successful login, sends a welcome message along with a JSON Web Token to be stored on the client.

## - POST /register
Requires a username and password. Upon successful login, sends a JSON Web Token to be stored by the client.
Requires a username and password. Upon successful login, sends the new user's information along with a JSON Web Token to be stored by the client.

