document.addEventListener('scroll', () => {
    const images = ['~images/porsche 34.jpg', /* add more images as needed */];
    const windowHeight = window.innerHeight;
    const totalScrollHeight = document.body.scrollHeight - windowHeight;
    const scrollPosition = window.scrollY;
    const imageIndex = Math.min(Math.floor((scrollPosition / totalScrollHeight) * images.length), images.length - 1);

    document.getElementById('dynamicImage').src = images[imageIndex];
});
