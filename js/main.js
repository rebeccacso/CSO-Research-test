jQuery(document).ready(function(){
  jQuery(".search-icon").click(function(){
    jQuery(".search").toggle("fast","linear");
  });
});

//http://stackoverflow.com/questions/13901071/toggle-the-css-property-of-a-div-using-jquery-javascript

jQuery('.search-icon').click(function() {
    jQuery(this).toggleClass('active');
});

jQuery(document).ready(function(){
  jQuery(".nav-icon").click(function(){
    jQuery("#header nav").toggle("fast","linear");
  });
});

//http://stackoverflow.com/questions/13901071/toggle-the-css-property-of-a-div-using-jquery-javascript

jQuery('.nav-icon').click(function() {
    jQuery("#header nav").toggleClass('mobile');
});

//http://stackoverflow.com/questions/13901071/toggle-the-css-property-of-a-div-using-jquery-javascript

jQuery('.nav-icon').click(function() {
    jQuery(this).toggleClass('active');
});


$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		|| location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
