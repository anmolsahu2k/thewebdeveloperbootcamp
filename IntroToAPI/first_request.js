const request = require('request');//to make http calls for API  
request('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02', (error, response, body)=> {//function(error, response, body)
  	if(!error && response.statusCode==200){
  		console.log(body);
  		console.log("==========")
  		var parsedData=JSON.parse(body);//to convert data from string to javascript object
  		console.log(parsedData);
  		console.log("Name of the city is "+parsedData.name);
  		console.log(parsedData["main"]);
  		console.log(parsedData["wind"]);
	}
});

//USING REQUEST-PROMISE PACKAGE WHICH IS ES6 TEMPLATE
// const rp=require("request-promise");
// rp("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02")
// .then((body)=>{
// 	const parsedData=JSON.parse(body);
// 	console.log(`Name of the city is ${parsedData.name}`);
// 	console.log(parsedData["main"]);
//   	console.log(parsedData["wind"]);
// });
// .catch((err)=>{
// 	console.log("Error!",err);
// });