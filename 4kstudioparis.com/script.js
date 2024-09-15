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

        // Hide the ENTER text and play the video
        enterText.style.display = 'none';
        introVideo.play();
        videoStarted = true;

        introVideo.onended = function () {
            // Hide the fullscreen container to allow scrolling
            videoContainer.style.display = 'none'; // Hides the fullscreen element

            // Restore scrolling
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';

            // Add animation to the logo, image grid, and fade-in for gradient
            setTimeout(function () {
                logo.classList.add('animate-logo');
                imageGrid.classList.add('animate-grid');
                introSection.classList.add('fade-in-gradient'); // Trigger gradient fade-in
            }, 500); // Add delay before starting the animation
        };
    });
});
