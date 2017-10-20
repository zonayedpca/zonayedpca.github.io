(function($) {
'use strict';
    
    //Cycle Text
    var cycleTextSel = $('.intro > h1');
    
    cycleTextSel.cycleText({
        animation: 'bounceIn',
        interval: 3000
    });

})(jQuery);