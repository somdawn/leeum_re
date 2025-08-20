$(document).ready(function () {
    $(".circle1_s").mouseenter(function () {
        $(this).css({
            "background-image": "none",
            "background-color": "#212121",
            "color": "#fff"
        });
    }).mouseleave(function () {
        $(this).css({
            "background-image": "url(./../img/banner_1.jfif)",
            "background-color": " ",
            "color": "#212121"
        });
    });

    $(".circle2_s").mouseenter(function () {
        $(this).css({
            "background-image": "none",
            "background-color": "#212121",
            "color": "#fff"
        });
    }).mouseleave(function () {
        $(this).css({
            "background-image": "url(./../img/banner_2.jfif)",
            "background-color": " ",
            "color": "#212121"
        });
    });

    $(".visitBtn_s>a").mouseenter(function () {
        $(this).css("background-color", "#3B4350");
    }).mouseleave(function () {
        $(this).css("background-color", "#D0B890");
    });
});