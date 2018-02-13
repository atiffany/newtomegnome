const express = require('express');
const bodyParser = require('body-parser');

const usersEndpoints = require('./backend/users/usersEndpoints.js');
const booksEndpoints = require('./backend/books/booksEndpoints.js');
const usersBooksEndpoints = require('./backend/usersBooks/usersBooksEndpoints');

const server = express();
server.use(bodyParser.json());

server.use('/api/users', usersEndpoints);
server.use('/api/books', booksEndpoints);
server.use('/api/usersBooks', usersBooksEndpoints);

server.listen(3030, () => console.log('Running on port 3030'));