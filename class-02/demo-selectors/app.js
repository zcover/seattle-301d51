'use strict';

$('li').on('click', function(){
  $(this).fadeOut(750)
});

$('#form').submit((e) => {
  e.preventDefault();
	console.log('form submitted')
})


$( document ).ready(function() {
  console.log( "ready!" );
});