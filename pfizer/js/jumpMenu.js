// jumpMenu.js

$(function() {
	var liAry = [];
	var liAry2 = new Array();
	for (var i = 0; i < $(".t_nav1 > li").length; i++) {
		liAry[i] = false;
		liAry2[i] = new Array();

		for (var j = 0; j < $(".t_nav2 > li").length; j++) {
			liAry2[i][j] = false;
		}
	}

	$(".t_nav1 > li > h3").click(function() {
		var liIndex = $(this).parent("li").index();
		liAry[liIndex] = !liAry[liIndex];

		if (liAry[liIndex]) {
			$(this).parent("li").children(".t_nav2").addClass("active");
			$(this).addClass("rotate");
		} else {
			$(this).parent("li").children(".t_nav2").removeClass("active");
			$(this).removeClass("rotate");
		}
	});

	$(".t_nav2 > li > h3").click(function() {
		var liIndex1 = $(this).parent("li").parent("ul").parent("li").index();
		var liIndex2 = $(this).parent("li").index();
		liAry2[liIndex1][liIndex2] = !liAry2[liIndex1][liIndex2]

		if (liAry2[liIndex1][liIndex2]) {
			$(this).parent("li").children(".t_nav3").addClass("active");
		} else {
			$(this).parent("li").children(".t_nav3").removeClass("active");
		}
	});

	$("#header > label.toggle_menu").click(function(){
		for (var i = 0; i < $(".t_nav1 > li").length; i++) {
			liAry[i] = false;
			liAry2[i] = new Array();

			for (var j = 0; j < $(".t_nav2 > li").length; j++) {
				liAry2[i][j] = false;
			}
		}

		$(".t_nav1 > li > .t_nav2").removeClass("active");
		$(".t_nav2 > li > .t_nav3").removeClass("active");
	});
});