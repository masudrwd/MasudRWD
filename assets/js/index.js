window.onload = function(){
  document.querySelector("#preloader").style.display = "none";
}

$(document).ready(function () {

  // Nav bar section
  $('.bars').click(function () {
      $(this).toggleClass('toggle-bars');
      $('.nav-bar').toggleClass('nav-bar-toggle');
  });

  $('.nav-linkz').click(function () { 
      $('.bars').removeClass('toggle-bars');
      $('.nav-bar').removeClass('nav-bar-toggle');
  });
// On scroll with nav
  $(window).on('load scroll', function () {
      $('.bars').removeClass('toggle-bars');
      $('.nav-bar').removeClass('nav-bar-toggle');
      $('nav').toggleClass('bgs')


      var scroll = $(window).scrollTop();
      if (scroll > 10) {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      };
  });

  // Type js
  var typed = new Typed(".typed", {
      strings: [ "Web Designer", "Front-end Developer", "Graphic Designer", "Freelancer"],
      smartBackspace: true,
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
      loopCount: Infinity,
      smartDelay: 1000,
  });

  // Cicle ProgressBar
  var waypoint = new Waypoint({
      element: document.getElementById('Progress'),
      handler: function(direction) {
        let circleProgressBar = {
          startAngle: -1.55,
          size: 155,
          value: 0.95,
          thickness: 10,
          fill: {color: "#FF00CC"}
        }
        
        $('.circle .bar').circleProgress(circleProgressBar).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).parent().find('span').text(String(stepValue.toFixed(2).substr(2)) + "%")
        })
        
        $('.ai .bar').circleProgress({
          value: 0.65
        })
        
        $('.xd .bar').circleProgress({
          value: 0.76
        })
          
        $('.figma .bar').circleProgress({
          value: 0.87
        })
      }, offset: "90%"
  })
  

  // Skill Bar
  var waypoint = new Waypoint({
      element: document.getElementsByClassName('progress'),
      handler: function (direction) {
          var p = $('.progress-bar');
          $(p[0]).css({ "width": "98%", "background": "#FF00CC", "transition": "all 1s linear" });
          $(p[1]).css({ "width": "89%", "background": "#FF00CC", "transition": "all 1.5s linear" });
          $(p[2]).css({ "width": "80%", "background": "#FF00CC", "transition": "all 1.8s linear" });
          $(p[3]).css({ "width": "60%", "background": "#FF00CC", "transition": "all 2s linear" });
          $(p[4]).css({ "width": "65%", "background": "#FF00CC", "transition": "all 2.3s linear" });
          $(p[5]).css({ "width": "75%", "background": "#FF00CC", "transition": "all 2.7s linear" });
      }, offset: '90%'
  });

  // portfolio magnific
  $('.p-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled:false
    }
  });

  // portfolio isotop effect
  var $grid = $('.p-gallery');
    $grid.isotope({
    itemSelector: '.p-list-img',
    masonry: {
    isFitWidth: false
    }
    });
      
    var $buttonGroup = $('.p-controlls');
    $buttonGroup.on( 'click', 'li', function( event ) {
      $buttonGroup.find('.p-active').removeClass('p-active');
      var $button = $( event.currentTarget );
      $button.addClass('p-active');
      var filterValue = $button.attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  
  // hover attribute hidden
    $('a').hover(
      function () {
        $(this).data('title',$(this).attr('title')).removeAttr('title');
      }, 
      function () {
        $(this).attr('title', $(this).data('title'));
      }
  );

  // hover attribute show when click
  $('a').click(
    function () {
      $(this).data('title',$(this).attr('title')).attr(`<div class=&quot;p-bg&quot;>
      <div class=&quot;boxs&quot;>
          <h3>Project Title here</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laboriosam?</p>
          <div class=&quot;p-group&quot;>
              <div class=&quot;btns&quot;>Live Preview</div>
              <div class=&quot;btns&quot;>View on behance</div>
          </div>
      </div>
  </div>`);
    }, 
    function () {
      $(this).attr('title', $(this).data('title'));
    }
  );


  //Navbar click
  $(window).on('scroll',function(){

    var link = $('.nav-bar li a');
    var top = $(window).scrollTop();

    $('section, header').each(function () {
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if (top >= offset && top < offset + height) {
        link.removeClass('active');
        $('.nav-bar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });

    // Mobile Browser's head theme
    var m = document.createElement('meta'); 
    m.name = 'theme-color';
    m.content = '#FF00CC';
    document.head.appendChild(m);

  });

  // swipper js

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    loop: true,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  AOS.init({
    once: true,
    duration: 1000,
    delay: 100,
  });

  $('.p-controlls ul li').click(function () { 
    AOS.init({
      disable: true,
    });
  });

  

});
