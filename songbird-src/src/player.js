import { stage, getSrc, currentArr, currentTrack, currentAnswer } from './game.js';


const playButton = document.querySelector('.play');
const audio = new Audio();
let trackTime = document.querySelector('.track-time .length');
let currentTrackTime = document.querySelector('.track-time .current');
const timeline = document.querySelector('.timeline');
let currentVolume = 0.7;
let currentTime = 0;
let isPlay = false;

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
};

audio.addEventListener(
    "loadeddata",
    () => {
        trackTime.textContent = getTimeCodeFromNum(
            audio.duration
        );
        audio.volume = volumeButton.classList.contains('.muted') ? 0 : currentVolume;
        currentTime = 0;
        playButton.classList.remove('on-pause');
    },
    false
);


timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
    currentTrackTime.textContent = getTimeCodeFromNum(timeToSeek);
}, false);

setInterval(() => {
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    currentTrackTime.textContent = getTimeCodeFromNum(
        audio.currentTime
    );
    currentTime = audio.currentTime;
}, 500);

function setAudioSrc() {
    audio.src = getSrc(currentTrack)
};

function setAudio2Src() {
    audio2.src = getSrc(currentAnswer);
}

/*VOLUME*/
const volumeButton = document.querySelector(".volume-button");
const volumeSlider = document.querySelector(".volume-slider");
volumeButton.addEventListener('click', e => {

    if (audio.volume != 0) currentVolume = audio.volume;
    if (audio.volume != 0) {
        document.querySelector('.volume-on').style.display = "none";
        document.querySelector('.volume-off').style.display = "flex";
        volumeButton.classList.add('.muted');
        document.querySelector(".volume-percentage").style.width = '0%';
        audio.volume = 0;

    } else {
        document.querySelector('.volume-on').style.display = "flex";
        document.querySelector('.volume-off').style.display = "none";
        volumeButton.classList.remove('.muted');
        document.querySelector(".volume-percentage").style.width = currentVolume * 100 + '%';
        audio.volume = currentVolume;
    }
});

volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    currentVolume = newVolume;
    document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
    if (volumeButton.classList.contains('.muted')) {
        document.querySelector('.volume-on').style.display = "flex";
        document.querySelector('.volume-off').style.display = "none";
        volumeButton.classList.remove('.muted');
    }
}, false);

function playAudio() {
    if (isPlay2 === true) pauseAudio2();
    audio.play();
    audio.currentTime = currentTime;

    isPlay = true;
    playButton.classList.add('pause');
    playButton.classList.remove('on-pause');
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
    playButton.classList.remove('pause');
    playButton.classList.add('on-pause');
    currentTime = audio.currentTime;
}

function pauseAndPlay() {
    if (isPlay != true) {
        playButton.classList.contains('on-pause') ? audio.currentTime = currentTime : audio.currentTime = 0;
        playAudio();
    } else {
        pauseAudio();
    };
}

playButton.addEventListener('click', pauseAndPlay);
audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    isPlay = false;
    playButton.classList.remove('pause');
    playButton.classList.add('on-pause');
});

/* PLAYER 2*/
const playButton2 = document.querySelector('.play2');
const audio2 = new Audio();
let trackTime2 = document.querySelector('.track-time2 .length');
let currentTrackTime2 = document.querySelector('.track-time2 .current');
const timeline2 = document.querySelector('.timeline2');
let currentTime2;
let currentVolume2 = 0.7;
let isPlay2 = false;


audio2.addEventListener(
    "loadeddata",
    () => {
        trackTime2.textContent = getTimeCodeFromNum(
            audio2.duration
        );
        audio2.volume = volumeButton2.classList.contains('.muted') ? 0 : currentVolume2;
        currentTime2 = 0;
        playButton2.classList.remove('on-pause');
    },
    false
);


timeline2.addEventListener("click", e => {
    if (trackTime2.textContent === '0:00') return;
    const timelineWidth2 = window.getComputedStyle(timeline2).width;
    const timeToSeek2 = e.offsetX / parseInt(timelineWidth2) * audio2.duration;
    audio2.currentTime = timeToSeek2;
    currentTrackTime2.textContent = getTimeCodeFromNum(timeToSeek2);
}, false);

setInterval(() => {
    const progressBar2 = document.querySelector(".progress2");
    progressBar2.style.width = audio2.currentTime / audio2.duration * 100 + "%";
    currentTrackTime2.textContent = getTimeCodeFromNum(
        audio2.currentTime
    );
    currentTime2 = audio2.currentTime;
}, 500);

/*VOLUME*/
const volumeButton2 = document.querySelector(".volume-button2");
const volumeSlider2 = document.querySelector(".volume-slider2");
volumeButton2.addEventListener('click', e => {
    if (audio2.volume != 0) currentVolume2 = audio2.volume;
    if (audio2.volume != 0) {
        document.querySelector('.volume-on2').style.display = "none";
        document.querySelector('.volume-off2').style.display = "flex";
        volumeButton2.classList.add('.muted');
        document.querySelector(".volume-percentage2").style.width = '0%';
        audio2.volume = 0;

    } else {
        document.querySelector('.volume-on2').style.display = "flex";
        document.querySelector('.volume-off2').style.display = "none";
        volumeButton2.classList.remove('.muted');
        document.querySelector(".volume-percentage2").style.width = currentVolume2 * 100 + '%';
        audio2.volume = currentVolume2;
    }
});

volumeSlider2.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider2).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio2.volume = newVolume;
    currentVolume2 = newVolume;
    document.querySelector(".volume-percentage2").style.width = newVolume * 100 + '%';
    if (volumeButton2.classList.contains('.muted')) {
        document.querySelector('.volume-on2').style.display = "flex";
        document.querySelector('.volume-off2').style.display = "none";
        volumeButton2.classList.remove('.muted');
    }
}, false);

function playAudio2() {
    if (document.querySelector('.track-time2 .length').textContent === '0:00') return;
    if (isPlay === true) pauseAudio();
    audio2.play();
    audio2.currentTime = currentTime2;

    isPlay2 = true;
    playButton2.classList.add('pause');
    playButton2.classList.remove('on-pause');
}

function pauseAudio2() {
    audio2.pause();
    isPlay2 = false;
    playButton2.classList.remove('pause');
    playButton2.classList.add('on-pause');
    currentTime2 = audio2.currentTime;
}

function pauseAndPlay2() {
    if (playButton2.classList.contains('gallery')) return;
    if (isPlay2 != true) {
        playButton2.classList.contains('on-pause') ? audio2.currentTime = currentTime : audio2.currentTime = 0;
        playAudio2();
    } else {
        pauseAudio2();
    };
}

playButton2.addEventListener('click', pauseAndPlay2);
audio2.addEventListener('ended', () => {
    audio2.currentTime = 0;
    isPlay2 = false;
    playButton2.classList.remove('pause');
    playButton2.classList.add('on-pause');
});

function resetAudio2Time() {
    audio2.currentTime = 0;
}

export { pauseAudio, pauseAudio2, playAudio2, pauseAndPlay2, setAudioSrc, setAudio2Src, resetAudio2Time, isPlay2, playButton2 };