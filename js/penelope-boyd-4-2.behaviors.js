(function ($) {
  // Infobox behaviour
	Drupal.behaviors.penelopeBoyd42Infobox = {
		attach: function () {
			$('.gallery-item').hover(function () {
				console.log('Hover');
				$(this).children('.fade').fadeToggle();
			});
		}
	};

	// Turning on and off the Infobox fadeToggle.
  	Drupal.behaviors.penelopeBoyd42InfoboxClass = {
	  	attach: function () {
	  		var $window = $(window);

	  		function checkWidth() {
	  			var windowsize = $window.width();
	  			if (windowsize > 990) {
		            // If the window is greater than 990 wide then add the 'infobox' class.
		            $('.gallery-item .info-box').addClass('fade');
		        } else {
		        	$('.gallery-item .info-box').removeClass('fade');
		        }
		    }

		    // Execute on load
		    checkWidth();

		    // Bind event listener
		    $(window).resize(checkWidth);
		}
	};
	Drupal.behaviors.penelopeBoyd42TopMenu = {
    // Shows and hides the top menu depending on the browser width.
    attach: function () {
      // This function converts ems to pixels.
      function em(input) {
        var emSize = parseFloat($('body').css('font-size'));
        return (emSize * input);
      }
      var $window = $(window);
      function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > em(48)) {
          // function to remove the drop-down goes here
          $('.top-menu-control').hide();
          $('.hide-items').css({'display': 'block', 'overflow': 'visible'});
        } else {
          // function to add the drop-down goes here.
          if($('.top-menu-control').length === 0) {
            $('.top-menu').prepend('<div class="top-menu-control"><a class="top-menu-control-button close" href="javascript:void(0)"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a></div>');
            $('.top-menu-control-button').click(function() {
              if($(this).hasClass('open')) {
                $(this).addClass('close').removeClass('open');
                $('.hide-items').slideUp();
              } else {
                $(this).addClass('open').removeClass('close');
                $('.hide-items').slideDown();
              }
            });
            $('.top-menu-control').siblings('.menu').addClass('controlled');
            $('.controlled li').wrapAll('<div class="hide-items" />');
            $('.hide-items').hide();
          } else {
            // Do this if the added elements already exist so things aren't added twice.
            $('.top-menu-control').show();
            $('.hide-items').hide();
          }
        }
      }
      checkWidth();
      $(window).resize(checkWidth);
    }
  };
})(jQuery);
