require('dotenv').config({path: __dirname + '/.env'});
var app = require('express')();
var moves = require('./server/controllers/moves');
var matches = require('./server/controllers/matches');
var league = require('./server/controllers/league');
var results = require('./server/controllers/results');


app.get('/', function (req, res) {
  res.send('hello world')
});

app.get('/moves', moves.index);
app.get('/moves/:id', moves.show);
// app.get('/moves/create', moves.show);
// app.post('/moves/store', moves.show);

app.get('/matches', matches.index);
app.get('/matches/:id', matches.show);

app.get('/league', league.index);

app.get('/results', results.index);



app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
  console.log("Magic happens on port", app.get('port'));
});