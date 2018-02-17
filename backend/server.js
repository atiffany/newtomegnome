const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const usersEndpoints = require('./users/usersEndpoints.js');
const booksEndpoints = require('./books/booksEndpoints.js');
const usersBooksEndpoints = require('./usersBooks/usersBooksEndpoints');

const server = express();
server.use(bodyParser.json());
server.use(cors());

server.use('/api/users', usersEndpoints);
server.use('/api/books', booksEndpoints);
server.use('/api/usersBooks', usersBooksEndpoints);

server.listen(3030, () => console.log('Running on port 3030'));