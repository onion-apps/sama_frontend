
$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  50,
        end:    100,
        easing: 'swing',
        duration: 600,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 100,duration: 4000});
$('#number2').jQuerySimpleCounter({end: 1000000,duration:2500});


