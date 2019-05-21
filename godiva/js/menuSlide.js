$(function() {
    var index = 0;
    var mIndex = 0;
    var timerId = 0;
    var itemWidth = $("#item_wrap > .s_item").width();
    var windowWidth = $(window).width();

    if ($(window).width() > 1366) {
        auto();
    }

    $(window).resize(function() {
        clearInterval(timerId);
        move(index);

        itemWidth = $("#item_wrap > .s_item").width();
        windowWidth = $(window).width();

        if (windowWidth > 1366){
            auto();

            $("#item_wrap").css({
                left: 0
            });
            $("#season > .btn_prev").css({
                display: "block"
            });
            $("#season > .btn_next").css({
                display: "block"
            });
            $("#menu > .btn_next").css({
                  display: "none"
            });
            $("#menu > .btn_prev").css({
                display: "none"
            });
        } else {
            clearInterval(timerId);
        }
    });

    function auto() {
        timerId = setInterval(function() {
            index++;

            if (index > 4) { index = 0; }

            move(index);
        }, 5000);
    }

    $("#season_wrap > .btn_next").hover(
        function() {
            clearInterval(timerId);
        }, function() {
            if (windowWidth > 1366){
                auto();
            }
        }
    );

    $("#season_wrap > .btn_next").click(function() {
        index++;

        if (index > 4) { index = 0; }

        move(index);
    });

    $("#season_wrap > .btn_prev").hover(function() {
            clearInterval(timerId);
        }, function() {
            if (windowWidth > 1366){
                auto();
            }
        }
    );

    $("#season_wrap > .btn_prev").click(function() {
        index--;

        if (index < 0) { index = 4; }

        move(index);
    });

    function move(iIndex) {

        $("#item_wrap > .s_item").removeClass("active");
        $("#item_wrap > .s_item").eq(iIndex).addClass("active");


        if (windowWidth < 1367) {
            var iWidth = itemWidth * (iIndex);

            if (windowWidth > 766) {
                iWidth = itemWidth * (iIndex - 1);

                if (iIndex < 1) { iWidth = 0; }
                if (iIndex > 3) { iWidth = itemWidth * 2; }
            }

            $("#item_wrap").css({
                left: -iWidth + "px"
            });

            if (iIndex < 1) {
                $("#season_wrap > .btn_prev").css({
                    display: "none"
                });
                $("#season_wrap > .btn_next").css({
                    display: "block"
                });
            } else if (1 <= iIndex && iIndex <= 3) {
                $("#season_wrap > .btn_prev").css({
                    display: "block"
                });
                $("#season_wrap > .btn_next").css({
                    display: "block"
                });
            } else {
                $("#season_wrap > .btn_prev").css({
                    display: "block"
                });
                $("#season_wrap > .btn_next").css({
                    display: "none"
                });
            }
        }
    }

    $("#menu > .btn_next").click(function() {
        mIndex++;

        mMove(mIndex);
    });

    $("#menu > .btn_prev").click(function() {
        mIndex--;

        mMove(mIndex);
    });

    function mMove(i) {
        $("#menu_wrap > ul").css({
            left: -180 * i + "px"
        });

        if (i < 1) {
            $("#menu > .btn_prev").css({
                display: "none"
            });
            $("#menu > .btn_next").css({
                display: "block"
            });
        } else if (1 <= i && i <= 4) {
            $("#menu > .btn_prev").css({
                display: "block"
            });
            $("#menu > .btn_next").css({
                display: "block"
            });
        } else {
            $("#menu > .btn_prev").css({
                display: "block"
            });
            $("#menu > .btn_next").css({
                display: "none"
            });
        }
    }
});