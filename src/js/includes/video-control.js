const register = document.getElementById('register');
const videoWrapper = document.getElementById('video-wrapper');
const videoOverlay = document.getElementById('video-overlay');
const video = document.getElementById('video');

controlVideoHeight();
addEventListener('resize', controlVideoHeight);

function controlVideoHeight() {
    videoWrapper.style.height = videoWrapper.offsetWidth * 0.56 + 'px';
}

videoOverlay.onclick = () => {
    videoOverlay.style.display = 'none';
    video.play();
};
