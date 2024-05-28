const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const userSchema = new Schema({
	profile-fname:{
		type: String,
		required: true
	},
	profile-sname:{
		type: String,
		required: true
	},
	profile-email:{
		type: String,
		required: true
	},
	profile-date-of-birth:{
		type: Array,
		required: true,
		default: []
	}
	profile-genre:{
		type: String,
		required: true
	},
	profile-pic:{
		type: String,
		required: false
	},
	profile-frontpic:{
		type: String,
		required: false
	},
	profile-alias:{
		type: String,
		required: true
	},
	profile-details:{
		type: Array,
		required: false,
		default: []
	},	qx
	profile-ubication:{
		type: Array,
		required: false,
		default: []
	},
	profile-friends:{
		type: Array,
		required: false,
		default: [] 
	},
	profile-accept-friendreq:{
		type: Boolean,
		required: false,
		default: false
	}
});

const User = mongoose.model("User", userSchema);
module.exports = User;