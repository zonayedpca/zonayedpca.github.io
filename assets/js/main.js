(function($) {
'use strict';
    var navBar = document.querySelector('.navbar-light');
    var navBarOffset = navBar.offsetTop;
    var body = document.querySelector('body');
    
    document.addEventListener('scroll', function() {
        if(window.scrollY >= navBarOffset) {
            navBar.classList.add('fixed-top');
            body.classList.add('mtop');
        } else {
            navBar.classList.remove('fixed-top');
            body.classList.remove('mtop');
        }
    });
    
    //Cycle Text
    var cycleTextSel = $('.intro > h1');
    
    cycleTextSel.cycleText({
        animation: 'bounceIn',
        interval: 3000
    });
    
    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 100
    });

})(jQuery);