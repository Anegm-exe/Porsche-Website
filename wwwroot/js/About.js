gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray('.section');
const images = gsap.utils.toArray('.image-container img');
let currentImageIndex = -1; // Start before the first image index

sections.forEach((section, index) => {
    // Calculate the image index for each section
    const imageIndex = Math.floor(index / 2); // Assumes there's an image for every two sections
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => showImage(imageIndex),
        onLeaveBack: (self) => {
            if (self.trigger === sections[0]) {
                hideImages();
            } else {
                showImage(imageIndex - 1);
            }
        },
        markers: false // Set to true for debugging
    });
});

function showImage(index) {
    // Only update the image if the index has changed and is a valid index
    if (currentImageIndex !== index && index >= 0) {
        currentImageIndex = index;
        images.forEach((img, i) => {
            gsap.to(img, {
                opacity: i === index ? 1 : 0,
                duration: 1, // Duration of fade transition
                ease: 'none'
            });
        });
    }
}

function hideImages() {
    images.forEach((img) => {
        gsap.to(img, {
            opacity: 0,
            duration: 1, // Duration of fade transition
            ease: 'none'
        });
    });
    currentImageIndex = -1; // Reset the index
}

// Initially hide all images
hideImages();
