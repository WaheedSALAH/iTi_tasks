let videos = ['vid1.mp4', 'vid2.mp4', 'vid3.mp4', 'vid4.mp4', 'vid5.mp4', 'vid6.mp4', 'vid7.mp4'];

let current_video = document.querySelector('#currentvideo');
let video_contain = document.querySelector('#list_of_vids');

videos.forEach(vid => {
    let listvids = document.createElement('div');
    listvids.className = 'vids';
    listvids.innerText = vid;
    video_contain.appendChild(listvids);
});

let vidbtn = document.querySelectorAll('.vids');

vidbtn.forEach(element => {
    element.addEventListener('click', function () {
        current_video.src = element.innerText;
        current_video.play();
    });
});

current_video.addEventListener('dblclick', function () {
    if (current_video.requestFullscreen) {
        current_video.requestFullscreen();
    } else if (current_video.mozRequestFullScreen) { // Firefox
        current_video.mozRequestFullScreen();
    } else if (current_video.webkitRequestFullscreen) { // Chrome, Safari, Opera
        current_video.webkitRequestFullscreen();
    } else if (current_video.msRequestFullscreen) { // IE/Edge
        current_video.msRequestFullscreen();
    }
});

current_video.addEventListener('click', function () {
    if (current_video.paused) {
        current_video.play();
    } else {
        current_video.pause();
    }
});

let controlsContainer = document.createElement('div');
controlsContainer.className = 'video-controls';

let volumeControl = document.createElement('input');
volumeControl.type = 'range';
volumeControl.min = '0';
volumeControl.max = '1';
volumeControl.step = '0.1';
volumeControl.value = current_video.volume;
volumeControl.addEventListener('input', function () {
    current_video.volume = volumeControl.value;
});

let muteButton = document.createElement('button');
muteButton.innerText = '🔇';
muteButton.addEventListener('click', function () {
    if (current_video.muted) {
        current_video.muted = false;
        muteButton.innerText = '🔊';
    } else {
        current_video.muted = true;
        muteButton.innerText = '🔇';
    }
});

let speedControl = document.createElement('input');
speedControl.type = 'range';
speedControl.min = '0.5';
speedControl.max = '2';
speedControl.step = '0.1';
speedControl.value = '1';
speedControl.addEventListener('input', function () {
    current_video.playbackRate = speedControl.value;
});

controlsContainer.appendChild(muteButton);
controlsContainer.appendChild(volumeControl);
controlsContainer.appendChild(speedControl);
document.body.appendChild(controlsContainer);

current_video.addEventListener('mouseenter', function () {
    controlsContainer.style.opacity = '1';
});

// current_video.addEventListener('mouseleave', function () {
//     controlsContainer.style.opacity = '0';
// });
