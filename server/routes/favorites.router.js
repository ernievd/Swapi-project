const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const swapiSchema = require('./schema.router');

let newData = mongoose.model('newData', swapiSchema);

// GET route
router.get('/', (req, res) => {
	// Employee is a reference to the collection when finding things in the dB
	newData.find({}, (error, allSwapiData) => {
		if (error) {
			console.log('error on find: ', error);
			res.sendStatus(500);
		} else {
			console.log('found Swapi Documents: ', allSwapiData);
			res.send(allSwapiData);
		}
	}); // end find
}); // end get route


router.delete('/:id', (req, res) => {
	newData.findByIdAndRemove(
		{"_id": req.params.id},
		(error, deletedSwapi) =>{
			if(error){
				console.log('error on remove:', error);
				res.sendStatus(500);
			} else{
				console.log('Swapi removed:', deletedSwapi);
				res.sendStatus(200);
			}
		}
	)
})

module.exports = router;