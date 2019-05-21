//jumpMenu.js

$(function() {
    var open = false;
    
    $(".sort > ul").click(function() {
        open = !open;        
        
        if (open) {
            $(".sort > ul").addClass("open");
        }
    });

    $(".sort > ul > li").click(function() {
        
        if (open) {
            var selected = $(this).clone();
        
            $(".sort > ul > li:first-child").html(selected);
            $(".sort > ul").removeClass("open");
        }
    });
});
