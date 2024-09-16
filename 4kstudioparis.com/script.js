document.addEventListener('DOMContentLoaded', function () {
    let videoStarted = false;

    document.addEventListener('click', function () {
        if (videoStarted) return;

        const videoContainer = document.getElementById('videoContainer');
        const introVideo = document.getElementById('introVideo');
        const enterText = document.getElementById('enterText');
        const logo = document.querySelector('.logo');
        const imageGrid = document.querySelector('.image-grid');
        const introSection = document.querySelector('.intro');
        const contactInfo = document.querySelector('.contact-info'); // Contact info element

        // Hide the ENTER text and play the video
        enterText.style.display = 'none';
        introVideo.play();
        videoStarted = true;

        introVideo.onended = function () {
            videoContainer.style.display = 'none'; // Hide the fullscreen container

            // Enable scrolling
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';

            // Trigger animations
            setTimeout(function () {
                logo.classList.add('animate-logo');
                imageGrid.classList.add('animate-grid');
                introSection.classList.add('fade-in-gradient'); // Trigger gradient fade-in
                contactInfo.classList.add('fade-in-contact'); // Trigger contact-info fade-in
            }, 500); // Delay before starting the animations
        };
    });
});
