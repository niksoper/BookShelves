var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function() {
    passport.use(new GoogleStrategy({
            clientID: '964761267742-eh17injtd5ke98tig0pi94g0uhr3fs1s.apps.googleusercontent.com',
            clientSecret: 'jL8iuZ9N6-yfIB1DW86-ebIM',
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        function(req, accessToken, refreshToken, profile, done) {
            var user = {};
        
            user.email = profile.emails[0].value;
            user.image = profile._json.image.url;
            user.displayName = profile.displayName;
        
            user.google = {};
            user.google.id = profile.id;
            user.google.token = accessToken;
        
            done(null, user);
        }
    ));
};