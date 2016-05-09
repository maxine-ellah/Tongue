var singlePage = require('../views/singlePage.hbs')
var $ = require('jquery')
var request = require('superagent')

// $('document').ready(function(){

// try adding request to handle
  // request
  //   .get('http://localhost:3000/auth/facebook/callback')
  //   .end(function(err, res) {
  //
  //   })




var firstTime = true

$('button#nextWord').click(function() {

  request
    .get('http://localhost:3000/words')
    .end(function(err, res) {
      var viewWithData = singlePage({ words: JSON.parse(res.text) })

      if (firstTime) {
        console.log("i made it here!")
        $('#content').append(viewWithData)
        firstTime = false
      } else {
        $('#content').html(viewWithData)
      }

    })
})
