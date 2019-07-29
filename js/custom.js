$(function(){
    $('.infopages-trigger').on('click', function(){
        $('.infopages ul').toggleClass('active');
    });

    $('.phone-icon').on('click', function(){
        $('header #phones .phones-inner ul').toggleClass('opened');
    });

    $( '#dl-menu' ).dlmenu({
        animationClasses : { classin : 'dl-animate-in-5', classout : 'dl-animate-out-5' }
    });
});