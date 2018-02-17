const express = require('express');
const users = require('./usersController');
const userRouter = express.Router();

userRouter.post('/', function(req, res) {
    const user = req.body;
    users
        .insert(user)
        .then(function(res) {
            res.status(201).json(res);
            console.log('done');
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

userRouter.get('/', function(req, res) {
    users
        .get()
        .then(function(users) {
            res.status(200).json(users);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

userRouter.get('/:id', function(req, res) {
    const { id } = req.params;
    users
        .get(id)
        .then(function(user) {
            if(user) {
                res.status(200).json(user);
            } else {
                res.status(404).json(null);
            }
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

userRouter.get('/:id/books', function(req, res) {
    const { id } = req.params;
    users
        .getUsersBooks(id)
        .then(function(books) {
            res.status(200).json(books);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

userRouter.put('/:id', function(req, res) {
    const { id } = req.params;
    users
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

userRouter.delete('/:id', function(req, res) {
    const { id } = req.params;
    users  
        .remove(id)
        .then(function(count) {
            res.status(200).json({ count });
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

module.exports = userRouter;