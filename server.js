var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var meetupsController = require('./server/controllers/meetup-controllers.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app
	.use(bodyParser())
	.get('/', function(req, res) {
		res.sendFile(__dirname + '/client/views/index.html');
	})
	.use('/js', express.static(__dirname + '/client/js'))

	//REST API
	.post('/api/meetups', meetupsController.create)
	.get('/api/meetups', meetupsController.list)

	// Server
	.listen(3000, function() {
		console.log('I\'m listening...');
	})