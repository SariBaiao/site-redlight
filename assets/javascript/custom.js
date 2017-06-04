 new WOW().init();
$(document).ready(function(){

  $('.burger').on('click', function(){
    $('header').removeClass('from-scroll').addClass('invert');
    $(this).toggleClass('active');
    $('body').toggleClass('menu-open');
    $('header, .menu').toggleClass('open');
    $('.content').toggleClass('hide');
  });


  $('.comunicacao').on('click', function(){
    $('html,body').animate({
       scrollTop: $("#comunicacao").offset().top -150
    });
    $('manifesto a.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.comunicacao').on('click', function(){
    $('html,body').animate({
       scrollTop: $("#comunicacao").offset().top -150
    });
    $('manifesto a.active').removeClass('active');
    $(this).addClass('active');
  });

});
