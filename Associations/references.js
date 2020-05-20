var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});

var postModel = require("./models/post");

var User = require("./models/user");

// User.create({
// 	email:"sundar@google.com",
// 	name:"Sundar Pichai"
// });

//create a post
postModel.create({
	title:" blah blah blah blah blah Title",
	content:"blah blah blah blah blah blah Content goes here"
},function(err,post){
	//find a particular user
	User.findOne({email:"sundar@google.com"},function(err,foundUser){
		if(err)
			console.log(err);
		else{
			//add the post to the user and save the user's data
			foundUser.posts.push(post);
			foundUser.save(function(err,data){
				if(err)
					console.log(err);
				else
					console.log(data);
			});
		}
	});
});

//find user and then find all posts of that user
// User.findOne({email:"sundar@google.com"}).populate("posts").exec(function(err,user){
// 	if (err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// });