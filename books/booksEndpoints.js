const express = require('express');
const books = require('./booksControllers.js');
const booksRouter = express.Router();

booksRouter.post('/', function(req, res) {
    const book = req.body;

    books
        .insert(book)
        .then(function(id) {
            res.status(201).json(id);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});
