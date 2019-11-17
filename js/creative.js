let scroll_1000_event = false;
let share_event = false;
let video_event = false;
let store_event = false;

(function ($) {
  "use strict"; // Start of use strict

  let agent = navigator.userAgent.toLowerCase();

  if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
    document.getElementById("ie_warn").style.display = 'block';
  }

  /*let filter = "win32|win64";
  if (navigator.platform) {
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
      //mobile
      document.getElementById("share-button").style.display = "block";
    } else {
      //pc 

      document.getElementById("store-button").style.display = "block";
    }
  }*/

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }

    if ($("#mainNav").offset().top > 999.9 && scroll_1000_event === false) {
      gtag('event', 'scroll_1000', {
        'event_category': 'scroll'
      });
      scroll_1000_event = true;
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  /*$(".youtube-popup").grtyoutube({
    autoPlay: true,
    theme: "light"
  });
  document.getElementById('play_video').onclick = function () {
    if(video_event === false) {
      gtag('event', 'play_video', {
        'event_category': 'button'
      });
      video_event = treu;
    }
  }*/

  $('.carousel-posts').owlCarousel({
    autoplay: false,
    autoHeight: true,
    center: false,
    loop: false,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    dots: true,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  $('.popup-img').popupimg();

  //document.querySelector('#share').addEventListener('click', WebShare);
  /*document.getElementById('share').onclick = function () {
    if(share_event === false) {
      gtag('event', 'share', {
        'event_category': 'button'
      });
      share_event = true;
    }
    
    WebShare();
  }*/

  /*document.getElementById('store').onclick = function () {
    let gtag_ignore = true;

    if(agent.indexOf("windows nt 10.0")!= -1) {
      gtag_ignore = false;
    } else {
      alert("윈도우10에서만 지원됩니다.");
    }

    if(store_event === false && gtag_ignore === false) {
      gtag('event', 'click_store', {
        'event_category': 'button'
      });
    }
  }*/

  setTimeout(function () {
    gtag('event', 'timeout_45s', {
      'event_category': 'timeout'
    });
  }, 45000);
})(jQuery); // End of use strict


async function WebShare() {
  if (navigator.share === undefined) {
    return;
  }

  const title = "CCPatents";
  const text = "무료! 특허 검색식 자동화 프로그램. 클릭 몇 번으로 키프리스 검색식이 뚝.딱.";
  const url = "https://www.ccpatents.net";
  try {
    await navigator.share({
      title,
      text,
      url
    });
  } catch (error) {
    return;
  }
}