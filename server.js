var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var expressApplication = express();

expressApplication.set('views', __dirname + '/server/views');
expressApplication.set('view engine', 'jade');

//Create Route To Deliver Index Page
expressApplication.get('*', function(req, res){
    res.render('index');
});
// will match all requests, done such that Angular routing service will
// be reponsible for the routing. Otherwiese I would have to match these
// on both the server side and client side.

var port = '8091';
expressApplication.listen(port);
console.log('Listening on port ' + port + '...');

/*
The following command:
node [fileName].js
Will start a node server with the current file. However, when I make
changes I will have to stop and restart the server. Unless I use nodemon.
Nodemon Command:
nodemon [fileName].js
 */