var express = require("express");

var app=express();

app.get("/",function(req,res){
	res.send("Hello My Boy");
});

app.get("/dog",function(req,res){
	console.log("Someone made a request to /dog");
	res.send("MEOW");
});

app.get("/bye",function (req,res) {
	res.send("GoodBye");
});

app.get("/r/:SubredditName",function (req,res){//this route makes a pattern with route parameters where
	console.log(req.params);				   //'SubredditName' can be anything as long as the pattern is followed	
	res.send("Welcome to a "+req.params.SubredditName.toUpperCase()+" subreddit");
});

app.get("/r/:SubredditName/comments/:id/:title",function(req,res){//this route makes a pattern with route parameters where
	console.log(req.params);									  //link will open as long as 'r' is the first route and 
	res.send("Welcome to comments page"); 						  //'comments' is the third route and the specified pattern is followed
});							

app.get("*",function(req,res){
	res.send("OOPS page not found");
});

app.listen(3000,function(){
	console.log("Server has stared");
});