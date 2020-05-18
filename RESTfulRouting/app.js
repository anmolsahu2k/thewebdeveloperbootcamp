var express=require("express");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var methodOverride=require("method-override");
var expressSanitizer=require("express-sanitizer");
var app=express();

mongoose.connect("mongodb://localhost:27017/restful_blog_app",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false});

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
// to override the req.method property with a new value
app.use(methodOverride("_method"));//_method is the getter to use to look up the overridden request method for the request
app.use(expressSanitizer());//Mount express-sanitizer middleware
//Schema Setup - 
var blogSchema= new mongoose.Schema({
	title:String,
	image:String,
	body:String,
	created:{type:Date,default:Date.now}//for a default date
});

var Blog=mongoose.model("Blog",blogSchema);

//just to test
// Blog.create({
// 	title:"test Blog",
// 	image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRO-8KqYEm2QJO90xKvyvXP0sKSqhvICfanvYQ85A12nNjDFu0Q&usqp=CAU",
// 	body:"This is a demo blog"
// },function(err,blog){
// 	if(err)
// 		console.log(err);
// 	else
// 		console.log(blog);
// });

//RESTful Routes

app.get("/",function(req,res){
	res.redirect("/blogs");
});

//INDEX - List all blogs 
app.get("/blogs",function(req,res){
	//find all blogs
	Blog.find({},function(err,blogs){
		if (err){
			console.log("ERROR!!");
		}else{
			//show all blogs
			res.render("index",{blogs:blogs});
		}
	});
});


//NEW - A new blog form
app.get("/blogs/new",function(req,res){
	//show new blog form
	res.render("new");
});

//CREATE - Create a new blog and redirect somewhere
app.post("/blogs",function(req,res){
	// console.log(req.body.blog.body);
	req.body.blog.body=req.sanitize(req.body.blog.body);//removes any script tag
	// console.log("==================");
	// console.log(req.body.blog.body);
	//create a blog
	Blog.create(req.body.blog,function(err,newBlog){   //.create(data, callback)
		if(err)
			res.render("new");	
		else
			//redirect somewhere
			res.redirect("/blogs");
	});				
});

//SHOW - Show info on one blog
app.get("/blogs/:id",function(req,res){
	//find blog
	Blog.findById(req.params.id,function(err,foundBlog){
		if(err)
			res.redirect("/blogs");
		else
			//show info page
			res.render("show",{blog:foundBlog});
	});
});

//EDIT - Show edit form for one blog
app.get("/blogs/:id/edit",function(req,res){
	//find blog
	Blog.findById(req.params.id,function(err,foundBlog){
		if(err)
			res.redirect("/blogs");
		else
			//show edit form
			res.render("edit",{blog:foundBlog});
	});
});

//UPDATE - Update a blog and redirect somewhere
app.put("/blogs/:id",function(req,res){
	//sanitize the blog content
	req.body.blog.body=req.sanitize(req.body.blog.body);
	//find and update blog simultaneously
	Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedBlog){//(id, newdata, callback)
		if(err)
			res.redirect("/blogs");
		else
			//redirect somewhere
			res.redirect("/blogs/"+req.params.id);
	});
});

//DESTROY - Delete a blog and redirect somewhere
app.delete("/blogs/:id",function(req,res){
	//find and  destroy blog simultaneously
	Blog.findByIdAndRemove(req.params.id,req.body.blog,function(err,deletedBlog){
		if(err)
			res.redirect("/blogs");
		else
			//redirect somewhere
			res.redirect("/blogs");
	});
});

app.listen(3000,function(){
	console.log("Server is Running");
});
// title
// image
// created
// body