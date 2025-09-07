(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 60
  });

})(jQuery); // End of use strict


document.addEventListener("DOMContentLoaded", () => {
  // Sponsor layout
  let sponsors = new Masonry( ".sponsors", {
      itemSelector: ".sponsor",
      columnWidth: ".sponsor",
      percentPosition: true,
  });

  // Reload masonry after images load fully
  let debounceTimeout = null;
  const DEBOUNCE_TIME = 200;
  for (const sponsor of document.querySelectorAll('.sponsors img')) {
      sponsor.addEventListener('load', () => {
          if (debounceTimeout) {
              clearTimeout(debounceTimeout);
          }
          debounceTimeout = setTimeout(() => {
              sponsors.layout();
          }, DEBOUNCE_TIME);
      }, {once: true});
  };
});
