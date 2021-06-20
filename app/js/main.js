$(function() {

  $('.product-tabs__link').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__content').fadeIn().css('display', 'none');
    $($(this).attr('href')).fadeIn().css('display', 'block');
  })

  $('.product-slider__big').slick({
    asNavFor: '.product-slider__small',
    slidesToShow: 1,
    fade: true,
    arrows: false,
    speed: 1000,

  });

  $('.product-slider__small').slick({
    asNavFor: '.product-slider__big',
    slidesToShow: 3,
    focusOnSelect: true,
  });

  $('.catalog__switch').on('click', function() {
    $('.aside').toggleClass('aside--active');
  });

  $('.catalog__select').styler({});

  $('.aside__price-input').ionRangeSlider({
    type: "double",

    onStart: function (data) {
      $('.aside__price-from').text("$" + data.from);
      $('.aside__price-to').text("$" + data.to);
    },

    onChange: function (data) {
      $('.aside__price-from').text("$" + data.from);
      $('.aside__price-to').text("$" + data.to);
    },
  });

  wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       false,       
    live:         true   
  }
  )
  wow.init();

  $('.header__burger, .menu__item').on('click', function() {
      $('.header__burger').toggleClass('header__burger--active');
      $('.menu__list').toggleClass('menu__list--active');
      $('body').toggleClass('lock');
  });

  $('.banner__list').slick({
      fade: true,
      arrows: false,
      autoplay: true,
      speed: 1200,
      pauseOnFocus: false,
      pauseOnHover: false,
      dots: true,
      responsive: [
          {
            breakpoint: 760,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
      ]
  });

  $('.popular__list').slick({

    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35pt" height="35pt" viewBox="0 0 35 35" version="1.1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(255%,255%,255%);fill-opacity:1;" d="M 14.128906 17.507812 L 27.222656 4.414062 C 27.582031 4.054688 27.78125 3.574219 27.78125 3.058594 C 27.78125 2.546875 27.582031 2.066406 27.222656 1.707031 L 26.074219 0.558594 C 25.714844 0.199219 25.234375 0 24.722656 0 C 24.207031 0 23.726562 0.199219 23.367188 0.558594 L 7.777344 16.148438 C 7.414062 16.511719 7.21875 16.992188 7.21875 17.507812 C 7.21875 18.023438 7.414062 18.503906 7.777344 18.867188 L 23.351562 34.441406 C 23.714844 34.800781 24.195312 35 24.707031 35 C 25.21875 35 25.699219 34.800781 26.058594 34.441406 L 27.207031 33.292969 C 27.953125 32.546875 27.953125 31.332031 27.207031 30.585938 Z M 14.128906 17.507812 "/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35pt" height="35pt" viewBox="0 0 35 35" version="1.1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(255%,255%,255%);fill-opacity:1;" d="M 10.8125 0 L 6.6875 4.128906 L 20.058594 17.5 L 6.6875 30.871094 L 10.8125 35 L 28.3125 17.5 Z M 10.8125 0 "/></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          // arrows: false,
          // dots: true,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          // arrows: false,
          // dots: true,
          slidesToShow: 2
        }
      },

      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          arrows: false,
          dots: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $(".star").rateYo({
    starWidth: "15px",
    readOnly: true,
    starSvg: '<svg height="511pt" viewBox="0 -10 511.99143 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/></svg>',
  });

  $(".product-info__star").rateYo({
    starWidth: "25px",
    spacing: "5px",
    readOnly: true,
    starSvg: '<svg height="511pt" viewBox="0 -10 511.99143 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/></svg>',
  });

  $(".comments__star").rateYo({
    starWidth: "10px",
    readOnly: true,
    starSvg: '<svg height="511pt" viewBox="0 -10 511.99143 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/></svg>',
  });

  $(window).on('scroll', function() {
    if ($(this).scrollTop()> 500) {
        $('.arrow').fadeIn("slow");
    } else {
        $('.arrow').fadeOut("slow");
    }
});

    $('.arrow').on('click', function() {
    $("body,html").animate({
      scrollTop:0
      }, 800);
    return false;
    });
})