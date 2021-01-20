$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade', //Эффект (fade/slide)
        play: 5000, //Время одного слайда
        pagination: false //Для страниц
    })

    const typed = new Typed('.typed', {
        strings: ['Software Engineers', 'Web-Developers', 'Profesional Coders'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
    })


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })


    const topOffset = $('.section-skills').offset().top;
    $(window).scroll(function () {
        console.log(topOffset - $(window).height() + 200);
        if (window.pageYOffset > topOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent))
                }
            });
        }
    })

    $('.skill').on('mousedown', function () {
        $(this).css('cursor', 'grabbing')
    })

})
    (function ($) {
        $.fn.countup = function (params) {
            // make sure dependency is present
            if (typeof CountUp !== 'function') {
                console.error('countUp.js is a required dependency of countUp-jquery.js.');
                return;
            }

            var defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
            };

            if (typeof params === 'number') {
                defaults.endVal = params;
            }
            else if (typeof params === 'object') {
                $.extend(defaults, params);
            }
            else {
                console.error('countUp-jquery requires its argument to be either an object or number');
                return;
            }

            this.each(function (i, elem) {
                var countUp = new CountUp(elem, defaults.endVal, defaults);
                countUp.start();
            });

            return this;
        };

    }(jQuery));