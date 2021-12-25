  $('.slider').slick({
      slidesToShow:1,
      dots:true,
      autoplay:true,
      responsive: [

          {
              breakpoint: 768,
              settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 600,
              settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }},
          {
              breakpoint: 320,
              settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }},
      ]

  })
  $('.row').slick({
      slidesToShow:4.3,

      autoplay:true,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 808,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  arrows:false,
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 600,
              settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }},
          {
              breakpoint: 320,
              settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }},
 ]
  })
  $('.row2').slick({
      slidesToShow:3.3,

      autoplay:true,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 808,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  arrows:false,
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 600,
              settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }},
          {
              breakpoint: 320,
              settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
              }},
      ]
  })