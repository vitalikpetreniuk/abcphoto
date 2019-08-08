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

    var facets = $('#facets');

    if(facets.length && $(window).width()<768)
    {
        facets.find('h6').each(function(){
            $(this).next('div.filter_box').toggle('slow');
            $(this).find('a').toggleClass('closed');
        });

        $('.facets-button').on('click', function () {
            facets.slideToggle();
        });
    }
});