var singlePage = require('../views/singlePage.hbs')
var $ = require('jquery')
var request = require('superagent')

$('document').ready(function(){
  $('#content').append(singlePage({ word: res.body }))
})

request
  .get()
