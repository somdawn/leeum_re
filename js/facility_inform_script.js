$(document).ready(function () {
$(".amenities_s").mouseenter(function () {
    $(this).find(".underLine_s").addClass("active_s");
}).mouseleave(function () {
    $(this).find(".underLine_s").removeClass("active_s");
});

})