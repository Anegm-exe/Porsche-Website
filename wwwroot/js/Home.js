document.addEventListener('scroll', function () {
    const adBanner = document.querySelector('.home-header');
    const video = document.querySelector('#Homevid');

    if (window.scrollY > adBanner.offsetHeight) { /* Change 'X' value as needed */
        video.classList.add('fixed-video');
    } else {
        video.classList.remove('fixed-video');
    }
});