# backend
Backend Unit 4 Team

## Getting Started With This File System
1. This repo has been boilerplated out for ease of development going forward.
2. To get started, first install dependencies using `npm install`
3. Then, use `npm run modules` to install: 
    1. nodemon 
    2. express 
    3. sqlite3 
    4. knex 
    5. cors 
    6. helmet 
    7. bcryptjs 
    8. jsonwebtoken 
    9. pg
    10. dotenv
4. Set any desired environment variables by creating a .env file and adding any variables. (***optional***)
5. `npm run server` to get the server running locally

## File System Design
- ./api contains a path to the .env secrets variable // defaults to 'Shhh'
- ./auth is where the auth-router with login and registration, and the authenticator should be placed
- ./data contains the dbconfig.js file, migration folder, seeds folder, and database file (.db3)
- ./issues will contain the issues-model and the issues-router
- ./userProfiles will contain the user-profiles-model and the user-profiles-router
- ./users will contain the users-model

## Notes
- creating a .env file is probably not necessary. Everything that relies on it has a fallback
- keeping the users model in the users folder instead of elsewhere should help in case of changes to the features of the app (maybe a list of users could be pulled up for stretch -- that would make it nice to have an users-router, and having the users folder will keep that potentially more organized)
