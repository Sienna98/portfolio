$("#About").click(function () {
  var position = $("#Menu1").offset();
  $("html body").stop().animate({scrollTop:position.top},500)
});