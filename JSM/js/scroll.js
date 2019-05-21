// scroll.js
//
jQuery(".scroll").draggable({
    cursor: "move",
    containment: "parent",
    stop: function() {
      if(jQuery(".scroll").position().left < 1)
          jQuery(".scroll").css("left", "720px");
    }
});