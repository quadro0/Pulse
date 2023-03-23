$(document).ready(function(){
    $('.carousel__inner').slick({
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron left solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png"></button>',
      infinite: true,
      dots: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
          }
        }
      ]
    });
  });