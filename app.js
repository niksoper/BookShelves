var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var router = express.Router();
router.route('/shelves/to-read')
    .get(function(req, res) {
        var books = [{
            title: 'Title 1',
            author: 'Alan'
        }, {
            title: 'Horse land',
            author: 'Horse'
        }, {
            title: 'Book 3',
            author: 'Writer'
        }]
        
        res.json(books);
    });

app.use('/api', router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

