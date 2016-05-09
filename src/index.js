var singlePage = require('../views/singlePage.hbs')
var $ = require('jquery')
var request = require('superagent')

// $('document').ready(function(){


var firstTime = true

$('button#nextWord').click(function() {

  request
    .get('/words')
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
