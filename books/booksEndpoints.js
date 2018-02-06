const express = require('express');
const books = require('./booksControllers');
const booksRouter = express.Router();

booksRouter.post('/', function(req, res) {
    // const { userId } = req.params;
    const book = req.body
    books
        .insertBook(book)
        .then(function(bookId) {
            res.status(201).json(bookId);
            //const bookId = bookId;
        })
        //.insertUserBook(userId, bookId)
        .catch(function(error) {
            res.status(500).json(error);
        });
});

booksRouter.get('/', function(req, res) {
    books
        .get()
        .then(function(books) {
            res.status(200).json(books);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

booksRouter.get('/:id', function(req, res) {
    const { id } = req.params;
    books
        .get(id)
        .then(function(books) {
            if(user) {
                res.status(200).json(books);
            } else {
                res.status(404).json(null);
            }
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

//fix this nasty mess
booksRouter.get('/:id/books', function(req, res) {
    const { id } = req.params;
    books
        .getUsersBooks(id)
        .then(function(books) {
            res.status(200).json(books);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

booksRouter.put('/:id', function(req, res) {
    const { id } = req.params;
    books
        .update(id, req.body)
        .then(function(count) {
            if (count > 0) {
                res.status(200).json({ updated: count });
            } else {
                res.status(404).json(null);
            }
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

booksRouter.delete('/:id', function(req, res) {
    const { id } = req.params;
    books  
        .remove(id)
        .then(function(count) {
            res.status(200).json({ count });
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

module.exports = booksRouter;