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


})//jp end