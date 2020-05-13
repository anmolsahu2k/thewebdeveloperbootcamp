var express=require("express");
var app=express();
var request= require("request");
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("search");
});

app.get("/results",function(req,res){
	var query=req.query.Search;//for get request we can use query but for post request we have to use .body(from body-parser package)
	var url = "http://omdbapi.com/?s="+query+"&apikey=thewdb";//the api request url
	request(url,function(error,response,body){//from the request package
		if(!error && response.statusCode==200){
			var parsedData=JSON.parse(body);
			res.render("results",{data:parsedData});//to show the response data in results page it is passed
			// console.log(parsedData);
		}
	});
});

app.listen(3000,function(){
	console.log("Server has started");
});