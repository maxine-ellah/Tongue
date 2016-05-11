var singlePage = require('../views/singlePage.hbs')
var homePage = require('../views/index.hbs')
var $ = require('jquery')
var request = require('superagent')

// $('document').ready(function(){
var firstTime = true
var language = 'english'

var words = []

$('button#english').click(function(){
  getWords(language)
})

$('button#french').click(function(){
  language = 'french'
  getWords('french')
})

$('#nextWord').click(function() {
  getWords(language)
})

function getWords(language) {
  request
    .get('/words?language=' + language)
    .end(function(err, res) {
      var viewWithData = singlePage({ words: JSON.parse(res.text) })

      $('#content').html(viewWithData)
      $("#languageBtns").hide()
      $('#nextWord').show()
    })
}
