gsap.registerPlugin(ScrollTrigger);

// Initialize the current image index to 0, ensuring the first image is shown on page load.
let currentImageIndex = 0;

// Function to manage the visibility of images.
function showImage(index) {
    // Select all image elements.
    const images = gsap.utils.toArray('.image-container img');

    // Update the visibility of images based on the index.
    images.forEach((img, i) => {
        gsap.to(img, {
            opacity: i === index ? 1 : 0, // Only the image matching the index will be fully visible.
            duration: 0.5, // Duration of the fade transition.
            ease: 'none' // Use a linear transition for the opacity change.
        });
    });
}

// Immediately show the first image upon page load.
showImage(currentImageIndex);

// Setup ScrollTrigger for each section.
document.querySelectorAll('.section').forEach((section, index) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top center", // Trigger the animation when the top of the section hits the center of the viewport.
        end: "bottom center", // End the animation when the bottom of the section exits the center of the viewport.
        onEnter: () => {
            // Calculate the image index for each section, assuming an alternating pattern of sections and images.
            let imageIndex = Math.floor(index / 2);
            showImage(imageIndex);
        },
        onLeaveBack: ({ trigger }) => {
            // When scrolling back, calculate the previous section's image index.
            let prevIndex = index - 1;
            let imageIndex = Math.floor(prevIndex / 2);
            // Ensure the first image is shown when scrolling back to the top.
            if (trigger === document.querySelectorAll('.section')[0]) {
                showImage(0);
            } else {
                showImage(Math.max(imageIndex, 0));
            }
        },
    });
});

// Ensure the first image is visible even if the user does not scroll.
showImage(0);
