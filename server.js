const express = require('express');
const bodyParser = require('body-parser');

const usersEndpoints = require('./src/users/usersEndpoints.js');

const server = express();
server.use(bodyParser.json());

server.use('/api/users', usersEndpoints);

server.listen(3000, () => console.log('Running on port 3000'));