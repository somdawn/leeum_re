$(document).ready(function () {
  $(".box_jy").on("click", function () {
    // 클릭된 버튼 색상 변경
    $(".box_jy").removeClass("color");
    $(this).addClass("color");

    // 클릭된 카테고리 가져오기
    let category = $(this).text().trim();

    // 전체 선택 시 모든 카드 보이기
    if (category === "전체") {
      $(".newsletter_grid_box_jy").show();
    } else {
      $(".newsletter_grid_box_jy").each(function () {
        let itemCategory = $(this).data("category");
        if (itemCategory === category) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  });



  // let pages = ["page2.html", "page3.html", "page4.html"];

  // pages.forEach(function (url) {
  //   $.get(url, function (data) {
  //     let items = $(data).find(".newsletter_grid_box_jy");
  //     $(".newsletter_grid_jy").append(items);
  //   });
  // });
});