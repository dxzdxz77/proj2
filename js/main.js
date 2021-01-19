$(function(){
    $('#top_popup .close').click(function(){
        $('#top_popup').slideUp();
    })//배너 닫기

var sta = 1;
$('#header_top .ui_btn').click(function(){
    if( sta == 1) {
        $('.list').show();
        sta = 2;
    }else{
        $('.list').hide();
        sta = 1;
    }
})//언어 선택 열고 닫기

$('#key_popup .close').click(function(){
    $('#key_popup').css({display:'none'});
})//공지 팝업창 닫기

$(window).scroll(function(){
  if($(document).scrollTop() >= 200) {
    $('.main > div img').addClass('ani_down');
  }else{
    $('.main > div img').removeClass('ani_down');
  }
})//scroll 메인화면 애니메이트

$('.footer_ui_btn').click(function(event){
  event.preventDefault();
  $("html,body").stop().animate({scrollTop:0});

  if ($(document).scrollTop() >= $('#sec1').offset().top) {
    $('.footer_ui_btn').fadeIn(); }
    else{  $('.footer_ui_btn').fadeOut();
    }
})

$(window).scroll(function(){
if ($(document).scrollTop() >= $('#sec1').offset().top) {
  $('.footer_ui_btn').fadeIn(); }
  else{ $('.footer_ui_btn').fadeOut();
}
})//맨 위로 스크롤링

setInterval(function(){
  $(".blink").toggle();
}, 750);//글자 깜박임

})//jp end