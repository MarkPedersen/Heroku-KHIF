var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var bcrypt 		 = require('bcrypt-nodejs');

// user schema 
var SpillerSchema = new Schema({
	navn: String,
	alder: String,
	hold: String
});


module.exports = mongoose.model('Spiller', SpillerSchema);