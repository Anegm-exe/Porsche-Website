document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.fade-img');
    let currentIndex = 0;

    // Initialize all images to be hidden and set their opacity to 0
    images.forEach(img => {
        img.style.opacity = 0;
        img.style.display = "none";
        img.style.transition = 'opacity 1s ease-in-out';
    });

    // Make the first image visible and fully opaque
    images[currentIndex].style.display = "block";
    setTimeout(() => images[currentIndex].style.opacity = 1, 10);

    setInterval(() => {
        // Fade out the current image
        images[currentIndex].style.opacity = 0;

        // Prepare for the next image
        currentIndex = (currentIndex + 1) % images.length;

        // After the fade-out, display the next image and fade it in
        setTimeout(() => {
            images.forEach((img, index) => {
                if (index === currentIndex) {
                    img.style.display = "block";
                    // A slight delay ensures the display change has been applied
                    setTimeout(() => img.style.opacity = 1, 10);
                } else {
                    // Ensure other images are not visible and ready for the next cycle
                    setTimeout(() => img.style.display = "none", 500); // Wait for fade-out to complete
                }
            });
        }, 500); // Matches the fade duration
    }, 6000); // Total cycle duration
});
