const express = require('express');
const bodyParser = require('body-parser');

const usersEndpoints = require('./users/usersEndpoints.js');
const booksEndpoints = require('./books/booksEndpoints.js');
const usersBooksEndpoints = require('./usersBooks/usersBooksEndpoints');

const server = express();
server.use(bodyParser.json());

server.use('/api/users', usersEndpoints);
server.use('/api/books', booksEndpoints);
server.use('/api/usersBooks', usersBooksEndpoints);

server.listen(3000, () => console.log('Running on port 3000'));