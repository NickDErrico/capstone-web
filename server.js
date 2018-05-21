
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname + "/dist"));

var port = process.env.PORT || 5000;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(port);



console.log('server started ' + port);
