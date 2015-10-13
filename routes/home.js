var express = require('express');
var router = express.Router();


router.use('/', function(req, res, next) {
    if (!req.user) {
        res.redirect('/sign-in');
    }
    next();
});


/* GET users listing. */
router.get('/', function(req, res, next) {
    
    var vm = { 
        user: { 
            name: req.user.displayName
        }
    };
    
    res.render('home', vm);
});

module.exports = router;
