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
        $('.profile section.profile .section-content .content-image').css('opacity', '0')
        $('.profile section.profile .section-content .content-data').css('opacity', '0')

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
                                $('.profile section.profile .section-content .content-image').addClass('slide-bottom')

                                setTimeout(() => {
                                    $('.profile section.profile .section-content .content-data').addClass('slide-bottom')
                                }, 150)
                            }, 150)
                        }, 150)
                    }, 600)
                }, 150)
            }, 850)
        }, 750)
    })
})