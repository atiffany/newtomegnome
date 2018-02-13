const express = require('express');
const usersBooks = require('./usersBooksControllers');
const usersBooksRouter = express.Router();

usersBooksRouter.post('/', function(req, res) {
    const userBook = req.body;

    usersBooks
        .insert(userBook)
        .then(function(id) {
            res.status(200).json(id);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

usersBooksRouter.get('/', function(req, res) {
    usersBooks
        .get()
        .then(function(usersBooks) {
            res.status(200).json(usersBooks);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

usersBooksRouter.get('/user/:userid/book/:id', function(req, res) {
    const { userid, id } = req.params;
    usersBooks
        .getUsersBooks(userid, id)
        .then(function(user) {
            res.status(200).json(user);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

module.exports = usersBooksRouter;