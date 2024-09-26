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
        $('section.course.course-all .section-content').css('opacity', '0')

        setTimeout(() => {
            $('section.hero').addClass('fade-in')

            setTimeout(() => {
                $('section.hero .headline').addClass('slide-right')

                setTimeout(() => {
                    $('section.hero .description').addClass('slide-right')

                    setTimeout(() => {
                        $('section.hero .component-doughnut').css('animation-duration', '650ms').addClass('slide-left-oblique')

                        setTimeout(() => {
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
                        }, 650)
                    }, 150)
                }, 150)
            }, 850)
        }, 750)
    })
})