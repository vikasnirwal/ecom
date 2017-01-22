var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser	=	require('body-parser');
var User	=	require('./models/user');


//connect to the database

mongoose.connect('mongodb://root:abc123@ds041536.mlab.com:41536/ecom',function(err){
	if(err){
		console.log(err);
	} else{
		console.log('connected to the database');
	}
});



var app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.get('/',function(req,rec){
	rec.json("hiiiii");
});
app.post('/newuser',function(req,rec,next){
	var user = new User();
	
	user.profile.name = req.body.name;
	user.password = req.body.password;
	user.email	=	req.body.email;
	user.save(function(err){
		if(err) return next(err);
		rec.json("User created sussecfully");
	});
	
});



app.listen(3000,function(err){
	if(err) throw err;
	
	console.log("Server is running at port 3000");
});