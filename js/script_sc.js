$(document).ready(function () {
    $('.art_img_sc').hover(
      function () {
        $(this).find('.overlay_sc').animate({top: '0' }, 300);
      },
      function () {
        $(this).find('.overlay_sc').animate({top: '-40px' }, 200);
      }
    )
})