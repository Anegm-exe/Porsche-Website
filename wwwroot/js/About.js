gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top center", // Start the animation when the top of the section hits the center
            end: "bottom center", // End the animation when the bottom leaves the center
            onEnter: () => tl.play(), // Play timeline animation when entering
            onLeave: () => tl.reverse(), // Reverse timeline animation when leaving
            onEnterBack: () => tl.play(), // Play timeline animation when entering from the bottom
            onLeaveBack: () => tl.reverse(), // Reverse timeline animation when leaving towards the top
            markers: false // Set to true to see start and end points
        },
        paused: true // Initially pause the timeline
    });

    // Animation from invisible to visible
    tl.fromTo(section,
        { autoAlpha: 0 }, // Starting from invisible
        { autoAlpha: 1, duration: 1 } // Animate to fully visible
    );
});
