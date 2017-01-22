var express = require('express');
var app = express();


app.get('/',function(req,rec){
	rec.json("hiiiii");
});
app.listen(3000,function(err){
	if(err) throw err;
	
	console.log("Server is running at port 3000");
});