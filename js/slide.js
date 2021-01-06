$(function(){
    $("#sec1 .regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 800,
      });

      $("#sec2 .regular").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 800,
      });

      $("#sec3 .regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 800,
      });

      $("#sec4 .regular").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:false,
        autoplay : true,
        autoplaySpeed : 800,
      });

      $('#sec4 .new').each(function(){
        var find_img = $(this).find('img');
        var src_off = find_img.attr('src');
        var src_on = src_off.replace('_off','_on');
        $(this).hover(function(){
            find_img.attr('src', src_on);
        },function(){
            find_img.attr('src', src_off);
        })//hover
    })//each 마우스 올리면 이미지 변환하기!

})//jq end