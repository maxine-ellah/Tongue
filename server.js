var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
var cloudinary = require('cloudinary')
var session = require('express-session')
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
dotenv.load()

var env = process.env.NODE_ENV || 'development' // string
var knexConfig = require('./knexfile'); //big object
var knexDbConfig = knexConfig[env] //small object
var knexGenerator = require('knex') //function
global.knex = knexGenerator(knexDbConfig)

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
},
  function(accessToken, refreshToken, profile, callback) {
    console.log('this is the profile object(?): ', profile)
    knex('users').select('*').where({
      facebook_id: profile.id
    }).then(function (resp) {
      if (resp.length === 0) {
        var user = {
          facebook_id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value
        }

        knex('users').insert(user).then(function (resp) {
          callback(null, user)
        })
      } else {
        callback(null, resp[0])
      }
    })
  }
 ))


app.use(express.static('client'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'jesus-christ', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, cb) {
    cb(null, user)
})

passport.deserializeUser(function(obj, cb) {
    cb(null, obj)
})


app.get('/', function (req, res) {
  res.render('index', { user: req.user });
});

app.get('/words', function(req, res) {
  var randomId = Math.floor((Math.random() * 20) +1)
  console.log('this is randomId: ', randomId)
  knex('words')
    .where('id', randomId)
  .then(function(data) {
    res.json(data)
    console.log('this is data: ', data)
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
