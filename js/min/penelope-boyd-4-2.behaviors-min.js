!function($){Drupal.behaviors.penelopeBoyd42Infobox={attach:function(){$(".gallery-item").hover(function(){console.log("Hover"),$(this).children(".fade").fadeToggle()})}},Drupal.behaviors.penelopeBoyd42InfoboxClass={attach:function(){function o(){var o=e.width();o>990?$(".gallery-item .info-box").addClass("fade"):$(".gallery-item .info-box").removeClass("fade")}var e=$(window);o(),$(window).resize(o)}},Drupal.behaviors.penelopeBoyd42TopMenu={attach:function(){function o(o){var e=parseFloat($("body").css("font-size"));return e*o}function e(){var e=n.width();e>o(48)?($(".top-menu-control").hide(),$(".hide-items").css({display:"block",overflow:"visible"})):0===$(".top-menu-control").length?($(".top-menu").prepend('<div class="top-menu-control"><a class="top-menu-control-button close" href="javascript:void(0)"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a></div>'),$(".top-menu-control-button").click(function(){$(this).hasClass("open")?($(this).addClass("close").removeClass("open"),$(".hide-items").slideUp()):($(this).addClass("open").removeClass("close"),$(".hide-items").slideDown())}),$(".top-menu-control").siblings(".menu").addClass("controlled"),$(".controlled li").wrapAll('<div class="hide-items" />'),$(".hide-items").hide()):($(".top-menu-control").show(),$(".hide-items").hide())}var n=$(window);e(),$(window).resize(e)}}}(jQuery);