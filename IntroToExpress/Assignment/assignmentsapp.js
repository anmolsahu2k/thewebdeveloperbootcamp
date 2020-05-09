var express = require("express");
var app = express();

app.get("/",function (req,res){//creating root route
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animalName",function(req,res){
	var animal = req.params.animalName.toLowerCase();//req.params.animalName extracts animalName from the url
	var sound={
		pig:"'Oink'",
		cow:"'Moo'",
		dog:"'Woof Woof !'"
	}
	var s=sound[animal];//Not sound.animal or sound["animal"]  because animal = "dog"or"cow" or "pig"
	res.send("The "+animal+" says "+s);
	// if( a == "pig")
	// 	s="'Oink'";
	// else if( a == "cow")
	// 	s="'Moo'";
	// else if( a == "dog" )
	// 	s="'Woof Woof!'";
	// else
	// 	res.send("Wrong Page");
	
});

app.get("/repeat/:word/:no_of_times",function(req,res){
	var s = req.params.word;
	var n = Number(req.params.no_of_times); 
	var k=s;
	for(var i=0;i<n-1;i++)
		k=k+" " +s;
	res.send(k);	
});

app.get("*",function(req,res){//any unspecified url will end at this route
	res.send("Sorry, page not found....What are you doing with your life ?")
});

app.listen(3000,function(){
	console.log("Server has started");
});