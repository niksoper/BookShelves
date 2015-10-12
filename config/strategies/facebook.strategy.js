var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function() {
    passport.use(new FacebookStrategy({
        clientID: '1061486637218112',
        clientSecret: 'ede76a4c89c1805834e9500bc355d328',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true
    },
   function(req, accessToken, refreshToken, profile, done) {
        var user = {};

        console.log(profile);
        
        //user.email = profile.emails[0].value;
        //user.image = profile._json.image.url;
        user.displayName = profile.displayName;

        user.facebook = {};
        user.facebook.id = profile.id;
        user.facebook.token = accessToken;

        done(null, user);
    }))
};