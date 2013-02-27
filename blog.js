$(document).ready(function() {
	$(".blog-container").click(function(event){
	  event.preventDefault();
	  console.log("registering click");
	  // $(this).parents('.blog-container').next('.blog-container-clicked').fadeToggle(1000);
	  $(this).addClass("blog-container-clicked");
		console.log("swapping blog-container");
	});

	// $(".project-container").click(function( event ){
	//   event.preventDefault();
	//   $(this).parents('.project-container').next('.project-container-clicked').fadeToggle(1000);
	// });
});
