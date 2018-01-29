const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const swapiSchema = require('./schema.router');


// Define our Model
// mongoose.model( name of the collection, schema definition)
let newData = mongoose.model('newData', swapiSchema);

// POST route
router.post('/', (req, res) => {
	console.log('data to save: ', req.body);
	// create an instance of our model
	let swapiToAdd = new newData(req.body);

	// create a new Document in our database and collection
	swapiToAdd.save( (error, savedSwapi) => {
		if (error) {
			console.log('error on save: ', error);
			res.sendStatus(500);
		} else {
			console.log('new swapi Document: ', savedSwapi);
			res.sendStatus(201);
		}
	}); // end save

}); // end post route


module.exports = router;