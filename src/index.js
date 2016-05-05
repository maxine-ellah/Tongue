var singlePage = require('../views/singlePage.hbs')
var $ = require('jquery')
var request = require('superagent')

// $('document').ready(function(){
//   $('#content').append(singlePage({ word: res.body }))
// })
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
    // document.getElementById("#content").reset()
    // return false
})


// assumed :
// 1. we've reaved line 18
// 2. the viewWithData is correct
// 3. the append did / didn't happen?
