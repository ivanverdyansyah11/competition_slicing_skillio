$(document).ready(function () {
    $(window).on('load', function () {
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

        // SECTION HISTORY
        $('section.history .subtitle').css('opacity', '0')
        $('section.history .title').css('opacity', '0')
        $('section.history .description').each(function (index, element) {
            $(element).css('opacity', '0')
        })
        $('section.history .content-value .value').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        // SECTION VISION
        $('section.vision .subtitle').css('opacity', '0')
        $('section.vision .title').css('opacity', '0')
        $('section.vision .description').css('opacity', '0')
        $('section.vision .section-content .content-vision').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        // SECTION MISSION
        $('section.mission .subtitle').css('opacity', '0')
        $('section.mission .title').css('opacity', '0')
        $('section.mission .description').css('opacity', '0')
        $('section.mission .section-content .content-mission').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        // SECTION TEAM
        $('section.team .subtitle').css('opacity', '0')
        $('section.team .title').css('opacity', '0')
        $('section.team .description').css('opacity', '0')
        $('section.team .section-content .content-team').each(function (index, element) {
            $(element).css('opacity', '0')
        })

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

        // SECTION HISTORY
        if (wScroll > $('section.history').offset().top - 400) {
            $('section.history .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.history .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.history .description').each(function (index, element) {
                        setTimeout(() => {
                            $(element).addClass('slide-right')
                        }, 150 * index)
                    })

                    setTimeout(() => {
                        $('section.history .content-value .value').each(function (index, element) {
                            setTimeout(() => {
                                $(element).css('opacity', 1)
                            }, 150 * index)
                        })
                    }, 300)
                }, 150)
            }, 150)
        }

        // SECTION VISION
        if (wScroll > $('section.vision').offset().top - 400) {
            $('section.vision .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.vision .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.vision .description').addClass('slide-left')

                    setTimeout(() => {
                        $('section.vision .section-content .content-vision').each(function (index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-bottom')
                            }, 150 * index)
                        })
                    }, 150)
                }, 150)
            }, 150)
        }

        // SECTION MISSION
        if (wScroll > $('section.mission').offset().top - 400) {
            $('section.mission .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.mission .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.mission .description').addClass('slide-left')

                    setTimeout(() => {
                        $('section.mission .section-content .content-mission').each(function (index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-bottom')
                            }, 150 * index)
                        })
                    }, 150)
                }, 150)
            }, 150)
        }

        // SECTION TEAM
        if (wScroll > $('section.team').offset().top - 400) {
            $('section.team .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.team .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.team .description').addClass('slide-left')

                    setTimeout(() => {
                        $('section.team .section-content .content-team').each(function (index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-bottom')
                            }, 150 * index)
                        })
                    }, 150)
                }, 150)
            }, 150)
        }
    })
})