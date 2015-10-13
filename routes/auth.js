var express = require('express');
var passport = require('passport');
var router = express.Router();

router.route('/goodreads/callback')
    .get(passport.authenticate(
        'goodreads', 
        {
            failureRedirect: '/error/'
        }),
        function(req, res) {
            res.redirect('/home');
        });

router.route('/goodreads')
    .get(passport.authenticate('goodreads'));


module.exports = router;