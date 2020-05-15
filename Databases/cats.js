var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app",{useNewUrlParser:true,useUnifiedTopology:true});//to connect to mongodb

//schema maps to a MongoDB collection and defines the shape of the documents within that collection.
var catSchema=new mongoose.Schema({
	name:String,// String is shorthand for {type: String}	
	age:Number,
	temperament:String
});

//create a model for object mapping
var Cat=mongoose.model("Cat",catSchema);

//adding new cat to the database 1st defining and then saving in 2 steps
// var george =new Cat({
// 	name: "Mrs. Norris",
// 	age:7,
// 	temperament:"Evil"
// });

// george.save(function(err,cat){
// 	if(err)
// 		console.log("Something Went Wrong");
// 	else
// 	{
// 		console.log("We saved a cat to the db");
// 		console.log(cat);
// 	}
// });

//adding a cat to the database in 1 step
Cat.create({
	name:"Snow White",
	age:15,
	temperament:"Bland"
},function(err,cat){
	if(err)
		console.log(err);
	else
		console.log(cat);
});


//retrieving all cats from the database
Cat.find({},function(err,cats){
	if(err){
		console.log("Oh, no ERROR!");
		console.log(err);
	}else
	{
		console.log("All the Cats...");
		console.log(cats);
	}
});