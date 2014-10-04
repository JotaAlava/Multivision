/**
 * Created by Jose on 10/3/2014.
 */
var mongoose = require('mongoose');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    // Listen for errors, and output them in console if they happen
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback(){
        console.log('multivision db opened at: ');
    });
};

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String
});

var User = mongoose.model('User', userSchema);

// Empty object so that it will select all from the collection
User.find({}).exec(function(err, collection){
    if(collection.length === 0)
    {
        User.create({firstName: 'Joe', lastName: 'Eames', userName:'joe'});
        User.create({firstName: 'Jose', lastName: 'Alava', userName:'jalava'});
        User.create({firstName: 'Cynthia', lastName: 'Perez', userName:'cperez'});
    }
});