
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

var trails = [
    {name: 'Apex Basics and Database', type: 'Module', release: 'Meerkat', imageURL: 'http://localhost:3001/image/1.jpg' },
    {name: 'Apex Specialist', type: 'Superbadge' , release:'Ocelot', imageURL: 'http://localhost:3001/image/2.png' },
    {name: 'Sell Lightning Fast with Sales Cloud', type: 'Trail' , release:'Punchy Panda', imageURL: 'http://localhost:3001/image/3.png'},
    {name: 'Build a Mars Comunication Uplink', type: 'Project', release: 'Meerkat', imageURL: 'http://localhost:3001/image/4.jpg'},
    {name: 'Build a Visualforce App with the Lightning Design System', type: 'Project', release: 'Meerkat', imageURL: 'http://localhost:3001/image/5.png'},
    {name: 'Coaching & Feedback', type: 'Module', release: 'Meerkat', imageURL: 'http://localhost:3001/image/6.png'},
    {name: 'Create a Satisfaction Survey', type: 'Project', release: 'Meerkat', imageURL: 'http://localhost:3001/image/7.png'}
]

app.get('/trails', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.send(trails);
});


app.get('/options', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.send([
        [
          { label: 'Public', value: 'A0' },
          { label: 'Internal', value: 'B0' },
        ],[
          { label: 'Beginner', value: 'A0' },
          { label: 'Intermediate', value: 'B0' },
          { label: 'Advanced', value: 'C0' },
        ],[
          { label: 'General', value: 'A0' },
          { label: 'Especific', value: 'B0' },
        ],[
          { label: 'Business User', value: 'A0' },
          { label: 'Developer', value: 'B0' },
        ],[
          { label: 'Security', value: 'A0' },
          { label: 'Managment', value: 'B0' },
          { label: 'QA', value: 'C0' },
          { label: 'Development', value: 'D0' },
        ]
    ]);
});


app.post('/login', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    console.log("USERRRRR",req)
    res.send({ user: "Willard Wagner", img: 'http://localhost:3001/image/pinguino.png'});
});




app.get('/image/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/images',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });

});


// 404 message
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});


// start the server in the port 3001 !
app.listen(3001, function () {
    console.log('server listening on port 3001.');
});
