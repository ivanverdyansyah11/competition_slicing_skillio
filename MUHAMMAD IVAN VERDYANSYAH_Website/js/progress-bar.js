(function($) {
    "use strict";
    $(document).ready(function() {
        const progressPath = document.querySelector('.progress-wrap path');
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = 'none';
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.style.transition = 'stroke-dashoffset 6ms ease-in-out';
        const updateProgress = () => {
            const scroll = $(window).scrollTop();
            const height = $(document).height() - $(window).height();
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).on('scroll', updateProgress);
        const offset = 50;
        const duration = 550;
        $(window).on('scroll', function() {
            $('.progress-wrap').toggleClass('active-progress', $(this).scrollTop() > offset);
        });
        $('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, duration);
        });
    });
})(jQuery);