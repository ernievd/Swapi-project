const mongoose = require('mongoose');

let swapiSchema = new mongoose.Schema(
	{
		name: {type: String, unique: false, required: true},
		// idNumber: {type: Number, unique: true, required: true},
		type: {type: String, unique: false, required: true},
		bornOnDate : {type: Date, unique: false, required: true}
		// link: {type: String, unique: false, required: true}
	}
);

module.exports = swapiSchema;