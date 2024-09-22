$(document).ready(function () {
    $(window).on('load', function() {
        $('.authentication-banner').css('opacity', '0');
        $('.title').css('opacity', '0');
        $('.description').css('opacity', '0');
        $('.form-input').css('opacity', '0');
        $('.button-primary').css('opacity', '0');
        $('.link-redirect').css('opacity', '0');

        setTimeout(() => {
            $('.authentication-banner').addClass('slide-right')

            setTimeout(() => {
                $('.title').addClass('slide-right')

                setTimeout(() => {
                    $('.description').addClass('slide-right')

                    setTimeout(() => {
                        $('.form-input').each(function(index, element) {
                            setTimeout(() => {
                                $(element).addClass('slide-right')
                            }, 150 * index)
                        })

                        setTimeout(() => {
                            $('.button-primary').addClass('slide-right')

                            setTimeout(() => {
                                $('.link-redirect').addClass('slide-right')
                            }, 150)
                        }, 450)
                    }, 150)
                }, 150)
            }, 150)
        }, 750)
    })
})