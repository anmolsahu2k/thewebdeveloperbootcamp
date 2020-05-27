var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new mongoose.Schema({
	username:String,
	password:String
});

UserSchema.plugin(passportLocalMongoose);//to add any property to model file

module.exports = mongoose.model("User",UserSchema);