var express = require('express');
var router = express.Router();


//router.use('/', function(req, res, next) {
//    if (!req.user) {
//        res.redirect('/');
//    }
//    next();
//});


/* GET users listing. */
router.get('/', function(req, res, next) {
    
    var name = req.user && req.user.displayName ? req.user.displayName : 'Not signed in';
    
    var vm = { 
        user: { 
            name: name
        }
    };
    
    res.render('home', vm);
});

module.exports = router;
