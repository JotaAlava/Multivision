var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'), /* logger has been renamed to morgan */
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(env === 'development'){
    mongoose.connect('mongodb://localhost/multivisiondb');
}
else{
    mongoose.connect('mongodb://jota:multivision@ds041140.mongolab.com:41140/multivisiondb');
}

var expressApplication = express();

// Function used by Stylus
function compile(str, path){
    return stylus(str).set('filename', path);
}

expressApplication.set('views', __dirname + '/server/views');
expressApplication.set('view engine', 'jade');
// Additional Stylus Configuration
expressApplication.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

expressApplication.use(logger('dev'));
expressApplication.use(bodyParser());

// This tells express: If a requests comes for a file,
// look into the public directory and then
// go ahead and serve the file. This is static route handling.
expressApplication.use(express.static(__dirname + '/public'));

var db = mongoose.connection;
// Listen for errors, and output them in console if they happen
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
   console.log('multivision db opened at: ');
});

var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;

Message.findOne().exec(function(err, messageDoc){
    mongoMessage = messageDoc.message;
});

// End Of Additional Stylus Configuration

// This is very similar to the other route.
// In this case when somenoe requests /partials/main, express
// will serve the main.jade file inside the partials folder.
expressApplication.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});

//Create Route To Deliver Index Page
expressApplication.get('*', function(req, res){
    res.render('index', {mongoMessage: mongoMessage});
});
// will match all requests, done such that Angular routing service will
// be reponsible for the routing. Otherwiese I would have to match these
// on both the server side and client side.

var port = process.env.PORT || 3030;
expressApplication.listen(port);
console.log('Listening on port ' + port + '...');

/*
The following command:
node [fileName].js
Will start a node server with the current file. However, when I make
changes I will have to stop and restart the server. Unless I use nodemon.
Nodemon Command:
nodemon [fileName].js

MongoLabs Credential:
jota
multivision
 */