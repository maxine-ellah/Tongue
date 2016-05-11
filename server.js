var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
var cloudinary = require('cloudinary')
var session = require('express-session')
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var port = process.env.PORT || 3000

var urlAndPort = (process.env.NODE_ENV=='production') ?
  "http://tongue123.herokuapp.com" :
  "http://localhost:3000"
// if we're in production, use the heroku url + port, otherwise use the localhost 3000 one

dotenv.load()

var env = process.env.NODE_ENV || 'development' // string
var knexConfig = require('./knexfile'); //big object
var knexDbConfig = knexConfig[env] //small object
var knexGenerator = require('knex') //function
global.knex = knexGenerator(knexDbConfig)

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: urlAndPort + "/auth/facebook/callback"

  // callbackURL: "http://localhost:3000/auth/facebook/callback"
},
  function(accessToken, refreshToken, profile, callback) {
    knex('users').select('*').where({
      facebook_id: profile.id
    }).then(function (resp) {
      if (resp.length === 0) {
        var user = {
          facebook_id: profile.id,
          name: profile.displayName
        }
// set user in session
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

//routes
// app.get('/', function (req, res) {
//   res.redirect('/home')
// })

app.get('/', function (req, res) {
  console.log('req.session.user', req.session.user, 'req.user', req.user)
  res.render('index', { user: req.user });
});

//// redirect authentication requests to facebook
app.get('/auth/facebook', passport.authenticate('facebook'))

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    console.log('req.user', req.user)
    // req.session.user = req.user
    res.render('index', { user: req.user })
})

app.get('/words', function(req, res) {
  // console.log('req.query: ', req.query)
  var language = req.query.language
  knex('words')
    .where('lang', language)
    .orderByRaw('RANDOM()')
    .limit(1)
    .then(function(data) {
    res.json(data)
    console.log('this is data: ', data)
  })
})


app.get('/logout', function (req, res) {
  console.log('req.logout', req.logout)
  req.logout()
  res.redirect('/')
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
