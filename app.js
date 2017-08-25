const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 8080; // ANy port as long as it's not a reserved port
const mongoose = require('mongoose');
var bodyParser = require('body-parser');



var urlencodedParser = bodyParser.urlencoded({ extended: false });
mongoose.connect('mongodb://admin:admin@ds155587.mlab.com:55587/newsite');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('WERE CONNECTED BITCHESSS!');
});

app.listen(port, function(req, res, next) {
    console.log('Listening on port ' + port);
    //opn('http://localhost:' + port);  // Opens a new tab
}); // Fires up a server at localhost

app.use(express.static('./public/'));



app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/public/views/index.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/public/views/login.html'));
})

app.get('/contact', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/public/views/contact.html'));
});
app.get('/about', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/public/views/about.html'));
});
app.get('/signup', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/public/views/signup.html'));
});



module.exports = app;