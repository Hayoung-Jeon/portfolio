/* toggle_menu.js */

$(function() {
	var liAry = [];
	for(var i = 0; i < $("ul#main_nav > li").length; i++){
		liAry[i] = false;
	}

	$("ul#main_nav > li > strong").click(function() {
		var liIndex = $(this).parent("li").index();
		liAry[liIndex] = !liAry[liIndex];

		if(liAry[liIndex]){
			$(this).parent("li").children("ul").children("li").addClass("active");
		}else{
			$(this).parent("li").children("ul").children("li").removeClass("active");
		}
	});

	$("#header > label.toggle").click(function(){
		for(var i = 0; i < $("ul#main_nav > li").length; i++){
			liAry[i] = false;
		}

		setTimeout(function() {
            $("ul#main_nav > li > ul > li").removeClass("active");
        }, 500);

	});
});