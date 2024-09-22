$(document).ready(function () {
    $(window).on('load', function() {
        // SECTION HERO
        $('section.hero').css('opacity', '0')
        $('section.hero .headline').css('opacity', '0')
        $('section.hero .description').css('opacity', '0')
        $('section.hero .component-doughnut').css('opacity', '0')

        // SECTION SUB CATEGORY
        $('section.sub-category .subtitle').css('opacity', '0')
        $('section.sub-category .title').css('opacity', '0')
        $('section.sub-category .description').css('opacity', '0')
        $('section.sub-category .section-content .content-sub-category').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        // SECTION COURSE ALL COURSE
        $('section.course.course-all .subtitle').css('opacity', '0')
        $('section.course.course-all .title').css('opacity', '0')
        $('section.course.course-all .description').css('opacity', '0')
        $('section.course.course-all .course-filter').css('opacity', '0')
        $('section.course.course-all .section-content .content-course').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        setTimeout(() => {
            $('section.hero').addClass('fade-in')

            setTimeout(() => {
                $('section.hero .headline').addClass('slide-right')

                setTimeout(() => {
                    $('section.hero .description').addClass('slide-right')

                    setTimeout(() => {
                        $('section.hero .component-doughnut').css('animation-duration', '650ms').addClass('slide-left-oblique')

                        setTimeout(() => {
                            $('section.sub-category .subtitle').addClass('slide-right')

                            setTimeout(() => {
                                $('section.sub-category .title').addClass('slide-right')

                                setTimeout(() => {
                                    $('section.sub-category .description').addClass('slide-left')

                                    setTimeout(() => {
                                        $('section.sub-category .section-content .content-sub-category').each(function (index, element) {
                                            setTimeout(() => {
                                                $(element).addClass('slide-bottom')
                                            }, 150 * index)
                                        })
                                    }, 150)
                                }, 150)
                            }, 150)
                        }, 650)
                    }, 150)
                }, 150)
            }, 850)
        }, 750)
    })

    $(window).scroll(function() {
        let wScroll = $(this).scrollTop()

        // SECTION COURSE ALL
        if (wScroll > $('section.course.course-all').offset().top - 400) {
            $('section.course.course-all .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.course.course-all .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.course.course-all .description').addClass('slide-left')

                    setTimeout(() => {
                        $('section.course.course-all .course-filter').addClass('slide-bottom')

                        setTimeout(() => {
                            $('section.course.course-all .section-content .content-course').each(function (index, element) {
                                setTimeout(() => {
                                    $(element).addClass('slide-bottom')
                                }, 150 * index)
                            })
                        }, 150)
                    }, 150)
                }, 150)
            }, 150)
        }
    })
})