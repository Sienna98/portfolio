//circleBox1
$(function () {

  var bar1 = new ProgressBar.Circle(circleBox1, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 1500,
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
    duration: 1500,
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
    duration: 1500,
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
    duration: 1500,
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
    duration: 1500,
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

    // console.log(p1ht);
    // console.log(p2ht);
    // console.log(bt);
    //1페이지 높이보다 크면 시작
    if (bt > p1ht + p2ht +350) {
      bar1.text.style.fontFamily = 'Raleway, sans-serif';
      bar1.text.style.fontSize = '2rem'
      bar1.animate(0.9); //1.1(0%)~1.0(100%)

      bar2.text.style.fontFamily = 'Raleway, sans-serif';
      bar2.text.style.fontSize = '2rem'
      bar2.animate(0.9); //1.1(0%)~1.0(100%)

      bar3.text.style.fontFamily = 'Raleway, sans-serif';
      bar3.text.style.fontSize = '2rem'
      bar3.animate(0.6); //1.1(0%)~1.0(100%)

      bar4.text.style.fontFamily = 'Raleway, sans-serif';
      bar4.text.style.fontSize = '2rem'
      bar4.animate(1.0); //1.1(0%)~1.0(100%)

      bar5.text.style.fontFamily = 'Raleway, sans-serif';
      bar5.text.style.fontSize = '2rem'
      bar5.animate(0.9); //1.1(0%)~1.0(100%)

    }

  });
});