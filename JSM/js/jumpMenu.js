//jumpMenu.js

$(function() {
    $(".item_option > h5").click(function() {
        $(this).css({border: "2px solid #ccc"});
        $(this).parent(".item_option").children("ul").css({display: "block"});
    });

    $(".item_option > ul > li").click(function() {
        $(".item_option > ul > li").css({color: "#ccc"});
        $(this).css({color: "#fff"});

        var selected = $(this).clone();
        $(this).closest("div").find("h5").empty();
        $(this).closest("div").find("h5").html(selected);
        $(this).closest("div").find("h5").css({border: "none"});
        $(this).closest("ul").css({display: "none"});
        $(this).closest(".item_option").css({display: "block"});
        $(this).parents("li").children("a").children(".item_review").css({display: "none"});
    });

    $(".item_option").mouseleave(function() {
        $(this).children("h5").css({border: "none"});
        $(this).children("ul").css({display: "none"});
    });
});