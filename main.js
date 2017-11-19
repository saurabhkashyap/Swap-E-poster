$(document).ready(function(){
// Swipe Right Function
    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Like!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right dragUp dragdown').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right dragUp dragdown').fadeIn(400);
       }
    });  
// Swipe Left Function
   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');
    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right dragUp dragdown').fadeIn(300);
	   $(this).addClass('EndText').delay(700).fadeOut(1);
	    $(this).append('<div class="status EndText">End E-Posters!</div>');
     // alert('OUPS');
     } else {
        $(this).next().removeClass('rotate-left rotate-right dragUp dragdown').fadeIn(400);
    } 
  });
  //Swipe Up Function
	 $(".buddy").on("swipeup",function(){
      $(this).addClass('dragUp').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();
      $(this).append('<div class="status superlike">Super Like!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right dragUp dragdown').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right dragUp dragdown').fadeIn(400);
       }
    }); 
	//Swipe Down Function
	$(".buddy").on("swipedown",function(){
      $(this).addClass('dragdown').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();
      $(this).append('<div class="status brilliant">Brilliant!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right dragUp dragdown').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right dragUp dragdown').fadeIn(400);
       }
    });
});

// Function CallBack based on event tracker
(function( $, window, undefined ) {

    //custom handleSwipe with swiperight, swipeleft, swipeup, swipedown
    $.event.special.swipe.handleSwipe = function( start, stop, thisObject, origTarget ) {
        if ( stop.time - start.time < $.event.special.swipe.durationThreshold ) {
            var horSwipe = Math.abs( start.coords[0] - stop.coords[0] ) > $.event.special.swipe.horizontalDistanceThreshold;
            var verSwipe = Math.abs( start.coords[1] - stop.coords[1] ) > $.event.special.swipe.verticalDistanceThreshold;
            if( horSwipe != verSwipe ) {
                var direction;
                if(horSwipe)
                    direction = start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight";
                else
                    direction = start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown";
                $.event.trigger($.Event( "swipe", { target: origTarget, swipestart: start, swipestop: stop }), undefined, thisObject);
                $.event.trigger($.Event( direction, { target: origTarget, swipestart: start, swipestop: stop }), undefined, thisObject);
                return true;
            }
            return false;
        }
        return false;
    }

    //do binding
    $.each({
        swipeup: "swipe.up",
        swipedown: "swipe.down"
    }, function( event, sourceEvent ) {
        $.event.special[ event ] = {
            setup: function() {
                $( this ).bind( sourceEvent, $.noop );
            },
            teardown: function() {
                $( this ).unbind( sourceEvent );
            }
        };
    }); 
})( jQuery, this );