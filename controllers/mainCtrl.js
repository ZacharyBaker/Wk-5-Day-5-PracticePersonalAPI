var myBio = require('../models/myBio');

module.exports = {


	getName: function (req, res, next) {
		res.status(200).json({ name: myBio.name });
	},

	getLocation: function (req, res, next) {
		res.status(200).json({ location: myBio.location });
	},

	getOccupations: function (req, res, next) {
		var occupations = myBio.occupations;
		if (req.query.order === 'desc') {
			occupations.sort();
		} else if (req.query.order === "asc") {
			occupations.sort().reverse();
		}

		res.status(200).json({ occupations: occupations });
	},

	getLatestOccupation: function (req, res, next) {
		res.status(200).json({ latestOccupation: myBio.occupations[myBio.occupations.length - 1] });
	},

	getHobbies: function (req, res, next) {
		res.status(200).json({ hobbies: myBio.hobbies });
	},

	getHobbiesByType: function (req, res, next) {
		var hobbies = myBio.hobbies;
		var typ = req.params.type;
		var hobbiesByType = [];

		for (var i = 0; i < hobbies.length; i++) {
			var currentHobby = hobbies[i];
			if (currentHobby.type === typ) {
				hobbiesByType.push(currentHobby);
			}
		}
		res.status(200).json({ hobbiesByType: hobbiesByType });
	},
	
	
	
	
	//----------------put functions---------------
	
	updateName: function (req, res, next) {
		var newName = req.body.name;
		myBio.name = newName;

		res.status(200).json({ name: newName });
	},

	updateLocation: function (req, res, next) {
		var newLocation = req.body.location;
		myBio.location = newLocation;
		res.status(200).json({ location: newLocation });
	},
	
	//-------------post functions --------------
	
	addHobby: function (req, res, next) {
		var hobbyToAdd = req.body;
		myBio.hobbies.push(hobbyToAdd);
		res.status(200).json({ hobbies: myBio.hobbies });
	},

	addOccupation: function (req, res, next) {
		var occupationToAdd = req.body.occupation;
		myBio.occupations.push(occupationToAdd);
		res.status(200).json({ occupations: myBio.occupations });
	},
	
	//----------------
	getSkills: function (req, res, next) {
		var skills = myBio.skills;
		if (req.query.experience) {
			var expLevel = req.query.experience;
			var filteredSkills = [];
			for (var i = 0; i < skills.length; i++) {
				var currSkill = skills[i];
				if (currSkill.experience === expLevel) {
					filteredSkills.push(currSkill);
				}
			}
			res.status(200).json({ skills: filteredSkills });
		}
		else {
			res.status(200).json({ skills: myBio.skills });
		}
	},

	postSkills: function (req, res, next) {
		var id = req.id;
		var newSkill = req.body;
		newSkill.id = id;
		myBio.skills.push(newSkill);
		res.status(200).json({ skills: myBio.skills });
	},

	getSecrets: function(req, res, next){
		res.status(200).json({secrets: "heckka secrets"});
	}



}