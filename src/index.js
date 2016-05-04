var singlePage = require('../views/singlePage.hbs')
var $ = require('jquery')

$('document').ready(function(){
  $('#content').append(singlePage())
})
