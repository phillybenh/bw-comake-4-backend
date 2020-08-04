# COMAKE Redeploy
[Comake-Remake](https://comake-remake.herokuapp.com)
 In an effort to get my portfolio in order and keep the projects updated, I'm redeploying this backend that was originally created by [Sara Reidy](https://github.com/reidysj). 

 This backend originally was for a Lambda School build week group project. 
 [Original Project Repo](https://github.com/bw-comake-4)


# Original README
# CoMake Backend

This is the backend for the Co-make web application. Relevant links and deployments include:

- Marketing Landing Page:
  - Repo: https://github.com/bw-comake-4/ui
  - Deployed: TBD
- Web Application Page:
  - Repo: https://github.com/bw-comake-4/frontend
  - Deployed: https://frontend-theta-tawny.now.sh
- Backend:
  - Repo: https://github.com/bw-comake-4/backend
  - Base URL: https://comake-api.herokuapp.com

### Read the API Docs on Postman:

https://documenter.getpostman.com/view/10960109/SzmY7LsK

### Base URL

https://comake-api.herokuapp.com

## Using This Repo Locally For Development

This repo can easily be run locally using Node:

### Prerequisites

Node

### Installing

1. In the root directory of this repo, install all Node package dependencies:

`npm install`

2. Install nodemon, express, sqlite3, knex, cors, helmet, bcryptjs, jsonwebtoken, and pg with one simple command:

`npm run modules`

3. Spin up the database:

`knex migrate:latest`

4. Check out your new database tables in SQLite Studio or a similar program.

5. Run the server locally:

`npm run server`

### Testing

To run the tests:

`npm run test`

#### Test Information

- Testing Framework: Jest
- Test command:

`npm run test`

### Deployment

To deploy to Heroku:

1. Push and merge any changes to your repo.
2. Log into Heroku and authorize with Github.
3. Create a new project and link your repo to the project.
4. In the 'resources tab' add Heroku Postgres as a database.
5. In settings, update config vars to use production as DB_ENV
6. Deploy the web application.
7. Open the Heroku CLI either on the website or on your own terminal.
8. Migrate the database table:

`knex migrate:latest`

9. Seed the database table:

`knex seed:run`
