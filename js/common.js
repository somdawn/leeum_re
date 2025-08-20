$(function () {
    let $header = $("header");
    let $navBar = $(".nav_bar_sr");

    $navBar.hide();
    $header.on("mouseenter", "nav ul li", function () {
        $navBar.stop().slideDown(200);
    });

    $header.on("mouseleave", function () {
        $navBar.stop().slideUp(200);
    });


    $(".language_sr").click(langBtn);
    $(".m_language_sr").click(langBtn);
    function langBtn(){
            $("a").on("click",function (e) {  //(e) 는 event의 약자임
                e.preventDefault();
                })
            $(this).toggleClass("click");
            var $text = $(this).find("span"); //find 후손 
            if ($text.text() == "KOR") {
                $text.text("ENG");
                $(this).addClass("click");
            } else {
                $text.text("KOR");
                $(this).removeClass("click");
            }
        
    }

    
    $(".tbmb_nav_sr").removeClass("open");


    $(".threeline_toggle_sr").on("click", function () {
        $(this).toggleClass("open");
        $(".tbmb_nav_sr").toggleClass("open");
       
    });

    $(".close_nav_sr").on("click", function () {
        $(".tbmb_nav_sr").removeClass("open");
        $(".threeline_toggle_sr").removeClass("open");
    
    });



});//end