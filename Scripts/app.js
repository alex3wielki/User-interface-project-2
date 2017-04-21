(() => {
    console.debug('App started');
    // Makes the .toTop button appear
    $(window).on('scroll', function() {
            if ($(window).scrollTop() > ($('#books').offset().top) * 1.5) {
                $('.toTop').fadeIn(500);
            } else {
                $('.toTop').fadeOut(500);
            }
        })
        // Making .toTop animate
    $('.toTop').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 1000);
    })

})()