import { currentAnswer, getEndScreen, score } from "./game";

let lang = localStorage.getItem('nameTheSongLang') ? localStorage.nameTheSongLang : 'en'; //'ru'

function setLangStorage() {
    localStorage.setItem('nameTheSongLang', lang);
}
window.addEventListener('beforeunload', setLangStorage);

function translateToEn() {
    document.title = 'Name The Song';
    document.querySelector('.header__lang').textContent = 'RU';
    document.querySelector('.header__title').innerHTML = `Name<br>The Song`;
    document.querySelector('.header__score-title').textContent = 'Score: ';
    document.querySelector('.burger-icon').textContent = 'Rounds';
    document.querySelector('.header__meme').textContent = 'Meme songs';
    document.querySelector('.header__anime').textContent = 'Anime OSTs';
    document.querySelector('.header__series').textContent = 'Series OSTs';
    document.querySelector('.header__games').textContent = 'Games OSTs';
    document.querySelector('.header__old').textContent = 'Songs of 2000\'s';
    document.querySelector('.header__christmas').textContent = 'Xmas songs';
    document.querySelector('.start-screen__title').textContent = 'Hello, ';
    document.querySelector('.start-screen__input').placeholder = 'enter your name...';
    document.querySelector('.start-screen__text').innerHTML = `How to play?<br>Listen a track (the left player) => Choose its name. <br>You can try a game (one round without score)<br>or start a new game right now.`;
    document.querySelector('.start-screen__try').textContent = 'Try';
    document.querySelector('.start-screen__start').textContent = 'Start';
    document.querySelector('.main__final__btn-description').textContent = 'You can try again or listen all the tracks in the Gallery.';
    document.querySelector('.main__final__button__try').textContent = 'Try again';
    document.querySelector('.main__final__button__gallery').textContent = 'Gallery';
    document.querySelector('.main__gallery__title').textContent = 'Gallery';
    document.querySelector('.main__gallery__text').textContent = 'Here you can listen all the songs (game version and full version).';
    document.querySelector('.stage-tracks-choice__li__test').textContent = 'Test';
    document.querySelector('.stage-tracks-choice__li__meme').textContent = 'Meme songs';
    document.querySelector('.stage-tracks-choice__li__anime').textContent = 'Anime OSTs';
    document.querySelector('.stage-tracks-choice__li__series').textContent = 'Series OSTs';
    document.querySelector('.stage-tracks-choice__li__games').textContent = 'Games OSTs';
    document.querySelector('.stage-tracks-choice__li__old').textContent = 'Songs of 2000\'s';
    document.querySelector('.stage-tracks-choice__li__christmas').textContent = 'Xmas songs';
    document.querySelector('.main__gallery__full-track__button').textContent = 'Full version';
    try {
        document.querySelector('.game__answer__text').textContent = currentAnswer.description;
    } catch {
        document.querySelector('.game__answer__text').textContent = `Listen a track => Choose a name of this track`;
    };
    document.querySelector('.game__next__button').textContent = 'NEXT';
    getEndScreen(score);
};

function translateToRu() {
    document.title = '???????????? ??????????';
    document.querySelector('.header__lang').textContent = 'EN';
    document.querySelector('.header__title').innerHTML = `????????????<br>??????????`;
    document.querySelector('.header__score-title').textContent = '????????: ';
    document.querySelector('.burger-icon').textContent = '????????????';
    document.querySelector('.header__meme').textContent = '????????';
    document.querySelector('.header__anime').textContent = '??????????';
    document.querySelector('.header__series').textContent = '??????????????';
    document.querySelector('.header__games').textContent = '????????';
    document.querySelector('.header__old').textContent = '?????????? 2000-??';
    document.querySelector('.header__christmas').textContent = '??????????????????';
    document.querySelector('.start-screen__title').textContent = '????????????, ';
    document.querySelector('.start-screen__input').placeholder = '?????????????? ???????? ??????...';
    document.querySelector('.start-screen__text').innerHTML = `?????? ?????????????<br>???????????????? ?????????? ?? ?????????? ???????????? => ?????????????????? ???? ????????????????. <br>???? ???????????? ?????????????? ?????????????? ?????????? (?????? ??????????) <br>?????? ?????????? ???????????? ????????.`;
    document.querySelector('.start-screen__try').textContent = '??????????????????????';
    document.querySelector('.start-screen__start').textContent = '????????????';
    document.querySelector('.main__final__btn-description').textContent = '???? ???????????? ?????????????? ?????? ?????? ?????? ?????????????????? ?????? ?????????? ?? ??????????????.';
    document.querySelector('.main__final__button__try').textContent = '?????? ??????';
    document.querySelector('.main__final__button__gallery').textContent = '??????????????';
    document.querySelector('.main__gallery__title').textContent = '??????????????';
    document.querySelector('.main__gallery__text').textContent = '?????????? ???? ???????????? ?????????????????? ?????? ?????????? (?????????????? ???? ???????? ?????? ???????????? ????????????).';
    document.querySelector('.stage-tracks-choice__li__test').textContent = '????????';
    document.querySelector('.stage-tracks-choice__li__meme').textContent = '????????';
    document.querySelector('.stage-tracks-choice__li__anime').textContent = '??????????';
    document.querySelector('.stage-tracks-choice__li__series').textContent = '??????????????';
    document.querySelector('.stage-tracks-choice__li__games').textContent = '????????';
    document.querySelector('.stage-tracks-choice__li__old').textContent = '?????????? 2000-??';
    document.querySelector('.stage-tracks-choice__li__christmas').textContent = '??????????????????';
    document.querySelector('.main__gallery__full-track__button').textContent = '???????????? ????????????';
    try {
        document.querySelector('.game__answer__text').textContent = currentAnswer.descriptionRU;
    } catch {
        document.querySelector('.game__answer__text').innerHTML = `???????????????????? ?????????? => ???????????????? ????????????????`;
    };
    document.querySelector('.game__next__button').textContent = '??????????';
    getEndScreen(score);
};

lang === 'en' ? translateToEn() : translateToRu();

document.querySelector('.header__lang').addEventListener('click', () => {
    if (lang === 'en') {
        lang = 'ru';
        translateToRu();
    } else if (lang === 'ru') {
        lang = 'en';
        translateToEn();
    };
})

export { lang };