
$(document).ready(function() {
    $(".faqAnswer_s").hide();
    $(".faqList_s>li").click(function() {
        let answer = $(this).next(".faqAnswer_s");
        $(".faqAnswer_s").not(answer).slideUp();
        answer.stop(true, true).slideToggle();
    });
});