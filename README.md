# NFC Node API
## _Node API developed as part of the Cashforce company's technical challenge_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/findCarolinaCosta/nfc-node-api)
[![MIT LICENSE](https://camo.githubusercontent.com/c6239caa38945e7693646486b0337744e4bd84d52807a7a1756d596a0e13676a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f65617379626173652f65617379626173652d7265616374)](https://github.com/findCarolinaCosta/nfc-node-api/blob/main/LICENSE)

This application initially has only two route that returns the necessary data for consumption in the project's frontend.

- ✨Memorable ✨

## Features

- GET '/account/nfc';
- API documentation with swagger at '/docs' route;

## Tech Infos

In NFC Node API the following technologies are used::

- [NodeJS](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Bootstrap](https://sequelize.org/) - Sequelize is a modern TypeScript and Node.js ORM.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [SQL](https://www.w3schools.com/sql/sql_intro.asp) SQL is a standard language for accessing and manipulating databases.

## Installation

NFC Node API requires [NPM](https://www.npmjs.com/) v6+ or [YARN](https://yarnpkg.com/) to run.

Make a git clone of the repository.
```
git clone https://github.com/findCarolinaCosta/nfc-node-api.git
```

### Additional configuration
- Create file `.env`;
- Copy data below or data from `.env-example` file and paste into the `.env` file;
- Fill `.env` file with information for data connection, example used with dummy data (mysql):

```
DB_USER=your_user
DB_PASS=your_password
DB=database_name
PORT=3002
HOST=localhost
DB_PORT=port_run_database
```

Install the dependencies and devDependencies and start the server.

Use npm:
```sh
cd nfc-node-api &&
npm install &&
npm start
```

Use yarn:
```sh
cd nfc-node-api &&
yarn &&
yarn start
```

- Open any browser `http://HOST:PORT` (infos defined in `.env` file)

- Delete the .git folder to start with a new history.

## Project report
I hope to have a positive feedback from him, but in any case, it's already part of my portfolio.
- [Database diagram](./assets/data-diagram.png)

## Status report
:waning_gibbous_moon: In progress

## License

MIT
