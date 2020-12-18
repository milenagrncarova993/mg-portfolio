// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import "bootstrap"

$(document).ready(function() {
	
	smoothScroll();
	
	// Animate menu using animate.css
	$('.navbar').addClass('animated bounceInDown');

	// Scroll event listen
	$(window).on('scroll', function(){
		updateNavigation();
	});
	
	$('.button-container, .switch-container').bind('touchstart mousedown', function(e){
	});
	
	// Update nav selected when click
	$('a').on('click', function() {
		console.log("haha");
		$('.nav-item').removeClass('active');
		$(this).parent().addClass('active');
	});
	
	slideSwitch();
	
});

// Smooth the scroll action
function smoothScroll() {
	
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
}

// Update nav selected
function updateNavigation() {
	var lastId,
    topMenu = $(".navbar"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
}

// Update slide switch highlight
function slideSwitch() {
	$('.switch-slide').on('click', function() {
		
	var activeSpan = $('.switch-toggle-slide .active');

	if (activeSpan.css('left') == '0px') {
		activeSpan.css('left', '50%');
	}
	
	if (activeSpan.css('left') == '125px') {
		activeSpan.css('left', '0');
	}
	
	if ($(this).hasClass('active-switch')) {
		$('.switch-slide').addClass('active-switch')
		$(this).removeClass('active-switch');
	}
	else {
		$('.switch-slide').removeClass('active-switch')
		$(this).addClass('active-switch');
	}
	});
}