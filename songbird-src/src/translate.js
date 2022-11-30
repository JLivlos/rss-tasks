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
    document.title = 'Назови песню';
    document.querySelector('.header__lang').textContent = 'EN';
    document.querySelector('.header__title').innerHTML = `Назови<br>песню`;
    document.querySelector('.header__score-title').textContent = 'Счет: ';
    document.querySelector('.burger-icon').textContent = 'Раунды';
    document.querySelector('.header__meme').textContent = 'Мемы';
    document.querySelector('.header__anime').textContent = 'Аниме';
    document.querySelector('.header__series').textContent = 'Сериалы';
    document.querySelector('.header__games').textContent = 'Игры';
    document.querySelector('.header__old').textContent = 'Песни 2000-х';
    document.querySelector('.header__christmas').textContent = 'Рождество';
    document.querySelector('.start-screen__title').textContent = 'Привет, ';
    document.querySelector('.start-screen__input').placeholder = 'введите свое имя...';
    document.querySelector('.start-screen__text').innerHTML = `Как играть?<br>Слушаете песню в левом плеере => Выбираете ее название. <br>Вы можете сыграть пробный раунд (без счета) <br>или сразу начать игру.`;
    document.querySelector('.start-screen__try').textContent = 'Попробовать';
    document.querySelector('.start-screen__start').textContent = 'Играть';
    document.querySelector('.main__final__btn-description').textContent = 'Вы можете сыграть еще раз или послушать все песни в галерее.';
    document.querySelector('.main__final__button__try').textContent = 'Еще раз';
    document.querySelector('.main__final__button__gallery').textContent = 'Галерея';
    document.querySelector('.main__gallery__title').textContent = 'Галерея';
    document.querySelector('.main__gallery__text').textContent = 'Здесь вы можете послушать все песни (отрывки из игры или полные версии).';
    document.querySelector('.stage-tracks-choice__li__test').textContent = 'Тест';
    document.querySelector('.stage-tracks-choice__li__meme').textContent = 'Мемы';
    document.querySelector('.stage-tracks-choice__li__anime').textContent = 'Аниме';
    document.querySelector('.stage-tracks-choice__li__series').textContent = 'Сериалы';
    document.querySelector('.stage-tracks-choice__li__games').textContent = 'Игры';
    document.querySelector('.stage-tracks-choice__li__old').textContent = 'Песни 2000-х';
    document.querySelector('.stage-tracks-choice__li__christmas').textContent = 'Рождество';
    document.querySelector('.main__gallery__full-track__button').textContent = 'Полная версия';
    try {
        document.querySelector('.game__answer__text').textContent = currentAnswer.descriptionRU;
    } catch {
        document.querySelector('.game__answer__text').innerHTML = `Послушайте песню => Выберите название`;
    };
    document.querySelector('.game__next__button').textContent = 'ДАЛЕЕ';
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