# Generic web app
This is a mockup for eCommerce product page.
## Assumptions
App mockup is structured in such way that core logic and view is separated, and communicates via standarised inner API. This allows for:
* Extending/Use core components without having to think about view 
There's separated directory `src/server/frontEnd/plugins` to keep custom logic from core logic provided by framework separated.
## How to use
Clone a repository, and run `npm run deploy-prod` from `src/server/` in order to build the app, and then `npm start` to run a server locally.
## How to run dev environment
After the repository is cloned run `npm run deploy-dev`. It will prepare the software for the first run. Once it will be finished, run `npm run start-dev`. Once started it'll listen to changes made in files, and automatically transpile the code that you write. It will also serve your changes under port `8081`.

## How to run tests
All below commands should be run from src/server/
* `npm run test-frontend` Runs frontend tests
* `npm run test-frontend-debugger` Runs frontend tests in debugging mode
* `npm run test-frontend-coverage` Checks tests coverage
## Technologies used:
* DB
    * MariaDB
    * Join monster - graphQL to SQL
* Dev tools
    * Webpack
    * Babel
    * Eslint
    * Testing tools
        * Mocha
        * Chai
        * Supertest
        * Sinon
* Frontend
    * Pug
    * SASS
    * Bootstrap
* Web frontend
    * AngularJS
