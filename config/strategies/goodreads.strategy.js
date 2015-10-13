var passport = require('passport');
var GoodreadsStrategy = require('passport-goodreads').Strategy;

var callbackURL = process.env.AUTH_CALLBACK || 'http://localhost:3000/auth/goodreads/callback';

module.exports = function() {
    passport.use(new GoodreadsStrategy({
            consumerKey: 'WvWkXt3OWkMbEpxNGnAGEA',
            consumerSecret: 'ml9PqlyrJ8nm0KhcYt9Mmcl1A34aQY3o6CBoHbW7Y',
            callbackURL: callbackURL
        },
        function(token, tokenSecret, profile, done) {
        
            var user = {};
        
            //user.email = profile.emails[0].value;
            //user.image = profile._json.image.url;
            user.displayName = profile.displayName;
        
            user.goodreads = {};
            user.goodreads.id = profile.id;
            user.goodreads.token = token;
        
            done(null, user);
        }
    ));
};