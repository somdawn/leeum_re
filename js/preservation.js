$(function(){
  $( ".mask_sr" ).resizable();
  
  var $items = $(".fade_up");
  animateFadeUp();
  $(window).on("scroll", animateFadeUp);

  function animateFadeUp() {
    var scrollNum = $(window).scrollTop() + $(window).height();

    $items.each(function() {
      var $el = $(this);
      if (!$el.data("animated") && $el.offset().top < scrollNum - 100) {
        $el.data("animated",true).animate({ opacity: 1, top: 0 },600);
      }
    });
  }

})//end