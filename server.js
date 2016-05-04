var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
var cloudinary = require('cloudinary')
var fileUpload = require('express-fileupload');

var env = process.env.NODE_ENV || 'development' // string
var knexConfig = require('./knexfile'); //big object
var knexDbConfig = knexConfig[env] //small object
var knexGenerator = require('knex') //function
global.knex = knexGenerator(knexDbConfig)

app.use(express.static('client'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

app.get('/', function (req, res) {
  res.send('index');
});

app.get('/words', function(req, res) {
  knex('words')
    .select()
  .then(function(data) {
    res.json(JSON.parse(data))
    console.log('this is data: ', data)
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
