document.addEventListener('DOMContentLoaded', function () {
    let videoStarted = false;

    document.getElementById('enterText').addEventListener('click', function () {
        if (videoStarted) return;

        const videoContainer = document.getElementById('videoContainer');
        const introVideo = document.getElementById('introVideo');
        const mainContent = document.getElementById('mainContent');
        const enterText = document.getElementById('enterText');

        // Hide the ENTER text and play the video
        enterText.style.display = 'none';
        introVideo.play();
        videoStarted = true;

        introVideo.onended = function () {
            videoContainer.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto';  // Make sure this correctly resets the overflow
        };
    });
});
