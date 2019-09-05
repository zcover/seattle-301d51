
// select all <a> tags that are children of #list
// when any of them are clicked on, console.log() the text of the <a> tag that was clicked on
// 'this' refers to the event.target in jQuery
$( "#list a" ).on( "click", function( event ) {
  console.log( $( this ).text() );
});



// Add a new element on to our existing list dynamically
$( "#list" ).append( "<li><a>I am a dynamically rendered item.</a></li>" );

$( "#list" ).append( "<li><a>So am I. We don't exist in the HTML</a></li>" );

// how do we make it so that EVERY <a> console.logs() the text?
// work together - you have 5 minutes to solve this
