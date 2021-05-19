

$(".main__box-slider").slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  dots: true,
  variableWidth: true,
  centerMode: true,

  responsive: [
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 2,
        centerMode: true,
      },
      breakpoint: 840,
      settings: {
        slidesToShow: 1,
      }
    },
  ],
});

$(".main__rewiev-cont").slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 2,
      },
      breakpoint: 840,
      settings: {
        slidesToShow: 1,
      }
    },
  ],
})