/*global $, window, document*/
$(document).ready(function () {   
    "use strict";
    $(window).scroll(function () {
       
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= navbar.height()) 
            {
                navbar.addClass('scrolled');
            } else {
                navbar.removeClass('scrolled');
            }
    });
    
    /************change active tab********************/
    $('.tabs li').click(function () {
        $(this).addClass('active').siblings().removeClass('active'); 
        $(".tabs .tabs-content >div").hide();
        $("." + $(this).data("class")).show();
    });
    
    /*****************scroll to top*****************/
    $(window).scroll(function () {
       
        var  scroll = $(".scroll");
        
        if ($(window).scrollTop() > 400) {
            
            scroll.show();
            
        } else {
            
            scroll.hide();
        }
    });
    
    $(".scroll i").on('click', function () {
        
       $("html").animate({scrollTop: 0}, 1000); 
    });
});   
/*************************start screen load****************/

    $(window).on('load', function(){
        $(".load").fadeOut(5000);
    
    /********************start nicescroll***************************/
    
     $("body").niceScroll({
         cursorcolor:"#d97935",
         zindex: "1000000",
         cursorborder:"none"
     });

});