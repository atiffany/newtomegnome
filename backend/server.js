const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

const passportSetup = require('./oauth/config/passport-setup.js');

const authEndpoints = require('./oauth/routes/auth-routes.js');
const usersEndpoints = require('./users/usersEndpoints.js');
const booksEndpoints = require('./books/booksEndpoints.js');
const usersBooksEndpoints = require('./usersBooks/usersBooksEndpoints');

const server = express();
server.use(bodyParser.json());
server.use(cors(corsOptions));

server.use('/auth', authEndpoints);
server.use('/api/users', usersEndpoints);
server.use('/api/books', booksEndpoints);
server.use('/api/usersBooks', usersBooksEndpoints);

server.listen(3030, () => console.log('Running on port 3030'));