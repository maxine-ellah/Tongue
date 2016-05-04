var singlePage = require('../views/singlePage.hbs')
var $ = require('jquery')
var request = require('superagent')

// $('document').ready(function(){
//   $('#content').append(singlePage({ word: res.body }))
// })
console.log(singlePage)

request
  .get('http://localhost:3000/words')
  .end(function(err, res) {
    $('#content').append(singlePage({ words: JSON.parse(res.text) }))
     console.log('this is res', JSON.parse(res.text))
  })
