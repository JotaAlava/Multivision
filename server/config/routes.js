/**
 * Created by Jose on 10/3/2014.
 */
module.exports = function(app){
    // This is very similar to the other route.
// In this case when somenoe requests /partials/main, express
// will serve the main.jade file inside the partials folder.
    app.get('/partials/*', function(req, res){
        res.render('../../public/app/' + req.params[0]);
    });

//Create Route To Deliver Index Page
    app.get('*', function(req, res){
        res.render('index');
    });
// will match all requests, done such that Angular routing service will
// be reponsible for the routing. Otherwiese I would have to match these
// on both the server side and client side.
}