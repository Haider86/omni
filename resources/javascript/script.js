$(document).ready(function () {
    /*sticky navigation*/
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px'
        });
    
    //scroll down to section plan 
    $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 4000);
    });
    
    /* scroll down to section featuers*/
    $('.js--scroll-to-start').click(function(){
        $('html , body').animate({scrollTop: $('.js--section-features').offset().top}, 2000);
    });
    
    // back to header
    
    $('.js--logo-black').click(function(){
        $('html , body').animate({scrollTop: $('.js--logo').offset().top}, 2000);
    });
    
    
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    // animation 
    
    
    $('.js--ws-1').waypoint(function(direction){
        $('.js--ws-1').addClass('animated fadeIn');
    },
        {offset: '50%'
      }
     );
     $('.js--ws-2').waypoint(function(direction){
        $('.js--ws-2').addClass('animated fadeInUp');
    },
        {offset: '90%'
      }
     );
    
    $('.js--ws-3').waypoint(function(direction){
        $('.js--ws-3').addClass('animated fadeIn');
    },
        {offset: '50%'
      }
     );
    $('.js--ws-4').waypoint(function(direction){
        $('.js--ws-4').addClass('animated pulse');
    },
        {offset: '50%'
      }
     );
    
    
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
         
        
        nav.slideToggle(200);
    });
    
    
    
<<<<<<< HEAD
=======
    new GMaps({
  div: '.map',
  lat: -12.043333,
  lng: -77.028333
    });
>>>>>>> hns




});



/*


var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})


*/