module.exports = function() {
    
    var port    = process.env.PORT || '3000',
        host    = process.env.HOST || 'http://localhost';
    
    return {
        port: port,
        host: host,
        appUri: host + ':' + port + '/'
    };
    
}