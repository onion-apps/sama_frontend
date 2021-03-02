// Back to top

$(document).on('ready', function() {
    "use strict";
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

});
jQuery(document).ready(function($) {

    var feedbackSlider = $('.feedback-slider');
    feedbackSlider.owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      autoplay: true,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
      responsive:{
  
        // breakpoint from 767 up
        767:{
          nav: true,
          dots: false
        }
      }
    });
  
    $(document).ready(function() {

        $('.owl-carousel').owlCarousel({
        mouseDrag:false,
        loop:true,
        margin:2,
        nav:true,
        responsive:{
        0:{
        items:1
        },
        600:{
        items:1
        },
        1000:{
        items:3
        }
        }
        });

        $('.owl-prev').click(function() {
            $active = $('.owl-item .item.show');
            $('.owl-item .item.show').removeClass('show');
            $('.owl-item .item').removeClass('next');
            $('.owl-item .item').removeClass('prev');
            $active.addClass('next');
            if($active.is('.first')) {
            $('.owl-item .last').addClass('show');
            $('.first').addClass('next');
            $('.owl-item .last').parent().prev().children('.item').addClass('prev');
            }
            else {
            $active.parent().prev().children('.item').addClass('show');
            if($active.parent().prev().children('.item').is('.first')) {
            $('.owl-item .last').addClass('prev');
            }
            else {
            $('.owl-item .show').parent().prev().children('.item').addClass('prev');
            }
            }
            });
            
            $('.owl-next').click(function() {
            $active = $('.owl-item .item.show');
            $('.owl-item .item.show').removeClass('show');
            $('.owl-item .item').removeClass('next');
            $('.owl-item .item').removeClass('prev');
            $active.addClass('prev');
            if($active.is('.last')) {
            $('.owl-item .first').addClass('show');
            $('.owl-item .first').parent().next().children('.item').addClass('prev');
            }
            else {
            $active.parent().next().children('.item').addClass('show');
            if($active.parent().next().children('.item').is('.last')) {
            $('.owl-item .first').addClass('next');
            }
            else {
            $('.owl-item .show').parent().next().children('.item').addClass('next');
            }
            }
            });
            
            });        
 