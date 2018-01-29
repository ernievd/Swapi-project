const mongoose = require('mongoose');

let swapiSchema = new mongoose.Schema(
	{
		name: {type: String, unique: true},
		birth_year: {type: String, unique: false},
		gender: {type: String, unique: false},
		category: {type: String, unique: false},
		climate: {type: String, unique: false},
		terrain: {type: String, unique: false},
		starship_class: {type: String, unique: false},
		model: {type: String, unique: false},
		link:   {type: String, unique: false}
		// link: {type: String, unique: false, required: true}
	}
);

module.exports = swapiSchema;