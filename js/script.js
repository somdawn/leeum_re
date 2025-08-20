$(document).ready(function () {
    $(".card img").hover(
      function () {
        $(this).addClass("hover-scale");
      },
      function () {
        $(this).removeClass("hover-scale");
      }
    );
    $(document).ready(function () {
        let slides = $(".slide");
        let currentIndex = 0;
        let slideCount = slides.length;
      
        setInterval(() => {
          slides.eq(currentIndex).removeClass("active");
          currentIndex = (currentIndex + 1) % slideCount;
          slides.eq(currentIndex).addClass("active");
        }, 2000); 
      });
      $('.thumb')
      .on('mouseenter', function(){ $(this).addClass('hovered'); })
      .on('mouseleave', function(){ $(this).removeClass('hovered'); });
      const tiltFor = function($el, e){
        const rect = $el[0].getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;   
        const py = (e.clientY - rect.top)  / rect.height;  
        const isSmall = window.matchMedia('(max-width: 640px)').matches;
        const tiltMax = isSmall ? 4 : 8; 
    
        const rx = (py - 0.5) * (-tiltMax * 2); 
        const ry = (px - 0.5) * ( tiltMax * 2); 
    
       
        $el.css({
          '--rx': rx.toFixed(2) + 'deg',
          '--ry': ry.toFixed(2) + 'deg',
          '--mx': (px * 100) + '%',
          '--my': (py * 100) + '%'
        });
      };
    
    
      $('.card').attr('tabindex', 0);
    
 
      $(document)
        .on('mouseenter focusin', '.card', function(){
          $(this).addClass('is-hovered');
        })
        .on('mousemove', '.card', function(e){
      
          if ($(this).hasClass('is-hovered')) tiltFor($(this), e);
        })
        .on('mouseleave blur', '.card', function(){
          $(this).removeClass('is-hovered')
                 .css({'--rx':'0deg','--ry':'0deg'});
        });
  });
