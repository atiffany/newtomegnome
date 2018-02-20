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

usersBooksRouter.get('/:userid', function(req, res) {
    const { userid } = req.params;
    usersBooks
        .getUsersBooks(userid)
        .then(function(title) {
            res.status(200).json(title)
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

module.exports = usersBooksRouter;