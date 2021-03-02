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
  
    feedbackSlider.on("translate.owl.carousel", function(){
      $(".feedback-slider-item h3").removeClass("animated fadeIn").css("opacity", "0");
      $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").removeClass("animated zoomIn").css("opacity", "0");
    });
  
    feedbackSlider.on("translated.owl.carousel", function(){
      $(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
      $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").addClass("animated zoomIn").css("opacity", "1");
    });
    feedbackSlider.on('changed.owl.carousel', function(property) {
      var current = property.item.index;
      var prevThumb = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
      var nextThumb = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
      var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('span').attr('data-rating');
      var nextRating = $(property.target).find(".owl-item").eq(current).next().find('span').attr('data-rating');
      $('.thumb-prev').find('img').attr('src', prevThumb);
      $('.thumb-next').find('img').attr('src', nextThumb);
      $('.thumb-prev').find('span').next().html(prevRating + '<i class="fa fa-star"></i>');
      $('.thumb-next').find('span').next().html(nextRating + '<i class="fa fa-star"></i>');
    });
    $('.thumb-next').on('click', function() {
      feedbackSlider.trigger('next.owl.carousel', [300]);
      return false;
    });
    $('.thumb-prev').on('click', function() {
      feedbackSlider.trigger('prev.owl.carousel', [300]);
      return false;
    });
    
  }); //end ready

 