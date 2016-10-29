var express = require('express')

var app = express();

// Setting Views and View Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.get('/', function(req, res){
	res.render('index');
});

app.listen(5000, function() {
	console.log('Pss...your app is on port 5000');
})