const express = require('express');
const users = require('./usersController');
const userRouter = express.Router();

userRouter.post('/', function(req, res) {
    const user = req.body;
    users
        .insert(user)
        .then(function(id) {
            res.status(201).json(id);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
});

userRouter.get('/all', function(req, res) {
    users
        .get()
        .then(function(users) {
            res.status(200).json(users);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
});

userRouter.get('/user/:username', function(req, res) {
    const { username } = req.params;
    console.log(username);
    users
        .getUser(username)
        .then(function(user) {
            if(user) {
                res.status(200).json(user);
            }
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