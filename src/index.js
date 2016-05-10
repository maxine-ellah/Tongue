var singlePage = require('../views/singlePage.hbs')
var homePage = require('../views/index.hbs')
var $ = require('jquery')
var request = require('superagent')

// $('document').ready(function(){
var firstTime = true
// var language = 'english'

// function selectFrench() {
//   request
//     .get()
//   $('button#french').click(function(){
//     getWords(french)
//
//     $('button#nextWord').click(function() {
//       getWords()
//     })
//   })
// }
//
// function selectEnglish() {
//   request
//   $('button#english').click(function(){
//     getWords(english)
//
//     $('button#nextWord').click(function() {
//       getWords(english)
//     })
//   })
// }
var words = []

$('button#french').click(function(){
    getWords('french')
})

$('button#english').click(function(){
    getWords('english')
})

function getWords(language) {
  request
    .get('/words?language=' + language)
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
}
