var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	config = require('./config'),
    mongoose = require('mongoose');

mongoose.connect(config.database, function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('connected to mongolab database successfull')
    }
});

//run server
var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/views/index.html');

});

//CMD node server.js
app.listen(config.port, function (err) {
	if (err) {
		console.log(err);
	}
	else{
		console.log('listening on port 3000');
	}
});