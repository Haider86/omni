$(document).ready(function () {

    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px'
        });
    
    
    
    $('h1').click(function(){
        $(this).css('color', 'ff0000');
    });
    
    
    
    new GMaps({
  div: '.map',
  lat: -12.043333,
  lng: -77.028333
    });




});



/*


var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})


*/