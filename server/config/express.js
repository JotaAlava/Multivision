/**
 * Created by Jose on 10/3/2014.
 */
// Function used by Stylus
var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'), /* logger has been renamed to morgan */
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

module.exports = function(expressApplication, config){
    function compile(str, path){
        return stylus(str).set('filename', path);
    }

    expressApplication.set('views', config.rootPath + '/server/views');
    expressApplication.set('view engine', 'jade');
// Additional Stylus Configuration
    expressApplication.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));

    expressApplication.use(logger('dev'));
    expressApplication.use(bodyParser());

// This tells express: If a requests comes for a file,
// look into the public directory and then
// go ahead and serve the file. This is static route handling.
    expressApplication.use(express.static(config.rootPath + '/public'));
};
