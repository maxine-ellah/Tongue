var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
var $ = require('jquery')
var cloudinary = require('cloudinary')
var fileUpload = require('express-fileupload');
var knex = require('knex')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
