var singlePage = require('../views/singlePage.hbs')
var homePage = require('../views/index.hbs')
var $ = require('jquery')
var request = require('superagent')

// $('document').ready(function(){
var firstTime = true
var language = 'english'

var words = []

$('button#french').click(function(){
  //render view singlePage with french data in it
  // $('button#nextWord').click(function() {
  language = 'french'
      getWords('french')
  // })
})

$('button#english').click(function(){
  //render view singlePage with english data in it
  // $('button#nextWord').click(function() {
      getWords('english')
  // })
})

$('#nextWord').click(function() {
  getWords(language)
})

function getWords(language) {
  request
    .get('/words?language=' + language)
    .end(function(err, res) {
      var viewWithData = singlePage({ words: JSON.parse(res.text) })
      if (firstTime) {
        console.log("i made it here!")

        $('#content').html(viewWithData)
        $("#languageBtns").hide()
        $('#nextWord').show()
        firstTime = false
      } else {
        $('#content').html(viewWithData)
      }
    })
}
