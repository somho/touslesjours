// MAIN
var nowImg, nextImg;
function fade_change() {
    nowImg = $(".img_box img:eq(0)");
    nextImg = $(".img_box img:eq(1)");
    nextImg.addClass("slide").css("opacity", 0).animate({ "opacity": 1 }, 1000, function () {
        $(".img_box").append(nowImg);
        nowImg.removeClass("slide");
    });
}
var timer = setInterval("fade_change()", 3800);

$(document).ready(function () {
    // PRODUCT
    var mov = 0;

    $('#right').click(function () {
        mov = mov + 1;
        if (mov == 4) {
            mov = 0;
        }
        move1(mov);
    });
    $('#left').click(function () {
        mov = mov - 1;
        if (mov == -1) {
            mov = 3;
        }
        move1(mov);
    });

    function move1(n) {
        var pos = (-255) * n + 'px';
        $('.p_pic').animate({ left: pos }, 500);
    }


    if (matchMedia("screen and (min-width: 681px)").matches) {
        // AD
        $('.ad_con li').eq(0).addClass('on');
        var current = 0;
        var setIntervalId;

        // AD:CON
        $('.ad_con li').click(function (e) {
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
            if (i == current) return;

            var currentEl = $('.ad_pic li').eq(current);
            var nextEl = $('.ad_pic li').eq(i);

            currentEl.css({ left: '0px' }).animate({ left: '-350px' })
            nextEl.css({ left: '350px' }).animate({ left: '0px' })
            current = i;

            $('.ad_con li').removeClass('on');
            $('.ad_con li').eq(i).addClass('on');
        }
    }

    // MOBILE
    if (matchMedia("screen and (max-width: 680px)").matches) {
        // AD
        $('.ad_con_m li').eq(0).addClass('on');
        var current2 = 0;
        var setIntervalId2;

        // AD:CON
        $('.ad_con_m li').click(function (e) {
            e.preventDefault();
            var j = $(this).index();
            $('.ad_con_m li').removeClass('on');
            $(this).addClass('on');
            move(j);
        });

        // AD:PIC(mouseoverstop)
        $('.ad_pic_m').on({
            mouseover: function () {
                clearInterval(setIntervalId2);
            },
            mouseout: function () {
                timer2();
            }
        });

        // AD:PIC(TIMER)
        timer2();
        function timer2() {
            setIntervalId2 = setInterval(function () {
                var m = current2 + 1;
                console.log(m);
                if (m == 4) {
                    m = 0;
                }
                move(m);
            }, 3000);
        }

        // AD:PIC(MOVE)
        function move(j) {
            if (j == current2) return;

            var currentEl2 = $('.ad_pic_m li').eq(current2);
            var nextEl2 = $('.ad_pic_m li').eq(j);

            currentEl2.css({ left: '0px' }).animate({ left: '-300px' })
            nextEl2.css({ left: '300px' }).animate({ left: '0px' })
            current2 = j;

            $('.ad_con_m li').removeClass('on');
            $('.ad_con_m li').eq(j).addClass('on');
        }

    }

});