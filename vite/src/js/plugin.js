window.carouselConfig = {
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  centerMode: true,
  swipe: true,
  dots: true,
  draggable: true,
  swipeToSlide: true,
  centerPadding: '50px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 3,
        centerMode: false,
      }
    },
    {
      breakpoint: 1023,
      settings: {
        dots: false,
        slidesToShow: 4,
      }
    }
  ]
};

(function ($) {
  $(document).ready(function() {
    if ($('.slick-carousel').length) {
      $('.slick-carousel').slick(carouselConfig);

      // update tab index carousel-item
      var carouselItems = $(".carousel-item");
      carouselItems.each(function () {
        $(this).attr("tabindex", "-1");
        $(this).find(".card").attr("tabindex", "0");
      });
    }

    if ($('.select2').length) {
      $('.select2').each(function () {
        var $this = $(this),
          $parent = $this.parent();
        $this.select2({
          dropdownParent: $parent,
          minimumResultsForSearch: Infinity
        });
      });
    }

    // bugfix wp mobile menu
    $(document).on('click', function () {
      setTimeout(function () {
        $('html').removeClass('has-modal-open');
      }, 100);
    });
    if ($('.carousel-banner').length) {
      $('.carousel-banner').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        fade: !0,
        cssEase: 'linear',
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 780,
            settings: {
              adaptiveHeight: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
        
      appendDots: $(".slide-m-dots"),
      prevArrow: $(".slide-m-prev"),
      nextArrow: $(".slide-m-next")
      });
    }
    
  });


})(jQuery);

