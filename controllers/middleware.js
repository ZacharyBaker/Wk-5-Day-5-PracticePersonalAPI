var myBio = require('../models/myBio');


module.exports = {
	
	
	addHeaders: function (req, res, next) {
		res.status(200).set({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			'X-XSS-Protection': '1; mode=block',
			'X-Frame-Options': 'SAMEORIGIN',
			'Content-Security-Policy': "default-src 'self' devmountain.github.io"
		});

		next();
	},

  generateId: function(req, res, next){
    var skills = myBio.skills;
    var id = skills.length+1;
    req.id = id;
    next();
  },

  verifyUser: function(req, res, next){
    if(req.params.username===myBio.username && Number(req.params.pin)===myBio.pin){
      next();
    }
    else{
      res.status(400).json({message: "error, incorrect info breh"});
    }
  }
}