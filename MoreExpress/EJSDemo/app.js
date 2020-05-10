var express = require("express");
var app = express();

app.use(express.static("public"));//to make a directory(here,public) visible to express

app.set("view engine","ejs");//The default engine extension to use when not specifie in the file name.
							 //If the path does not contain a file extension, then the view engine setting determines the file extension.
app.get("/",function(req,res){
	res.render("home");
	//res.send("<h1>Welcome to the Home Page</h1><h2>BlahBlahBlah</h2>");
});

app.get("/fallinlovewith/:thing",function (req,res){
	var thing= req.params.thing;
	res.render("love",{thingVar:thing});//defining local variable 'thingVar' with the value of 'thing' and passing it
});										//into love.ejs file

app.get("/posts",function(req,res){
	var posts=[
		{title: "Post1",author: "Susy"},
		{title: "My pet",author: "Me"},
		{title: "Control uday control",author: "my mind"}
	];
	res.render("posts",{posts : posts});//passing array 'posts' as local variable 'posts' into posts.ejs file
});

app.listen(3000,function(){
	console.log("Server has started");
});