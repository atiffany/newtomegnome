const express = require('express');
const books = require('./booksControllers');
const booksRouter = express.Router();

booksRouter.post('/:userId', function(req, res) {
    const { userId } = req.params;
    const book = req.body;
    books
        .insertBook(book)
        .then(function(id) {
            res.status(201).json(id);
            const bookID = id['id'][0];
            const userBook = { userid: userId, bookid: bookID };
            usersBooks
                .insert(userBook)
                .then(function(id) {
                    res.status(200).json(id);
                })
                .catch(function(error) {
                    res.status(500).json(error);
                });
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

booksRouter.get('/all', function(req, res) {
    books
        .get()
        .then(function(books) {
            res.status(200).json(books);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});
//new and working?
booksRouter.get('/:userId', function(req, res) {
    const { userId } = req.params;
    books
        .getUsersBooks(userId)
        .then(function(books) {
            res.status(200).json(books);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});
booksRouter.get('/user/:username', function(req, res) {
    const { username } = req.params;
    books
        .getUsersBooksWithUsername()
        .then(function(books) {
            res.status(200).json(books);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
})

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