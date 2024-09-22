$(document).ready(function () {
    $(window).on('load', function() {
        $('.authentication-banner').css('opacity', '0');
        $('.title').css('opacity', '0');
        $('.description').css('opacity', '0');
        $('.form-input').css('opacity', '0');
        $('.button-primary').css('opacity', '0');
        $('.other').css('opacity', '0');
        $('.button-blank').css('opacity', '0');
        $('.link-redirect').css('opacity', '0');

        setTimeout(() => {
            $('.authentication-banner').addClass('slide-left')

            setTimeout(() => {
                $('.title').addClass('slide-left')

                setTimeout(() => {
                    $('.description').addClass('slide-left')

                    setTimeout(() => {
                        $('.form-input').each(function(index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-left')
                            }, 150 * index)
                        })

                        setTimeout(() => {
                            $('.button-primary').addClass('slide-left')

                            setTimeout(() => {
                                $('.other').addClass('slide-left')

                                setTimeout(() => {
                                    $('.button-blank').each(function(index, element) {
                                        setTimeout(() => {
                                            $(element).addClass('slide-left')
                                        }, 150 * index)
                                    })

                                    setTimeout(() => {
                                        $('.link-redirect').addClass('slide-left')
                                    }, 300)
                                }, 150)
                            }, 150)
                        }, 450)
                    }, 150)
                }, 150)
            }, 150)
        }, 750)
    })
})