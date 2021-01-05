$(function(){
    $("#sec1 .regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000,
      });

      $("#sec2 .regular").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      });

      $("#sec3 .regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000,
      });

      $("#sec4 .regular").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:false,
      });

})//jq end