/*=========================================================================

* Template Name: Creative Personal Portfolio Template
* Author: GraphicUX
* Author URI: https://www.graphicux.com/
* Version: 1.0
* Tags: html, Parallax, template, Portfolio, marketing, Personal, Graphicux

NOTE: This is the main javascript file for the template

=========================================================================*/

$(document).ready(function() {
  
    setTimeout(function() {
      $('#ctn-preloader').addClass('loaded');
      $('body').removeClass('no-scroll-y');
  
      if ($('#ctn-preloader').hasClass('loaded')) {
        $('#preloader').delay(1000).queue(function() {
          $(this).remove();
        });
      }
    }, 3000);
    
  });


  $(function(){
    "use strict";
    
        // Define Some Elements
        var allWindow = $(window),
            body = $('body'),
            top = allWindow.scrollTop(),
            navBar = $(".nav-wrapper");

/*-----------------------------------------------------------------
  Javascript Function for option-box
------------------------------------------------------------------*/
  $('.icon-tools-2').click(function(){
    $('.option-color').toggle();

  });

  $(function(){

    var colorLi = $('.option-color ul li')
    var  switche = $('.option-color .dark_switch')

    colorLi
    .eq(0).css("backgroundColor","#333").end()
    .eq(1).css("backgroundColor","#42a5f5").end()
    .eq(2).css("backgroundColor","#C49B66").end()
    .eq(3).css("backgroundColor","#26c6da").end()
    .eq(4).css("backgroundColor","#7e57c2").end()
    .eq(5).css("backgroundColor","#66bb6a").end()
    .eq(6).css("backgroundColor","#5c6bc0").end()
    .eq(7).css("backgroundColor","#ffa726").end()
    .eq(8).css("backgroundColor","#ec407a").end()
    .eq(9).css("backgroundColor","#ab47bc").end()
    .eq(10).css("backgroundColor","#ef5350").end()
    .eq(11).css("backgroundColor","#26a69a").end()
    .eq(12).css("backgroundColor","#ffa726");

    colorLi.click(function(){

      $("link[href*='skin']").attr("href",$(this).attr("data-skin"));

    });

    switche.click(function(){

      $("link[href*='theme']").attr("href",$(this).attr("data-value"));

    });

  });

/*------------------------------------------------
  Javascript Function for The btn down
--------------------------------------------------*/
  $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
});
  
/*-----------------------------------------------------
  Javascript Function To check Aniamtion support
-------------------------------------------------------*/
  var animation = false,

  domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
  pfx  = '',
  elm = document.createElement('div');

  if( elm.style.animationName !== undefined ) { animation = true; }

  if( animation === false ) {
    for( var i = 0; i < domPrefixes.length; i++ ) {
      if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
        pfx = domPrefixes[ i ];
        animationstring = pfx + 'Animation';
        keyframeprefix = '-' + pfx.toLowerCase() + '-';
        animation = true;
        break;
      }
    }
  }

/*-----------------------------------------------------
  Javascript Function For Smooth Mouse Scrolling
-------------------------------------------------------*/
    jQuery.scrollSpeed = function(step, speed) {
        
        var $document = $(document),
            $body = $('html, body'),
            option = 'default',
            root = top,
            scroll = false,
            scrollY,
            view;
            
        if (window.navigator.msPointerEnabled) {
            return false;
        }
            
        allWindow.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > allWindow.height();
                scroll = true;
            
            if (scrollY) {
                
                view = allWindow.height();
                    
                if (deltaY < 0 || detail > 0) {
                    root = (root + view) >= $document.height() ? root : root += step;
                }
                
                if (deltaY > 0 || detail < 0) {
                    root = root <= 0 ? 0 : root -= step;
                }
                
                $body.stop().animate({
                    scrollTop: root
                }, speed, option, function() {
                    scroll = false;
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = top;
            if (!scroll) root = allWindow.scrollTop();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = allWindow.height();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };

    // initialize Smooth Scrolling Only in Modern browsers
    if(animation) {
    	jQuery.scrollSpeed(100, 700);
    }

/*---------------------------------------------------------------------
  Javascript Function For Sticky Navigation Bar AND SMOOTH SCROLLING
----------------------------------------------------------------------*/

    // Define stikyNav Function
    function stikyNav() {

      top = allWindow.scrollTop();

      if ( top >= 100 ) {
        navBar.addClass("nav-sticky");

      } else {
        navBar.removeClass("nav-sticky");
      }

      // SHow Also Scroll up Button
      if ( top >= 1200 ) {
        $('.scroll-to-top').addClass("show-up-btn");
      } else {
        $('.scroll-to-top').removeClass("show-up-btn");
      }

        // SHow Also Scroll up Button
        if ( top >= 200 ) {
          $('.option-box').addClass("show-up-btn");
        } else {
          $('.scroll-to-top').removeClass("show-up-btn");
        }
    }

    
    


   

    // Select all links with hashes
    $('a.scroll').on('click', function(event) {
        // On-page links
        if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
          // Figure out element to scroll to
          var target = $(this.hash),
              speed= $(this).data("speed") || 800;
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, speed);
          }
        }
    });

    $(".scroll-to-top").on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
    
/*---------------------------------------------------------------------
  Javascript Function for Hide Navbar Dropdown After Click On Links
-------------------------------------------------------------------*/
    var navLinks = navBar.find(".navbar-collapse ul li a");

    $.each( navLinks, function( i, val ) {

      var navLink = $(this);

        navLink.on('click', function (e) {
          navBar.find(".navbar-collapse").collapse('hide');
        });

    });

/*----------------------------------------------------------------
  Javascript Function For Change active Class on navigation bar
-----------------------------------------------------------------*/
    var sections = $('.page'),
        navList = navBar.find("ul.navbar-nav");

    // Define ChangeClass Function
    function ChangeClass() {

      top = allWindow.scrollTop();

        $.each(sections, function(i,val) {

          var section = $(this),
              section_top = section.offset().top - 10,
              bottom = section_top + section.height();

            if (top >= section_top && top <= bottom) {

              var naItems = navList.find('li');

              $.each(naItems ,function(i,val) {
                var item = $(this);
                item.find("a").removeClass("active");
              });

              navList.find('li [href="#' + section.attr('id') + '"]').addClass('active');
            }

        });

    } // End of ChangeClass Function

/*-----------------------------------------------------------------
  Javascript Function for PROGRESS BAR LINES  SCRIPT
------------------------------------------------------------------*/
    function scrollFunctions() {
      stikyNav();
      ChangeClass();
    }

    // add Event listener to window
    allWindow.on('scroll', function() {
      scrollFunctions();
    });

/*------------------------------------------
  Javascript for initialize text Typer
--------------------------------------------*/

    // initialize text Typer Only in Modern browsers
    if (animation) {

      var text = $('#home .typer-title'),
          textOne = "i'm ui/ux designer",
          textTwo = "let's work together",
          textThree = "i can create awesome stuff";

          if (!!$.prototype.typer) {
            text.typer([textOne,textTwo,textThree]);
          }
    }

/*------------------------------------------------
  Javascript Function particles config
--------------------------------------------------*/
if ( typeof particlesJS !== "undefined") {

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 3500
        }
      },
      "color": {
        "value": "#868686"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#868686"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.9,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#868686",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

/*------------------------------------------------------
  Javascript Function for Tilt about img
--------------------------------------------------------*/
    $('.about-overly').tilt({
        maxTilt: 5,
        glare: true,  // Enables glare effect
        maxGlare: .4,  // From 0 - 1.


    });

/*------------------------------------------------------
   Javascript Function for  Isotope Filter 
-------------------------------------------------------*/
  var winDow = $(window);
  var $container=$('.portfolio-items');
  var $filter=$('.filter');

  try{
    $container.imagesLoaded( function(){
      $container.show();
      $container.isotope({
        filter:'*',
        layoutMode:'masonry',
        animationOptions:{
          duration:750,
          easing:'linear'
        }
      });
    });
  } catch(err) {
  }

  winDow.bind('resize', function(){
    var selector = $filter.find('a.active').attr('data-filter');

    try {
      $container.isotope({ 
        filter	: selector,
        animationOptions: {
          duration: 750,
          easing	: 'linear',
          queue	: false,
        }
      });
    } catch(err) {
    }
    return false;
  });

  $filter.find('a').click(function(){
    var selector = $(this).attr('data-filter');

    try {
      $container.isotope({ 
        filter	: selector,
        animationOptions: {
          duration: 750,
          easing	: 'linear',
          queue	: false,
        }
      });
    } catch(err) {

    }
    return false;
  });


  var filterItemA	= $('.filter a');

  filterItemA.on('click', function(){
    var $this = $(this);
    if ( !$this.hasClass('active')) {
      filterItemA.removeClass('active');
      $this.addClass('active');
    }
  });

/*------------------------------------------------------
   Javascript Function for masonry 
--------------------------------------------------------*/
  (function () {
    var $container = $('.portfolio-items');
    // initialize
    $container.masonry({
      itemSelector: '.work-grid'
    });

  }());

/*--------------------------------------------------
 Javascript Function for Tilt Portfolio Initializing
---------------------------------------------------*/
  $('.portfolio-content figure').tilt({
  maxTilt: 5,
  glare: true,  // Enables glare effect
  maxGlare: .4,  // From 0 - 1.

  })

/*-----------------------------------------
 Javascript Function for magnific-popup
--------------------------------------------*/
$(".popup").magnificPopup({
  type: 'iframe'
});

$('.Magnific').magnificPopup({
type: 'image',
removalDelay: 340,
mainClass: 'mfp-fade',
gallery:{
    enabled:true
},
zoom: {
  enabled: true,
  duration: 300,
  easing: 'ease-in',
}
});
/*------------------------------------------------------
    Javascript Function for Fun facts counterUp
--------------------------------------------------------*/
  (function () {
    $('.st-counter').counterUp({
      delay: 10,
      time: 2000
  });
  }()); 

/*------------------------------------------------------------
Javascript Function for initialize owl carousel testimonial
--------------------------------------------------------------*/
  $("#testimonial-slider").owlCarousel({
      loop:true,
      margin:20,
      width:560,
      dots:false,
      nav:false,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout:2000,
      responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:2
    }
  }
  });

/*------------------------------------------------------------
  Javascript Function for initialize owl carousel   BRANDS AREA
--------------------------------------------------------------*/
$('.owl-carousel').owlCarousel({
  ltr:true,
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  autoplayHoverPause:true,
  autoplayTimeout:3000,

  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})


});





