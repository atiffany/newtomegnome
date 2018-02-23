const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');

passport.use(new GoogleStrategy({
    // options for the google strategy
    callbackURL: 'http://localhost:3000/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    console.log('heyyyy');
})
)