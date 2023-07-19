

$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,




        animateOut: 'fadeOut',

        loop:true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true
   
    });





    $("#owl-demo2").owlCarousel({

        stagePadding: 40,
        loop:true,
        margin:10,
        nav: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1200:{
                items:8
            }
        },





        loop:true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true


      });
     
   
  });

