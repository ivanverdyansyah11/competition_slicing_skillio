$(document).ready(function () {
    // COMPONENT CTA
    $('section.cta .title').css('opacity', '0')
    $('section.cta .description').css('opacity', '0')
    $('section.cta .button-primary.reverse').css('opacity', '0')
    $('section.cta .button-secondary').css('opacity', '0')

    // COMPONENT FOOTER
    $('footer.footer').css('opacity', '0')

    $(window).on('load', function() {
        $('.navbar-link').css('opacity', '0')
        $('.navbar-category').css('opacity', '0')

        setTimeout(() => {
            $('.navbar-link').addClass('slide-top')

            setTimeout(() => {
                $('.navbar-category').addClass('slide-right')
            }, 200)
        }, 1000)
    })

    $(window).scroll(function() {
        let wScroll = $(this).scrollTop()

        // COMPONENT NAVBAR
        if (wScroll > 200) {
            $('.navbar').css('position', 'fixed')
            $('.navbar .navbar-category').css('display', 'none')
            $('.navbar .navbar-link').css('background-color', 'rgba(var(--light-color), 1)').css('border-color', 'rgba(var(--dark-color), 0.12)')
            $('.navbar .navbar-link .brand-text').attr('src', 'assets/brands/brand-text-primary.svg')
            $('.navbar .navbar-link .link-item button, .navbar .navbar-link .link-item a').css('color', 'rgba(var(--dark-color), 0.62)').on('mouseover', function() {
                $(this).css('color', 'rgba(var(--dark-color), 1)')
            }).on('mouseleave', function() {
                if (!$(this).hasClass('active')) {
                    $(this).css('color', 'rgba(var(--dark-color), 0.62)');
                }
            })
            $('.navbar .navbar-link .link-item button.active, .navbar .navbar-link .link-item a.active').css('color', 'rgba(var(--dark-color), 1)')
            $('.navbar .navbar-link .link-profile .profile-wrapper').css('background-color', 'transparent').css('border-color', 'rgba(var(--dark-color), 0.12)').on('mouseover', function() {
                $(this).css('border-color', 'rgba(var(--dark-color), 0.24)')
            }).on('mouseleave', function() {
                $(this).css('border-color', 'rgba(var(--dark-color), 0.12)')
            })
            $('.like-icon').attr('src', 'assets/icons/like-outline-dark.svg')
            $('.cart-icon').attr('src', 'assets/icons/cart-outline-dark.svg')
            $('.hamburger-icon').attr('src', 'assets/icons/hamburger-primary.svg')
            $('.navbar .navbar-link .link-profile .profile-wrapper .profile-name').css('color', 'rgba(var(--dark-color), 1)')
        } else if (wScroll < 200) {
            $('.navbar').css('position', 'absolute')
            $('.navbar .navbar-category').removeClass('slide-right').css('display', 'flex').css('opacity', '1')
            $('.navbar .navbar-link').css('background-color', 'transparent').css('border-color', 'rgba(var(--light-color), 0.12)')
            $('.navbar .navbar-link .brand-text').attr('src', 'assets/brands/brand-text-secondary.svg')
            $('.navbar .navbar-link .link-item button, .navbar .navbar-link .link-item a').css('color', 'rgba(var(--light-color), 0.62)').on('mouseover', function() {
                $(this).css('color', 'rgba(var(--light-color), 1)')
            }).on('mouseleave', function() {
                if (!$(this).hasClass('active')) {
                    $(this).css('color', 'rgba(var(--light-color), 0.62)');
                }
            })
            $('.navbar .navbar-link .link-item button.active, .navbar .navbar-link .link-item a.active').css('color', 'rgba(var(--light-color), 1)')
            $('.navbar .navbar-link .link-profile .profile-wrapper').css('background-color', 'rgba(var(--light-color), 0.12)').css('border-color', 'transparent').on('mouseover', function() {
                $(this).css('border-color', 'rgba(var(--light-color), 0.24)')
            }).on('mouseleave', function() {
                $(this).css('border-color', 'transparent')
            })
            $('.like-icon').attr('src', 'assets/icons/like-outline-light.svg')
            $('.cart-icon').attr('src', 'assets/icons/cart-outline-light.svg')
            $('.hamburger-icon').attr('src', 'assets/icons/hamburger-light.svg')
            $('.navbar .navbar-link .link-profile .profile-wrapper .profile-name').css('color', 'rgba(var(--light-color), 1)')
        }

        // COMPONENT CTA
        if (wScroll > $('section.cta').offset().top - 400) {
            $('section.cta .title').addClass('slide-bottom')

            setTimeout(() => {
                $('section.cta .description').addClass('slide-bottom')

                setTimeout(() => {
                    $('section.cta .button-primary.reverse').addClass('slide-bottom')

                    setTimeout(() => {
                        $('section.cta .button-secondary').addClass('slide-bottom')
                    }, 150)
                }, 150)
            }, 150)
        }

        // COMPONENT FOOTER
        if (wScroll > $('footer.footer').offset().top - 400) {
            $('footer.footer').addClass('slide-bottom')
        }
    })

    $('.hamburger').on('click', function () {
        if ($('.navbar-mobile.hidden').length === 0) {
            setTimeout(() => {
                $('.navbar-link').css('border-color', 'rgba(18, 18, 18, 0.12)')
                $('.hamburger').css('border-color', 'rgba(18, 18, 18, 0.12)')
                $('.brand-text').attr('src', 'assets/brands/brand-text-primary.svg')
                $('.hamburger-icon').attr('src', 'assets/icons/hamburger-primary.svg')
            }, 1900)
            setTimeout(() => {
                $('.navbar-mobile a').each(function(index, element) {
                    setTimeout(() => {
                        $(element).addClass('slide-bottom')
                        $(element).css('animation-duration', '250ms')
                    }, 150 * index)
                })
            }, 2300)
        } else {
            setTimeout(() => {
                $('.navbar-link').css('border-color', 'rgba(255, 255, 255, 0.12)')
                $('.hamburger').css('border-color', 'rgba(255, 255, 255, 0.12)')
                $('.brand-text').attr('src', 'assets/brands/brand-text-secondary.svg')
                $('.hamburger-icon').attr('src', 'assets/icons/hamburger-light.svg')
            }, 150)
            $('.navbar-mobile a').each(function(index, element) {
                $(element).removeClass('slide-bottom').addClass('fade-out').css('opacity', '0')
            })
        }
    })
})
