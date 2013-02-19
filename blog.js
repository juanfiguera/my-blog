$(document).ready(function() {
	$(".blog-container").click(function(event){
	  console.log("click is working");
	  event.preventDefault();
	  
	  $(this).toggleClass("clicked");

	});

	$(".project-container").click(function( event ){
	  event.preventDefault();
	  $( this ).toggleClass("clicked");
	});
	// test
	// slideshow jquery here:


});
