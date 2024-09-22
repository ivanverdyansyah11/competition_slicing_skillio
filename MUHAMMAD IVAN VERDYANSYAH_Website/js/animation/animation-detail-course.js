$(document).ready(function () {
    $(window).on('load', function() {
        // SECTION HERO
        $('.detail-course section.hero').css('opacity', '0')
        $('.detail-course section.hero .path').css('opacity', '0')
        $('.detail-course section.hero .title').css('opacity', '0')
        $('.detail-course section.hero .description').css('opacity', '0')
        $('.detail-course section.hero .wrapper-star').css('opacity', '0')
        $('.detail-course section.hero .wrapper-detail .item').each(function (index, element) {
            $(element).css('opacity', '0')
        })
        $('.card-detail-course.fixed').css('opacity', '0')
        $('.detail-course section.hero .component-doughnut').css('opacity', '0')
        $('.detail-course section.detail .detail-wrapper .title').each(function (index, element) {
            $(element).css('opacity', '0')
        })
        $('.detail-course section.detail .detail-wrapper .content').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        setTimeout(() => {
            $('.detail-course section.hero').addClass('fade-in')

            setTimeout(() => {
                $('.detail-course section.hero .path').addClass('slide-right')

                setTimeout(() => {
                    $('.detail-course section.hero .title').addClass('slide-right')

                    setTimeout(() => {
                        $('.detail-course section.hero .description').addClass('slide-right')

                        setTimeout(() => {
                            $('.detail-course section.hero .wrapper-star').addClass('slide-right')

                            setTimeout(() => {
                                $('.detail-course section.hero .wrapper-detail .item').each(function (index, element) {
                                    setTimeout(() => {
                                        $(element).addClass('slide-right')
                                    }, 150 * index)
                                })

                                setTimeout(() => {
                                    $('.card-detail-course.fixed').addClass('slide-bottom')

                                    setTimeout(() => {
                                        $('section.hero .component-doughnut').css('animation-duration', '650ms').addClass('slide-left-oblique')

                                        setTimeout(() => {
                                            $('.detail-course section.detail .detail-wrapper').each(function (index, element) {
                                                setTimeout(() => {
                                                    $(element).find('.title').addClass('slide-bottom')

                                                    setTimeout(() => {
                                                        $(element).find('.content').addClass('slide-bottom')
                                                    }, 150)
                                                }, 150 * index)
                                            })
                                        }, 650)
                                    }, 150)
                                }, 300)
                            }, 150)
                        }, 150)
                    }, 150)
                }, 150)
            }, 850)
        }, 750)
    })

    $(window).scroll(function() {
        let wScroll = $(this).scrollTop()

        // if (wScroll > 70) {
        //     $('.card-detail-course.fixed').css('position', 'fixed').css('top', '120px').css('transition', 'top 500ms !important')
        // } else if (wScroll < 500) {
        //     $('.card-detail-course.fixed').css('position', 'absolute').css('top', '200px').css('transition', 'top 500ms !important')
        // }
    })
})