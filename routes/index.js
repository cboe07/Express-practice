var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');

var grungeIcons = ['Chris Cornell', 'Kurt Cobain', 'Layne Staley', 'Eddie Vetter','Dave Grohl'];

/* GET home page. */
router.get('/', function(req, res, next) {
	var grungeIcons = ['Chris Cornell', 'Kurt Cobain', 'Layne Staley', 'Eddie Vetter','Dave Grohl'];
	res.render('index', { 
		title: 'Express', 
		grungeArray: grungeIcons 
	});
});

router.get('/reverse', function(req, res, next) {
	var grungeIcons = ['Chris Cornell', 'Kurt Cobain', 'Layne Staley', 'Eddie Vetter','Dave Grohl'];
	var reverseGrungeIcons = grungeIcons.reverse();
	// console.log(reverseGrungeIcons)
	res.render('reverse', { 
		title: 'Express', 
		grungeArray: reverseGrungeIcons 
	});
});

router.get('/weather', function(req, res, next) {
	res.render('weather', { 
		config : config.weatherApiKey, 
	});
});

router.get('/chat-app', function(req, res, next) {
	res.render('chat-app', { 
		config : config.socketUrl,
	});
});

module.exports = router;
