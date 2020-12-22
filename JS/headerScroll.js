$(document).ready(function() {
    var previousScroll = 0;

    $(window).scroll(function(){
       var currentScroll = $(this).scrollTop();
       if (currentScroll > previousScroll) {
    	   $("#header").fadeOut();
       } else {
    	   $("#header").fadeIn();
       }
       previousScroll = currentScroll;
    });
});
