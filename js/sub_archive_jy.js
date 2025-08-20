$(document).ready(function () {

  //image box1 - js
  $(window).scroll(function () {
    let scrollTop = $(document).scrollTop(); //스크롤 위치가 요소 위치보다 800px 가까워지면 → 애니메이션 시작

    let bottom_section_jy = $(".bottom_section_jy").offset().top; // .bottom_section_jy 요소의 문서 상단부터의 위치(top offset)를 가져옴

    //scrollTop가 .bottom_section_jy 요소의 top 위치에서 800px 위부터 800px 아래까지의 범위 안에 있을 때만 애니메이션 클래스(zoomIn)를 적용
    if (bottom_section_jy - 800 < scrollTop && scrollTop < bottom_section_jy + 800) {


      $(".bottom_box1_image_box_jy").addClass("zoomIn"); //조건 만족 O : zoomIn 클래스추가
    } else {
      $(".bottom_box1_image_box_jy").removeClass("zoomIn"); //조건 만족 X : zoomIn 클래스 제거
    }
  });



  //image box1_2 - js
  $(window).scroll(function () {
    let scrollTop = $(document).scrollTop(); //스크롤 위치가 요소 위치보다 800px 가까워지면 → 애니메이션 시작

    let bottom_section_jy = $(".bottom_section_2_jy").offset().top; // .bottom_section_jy 요소의 문서 상단부터의 위치(top offset)를 가져옴

    //scrollTop가 .bottom_section_jy 요소의 top 위치에서 800px 위부터 800px 아래까지의 범위 안에 있을 때만 애니메이션 클래스(zoomIn)를 적용
    if (bottom_section_jy - 800 < scrollTop && scrollTop < bottom_section_jy + 800) {


      $(".bottom_box1_2_image_box_jy").addClass("zoomIn"); //조건 만족 O : zoomIn 클래스추가
    } else {
      $(".bottom_box1_2_image_box_jy").removeClass("zoomIn"); //조건 만족 X : zoomIn 클래스 제거
    }
  });




  //스크롤 이벤트 이미지, 미술관 기록 텍스트박스 1
  $(window).scroll(function () {
    let scrollTop = $(document).scrollTop();

    let bottom_section_jy = $(".bottom_box1_text_jy").offset().top;
    if (bottom_section_jy - 1000 < scrollTop && scrollTop < bottom_section_jy + 1000) {
      $(".bottom_box1_text_jy").addClass("fadeIn");
    } else {
      $(".bottom_box1_text_jy").removeClass("fadeIn");
    }
  });

  //스크롤 이벤트 이미지, 미술관 기록 텍스트박스 2
  $(window).scroll(function () {
    let scrollTop = $(document).scrollTop();

    let bottom_section_2_jy = $(".bottom_box1_2_text_jy").offset().top;
    if (bottom_section_2_jy - 900 < scrollTop && scrollTop < bottom_section_2_jy + 900) {
      $(".bottom_box1_2_text_jy").addClass("fadeIn");
    } else {
      $(".bottom_box1_2_text_jy").removeClass("fadeIn");
    }
  });


  //장소 이미지 3개
  $(function () {
    $(".bottom_box2_jy img").on({
      "mouseenter": function () {
        $(this).addClass("img_effect");
      },
      "mouseleave": function () {
        $(this).removeClass("img_effect");
      }
    });
  });





}) //jquery end







