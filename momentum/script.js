let state = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date', 'greeting', 'quote', 'weather', 'audio', 'todo', 'some']
};
if (localStorage.getItem('lang')) state.language = localStorage.getItem('lang');
let states = ['time', 'date', 'greeting', 'quote', 'weather', 'audio', 'todo', 'some'];
let apiTag = document.querySelector('.api-tag');
if (localStorage.getItem('photoSource')) state.photoSource = localStorage.getItem('photoSource');
if (localStorage.getItem('blocks')) {
    states.length === 0 ? state.blocks = [] : state.blocks = localStorage.getItem('blocks');
}
if (localStorage.getItem('apiTag')) {
    apiTag.value = localStorage.getItem('apiTag');
} else {
    apiTag.value = timeOfDay();
};
const inputToDo = document.querySelector('.todo-input');
const blocksStrings = [
    'audio', document.querySelector('.player'),
    'weather', document.querySelector('.weather'),
    'time', document.querySelector('.time-block'),
    'date', document.querySelector('.date-block'),
    'greeting', document.querySelector('.greeting-container'),
    'quote', document.querySelector('.quotes'),
    'todo', document.querySelector('.todo-container'),
];
const blocks = document.querySelectorAll('.blocks-vis');
setVisibleBlocks();

let isToDoOpen = localStorage.getItem('todo') ? localStorage.getItem('todo') : true;

state.language === 'en' ? apiTag.placeholder = 'Enter tag...' : apiTag.placeholder = 'Тэг...';

if (isToDoOpen === 'true') {
    document.querySelector('.todo-wrapper').classList.remove('close');
    document.querySelector('.eye-icon').classList.remove('close');
} else {
    document.querySelector('.todo-wrapper').classList.add('close');
    document.querySelector('.eye-icon').classList.add('close');
};
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('.body');
let randomNum = bgNum();
let randomNumFlickr = flickrNumber();
const weather = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');
const weatherInfo = document.querySelectorAll('.weather-info');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const playList = document.querySelector('.play-list');

/* SETTINGS */

document.querySelector('.button-settings').addEventListener('click', () => {
    document.querySelector('.settings').classList.add('active');
    translateSettings();
});

document.querySelector('.settings-close').addEventListener('click', () => {
    document.querySelector('.settings').classList.remove('active');
});

function getCheckedLang() {
    for (let i = 0; i < languages.length; i++) {
        if (languages[i].checked) return languages[i].value;
    }
};

function getCheckedBgSource() {
    for (let i = 0; i < photoSources.length; i++) {
        if (photoSources[i].checked) return photoSources[i].value;
    }
};

function setVisibleBlocks() {
    if (state.blocks.length === 0) {
        for (let i = 1; i < blocksStrings.length; i += 2) {
            blocksStrings[i].classList.add('invis');
        };
    } else {
        for (let i = 0; i < blocks.length; i++) {
            if (state.blocks.includes(blocks[i].value)) {
                blocksStrings[blocksStrings.indexOf(blocks[i].value) + 1].classList.remove('invis');
            } else {
                blocksStrings[blocksStrings.indexOf(blocks[i].value) + 1].classList.add('invis');
            };
        };
    };
};

document.querySelector('.apply-settings').addEventListener('click', () => {
    state.language = getCheckedLang();
    state.photoSource = getCheckedBgSource();
    document.querySelector('.settings').classList.remove('active');
    if (apiTag.value === '') apiTag.value = timeOfDay();
    showGreeting();
    getQuotes(randomQuote);
    setImgBg();
    state.language === 'en' ? apiTag.placeholder = 'Enter tag...' : apiTag.placeholder = 'Увядзіце тэг...';
    translateToDo();

    for (let i = 0; i < blocks.length; i++) {
        let y = blocksStrings.indexOf(blocks[i].value, 0)
        let x = state.blocks.indexOf(blocks[i]);
        if (blocks[i].checked != true) {
            blocksStrings[y + 1].classList.add('invis');
            let index = states.indexOf(blocks[i].value);
            if (index !== -1) {
                states.splice(index, 1);
            };
        } else {
            y = blocksStrings.indexOf(blocks[i].value, 0)
            blocksStrings[y + 1].classList.remove('invis');
            let index = states.indexOf(blocks[i].value);
            if (index == -1) {
                states.push(blocks[i].value);
            };
        };
    };

    if (city.value === 'Minsk' || city.value === 'Мiнск') {
        city.value = state.language === 'en' ? 'Minsk' : 'Мiнск';
        getWeather('Minsk');
    } else {
        getWeather(city.value);
    };
});
const languages = document.querySelectorAll('.lang');
const photoSources = document.querySelectorAll('.imgs');


function checked() {
    for (i = 0; i < languages.length; i++) {
        if (languages[i].value === state.language) languages[i].checked = true;
    }
    for (i = 0; i < photoSources.length; i++) {
        if (photoSources[i].value === state.photoSource) photoSources[i].checked = true;
    }
    for (i = 0; i < blocks.length; i++) {
        if (state.blocks.includes(blocks[i].value)) {
            blocks[i].checked = true;
        };
    };
};

checked();

function translateToDo() {
    if (state.language === 'en') {
        document.querySelector('.todos-title').textContent = 'To Do List';
        inputToDo.placeholder = 'Add task';
        document.querySelector('.clear').textContent = 'Clear';
    } else {
        document.querySelector('.todos-title').textContent = 'Спiс задач';
        inputToDo.placeholder = 'Дадаць задачу';
        document.querySelector('.clear').textContent = 'Выдалiць усё';
    };
};
translateToDo();

function settingsToEn() {
    document.querySelector('.en-title').textContent = 'English';
    document.querySelector('.be-title').textContent = 'Belarusian';
    document.querySelector('.title-setting').textContent = 'Settings';
    document.querySelector('.lang-title').textContent = 'Language';
    document.querySelector('.photo-setting').textContent = 'Photo source';
    document.querySelector('.blocks-setting').textContent = 'Blocks';
    document.querySelector('.player-title').textContent = 'Player';
    document.querySelector('.todo-title').textContent = 'ToDo';
    document.querySelector('.weather-title').textContent = 'Weather';
    document.querySelector('.time-title').textContent = 'Time';
    document.querySelector('.date-title').textContent = 'Date';
    document.querySelector('.greeting-title').textContent = 'Greeting';
    document.querySelector('.quote-title').textContent = 'Quote';
    document.querySelector('.apply-settings').textContent = 'Apply';
    apiTag.placeholder = 'Enter tag...'
};

function settingsToBe() {
    document.querySelector('.en-title').textContent = 'Англiйская';
    document.querySelector('.be-title').textContent = 'Беларуская';
    document.querySelector('.title-setting').textContent = 'Налады';
    document.querySelector('.lang-title').textContent = 'Мова';
    document.querySelector('.photo-setting').textContent = 'Крыніца фота';
    document.querySelector('.blocks-setting').textContent = 'Блокi';
    document.querySelector('.player-title').textContent = 'Плэер';
    document.querySelector('.todo-title').textContent = 'Спiс задач';
    document.querySelector('.weather-title').textContent = "Надвор'е";
    document.querySelector('.time-title').textContent = 'Час';
    document.querySelector('.date-title').textContent = 'Дата';
    document.querySelector('.greeting-title').textContent = 'Прывітанне';
    document.querySelector('.quote-title').textContent = 'Цытата';
    document.querySelector('.apply-settings').textContent = 'Прымяніць';
    apiTag.placeholder = 'Увядзіце тэг...'
};

function translateSettings() {
    if (state.language === 'en') {
        settingsToEn();
    } else {
        settingsToBe();
    };
}

document.querySelector('.en-item').addEventListener('click', () => {
    document.querySelector('.en-lang').checked = true;
    settingsToEn();
});

document.querySelector('.be-item').addEventListener('click', () => {
    document.querySelector('.be-lang').checked = true;
    settingsToBe();
});

/* TIME AND DATE */

function showTime() {
    let currentDate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour12: 'false' };
    time.innerHTML = currentDate.toLocaleTimeString();
    date.innerHTML = state.language === 'en' ? currentDate.toLocaleDateString('en-US', options) : translateDate();
    setTimeout(showTime, 1000);
};
showTime();

function translateDate() {
    let currentDate = new Date();
    const optionsWDay = { weekday: 'long' };
    const optionsMonth = { month: 'long' };
    const optionsDay = { day: 'numeric' };
    let curWeekDay = currentDate.toLocaleDateString('ru-Ru', optionsWDay);
    let curMonth = currentDate.toLocaleDateString('ru-Ru', optionsMonth);
    let curDay = currentDate.toLocaleDateString('ru-Ru', optionsDay);

    function getWeekDay(day) {
        switch (day) {
            case 'понедельник':
                return 'панядзелак';
            case 'вторник':
                return 'аўторак';
            case 'среда':
                return 'серада';
            case 'четверг':
                return 'чацвер';
            case 'пятница':
                return 'пятніца';
            case 'суббота':
                return 'субота';
            case 'воскресенье':
                return 'нядзеля';
        };
    };

    function getMonth(month) {
        switch (month) {
            case 'январь':
                return 'студзеня';
            case 'февраль':
                return 'лютага';
            case 'март':
                return 'сакавіка';
            case 'апрель':
                return 'красавіка';
            case 'май':
                return 'мая';
            case 'июнь':
                return 'чэрвеня';
            case 'июль':
                return 'ліпеня';
            case 'август':
                return 'жнiўня';
            case 'сентябрь':
                return 'верасня';
            case 'октябрь':
                return 'красавiка';
            case 'ноябрь':
                return 'лiстапада';
            case 'декабрь':
                return 'снежня';
        };
    };
    return `${getWeekDay(curWeekDay)}, ${curDay} ${getMonth(curMonth)}`
};

function timeOfDay() {
    let currentDate = new Date();
    const hours = currentDate.getHours();
    return Math.floor(hours / 6) === 1 ? 'morning' : Math.floor(hours / 6) === 2 ? 'afternoon' : Math.floor(hours / 6) === 3 ? 'evening' : 'night';
};

/* GREETING */
function showGreeting() {
    if (state.language === 'en') {
        greeting.innerHTML = `Good ${timeOfDay()}`;
        name.placeholder = '[Enter name]';
        city.placeholder = '[Enter city]';
    } else {
        greeting.innerHTML = translateGreeting();
        name.placeholder = '[Ваша iмя]';
        city.placeholder = '[Ваш горад]';
    }
};

function translateGreeting() {
    if (timeOfDay() === 'morning') {
        return 'Добрай ранiцы';
    } else if (timeOfDay() === 'afternoon') {
        return 'Добры дзень';
    } else if (timeOfDay() === 'evening') {
        return 'Добры вечар';
    } else {
        return 'Дабранач';
    }
};

showGreeting();

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('lang', state.language);
    localStorage.setItem('photoSource', state.photoSource);
    localStorage.setItem('apiTag', apiTag.value);
    localStorage.setItem('blocks', states);
    localStorage.setItem("todos", todos.innerHTML);
    localStorage.setItem("todo", isToDoOpen);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    city.value = state.language === 'en' ? 'Minsk' : 'Мiнск';
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    };
};
window.addEventListener('load', getLocalStorage);

/* SLIDER */
function bgNum() {
    return ('' + Math.ceil(Math.random() * 19 + 1)).padStart(2, 0);
};

function flickrNumber() {
    return (Math.ceil(Math.random() * 99 + 1));
};

function setBg(timeOfDay, bgNum) {
    const img = new Image();
    img.src = `assets/img/${timeOfDay()}/${randomNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/jlivlos/stage1-tasks/assets/images/${timeOfDay()}/${randomNum}.jpg')`;
    };
};

async function setImgUnsplash(tag) {
    try {
        const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${apiTag.value}&client_id=L-IC2P2MByNFt1GFNqg3a6-17-RXxenI9pRSBKROcqU`;
        const res = await fetch(url);
        const data = await res.json();

        const img = new Image();
        img.src = data.urls.regular;
        img.onload = () => {
            body.style.backgroundImage = `url(${data.urls.regular})`;
        };
    } catch (e) {
        console.log('Error Unsplash');
        setBg(timeOfDay, bgNum);
    };
};

async function setImgFlickr() {
    try {
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=99c96d495aa9bf2230dac51053bda222&tags=${apiTag.value}&extras=url_l&format=json&nojsoncallback=1`;
        const res = await fetch(url);
        const data = await res.json();

        const img = new Image();
        img.src = data.photos.photo[randomNumFlickr].url_l;
        img.onload = () => {
            body.style.backgroundImage = `url(${data.photos.photo[randomNumFlickr].url_l})`;
        };
    } catch (e) {
        console.log('Error Flickr');
        setBg(timeOfDay, bgNum);
    };
};

function getSlideNext() {
    if (state.photoSource === 'github') {
        +randomNum === 20 ? randomNum = '01' : randomNum = ('' + (+randomNum + 1)).padStart(2, 0);
        setBg(timeOfDay, bgNum);
    } else if (state.photoSource === 'unsplash') {
        setImgUnsplash();
    } else {
        randomNumFlickr === 99 ? randomNumFlickr = 1 : randomNumFlickr = randomNumFlickr + 1;
        setImgFlickr();
    };
};

function getSlidePrev() {
    if (state.photoSource === 'github') {
        +randomNum === 1 ? randomNum = '20' : randomNum = ('' + (+randomNum - 1)).padStart(2, 0);
        setBg(timeOfDay, bgNum);
    } else if (state.photoSource === 'unsplash') {
        setImgUnsplash();
    } else {
        randomNumFlickr === 1 ? randomNumFlickr = 99 : randomNumFlickr = randomNumFlickr - 1;
        setImgFlickr();
    };
};

document.querySelector('.slide-next').addEventListener('click', getSlideNext);
document.querySelector('.slide-prev').addEventListener('click', getSlidePrev);

function setImgBg() {
    if (state.photoSource === 'github') {
        setBg(timeOfDay, bgNum);
    } else if (state.photoSource === 'unsplash') {
        setImgUnsplash();
    } else {
        setImgFlickr();
    };
};
setImgBg();

/* WEATHER */

async function getWeather(currentCity) {
    try {
        const url = state.language === 'en' ? `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&lang=en&appid=678d11f9e60154f12468c45806a0a519&units=metric` : `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&lang=be&appid=678d11f9e60154f12468c45806a0a519&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        weather.style.justifyContent = "space-between";
        weatherError.style.display = "none";
        weatherInfo.forEach((e) => e.style.display = "flex");
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = state.language === 'en' ? `Wind speed: ${Math.round(data.wind.speed)} m/s` : `Вецер: ${Math.round(data.wind.speed)} м/с`;
        humidity.textContent = state.language === 'en' ? `Humidity: ${Math.round(data.main.humidity)} %` : `Вільготнасць: ${Math.round(data.main.humidity)} %`;
    } catch (e) {
        weather.style.justifyContent = "flex-start";
        weatherError.style.display = "flex";
        weatherError.textContent = state.language === 'en' ? 'Error! Enter your city, please.' : 'Памылка! Калi ласка, увядзiце свой горад.';
        weatherInfo.forEach((e) => e.style.display = "none");
    };
};

getWeather('Minsk');

city.addEventListener('change', () => {
    getWeather(city.value);
});

/* QUOTES */
let randomQuote = getRandomQuote();

function getRandomQuote() {
    return Math.round(0.5 + Math.random() * 8);
};

async function getQuotes(randomQuote) {
    const quotes = state.language === 'en' ? 'data.json' : 'data-be.json';
    const res = await fetch(quotes);
    const data = await res.json();

    quote.textContent = `"${data[randomQuote].text}"`;
    author.textContent = data[randomQuote].author;
};

getQuotes(randomQuote);

changeQuote.addEventListener('click', () => {
    getQuotes(getRandomQuote());
});

/* PLAYER */
const playButton = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const audio = new Audio();
let arrTracks = [];
let playItems;
const trackName = document.querySelector('.track-name');
let trackTime = document.querySelector('.track-time .length');
let currentTrackTime = document.querySelector('.track-time .current');
const timeline = document.querySelector('.timeline');
let currentVolume = 0.7;
let currentTime;
let isPlay = false;
let trackNumber = 0;

async function createPlayListItem() {
    const tracks = 'playList.json';
    const res = await fetch(tracks);
    const data = await res.json();

    data.forEach((e) => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = e.title;
        playList.append(li);
        arrTracks.push(e.src);
    })
    playItems = document.querySelectorAll('.play-item');
    audio.src = arrTracks[trackNumber];
    trackName.innerHTML = playItems[trackNumber].textContent;
    trackTime.textContent = getTimeCodeFromNum(audio.duration);
};
createPlayListItem();

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

function getTrackNumber(track) {
    for (let i = 0; i < playItems.length; i++) {
        if (playItems[i] == track) trackNumber = i;
    };
};

playList.addEventListener('click', (e) => {
    if (playButton.classList.contains('on-pause')) {
        if (playItems[trackNumber] == e.target) {
            playAudio();
        } else {
            getTrackNumber(e.target);
            currentTime = 0;
            playAudio();
        };
    } else {
        if (playItems[trackNumber] == e.target) {
            if (isPlay != true) {
                currentTime = 0;
                playAudio();
            } else {
                pauseAudio();
            };
        } else {
            getTrackNumber(e.target);
            currentTime = 0;
            playAudio();
        };
    };
});

function playAudio() {
    audio.src = arrTracks[trackNumber];
    trackName.innerHTML = playItems[trackNumber].textContent;
    audio.play();
    audio.volume = 0;
    audio.currentTime = currentTime;

    isPlay = true;
    playButton.classList.add('pause');
    playButton.classList.remove('on-pause');

    for (let i = 0; i < playItems.length; i++) {
        if (playItems[i] === playItems[trackNumber]) {
            playItems[i].classList.add('item-active');
            playItems[i].style.listStyleImage = 'url("assets/svg/pause-item.svg")';
        } else {
            playItems[i].classList.remove('item-active');
            playItems[i].style.listStyleImage = 'url("assets/svg/play-item.svg")';
        };
    };
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
    playButton.classList.remove('pause');
    playButton.classList.add('on-pause');
    playItems.forEach(item => {
        item.style.listStyleImage = 'url("assets/svg/play-item.svg")';
    });
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

function prevTrack() {
    trackNumber === 0 ? trackNumber = 3 : trackNumber -= 1;
    currentTime = 0;
    playAudio();
};

function nextTrack() {
    trackNumber === arrTracks.length - 1 ? trackNumber = 0 : trackNumber += 1;
    currentTime = 0;
    playAudio();
};

playButton.addEventListener('click', pauseAndPlay);
playPrev.addEventListener('click', prevTrack);
playNext.addEventListener('click', nextTrack);
audio.addEventListener('ended', nextTrack);

/* TODO LIST */
const addTaskIcon = document.querySelector('.add-task-icon');
const todos = document.querySelector('.todos');
const todoItems = document.querySelectorAll('.todo-item');
const trashIcon = document.querySelector('.todo-trash');
const clearButton = document.querySelector('.clear');
const eyeIcon = document.querySelector('.eye-icon');

addTaskIcon.addEventListener('click', createToDo);

inputToDo.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        createToDo();
    };
})

function createToDo() {
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.classList.add('todo-text');
    const newTodo = inputToDo.value;
    textSpan.append(newTodo);

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("todo-trash");
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash-alt");
    deleteBtn.appendChild(icon);

    todos.appendChild(li).append(textSpan, deleteBtn);
    listenDeleteTodo(deleteBtn);
    inputToDo.value = '';
};

function listenDeleteTodo(element) {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        event.stopPropagation();
    });
};

function onClickTodo(event) {
    if (event.target.tagName === 'I') {
        listenDeleteTodo;
    } else {
        event.target.classList.toggle("checked");
    };
};

todos.addEventListener('click', onClickTodo);


function loadTodos() {
    const data = localStorage.getItem("todos");
    if (data) {
        todos.innerHTML = data;
    }
    const deleteButtons = document.querySelectorAll("span.todo-trash");
    for (const button of deleteButtons) {
        listenDeleteTodo(button);
    }
}
loadTodos();

clearButton.addEventListener('click', (e) => {
    todos.innerHTML = "";
    localStorage.removeItem('todos', todos.innerHTML);
});

eyeIcon.addEventListener('click', () => {
    eyeIcon.classList.toggle('close');
    document.querySelector('.todo-wrapper').classList.toggle('close');
    if (document.querySelector('.todo-wrapper').classList.contains('close')) {
        isToDoOpen = false;
    } else {
        isToDoOpen = true;
    };
});