import { lang } from './translate.js';
import { meme, anime, series, games, old, christmas, test } from './songs.js';
import { pauseAudio, pauseAudio2, playAudio2, pauseAndPlay2, setAudioSrc, setAudio2Src, resetAudio2Time, isPlay2, playButton2 } from './player.js';

const sound = new Audio;
sound.volume = 0.7;
let stage = test;
let playerName = '';
let score = 0;
let currentTrack;
let currentAnswer;
let currentArr;
let currentScore = 5;
let status;
const gameList = Array.from(document.querySelectorAll('.game__list__li'));
const menuList = Array.from(document.querySelectorAll('.header__li'));

/* LOCAL STORAGE */
function setLocalStorage() {
    localStorage.setItem('nameTheSongPlayer', playerName);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('nameTheSongPlayer')) {
        if (localStorage.getItem('nameTheSongPlayer') && localStorage.getItem('nameTheSongPlayer') != 'Player' && localStorage.getItem('nameTheSongPlayer') != 'Игрок') playerNameInput.value = localStorage.getItem('nameTheSongPlayer');
    }
};
window.addEventListener('load', getLocalStorage);

/* PLAYER'S NAME */
let playerNameInput = document.querySelector('.start-screen__input');
playerNameInput.addEventListener('change', () => {
    if (playerNameInput.value === '') {
        playerName = lang === 'en' ? 'Player' : 'Игрок';
    } else {
        playerName = playerNameInput.value;
    }
});

function getPlayerName(playerName) {
    if (playerName === '') {
        return lang === 'en' ? 'Player' : 'Игрок';
    } else {
        return playerName;
    }
};

/* BUTTONS */
document.querySelector('.start-screen__try').addEventListener('click', () => {
    beginGame(test);
    setNewQuestion();
    currentAnswer = undefined;
});
document.querySelector('.start-screen__start').addEventListener('click', () => {
    beginGame(meme);
    setNewQuestion();
    currentAnswer = undefined;
});

function beginGame(selectedStage) {
    stage = selectedStage;
    setCurGame(stage);
    document.querySelector('.start-screen').classList.remove('active');
    document.querySelector('.main__game').classList.remove('end');
    document.querySelector('.game__next').classList.remove('end');
    document.querySelector('.header__home').classList.remove('header__home_active');
};

document.querySelector('.main__final__button__try').addEventListener('click', () => {
    status = '';
    score = 0;
    beginGame(meme);
    setNewQuestion();
    document.querySelector('.header__score-value').textContent = score;
    document.querySelector('.main__final').classList.remove('active');
});

document.querySelector('.header__home').addEventListener('click', () => {
    openStartScreen();
});

function openStartScreen() {
    pauseAudio();
    pauseAudio2();
    status = '';
    score = 0;
    document.querySelector('.header__score-value').textContent = score;
    document.querySelector('.main__gallery__embed').innerHTML = '';
    document.querySelector('.start-screen').classList.add('active');
    document.querySelector('.main__game').classList.add('end');
    document.querySelector('.game__next').classList.add('end');
    document.querySelector('.main__final').classList.remove('active');
    document.querySelector('.main__final').classList.remove('active');
    document.querySelector('.header__home').classList.add('header__home_active');
    document.querySelector('.main__gallery').classList.remove('active');
    document.querySelector('.game__question').classList.remove('hidden');
    menuList.forEach((elem) => {
        elem.classList.remove('header__li_active');
    });
}

function setCurGame(stage) {
    for (let i = 0; i < 6; i++) {
        gameList[i].textContent = stage[i].name;
    };
    currentArr = stage.sort(() => Math.round(Math.random() * 100) - 50);
    currentTrack = currentArr[0];
    currentScore = 5;
    setHeaderStage(stage);
    setAudioSrc();
};


function setHeaderStage(stage) {
    if (status != 'win') {
        menuList.forEach((elem) => {
            if (elem.classList.contains(`header__${getStageString(stage)}`)) {
                elem.classList.add('header__li_active');
            } else {
                elem.classList.remove('header__li_active');
            };
        });
    } else if (status === 'win') {
        menuList.forEach((elem) => {
            elem.classList.remove('header__li_active');
        });
    };
};

function getStageString(stage) {
    switch (stage) {
        case test:
            return 'test';
        case meme:
            return 'meme';
        case anime:
            return 'anime';
        case series:
            return 'series';
        case games:
            return 'games';
        case old:
            return 'old';
        case christmas:
            return 'christmas';
    };
};

function getSrc(track) {
    return track.audio;
};

gameList.forEach((elem) => {
    elem.addEventListener('click', () => {

        if (elem.textContent === document.querySelector('.game__answer__song').textContent) return;

        pauseAudio2();
        for (let i = 0; i < 6; i++) {
            if (stage[i].name === elem.textContent) currentAnswer = stage[i];
        }
        document.querySelector('.game__answer__song').textContent = currentAnswer.name;
        document.querySelector('.game__answer__band').textContent = currentAnswer.band;
        document.querySelector('.game__answer__text').textContent = lang === 'en' ? currentAnswer.description : currentAnswer.descriptionRU;
        document.querySelector('.game__answer__img').style.backgroundImage = `url("${currentAnswer.image}")`;

        if (elem.textContent === currentTrack.name && status != 'win') {
            elem.classList.add('game__list__li_true');
            win();
        } else if (elem.textContent != currentTrack.name && status != 'win') {
            lose(elem);
        };
        setAudio2Src();
    });
});

function win() {
    status = 'win';
    pauseAudio();
    pauseAudio2();
    sound.src = 'assets/audio/win.mp3';
    sound.play();
    if (stage != test) score += currentScore;
    document.querySelector('.header__score-value').textContent = score;
    setQuestionAfterWin();
};

function lose(elem) {
    sound.src = 'assets/audio/nope.wav';
    sound.play();
    if (elem.classList.contains('game__list__li_false')) return;
    elem.classList.add('game__list__li_false');
    if (currentScore != +0) currentScore -= 1;
};

function setQuestionAfterWin() {
    document.querySelector('.game__question__song').textContent = currentAnswer.name;
    document.querySelector('.game__question__band').textContent = currentAnswer.band;
    document.querySelector('.game__question__img').style.backgroundImage = `url("${currentAnswer.image}")`;
    document.querySelector('.game__next__button').classList.add('button_active');
};


/* NEXT */
document.querySelector('.game__next__button').addEventListener('click', () => {
    pauseAudio2();
    currentAnswer = undefined;

    if (stage === christmas) {
        endGame(score);
        return;
    };

    status = '';
    switch (stage) {
        case test:
            stage = meme;
            break;
        case meme:
            stage = anime;
            break;
        case anime:
            stage = series;
            break;
        case series:
            stage = games;
            break;
        case games:
            stage = old;
            break;
        case old:
            stage = christmas;
            break;
    };
    setCurGame(stage);
    setNewQuestion();
});

function setNewQuestion() {
    resetQPlayer('');
    gameList.forEach((elem) => {
        elem.classList.remove('game__list__li_true');
        elem.classList.remove('game__list__li_false');
    });
    document.querySelector('.play').classList.remove('on-pause');
    resetAudio2Time();
};

function resetQPlayer(x) {
    document.querySelector('.game__question__song').textContent = '******';
    document.querySelector('.game__question__band').textContent = '******';
    document.querySelector('.game__question__img').style.backgroundImage = 'url("assets/img/default.gif")';
    document.querySelector('.game__next__button').classList.remove('button_active');
    document.querySelector('.game__answer__song').textContent = '******';
    document.querySelector('.game__answer__band').textContent = '******';
    document.querySelector('.game__answer__text').innerHTML = x === 'gallery' ?
        '' :
        lang === 'en' ? 'Listen a track => Choose a name of this track' : `Послушайте песню => Выберите название`;
    document.querySelector('.game__answer__img').style.backgroundImage = 'url("assets/img/covers/fake.png")';
    document.querySelector('.track-time2 .length').textContent = '0:00';
};

function endGame(score) {
    document.querySelector('.main__game').classList.add('end');
    document.querySelector('.game__next').classList.add('end');
    document.querySelector('.main__final').classList.add('active');
    setHeaderStage(stage);
    getEndScreen(score);
    if (score === 30) {
        document.querySelector('.main__final__img').style.backgroundImage = 'url("assets/img/win.gif")';
    } else {
        document.querySelector('.main__final__img').style.backgroundImage = 'url("assets/img/clap.gif")';
    };
};

function getEndScreen(score) {
    if (score === 30) {
        document.querySelector('.main__final__title').textContent = lang === 'en' ? 'Congratulations!' : 'Примите поздравления!';
        document.querySelector('.main__final__text').textContent = lang === 'en' ? `You\'re the winner, ${getPlayerName(playerName)}!` : `Вы победили, ${getPlayerName(playerName)}!`;
    } else {
        document.querySelector('.main__final__title').textContent = lang === 'en' ? 'The game has ended.' : 'Конец игры';
        document.querySelector('.main__final__text').textContent = lang === 'en' ? `Your result, ${getPlayerName(playerName)}: ${score}.` : `Ваш результат, ${getPlayerName(playerName)}: ${score}.`;
    };
};

/* GALLERY */
let curStageGallery = test;
const choiceList = document.querySelector('.stage-tracks-choice');
const choiceLi = Array.from(document.querySelectorAll('.stage-tracks-choice__li'));
const testList = document.querySelector('.stage-test-tracks');
const testTracks = Array.from(document.querySelectorAll('.stage-test-track'));
const fullVerButton = document.querySelector('.main__gallery__full-track__button');

document.querySelector('.main__final__button__gallery').addEventListener('click', openGallery);

function openGallery() {
    status = '';
    score = 0;
    document.querySelector('.header__score-value').textContent = score;
    currentAnswer = test[0];
    document.querySelector('.play2').classList.add('gallery');
    document.querySelector('.main__final').classList.remove('active');
    document.querySelector('.main__final').classList.remove('active');
    document.querySelector('.main__gallery').classList.add('active');
    document.querySelector('.game__question').classList.add('hidden');
    document.querySelector('.main__game').classList.remove('end');
    document.querySelector('.header__home').classList.remove('header__home_active');
    resetQPlayer('gallery');

    for (let i = 0; i < 6; i++) {
        testTracks[i].textContent = curStageGallery[i].name;
    };
};

choiceList.addEventListener('click', (e) => {
    curStageGallery = getStageFromString(e.target.textContent);
    for (let i = 0; i < 6; i++) {
        testTracks[i].textContent = curStageGallery[i].name;
    }

    for (let i = 0; i < 6; i++) {
        if (testTracks[i].textContent === currentAnswer.name && isPlay2 === true) {
            testTracks[i].classList.add('stage-test-track_active');
        } else {
            testTracks[i].classList.remove('stage-test-track_active');
        };
    }

    for (let i = 0; i < 7; i++) {
        if (e.target.textContent === choiceLi[i].textContent) {
            e.target.classList.add('stage-tracks-choice__li_active');
        } else {
            choiceLi[i].classList.remove('stage-tracks-choice__li_active');

        };
    };
});

testList.addEventListener('click', (e) => {
    if (playButton2.classList.contains('gallery')) playButton2.classList.remove('gallery');
    for (let i = 0; i < 6; i++) {
        if (e.target.textContent === curStageGallery[i].name) {
            if (e.target.classList.contains('stage-test-track_active')) return;
            currentAnswer = curStageGallery[i];
            e.target.classList.add('stage-test-track_active');
            document.querySelector('.main__gallery__embed').classList.remove('error')
            document.querySelector('.main__gallery__embed').innerHTML = '';
            fullVerButton.style.display = 'block';
        } else {
            testTracks[i].classList.remove('stage-test-track_active');
        };
    };
    pauseAudio2();
    document.querySelector('.game__answer__song').textContent = currentAnswer.name;
    document.querySelector('.game__answer__band').textContent = currentAnswer.band;
    document.querySelector('.game__answer__text').textContent = lang === 'en' ? currentAnswer.description : currentAnswer.descriptionRU;
    document.querySelector('.game__answer__img').style.backgroundImage = `url("${currentAnswer.image}")`;
    setAudio2Src();
});

fullVerButton.addEventListener('click', () => {
    for (let i = 0; i < 6; i++) {
        if (testTracks[i].classList.contains('stage-test-track_active')) {
            fullVerButton.style.display = 'none';
            getFullTrack(currentAnswer.spotify);
        }
    };
});

function getStageFromString(string) {
    switch (string) {
        case 'Meme songs':
            return meme;
        case 'Мемы':
            return meme;
        case 'Anime OSTs':
            return anime;
        case 'Аниме':
            return anime;
        case 'Series OSTs':
            return series;
        case 'Сериалы':
            return series;
        case 'Games OSTs':
            return games;
        case 'Игры':
            return games;
        case "Songs of 2000's":
            return old;
        case 'Песни 2000-х':
            return old;
        case 'Xmas songs':
            return christmas;
        case 'Рождество':
            return christmas;
        case 'Test':
            return test;
        case 'Тест':
            return test;
    };
};

function getFullTrack(code) {
    document.querySelector('.main__gallery__embed').innerHTML = `${code}`;
    setTimeout(() => {
        document.querySelector('.main__gallery__embed').classList.add('error');
    }, 1000);
};

export { stage, getSrc, currentArr, currentTrack, currentAnswer, score, getEndScreen };