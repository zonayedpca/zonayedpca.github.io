(function($) {
'use strict';
    var navBar = document.querySelector('.navbar');
    var navBarOffset = navBar.offsetTop;
    
    document.addEventListener('scroll', function() {
        if(window.scrollY >= navBarOffset) {
            navBar.classList.add('fixed-top');
        } else {
            navBar.classList.remove('fixed-top');
        }
    });
    
    //Cycle Text
    var cycleTextSel = $('.intro > h1');
    
    cycleTextSel.cycleText({
        animation: 'bounceIn',
        interval: 3000
    });

})(jQuery);