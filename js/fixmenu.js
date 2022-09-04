$(function () {

  var $win = $(window); //브라우저
  var $header = $('.header'); //header
  var hh = $header.height(); //header의 높이
  var $gnb = $('#gnb'); //#gnb
  /*     var $gu = $gnb.find('li'); //#gnb 내부 ul */
  var uw = $gnb.width(); //#gnb 내부 ul의 너비
  var asc = 700; //추가 스크롤 값

  $win.scroll(function () {

    if ($win.scrollTop() > hh + asc) {
      $gnb.addClass('sticky');
    } else {
      $gnb.removeClass('sticky');
    }
  });
});


