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

    if($('.credit-banks-info div.ukrsibbank').length)
    {
        $('div.ukrsibbank').find('table').wrap('<div class="usb-table"></div>');
    }
});