var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});

//POST - title,content
var postSchema = new mongoose.Schema({
	title:String,
	content:String
});
var postModel = mongoose.model("Post",postSchema);


//USER - email,name
var userSchema = new mongoose.Schema({
	email:String,
	name:String,
	posts:[postSchema]
});
var User = mongoose.model("User",userSchema);





// // To add a user to the database
// var newUser = new User({
// 	email:"harry@hogwarts.edu",
// 	name: "Harry Potter",
// });

//To add and save a post to a particular user
// newUser.posts.push({
// 	title:"broomsticks",
// 	content:"Learning to fly"
// });
// newUser.save(function(err,user){
// 	if(err)
// 		console.log(err);
// 	else
// 		console.log(user);
// });


//To add and save a post to seperate database
// var newPost = new postModel({
// 	title:"First Post",
// 	content:"This is my first post for blog_demo"
// });
// newPost.save(function(err,post){
// 	if(err)
// 		console.log(err);
// 	else
// 		console.log(post);
// });

//To retrieve an existing user and then add and save a post  
User.findOne({name:"Harry Potter"},function(err,user){
	if (err){
		console.log(err);
	}else{
		//add a new post
		user.posts.push({
			title:"New potion",
			content:"Drank it"
		});
		//to save the work
		user.save(function(err,userAgain){
			if (err) {
				console.log(err);
			}
			else
				console.log(user);
		});
	}
});