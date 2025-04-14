(function($) {
  "use strict";

  // Smooth scrolling
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      if ($(document).width() >= 992){
        $("#resume-button").height("0px")
        $("#resume-button").css("line-height", "0px")
        $("#resume-button").height($("#navbarResponsive").height() + "px")
        $("#resume-button").css("line-height", $("#navbarResponsive").height() + "px")
      }
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      if ($(document).width() >= 992){
        $("#resume-button").height("0px")
        $("#resume-button").css("line-height", "0px")
        $("#resume-button").height($("#navbarResponsive").height() + "px")
        $("#resume-button").css("line-height", $("#navbarResponsive").height() + "px")
      }
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
  $(document).ready(larg);
  $(window).resize(larg);

  function larg(){
    if ($(document).width() < 992){
      $("#resume-button").css("border","none")
      $("#resume-button").height("0px")
      $("#resume-button").css("line-height", 0 + "px")
      $("#resume-button").css("padding", 0 + "px")
      $("#resume-button-li").css("padding-top", "5px")
      $("#resume-button-li").css("padding-bottom", "5px")
      $("#resume-button-li").height("30px")
    } else {
      $("#resume-button").height("0px")
      $("#resume-button").css("line-height", "0px")
      $("#resume-button").height($("#navbarResponsive").height() + "px")
      $("#resume-button").css("line-height", $("#navbarResponsive").height() + "px")
      $("#resume-button").css("padding", 5 + "px")
      $("#resume-button").css("border","solid")
      $("#resume-button-li").css("padding-top", "0px")
      $("#resume-button-li").css("padding-bottom", "0px")
    }
  }

  // Default: Show first activity and corresponding certificate
  document.addEventListener('DOMContentLoaded', function () {
    const firstActivity = document.querySelector('.activity-item');
    if (firstActivity) firstActivity.click();
  });

  // Certificates: auto-show first, hide +, and make tab clickable
  document.addEventListener('DOMContentLoaded', function () {
    const certToggles = document.querySelectorAll('.cert-toggle');
    const certDetails = document.querySelectorAll('.cert-details');

    // Hide all certs
    certDetails.forEach(d => d.classList.remove('show-cert'));

    // Show first by default
    if (certDetails.length > 0) {
      certDetails[0].classList.add('show-cert');
    }

    // Hide + symbol and make tabs exclusive toggle
    certToggles.forEach(t => {
      const sym = t.querySelector('.toggle-symbol');
      if (sym) sym.style.display = 'none';

      t.addEventListener('click', () => {
        certDetails.forEach(d => d.classList.remove('show-cert'));
        const detail = t.nextElementSibling;
        detail.classList.add('show-cert');
      });
    });
  });

})(jQuery);
