$(document).ready(function() {
    setTimeout(() => {
        $('.loader-page').addClass('hidden')
        $('.main-page').removeClass('hidden')
    }, 500)

    if ($('.navbar')) {
        $('.hamburger').on('click', function(){
            $('.navbar-mobile').toggleClass('hidden')
        })

        fetch('./data/category.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`)
                }
                return response.json()
            })
            .then((categories) => {
                categories.forEach((category) => {
                    $('.category-list').append('<a href="category.html" onclick="animationRedirect(\'category.html\')" class="d-flex align-items-center justify-content-between category-link">' + category.category + ' <img src="assets/icons/arrow-right-dark.svg" alt="Arrow Right Dark" width="6"></a>');
                    $('.navbar-category .container').append('<a href="category.html" onclick="animationRedirect(\'category.html\')">' + category.category + '</a>')
                })
            })
            .catch((error) => console.log("Unable to fetch data:", error))

        $('.button-category').on('click', function(){
            $('.navbar-link').addClass('show')
            $('.popup').addClass('show')
            $('.category-list').toggleClass('hidden')
            $('.category-link').each(function() {
                $(this).on('mouseenter', function(){
                    $('.category-list').css('border-top-right-radius', '0')
                    $('.sub-category-list').removeClass('hidden').empty()
                    let categorySelected = $(this).html().replace(/<img[^>]*>/g, '').trim()

                    fetch('./data/category.json')
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error(`HTTP error status: ${response.status}`)
                            }
                            return response.json()
                        })
                        .then((categories) => {
                            categories.forEach((category) => {
                                if (category.category.toLowerCase() === categorySelected.toLowerCase()) {
                                    category.subCategories.forEach(subCategory => {
                                        $('.sub-category-list').append('<a href="sub-category.html" onclick="animationRedirect(\'sub-category.html\')" class="d-flex align-items-center justify-content-between">' + subCategory + '</a>')
                                    })
                                }
                            })
                        })
                        .catch((error) => console.log("Unable to fetch data:", error))
                })
            })
        })

        $('.popup').on('mouseleave', function(){
            setTimeout(() => {
                $('.category-list').addClass('hidden')
                $('.sub-category-list').addClass('hidden')
                $('.navbar-link').removeClass('show')
                $('.popup').removeClass('show')
            }, 250)
        })
    }
})

function changeURL(newPage) {
    const baseURL = window.location.href.split('/').slice(0, -1).join('/')
    const newURL = `${baseURL}/${newPage}`
    window.location.href = newURL
}