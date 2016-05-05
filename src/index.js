var singlePage = require('../views/singlePage.hbs')
var $ = require('jquery')
var request = require('superagent')

// $('document').ready(function(){
//   $('#content').append(singlePage({ word: res.body }))
// })

$('button#nextWord').click(function() {

  request
    .get('http://localhost:3000/words')
    .end(function(err, res) {
    var viewWithData =  singlePage({ words: JSON.parse(res.text) })
    var firstTime = true
      if (firstTime) {
      $('#content').append(viewWithData)
       firstTime = false
     } else {
       $('#content').html(viewWithData)
     }

    })
    document.getElementById("#content").reset()
    return false
})
