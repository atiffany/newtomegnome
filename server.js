const express = require('express');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.json());

server.listen(3000, () => console.log('Running on port 3000'));