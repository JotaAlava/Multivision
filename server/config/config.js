/**
 * Created by Jose on 10/3/2014.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development:{
        db: "mongodb://localhost/multivisiondb",
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production:{
        db: "mongodb://jota:multivision@ds041140.mongolab.com:41140/multivisiondb",
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};