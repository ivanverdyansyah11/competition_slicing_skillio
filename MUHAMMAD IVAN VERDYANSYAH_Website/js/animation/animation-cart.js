$(document).ready(function () {
    $(window).on('load', function() {
        // SECTION HERO
        $('.profile section.hero').css('opacity', '0')
        $('.profile section.hero .headline').css('opacity', '0')
        $('.profile section.hero .menu-link a').each(function (index, element) {
            $(element).css('opacity', '0')
        })
        $('.profile section.hero .menu-link button').css('opacity', '0')
        $('.profile section.hero .component-doughnut').css('opacity', '0')

        // SECTION CART
        $('.cart section.cart .section-content .data-course').css('opacity', '0')
        $('.cart section.cart .section-content .data-price').css('opacity', '0')

        // SECTION COURSE
        $('.cart section.course .section-header .title').css('opacity', '0')
        $('.cart section.course .section-content .content-course').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        setTimeout(() => {
            $('.profile section.hero').addClass('fade-in')

            setTimeout(() => {
                $('.profile section.hero .headline').addClass('slide-right')

                setTimeout(() => {
                    $('.profile section.hero .menu-link a').each(function (index, element) {
                        setTimeout(() => {
                            $(element).addClass('slide-bottom')
                        }, 150 * index)
                    })

                    setTimeout(() => {
                        $('.profile section.hero .menu-link button').addClass('slide-bottom')

                        setTimeout(() => {
                            $('section.hero .component-doughnut').css('animation-duration', '650ms').addClass('slide-left-oblique')

                            setTimeout(() => {
                                $('.cart section.cart .section-content .data-course').addClass('slide-bottom')

                                setTimeout(() => {
                                    $('.cart section.cart .section-content .data-price').addClass('slide-bottom')

                                    setTimeout(() => {
                                        $('.cart section.course .section-header .title').addClass('slide-bottom')

                                        setTimeout(() => {
                                            $('.cart section.course .section-content .content-course').each(function (index, element) {
                                                setTimeout(() => {
                                                    $(element).addClass('slide-bottom')
                                                }, 150 * index)
                                            })
                                        }, 150)
                                    }, 150)
                                }, 150)
                            }, 150)
                        }, 150)
                    }, 600)
                }, 150)
            }, 850)
        }, 750)
    })
})