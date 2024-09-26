$(document).ready(function () {
    $(window).on('load', function() {
        // SECTION HERO
        $('section.hero').css('opacity', '0')
        $('section.hero .headline').css('opacity', '0')
        $('section.hero .description').css('opacity', '0')
        $('section.hero .button-group a').each(function (index, element) {
            $(element).css('opacity', '0')
        })
        $('section.hero .component-doughnut').css('opacity', '0')
        $('section.hero .component-buble').css('opacity', '0')
        $('section.hero .hero-banner img').css('opacity', '0')
        $('section.partner').css('opacity', '0')

        // SECTION COURSE CATEGORY COURSE
        $('.course section.category .subtitle').css('opacity', '0')
        $('.course section.category .title').css('opacity', '0')
        $('.course section.category .description').css('opacity', '0')
        $('.course section.category .section-content .content-category').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        // SECTION COURSE TOP COURSE
        $('section.course.course-top .subtitle').css('opacity', '0')
        $('section.course.course-top .title').css('opacity', '0')
        $('section.course.course-top .description').css('opacity', '0')
        $('section.course.course-top .section-content .content-course').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        // SECTION COURSE RECENT COURSE
        $('section.course.course-recent .subtitle').css('opacity', '0')
        $('section.course.course-recent .title').css('opacity', '0')
        $('section.course.course-recent .description').css('opacity', '0')
        $('section.course.course-recent .section-content .content-course').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        // SECTION COURSE ALL COURSE
        $('section.course.course-all .subtitle').css('opacity', '0')
        $('section.course.course-all .title').css('opacity', '0')
        $('section.course.course-all .description').css('opacity', '0')
        $('section.course.course-all .section-content').css('opacity', '0')

        setTimeout(() => {
            $('section.hero').addClass('fade-in')

            setTimeout(() => {
                $('section.hero .headline').addClass('slide-right')
                $('section.partner').addClass('slide-right')

                setTimeout(() => {
                    $('section.hero .description').addClass('slide-right')

                    setTimeout(() => {
                        $('section.hero .button-group a').each(function (index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-right')
                            }, 150 * index)
                        })

                        setTimeout(() => {
                            $('section.hero .hero-banner img').css('animation-duration', '650ms').addClass('slide-bottom')
                            $('section.hero .component-doughnut').css('animation-duration', '650ms').addClass('slide-left-oblique')
                            $('section.hero .component-buble').css('animation-duration', '650ms').addClass('slide-right-oblique')
                        }, 300)
                    }, 150)
                }, 150)
            }, 850)
        }, 750)
    })

    $(window).scroll(function() {
        let wScroll = $(this).scrollTop()

        // SECTION CATEGORY
        if (wScroll > $('.course section.category').offset().top - 400) {
            $('.course section.category .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('.course section.category .title').addClass('slide-right')

                setTimeout(() => {
                    $('.course section.category .description').addClass('slide-left')

                    setTimeout(() => {
                        $('.course section.category .section-content .content-category').each(function (index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-bottom')
                            }, 150 * index)
                        })
                    }, 150)
                }, 150)
            }, 150)
        }

        // SECTION COURSE TOP
        if (wScroll > $('section.course.course-top').offset().top - 400) {
            $('section.course.course-top .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.course.course-top .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.course.course-top .description').addClass('slide-left')

                    setTimeout(() => {
                        $('section.course.course-top .section-content .content-course').each(function (index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-bottom')
                            }, 150 * index)
                        })
                    }, 150)
                }, 150)
            }, 150)
        }

        // SECTION COURSE RECENT
        if (wScroll > $('section.course.course-recent').offset().top - 400) {
            $('section.course.course-recent .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.course.course-recent .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.course.course-recent .description').addClass('slide-left')

                    setTimeout(() => {
                        $('section.course.course-recent .section-content .content-course').each(function (index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-bottom')
                            }, 150 * index)
                        })
                    }, 150)
                }, 150)
            }, 150)
        }

        // SECTION COURSE ALL
        if (wScroll > $('section.course.course-all').offset().top - 400) {
            $('section.course.course-all .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.course.course-all .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.course.course-all .description').addClass('slide-left')

                    setTimeout(() => {
                        $('section.course.course-all .section-content').addClass('slide-bottom')
                    }, 150)
                }, 150)
            }, 150)
        }
    })
})