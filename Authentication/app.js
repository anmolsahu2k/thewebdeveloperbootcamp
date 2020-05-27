var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");//to provide an authetication support
var LocalStrategy = require("passport-local");//to authenticate users via a username and password
var passportLocalMongoose = require("passport-local-mongoose");
 
mongoose.connect("mongodb://localhost:27017/auth_demo_app",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false});
// var authSchema = new mongoose.Schema({

// })

var app = express();
app.use(require("express-session")({//Create a session
	secret:"My nickname is Hunny",//used to sign the session ID cookie
	resave:false,//Forces the session to be saved back to the session store
	saveUninitialized:false//Forces the session to be saved back to the session store
}));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());//required to initialize Passport
app.use(passport.session());//If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.

var User = require("./models/user");//requiring the models file of User Model
passport.use(new LocalStrategy(User.authenticate()));//through passport-local
//in order for persistent sessions to work in the passport, 
//the authenticated user must be serialized to the session and deserialized when subsequent requests are made.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//ROUTES
app.get("/",function(req,res){
	res.render("home");
});

app.get("/secret",isLoggedIn,function(req,res){
	res.render("secret");
});

//AUTH ROUTES

//show a new user registration form
app.get("/register",function(req,res){
	res.render("register");
});

//add user
app.post("/register",function(req,res){
	// req.body.username;
	// req.body.password;
	User.register(new User({username:req.body.username}),req.body.password,function(err,user){//to register a new user
		if(err){
			console.log(err);
			res.render('register');
		}else{
			passport.authenticate("local")(req,res,function(){
				res.redirect("/secret");
			});
		}
	});
});

//show an existing user a login form
app.get("/login",function(req,res){
	res.render("login");
});

//login
//middleware - runs just after reaching the route
app.post("/login",passport.authenticate("local",{
	successRedirect:"/secret",
	failureRedirect:"/login"
}),function(req,res){
	res.send("this is login post route");
});

//logout
app.get("/logout",function(req,res){
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){//if user is logged in or not
		return next();
	}else{
		res.redirect("/login");
	}
}

app.listen(3000,function(){
	console.log("Server has started");
});