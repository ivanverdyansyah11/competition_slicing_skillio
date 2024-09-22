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

        // SECTION BENEFIT
        $('section.benefit .subtitle').css('opacity', '0')
        $('section.benefit .title').css('opacity', '0')
        $('section.benefit .description').css('opacity', '0')
        $('section.benefit .section-content .content-benefit').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        // SECTION WHY CHOOSE US
        $('section.why-choose-us .section-banner img').css('opacity', '0')
        $('section.why-choose-us .subtitle').css('opacity', '0')
        $('section.why-choose-us .title').css('opacity', '0')
        $('section.why-choose-us .description').css('opacity', '0')
        $('section.why-choose-us .content-list .item').each(function (index, element) {
            $(element).css('opacity', '0')
        })
        $('section.why-choose-us .button-primary').css('opacity', '0')

        // SECTION COURSE
        $('section.course .subtitle').css('opacity', '0')
        $('section.course .title').css('opacity', '0')
        $('section.course .description').css('opacity', '0')
        $('section.course .section-content .content-course').each(function (index, element) {
            $(element).css('opacity', '0')
        })
        $('section.course .button-primary').css('opacity', '0')

        // SECTION ABOUT
        $('section.about .section-banner img').css('opacity', '0')
        $('section.about .subtitle').css('opacity', '0')
        $('section.about .title').css('opacity', '0')
        $('section.about .description').css('opacity', '0')
        $('section.about .button-primary').css('opacity', '0')
        $('section.about .button-secondary').css('opacity', '0')
        $('section.about .content-value .value').each(function (index, element) {
            $(element).css('opacity', '0')
        })

        // SECTION TESTIMONIAL
        $('section.testimonial .subtitle').css('opacity', '0')
        $('section.testimonial .title').css('opacity', '0')
        $('section.testimonial .description').css('opacity', '0')
        $('section.testimonial .section-content .content-testimonial').each(function (index, element) {
            $(element).css('opacity', '0')
        })
        $('section.testimonial .button-primary').css('opacity', '0')

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

        // SECTION BENEFIT
        if (wScroll > $('section.benefit').offset().top - 400) {
            $('section.benefit .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.benefit .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.benefit .description').addClass('slide-left')

                    setTimeout(() => {
                        $('section.benefit .section-content .content-benefit').each(function (index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-bottom')
                            }, 150 * index)
                        })
                    }, 150)
                }, 150)
            }, 150)
        }

        // SECTION WHY CHOOSE US
        if (wScroll > $('section.why-choose-us').offset().top - 400) {
            $('section.why-choose-us .section-banner img').addClass('fade-in')

            setTimeout(() => {
                $('section.why-choose-us .subtitle').addClass('slide-right')

                setTimeout(() => {
                    $('section.why-choose-us .title').addClass('slide-right')

                    setTimeout(() => {
                        $('section.why-choose-us .description').addClass('slide-right')

                        setTimeout(() => {
                            $('section.why-choose-us .content-list .item').each(function (index, element) {
                                setTimeout(() => {
                                    $(element).addClass('slide-right')
                                }, 150 * index)
                            })

                            setTimeout(() => {
                                $('section.why-choose-us .button-primary').addClass('slide-right')
                            }, 900)
                        }, 150)
                    }, 150)
                }, 150)
            }, 150)
        }

        // SECTION COURSE
        if (wScroll > $('section.course').offset().top - 400) {
            $('section.course .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.course .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.course .description').addClass('slide-left')

                    setTimeout(() => {
                        $('section.course .section-content .content-course').each(function (index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-bottom')
                            }, 150 * index)
                        })

                        setTimeout(() => {
                            $('section.course .button-primary').addClass('slide-bottom')
                        }, 1200)
                    }, 150)
                }, 150)
            }, 150)
        }

        // SECTION ABOUT
        if (wScroll > $('section.about').offset().top - 400) {
            if (!$('section.about .section-banner img').hasClass('fade-in')) {
                $('.value h2').each(function () {
                    let $this = $(this);
                    let target = parseInt($this.data('target'), 10);
                    let upto = 0;
                    let intervalTime = 50;
                    let increment = Math.ceil(target / 100);
                    function updateCount() {
                        upto += increment;
                        if (upto >= target) {
                            upto = target;
                            clearInterval(counts);
                        }
                        $this.text(upto + '+');
                    }
                    let counts = setInterval(updateCount, intervalTime);
                });
            }

            $('section.about .section-banner img').addClass('fade-in')

            setTimeout(() => {
                $('section.about .subtitle').addClass('slide-right')

                setTimeout(() => {
                    $('section.about .title').addClass('slide-right')

                    setTimeout(() => {
                        $('section.about .description').addClass('slide-right')

                        setTimeout(() => {
                            $('section.about .button-primary').addClass('slide-right')

                            setTimeout(() => {
                                $('section.about .button-secondary').addClass('slide-right')

                                setTimeout(() => {
                                    $('section.about .content-value .value').each(function (index, element) {
                                        setTimeout(() => {
                                            $(element).addClass('slide-right')
                                        }, 150 * index)
                                    })
                                }, 150)
                            }, 150)
                        }, 150)
                    }, 150)
                }, 150)
            }, 150)
        }

        // SECTION TESTIMONIAL
        if (wScroll > $('section.testimonial').offset().top - 400) {
            $('section.testimonial .subtitle').addClass('slide-right')

            setTimeout(() => {
                $('section.testimonial .title').addClass('slide-right')

                setTimeout(() => {
                    $('section.testimonial .description').addClass('slide-left')

                    setTimeout(() => {
                        $('section.testimonial .section-content .content-testimonial').each(function (index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-bottom')
                            }, 150 * index)
                        })

                        setTimeout(() => {
                            $('section.testimonial .button-primary').addClass('slide-bottom')
                        }, 750)
                    }, 150)
                }, 150)
            }, 150)
        }
    })
})