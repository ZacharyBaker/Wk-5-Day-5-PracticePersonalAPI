var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./controllers/mainCtrl');
var middleware = require('./controllers/middleware');



var app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders); //i thought this should be invoked? maybe not /directions might be wrong?


app.get('/name', mainCtrl.getName);
