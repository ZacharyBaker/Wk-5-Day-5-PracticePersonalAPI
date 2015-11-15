var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./controllers/mainCtrl');
var middleware = require('./controllers/middleware');



var app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders); //i thought this should be invoked? maybe not /directions might be wrong?


app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies); // in mainCtrl does hobbies need quotes?
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);

app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);

app.get('/skills', mainCtrl.getSkills);
app.post('/skills', middleware.generateId, mainCtrl.postSkills);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);






app.listen(5051, function(){
	console.log('listening to port 5051');
})

//questions for pete
//cors, only have to use it once?
//middleware creating id based on array length, directions
//confuse me. how did you come up with length + 1?
//in the middleware.verifyUser, what is Number? where does it come from?
