var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'), /* logger has been renamed to morgan */
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./server/config/config')[env];

var expressApplication = express();

require('./server/config/express')(expressApplication, config);

require('./server/config/mongoose')(config);

require('./server/config/routes')(expressApplication);



expressApplication.listen(config.port);
console.log('Listening on port: ' + config.port + '...');

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