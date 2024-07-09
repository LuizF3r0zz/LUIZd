document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const videoContainer = document.getElementById('videoContainer');
    const fireworksVideo = document.getElementById('fireworksVideo');

    noButton.addEventListener('mouseover', () => {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener('click', () => {
        videoContainer.classList.remove('hidden');
        fireworksVideo.play();
    });
});
