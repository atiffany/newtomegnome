const express = require('express');
const authRouter = express.Router();
const passport = require('passport');

//auth login
authRouter.get('/login', (req, res) => {
    res.render('login');
});

//auth logout
authRouter.get('/logout', (req, res) => {
   // handle with passport
    res.send('logging out');
});

// auth with google
authRouter.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

module.exports = authRouter;