(function ($) {
  // Infobox behaviour
  Drupal.behaviors.penelopeBoyd42Infobox = {
    attach: function () {
      $('.gallery-item')
      .hover(function () {
        $(this).children('.info-box').fadeToggle();
      });
    }
  };
})(jQuery);
