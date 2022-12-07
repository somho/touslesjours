$(document).ready(function () {
    // PRODUCT
    
    
    // AD
    $('.ad_con li').eq(0).addClass('on');
    var current = 0;
    var setIntervalId;
    var idx = 0;

    // AD:CON
    $('.ad_con li').click(function(e){
        e.preventDefault(); 
        var i = $(this).index();
        $('.ad_con li').removeClass('on');
        $(this).addClass('on');
        move(i);
    });

    // AD:PIC(mouseoverstop)
    $('.ad_pic').on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        }
    });

    // AD:PIC(TIMER)
    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            console.log(n);
            if (n == 4) {
                n = 0;
            }
            move(n);
        }, 3000);
    }

    // AD:PIC(MOVE)
    function move(i) {
        if(i == current) return;

        var currentEl = $('.ad_pic li').eq(current);
        var nextEl = $('.ad_pic li').eq(i);

        currentEl.css({ left: '0px' }).animate({ left: '-350px' })
        nextEl.css({ left: '350px' }).animate({ left: '0px' })
        current = i;

        $('.ad_con li').removeClass('on');
        $('.ad_con li').eq(i).addClass('on');
}


});