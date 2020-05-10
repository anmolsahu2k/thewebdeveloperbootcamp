var express = require("express");
var app =express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));//to use body-parser
app.set("view engine","ejs");

var friends=["Tony","Steve","Black","Barry"];


app.get("/",function(req,res){
	res.render("home");
});

app.post("/addfriend",function(req,res){
	console.log(req.body);
	var newFriend = req.body.newfriend;//(here, newfriend comes from the 'name' attribute in input tag)
	friends.push(newFriend);     	   //.body is used after adding body-parser package to get the inputted value
	res.redirect("/friends");
});

app.get("/friends",function(req,res){
	res.render("friends",{friends: friends});
});

app.listen(3000,function(){
	console.log("Server has started");
});
