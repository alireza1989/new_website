// set variables for environment
var express = require('express');
var app = express();
var path = require('path');
var file_system = require('fs');

app.use(express.static(path.join(__dirname)));

// Server routes
app.get('/', function(request, response) {
    response.redirect(301, '/index.html');
});

app.get('/index.html', function(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('Cache-Control', 'public,max-age = 1800');

    file_system.readFile(__dirname + '/index.html', function(err, data) {

        if (err) {
            console.log("ERROR: failed to load playlists.html");
        }

        response.end(data);
    });
    
});

app.get('/css/materialize.css', function(request, response){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css');
    response.setHeader('Cache-Control', 'public,max-age = 1800');

    file_system.readFile(__dirname + '/css/materialize.css', function(err, data) {
        if (err) {
            console.log('ERROR: failed to load materialize.css');
        }

        response.end(data);
    });
});

app.get('/js/materialize.js', function(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/javascript');
    response.setHeader('Cache-Control', 'public,max-age = 1800');

    file_system.readFile(__dirname + 'js/materialize.js', function(err, data) {

        if (err) {
            console.log("ERROR: failed to load playlists.html");
        }

        response.end(data);
    });
    
});




// Set server port
app.listen(3000);
console.log('server is running');