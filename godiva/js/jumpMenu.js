$(function() {
  setInterval(function() {
    var wHeight = $(window).height();

    if ($(window).width() < 1367) {
      $("#main_nav").css({
        height: (wHeight - 100) + "px"
      });
    } else {
      $("#main_nav").css({
        height: "65px"
      });
    }
  }, 20);

  var liAry=[];

  for (var i = 0; i < $("#main_nav > ul > li").length; i++) {
    liAry[i] = false;
  }

  $("#main_nav > ul > li > h3").click(function() {
      //클릭된 메뉴의 인덱스
      var index = $(this).parent("li").index();
      liAry[index] = !liAry[index];

      //클릭된 메뉴의 서브메뉴의 갯수와 그 길이
      var liIndex = $(this).siblings(".sub_menu").children("li").length;
      var subLength = liIndex * 50 + 80;

      //클릭된 메뉴의 높이 변경


      //클릭된 메뉴 오픈
      if (liAry[index]) {
        $(this).parent("li").css({
          height: subLength + "px"
        });

        $(this).siblings(".sub_menu").children("li").css({
          height: 50 + "px"
        });
      } else {
        $(this).parent("li").css({
          height: 80 + "px"
        });

        $(this).siblings(".sub_menu").children("li").css({
          height: 0 + "px"
        });
      }
  });

  $(".toggle_menu").click(function() {
      $("#main_nav > ul > li").css({
          height: 80 + "px"
        });

        $(".sub_menu > li").css({
          height: 0 + "px"
        });
  });
});