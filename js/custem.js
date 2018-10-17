/*global $, console, alert*/
$(document).ready(function () {
    'use strict';
    
    //triggr the nice scroll
    $('html').niceScroll({
        
        cursorcolor: '#f7600e',
        cursorwidth: '10px',
        cursorborderradius: 'none',
        cursorborder: '1px solid #f7600e'
    });
    
    
    //header height
    
    $(window).each(function () {
        
        $('header').height($(window).height());
    });
    
    //scroll to featuers
    
    $('.header .arrow i').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.featuers').offset().top
            
        }, 1000);
    });
    
    //scroll to our team
    $('.hire').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('.team').offset().top
            
        }, 1000);
    });
    
    //show hidden items
    $('.show-more').click(function () {
        
        $('.items-box .hidden').fadeIn(2000);  
    });
    
   ///move test
    var rightarrow = $('.test .fa-chevron-right'),
        
        leftarrow = $('.test .fa-chevron-left');
    
    function checkclient() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftarrow.fadeOut();
        } else {
            leftarrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('active')) {
            
            rightarrow.fadeOut();
        } else {
            rightarrow.fadeIn();
        }
    }
    
    checkclient();
    
    $('.test i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.test .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkclient();
            });
           
        } else {
            
            $('.test .active').fadeOut(1000, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkclient();
            });
        }
        
        
    });
});