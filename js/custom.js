$(function () {
  $.backstretch('img/yellow1.jpg');
});


$(function () {

  var $win = $(window); //브라우저
  var $header = $('.header'); //header
  var hh = $header.height(); //header의 높이
  var $gnb = $('#gnb'); //#gnb
  /*     var $gu = $gnb.find('li'); //#gnb 내부 ul */
  var uw = $gnb.width(); //#gnb 내부 ul의 너비
  var asc = 50; //추가 스크롤 값

  $win.scroll(function () {

    if ($win.scrollTop() > hh + asc) {
      $gnb.css({
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 1000
      });
      $gnb.addClass('sticky');
    } else {
      $gnb.css({
        position: '',
        top: 0,
        fontSize: 16,
        // width: 100
      });
      $gnb.removeClass('sticky');
    }
  });
});


//circleBox1
$(function () {

  var bar1 = new ProgressBar.Circle(circleBox1, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 2000,
    color: '#fff',
    trailColor: '#aaa',
    trailWidth: 1,
    text: {
      autoStyleContainer: false
    },
    svgStyle: null,
    from: {
      color: '#999a9c',
      width: 2
    },
    to: {
      color: '#f6e25d',
      width: 4
    },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });





  var bar2 = new ProgressBar.Circle(circleBox2, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 2000,
    color: '#fff',
    trailColor: '#aaa',
    trailWidth: 1,
    text: {
      autoStyleContainer: false
    },
    svgStyle: null,
    from: {
      color: '#999a9c',
      width: 2
    },
    to: {
      color: '#f6e25d',
      width: 4
    },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  var bar3 = new ProgressBar.Circle(circleBox3, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 2000,
    color: '#fff',
    trailColor: '#aaa',
    trailWidth: 1,
    text: {
      autoStyleContainer: false
    },
    svgStyle: null,
    from: {
      color: '#999a9c',
      width: 2
    },
    to: {
      color: '#f6e25d',
      width: 4
    },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  var bar4 = new ProgressBar.Circle(circleBox4, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 2000,
    color: '#fff',
    trailColor: '#aaa',
    trailWidth: 1,
    text: {
      autoStyleContainer: false
    },
    svgStyle: null,
    from: {
      color: '#999a9c',
      width: 2
    },
    to: {
      color: '#f6e25d',
      width: 4
    },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  var bar5 = new ProgressBar.Circle(circleBox5, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 2000,
    color: '#fff',
    trailColor: '#aaa',
    trailWidth: 1,
    text: {
      autoStyleContainer: false
    },
    svgStyle: null,
    from: {
      color: '#999a9c',
      width: 2
    },
    to: {
      color: '#f6e25d',
      width: 4
    },
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });


  /* 지정스크롤 도착 */
  $(window).scroll(function () {

    //페이지 변수
    var $page1 = $('.header');
    var $page2 = $('.about-wrap');
    var $page3 = $('#works');

    //1페이지 높이
    var p1ht = $page1.height();
    var p2ht = $page2.height();

    //브라우저의 스크롤 위치
    var bt = $(this).scrollTop();

    console.log(p1ht);
    console.log(p2ht);
    console.log(bt);
    //1페이지 높이보다 크면 시작
    if (bt > p1ht + p2ht - 400) {
      bar1.text.style.fontFamily = 'Raleway, sans-serif';
      bar1.text.style.fontSize = '2rem'
      bar1.animate(1); //1.1(0%)~1.0(100%)

      bar2.text.style.fontFamily = 'Raleway, sans-serif';
      bar2.text.style.fontSize = '2rem'
      bar2.animate(1); //1.1(0%)~1.0(100%)

      bar3.text.style.fontFamily = 'Raleway, sans-serif';
      bar3.text.style.fontSize = '2rem'
      bar3.animate(0.9); //1.1(0%)~1.0(100%)

      bar4.text.style.fontFamily = 'Raleway, sans-serif';
      bar4.text.style.fontSize = '2rem'
      bar4.animate(0.9); //1.1(0%)~1.0(100%)

      bar5.text.style.fontFamily = 'Raleway, sans-serif';
      bar5.text.style.fontSize = '2rem'
      bar5.animate(0.7); //1.1(0%)~1.0(100%)

    }

  });
});

$( function () {

  var $win = $(window); //브라우저
  var $qm = $('#nav'); //퀵메뉴 ul
  var $qma = $('#nav > #gnb > li > a'); //퀵메뉴 내부 a

  //퀵메뉴 클릭시 페이지 이동
  $qma.click( function () {

    var go = $(this).attr('href'); //내부링크 아이디
    var speed = 1000; //이동속도(ms)

    //페이지 이동 애니메이션
    $('html, body').animate( {
      scrollTop: $(go).offset().top
    }, speed);
    // offset().top --- document 기준(절대) top
    // position().top --- 부모 요소 기준(상대) top

    //퀵메뉴 클릭시 .on 추가/제거
     $($qma).removeClass('on'); //이전 선택된 .on 제거
     $(this).addClass('on');

    return false;
  });

  // 스크롤 추적 - scrollspy
  function scrollSpy() {
    $('div.contents > div').each( function () {
      if( $(this).offset().top - $win.scrollTop() < 20) {
        $qma.removeClass('on');
        $qma.blur();
        $qm.find('[href=#'+ $(this).attr('id') + ']').addClass('on');
      }
    });
  }

    //브라우저 높이를 계산하여 #page1의 height 적용
    function fit () {
      var wh = $win.height();
      $('.header').css('height', wh);
    }
  //최초 로딩시 fit() 적용
  fit();

  //브라우저 크기 변경시 높이 적용
  $win.resize( function () { fit();});

});

  
$(function () {

  var $win = $(window); //브라우저
  var $top = $('#top'); //TOP 버튼
  var tpos = 500; //스크롤 위치(px)
  var et = 600; //효과시간(ms)
  var at = 2000; //애니메이션 시간(ms)
  console.log($top);
  //TOP 버튼 숨기기
  $top.hide();

  //스크롤시 TOP 버튼 페이딩
  $win.scroll(function () {

    if ($(this).scrollTop() > tpos) {
      $top.fadeIn(et);
    } else {
      $top.fadeOut(et);
    }
  });

  //TOP 버튼 클릭시 scrollTop: 0으로
  $top.click(function () {

    $('html, body').animate({
      scrollTop: 0
    }, at);
    return false;
  });
});