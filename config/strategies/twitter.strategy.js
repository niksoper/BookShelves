var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function() {
    passport.use(new TwitterStrategy({
            consumerKey: 'z8KU6pOb51R8SzdZ3rNbY0eFR',
            consumerSecret: 'LFgfpVdt0BLotmCg3ckwtZ1MJ8pY80p6BqUh5NM7L9V4Qa1cVl',
            callbackURL: 'http://localhost:3000/auth/twitter/callback',
            passReqToCallback: true
        },
        function(req, token, tokenSecret, profile, done) {
            var user = {};
        
            //user.email = profile.emails[0].value;
            user.image = profile._json.profile_image_url;
        console.log(user.image);
            user.displayName = profile.displayName;
        
            user.twitter = {};
            user.twitter.id = profile.id;
            user.twitter.token = token;
        
            done(null, user);
        }));
};