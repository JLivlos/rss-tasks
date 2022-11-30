let mode = '4x4'; // '3x3', '4x4', '5x5', '6x6', '7x7','8x8'
let sound = 'on'; // 'off'
let afterWin = 'no'; //'yes'

function createGameField() {
    //container + title + sound + bg    
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.append(container);
    const bgR = document.createElement('div');
    bgR.classList.add('bg-right');
    document.body.append(bgR);
    const bgL = document.createElement('div');
    bgL.classList.add('bg-left');
    document.body.append(bgL);
    const sound = document.createElement('div');
    sound.classList.add('sound');
    container.append(sound);
    const h1 = document.createElement('h1');
    h1.textContent = 'The Gem Puzzle';
    container.append(h1);

    //win window + overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.append(overlay);
    const win = document.createElement('div');
    win.classList.add('win');
    document.body.append(win);
    const winText = document.createElement('p');
    winText.classList.add('win-text');
    win.append(winText);
    const input = document.createElement('input');
    input.classList.add('input-winner');
    input.placeholder = 'Please, enter your name'
    win.append(input);
    const winBtn = document.createElement('button');
    winBtn.classList.add('win-ok');
    winBtn.textContent = 'OK';
    win.append(winBtn);

    //buttons
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    container.append(buttons);

    const start = document.createElement('button');
    start.classList.add('start');
    start.textContent = 'New game';
    buttons.append(start);

    const pause = document.createElement('button');
    pause.classList.add('pause');
    pause.textContent = 'Pause';
    buttons.append(pause);

    const save = document.createElement('button');
    save.classList.add('save');
    save.textContent = 'Save';
    buttons.append(save);

    const load = document.createElement('button');
    load.classList.add('load');
    load.textContent = 'Load';
    buttons.append(load);

    const results = document.createElement('button');
    results.classList.add('results');
    results.textContent = 'Results';
    buttons.append(results);

    //game choice 
    const gameChoise = document.createElement('div');
    gameChoise.classList.add('game-choice');
    container.append(gameChoise);

    const puzzle3x3 = document.createElement('button');
    puzzle3x3.classList.add('btn3x3');
    puzzle3x3.textContent = '3x3';
    gameChoise.append(puzzle3x3);

    const puzzle4x4 = document.createElement('button');
    puzzle4x4.classList.add('btn4x4');
    puzzle4x4.textContent = '4x4';
    gameChoise.append(puzzle4x4);

    const puzzle5x5 = document.createElement('button');
    puzzle5x5.classList.add('btn5x5');
    puzzle5x5.textContent = '5x5';
    gameChoise.append(puzzle5x5);

    const puzzle6x6 = document.createElement('button');
    puzzle6x6.classList.add('btn6x6');
    puzzle6x6.textContent = '6x6';
    gameChoise.append(puzzle6x6);

    const puzzle7x7 = document.createElement('button');
    puzzle7x7.classList.add('btn7x7');
    puzzle7x7.textContent = '7x7';
    gameChoise.append(puzzle7x7);

    const puzzle8x8 = document.createElement('button');
    puzzle8x8.classList.add('btn8x8');
    puzzle8x8.textContent = '8x8';
    gameChoise.append(puzzle8x8);

    //info
    const info = document.createElement('div');
    info.classList.add('info');
    container.append(info);

    const moveCounter = document.createElement('div');
    moveCounter.classList.add('move-counter');
    info.append(moveCounter);

    const moveCounterText = document.createElement('p');
    moveCounterText.textContent = 'Moves:'
    moveCounter.append(moveCounterText);

    const moveCounterValue = document.createElement('p');
    moveCounterValue.classList.add('counter-value');
    moveCounterValue.textContent = 0;
    moveCounter.append(moveCounterValue);

    const timer = document.createElement('div');
    timer.classList.add('timer');
    info.append(timer);

    const timerText = document.createElement('p');
    timerText.textContent = 'Time'
    timer.append(timerText);

    const timerValue = document.createElement('p');
    timerValue.classList.add('timer-value');
    timerValue.textContent = '0:00';
    timer.append(timerValue);
};
createGameField();

const container = document.querySelector('.container');
const saveBtn = document.querySelector('.save');
const loadBtn = document.querySelector('.load');
const pauseBtn = document.querySelector('.pause');
const soundBtn = document.querySelector('.sound');
let numbers = [];
let table;
let table3;
let table5;
let table6;
let table7;
let table8;
let cells;
let timerValue = document.querySelector('.timer-value');
let counterValue = document.querySelector('.counter-value');
let moveCounter = 0;
let totalTime = 0;
let timer;

function setNumbers() {
    switch (mode) {
        case '3x3':
            return numbers = [1, 2, 3, 4, 5, 6, 7, 8, ' '];
        case '4x4':
            return numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' '];
        case '5x5':
            return numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, ' '];
        case '6x6':
            return numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, ' '];
        case '7x7':
            return numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, ' '];
        case '8x8':
            return numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, ' '];
    };
};

function setGame() {
    switch (mode) {
        case '3x3':
            return setGame3x3();
        case '4x4':
            return setGame4x4();
        case '5x5':
            return setGame5x5();
        case '6x6':
            return setGame6x6();
        case '7x7':
            return setGame7x7();
        case '8x8':
            return setGame8x8();
    };
}
setGame();

// GAME SETS

function setGame3x3() {
    setNumbers();
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.style.border = 'none');
    document.querySelector('.btn3x3').style.border = 'solid 1px grey';
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.classList.remove('active'));
    document.querySelector('.btn3x3').classList.add('active');

    const myTable = document.createElement('table');
    myTable.classList.add('game-table3');
    container.append(myTable);
    const tbody = document.createElement('tbody');
    myTable.append(tbody);

    for (let i = 0; i < 3; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const td = document.createElement('td');
            tr.append(td);
        }
        tbody.append(tr);
    };

    table3 = document.querySelector('.game-table3');
    cells = Array.from(document.querySelectorAll('td'));
};

function setGame4x4() {
    setNumbers();
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.style.border = 'none');
    document.querySelector('.btn4x4').style.border = 'solid 1px grey';
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.classList.remove('active'));
    document.querySelector('.btn4x4').classList.add('active');

    const myTable = document.createElement('table');
    myTable.classList.add('game-table');
    container.append(myTable);
    const tbody = document.createElement('tbody');
    myTable.append(tbody);

    for (let i = 0; i < 4; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 4; j++) {
            const td = document.createElement('td');
            tr.append(td);
        }
        tbody.append(tr);
    };
    table = document.querySelector('.game-table');
    cells = Array.from(document.querySelectorAll('td'));
};

function setGame5x5() {
    setNumbers();
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.style.border = 'none');
    document.querySelector('.btn5x5').style.border = 'solid 1px grey';
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.classList.remove('active'));
    document.querySelector('.btn5x5').classList.add('active');

    const myTable = document.createElement('table');
    myTable.classList.add('game-table5');
    container.append(myTable);
    const tbody = document.createElement('tbody');
    myTable.append(tbody);

    for (let i = 0; i < 5; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            const td = document.createElement('td');
            tr.append(td);
        }
        tbody.append(tr);
    };
    table5 = document.querySelector('.game-table5');
    cells = Array.from(document.querySelectorAll('td'));
};

function setGame6x6() {
    setNumbers();
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.style.border = 'none');
    document.querySelector('.btn6x6').style.border = 'solid 1px grey';
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.classList.remove('active'));
    document.querySelector('.btn6x6').classList.add('active');

    const myTable = document.createElement('table');
    myTable.classList.add('game-table6');
    container.append(myTable);
    const tbody = document.createElement('tbody');
    myTable.append(tbody);

    for (let i = 0; i < 6; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            const td = document.createElement('td');
            tr.append(td);
        }
        tbody.append(tr);
    };
    table6 = document.querySelector('.game-table6');
    cells = Array.from(document.querySelectorAll('td'));
};

function setGame7x7() {
    setNumbers();
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.style.border = 'none');
    document.querySelector('.btn7x7').style.border = 'solid 1px grey';
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.classList.remove('active'));
    document.querySelector('.btn7x7').classList.add('active');

    const myTable = document.createElement('table');
    myTable.classList.add('game-table7');
    container.append(myTable);
    const tbody = document.createElement('tbody');
    myTable.append(tbody);

    for (let i = 0; i < 7; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const td = document.createElement('td');
            tr.append(td);
        }
        tbody.append(tr);
    };
    table7 = document.querySelector('.game-table7');
    cells = Array.from(document.querySelectorAll('td'));
};

function setGame8x8() {
    setNumbers();
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.style.border = 'none');
    document.querySelector('.btn8x8').style.border = 'solid 1px grey';
    Array.from(document.querySelector('.game-choice').children).forEach((item) => item.classList.remove('active'));
    document.querySelector('.btn8x8').classList.add('active');


    const game = document.createElement('div');
    container.append(game);

    const myTable = document.createElement('table');
    myTable.classList.add('game-table8');
    game.append(myTable);
    const tbody = document.createElement('tbody');
    myTable.append(tbody);

    for (let i = 0; i < 8; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 8; j++) {
            const td = document.createElement('td');
            tr.append(td);
        }
        tbody.append(tr);
    };
    table8 = document.querySelector('.game-table8');
    cells = Array.from(document.querySelectorAll('td'));
};

const victorySound = new Audio;
victorySound.src = 'assets/ff1-victory.wav';
const gameSound = new Audio;
gameSound.src = 'assets/click.wav';
const menuSound = new Audio;
menuSound.src = 'assets/menu-click.wav';
const nopeSound = new Audio;
nopeSound.src = 'assets/nope.wav';

//SET TABLE
function shuffle(arr) {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
};

function setTable() {
    afterWin = 'no';
    removeClassesAfterWin();
    shuffle(numbers);
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = `${numbers[i]}`;
    };

    if (checkTable() === false) {
        setTable();
    } else {
        moveCounter = 0;
        counterValue.textContent = moveCounter;
        startTimer();
    };
};
setTable();

function checkTable() {
    let counter = 0;
    let empty = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === ' ') {
            empty += i % parseInt(mode) === 0 ? i / parseInt(mode) + 1 : Math.ceil(i / parseInt(mode));
            counter += empty;
        } else {
            for (j = i + 1; j < numbers.length; j++) {
                if (numbers[j] < numbers[i] && numbers[j] != ' ') {
                    counter++;
                }
            };
        };
    };
    if (parseInt(mode) % 2 > 0) {
        counter -= empty;
    }
    return counter % 2 === 0 ? true : false;
};

// CREATE RESULTS
function createResults() {
    const resultWrapper = document.createElement('div');
    resultWrapper.classList.add('results-wrapper');
    document.body.append(resultWrapper);

    const h2 = document.createElement('h2');
    h2.textContent = 'Results';
    resultWrapper.append(h2);

    const resultsList = document.createElement('div');
    resultsList.classList.add('results-list');
    resultWrapper.append(resultsList);

    const player = document.createElement('div');
    player.classList.add('player');
    resultsList.append(player);
    const nameHead = document.createElement('div');
    nameHead.classList.add('name');
    nameHead.classList.add('name-head');
    nameHead.textContent = 'Name';
    player.append(nameHead);

    const modeHead = document.createElement('div');
    modeHead.classList.add('mode-result');
    modeHead.classList.add('mode-head');
    modeHead.textContent = 'Mode';
    player.append(modeHead);

    const movesHead = document.createElement('div');
    movesHead.classList.add('moves-result');
    movesHead.classList.add('moves-head');
    movesHead.textContent = 'Moves';
    player.append(movesHead);

    const timeHead = document.createElement('div');
    timeHead.classList.add('time-result');
    timeHead.classList.add('time-head');
    timeHead.textContent = 'Time';
    player.append(timeHead);


    for (let i = 0; i < 10; i++) {
        const playerItem = document.createElement('div');
        playerItem.classList.add('player');
        resultsList.append(playerItem);

        const name = document.createElement('div');
        name.classList.add('name');
        name.textContent = '.....';
        playerItem.append(name);

        const mode = document.createElement('div');
        mode.classList.add('mode-result');
        mode.textContent = '0x0';
        playerItem.append(mode);

        const moves = document.createElement('div');
        moves.classList.add('moves-result');
        moves.textContent = '0';
        playerItem.append(moves);

        const time = document.createElement('div');
        time.classList.add('time-result');
        time.textContent = '00:00';
        playerItem.append(time);
    }
    const resultsOk = document.createElement('button');
    resultsOk.classList.add('results-ok');
    resultsOk.textContent = 'OK';
    resultWrapper.append(resultsOk);
};
createResults();
const resultsList = document.querySelector('.results-list');

//LOCAL STORAGE
function setLocalStorage() {
    localStorage.setItem('saveCells', saveCells.value);
    localStorage.setItem('moves', moves.value);
    localStorage.setItem('timer', timer.value);
    localStorage.setItem('mode', mode.value);
    localStorage.setItem('scorePlayers', scorePlayers.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('scorePlayers')) {
        winners = JSON.parse(localStorage.getItem('scorePlayers'));
    };
};
window.addEventListener('load', getLocalStorage);

//TIMER

function showTime() {
    var min;
    var second;
    second = Math.floor((totalTime / 1000) % 60);
    min = Math.floor(totalTime / 1000 / 60 % 60);

    second = second % 60 < 10 ? "0" + second : second;
    min = min % 60 < 10 ? +"0" + min : min;
    return min + ":" + second;
};

function startTimer() {
    timer = setInterval(function() {
        totalTime += 41;
        timerValue.innerHTML = showTime();
    }, 41)
};

function resetTimer() {
    setOpacity1();
    clearInterval(timer);
    timer = null;
    timerValue.innerHTML = '0:00';
    totalTime = 0;
    pauseBtn.textContent = 'Pause';
    return;
};

function pauseTimer() {
    clearInterval(timer);
    setOpacity0();
    pauseBtn.textContent = 'Start'
};

function pausePlay() {
    if (pauseBtn.textContent === 'Pause') {
        pauseBtn.textContent = 'Start';
        pauseTimer();
    } else {
        setOpacity1();
        startTimer();
        pauseBtn.textContent = 'Pause';
    };
};



//GAME
function addListeners() {
    switch (mode) {
        case '3x3':
            return table3.addEventListener('click', (e) => {
                if (table3.style.opacity === '0' || afterWin === 'yes') return;
                table3.style.pointerEvents = 'none';
                let currentCell = e.target;
                let idx = cells.indexOf(e.target);
                let currentNumber = currentCell.textContent;
                let emptyCell = (cells.filter(item => item.textContent === ' '))[0];
                let emptyIdx = cells.indexOf(emptyCell);

                const moveCell = function() {
                    if (sound === 'on') gameSound.play();
                    currentCell.textContent = ' ';
                    emptyCell.textContent = currentNumber;
                    moveCounter++;
                    counterValue.textContent = moveCounter;
                };
                const makeRedCell = function() {
                    if (sound === 'on') nopeSound.play();
                    currentCell.style.backgroundColor = 'rgba(233, 21, 21, 0.2)';
                    setTimeout(() => {
                        currentCell.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
                    }, 150);
                };

                max = Math.max(idx, emptyIdx);
                min = Math.min(idx, emptyIdx);

                if (max === 3 && min === 2) {
                    makeRedCell();
                    table3.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 6 && min === 5) {
                    makeRedCell();
                    table3.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === min + 1 || min === max - 3 || max === min + 3) {
                    moveCell();
                } else {
                    makeRedCell();
                    table3.style.pointerEvents = 'auto';
                    return false;
                };
                setTimeout(() => checkWin(), 200);
                table3.style.pointerEvents = 'auto';
            });
        case '4x4':
            return table.addEventListener('click', (e) => {
                if (table.style.opacity === '0' || afterWin === 'yes') return;
                table.style.pointerEvents = 'none';
                let currentCell = e.target;
                let idx = cells.indexOf(e.target);
                let currentNumber = currentCell.textContent;
                let emptyCell = (cells.filter(item => item.textContent === ' '))[0];
                let emptyIdx = cells.indexOf(emptyCell);
                const moveCell = function() {
                    if (sound === 'on') gameSound.play();
                    currentCell.textContent = ' ';
                    emptyCell.textContent = currentNumber;
                    moveCounter++;
                    counterValue.textContent = moveCounter;
                };
                const makeRedCell = function() {
                    if (sound === 'on') nopeSound.play();
                    currentCell.style.backgroundColor = 'rgba(233, 21, 21, 0.2)';
                    setTimeout(() => {
                        currentCell.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
                    }, 150);
                };

                max = Math.max(idx, emptyIdx);
                min = Math.min(idx, emptyIdx);

                if (max === 4 && min === 3) {
                    makeRedCell();
                    table.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 8 && min === 7) {
                    makeRedCell();
                    table.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 12 && min === 11) {
                    makeRedCell();
                    table.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === min + 1 || min === max - 4 || max === min + 4) {
                    moveCell();
                } else {
                    makeRedCell();
                    table.style.pointerEvents = 'auto';
                    return false;
                };
                setTimeout(() => checkWin(), 200);
                table.style.pointerEvents = 'auto';
            });
        case '5x5':
            return table5.addEventListener('click', (e) => {
                if (table5.style.opacity === '0' || afterWin === 'yes') return;
                table5.style.pointerEvents = 'none';
                let currentCell = e.target;
                let idx = cells.indexOf(e.target);
                let currentNumber = currentCell.textContent;
                let emptyCell = (cells.filter(item => item.textContent === ' '))[0];
                let emptyIdx = cells.indexOf(emptyCell);
                const moveCell = function() {
                    if (sound === 'on') gameSound.play();
                    currentCell.textContent = ' ';
                    emptyCell.textContent = currentNumber;
                    moveCounter++;
                    counterValue.textContent = moveCounter;
                };
                const makeRedCell = function() {
                    if (sound === 'on') nopeSound.play();
                    currentCell.style.backgroundColor = 'rgba(233, 21, 21, 0.2)';
                    setTimeout(() => {
                        currentCell.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
                    }, 150);
                };

                max = Math.max(idx, emptyIdx);
                min = Math.min(idx, emptyIdx);

                if (max === 5 && min === 4) {
                    makeRedCell();
                    table5.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 10 && min === 9) {
                    makeRedCell();
                    table5.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 15 && min === 14) {
                    makeRedCell();
                    table5.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 20 && min === 19) {
                    makeRedCell();
                    table5.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === min + 1 || min === max - 5 || max === min + 5) {
                    moveCell();
                } else {
                    makeRedCell();
                    table5.style.pointerEvents = 'auto';
                    return false;
                };
                setTimeout(() => checkWin(), 200);
                table5.style.pointerEvents = 'auto';
            });
        case '6x6':
            return table6.addEventListener('click', (e) => {
                if (table6.style.opacity === '0' || afterWin === 'yes') return;
                table6.style.pointerEvents = 'none';
                let currentCell = e.target;
                let idx = cells.indexOf(e.target);
                let currentNumber = currentCell.textContent;
                let emptyCell = (cells.filter(item => item.textContent === ' '))[0];
                let emptyIdx = cells.indexOf(emptyCell);
                const moveCell = function() {
                    if (sound === 'on') gameSound.play();
                    currentCell.textContent = ' ';
                    emptyCell.textContent = currentNumber;
                    moveCounter++;
                    counterValue.textContent = moveCounter;
                };
                const makeRedCell = function() {
                    if (sound === 'on') nopeSound.play();
                    currentCell.style.backgroundColor = 'rgba(233, 21, 21, 0.2)';
                    setTimeout(() => {
                        currentCell.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
                    }, 150);
                };

                max = Math.max(idx, emptyIdx);
                min = Math.min(idx, emptyIdx);

                if (max === 6 && min === 5) {
                    makeRedCell();
                    table6.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 12 && min === 11) {
                    makeRedCell();
                    table6.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 18 && min === 17) {
                    makeRedCell();
                    table6.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 24 && min === 23) {
                    makeRedCell();
                    table6.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 30 && min === 29) {
                    makeRedCell();
                    return false;
                };
                if (max === min + 1 || min === max - 6 || max === min + 6) {
                    moveCell();
                } else {
                    makeRedCell();
                    table6.style.pointerEvents = 'auto';
                    return false;
                };
                setTimeout(() => checkWin(), 200);
                table6.style.pointerEvents = 'auto';
            });
        case '7x7':
            return table7.addEventListener('click', (e) => {
                if (table7.style.opacity === '0' || afterWin === 'yes') return;
                table7.style.pointerEvents = 'none';
                let currentCell = e.target;
                let idx = cells.indexOf(e.target);
                let currentNumber = currentCell.textContent;
                let emptyCell = (cells.filter(item => item.textContent === ' '))[0];
                let emptyIdx = cells.indexOf(emptyCell);
                const moveCell = function() {
                    if (sound === 'on') gameSound.play();
                    currentCell.textContent = ' ';
                    emptyCell.textContent = currentNumber;
                    moveCounter++;
                    counterValue.textContent = moveCounter;
                };
                const makeRedCell = function() {
                    if (sound === 'on') nopeSound.play();
                    currentCell.style.backgroundColor = 'rgba(233, 21, 21, 0.2)';
                    setTimeout(() => {
                        currentCell.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
                    }, 150);
                };

                max = Math.max(idx, emptyIdx);
                min = Math.min(idx, emptyIdx);

                if (max === 7 && min === 6) {
                    makeRedCell();
                    table7.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 14 && min === 13) {
                    makeRedCell();
                    table7.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 21 && min === 20) {
                    makeRedCell();
                    table7.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 28 && min === 27) {
                    makeRedCell();
                    table7.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 35 && min === 34) {
                    makeRedCell();
                    table7.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 42 && min === 41) {
                    makeRedCell();
                    table7.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === min + 1 || min === max - 7 || max === min + 7) {
                    moveCell();
                } else {
                    makeRedCell();
                    table7.style.pointerEvents = 'auto';
                    return false;
                };
                setTimeout(() => checkWin(), 200);
                table7.style.pointerEvents = 'auto';
            });
        case '8x8':
            return table8.addEventListener('click', (e) => {
                if (table8.style.opacity === '0' || afterWin === 'yes') return;
                table8.style.pointerEvents = 'none';
                let currentCell = e.target;
                let idx = cells.indexOf(e.target);
                let currentNumber = currentCell.textContent;
                let emptyCell = (cells.filter(item => item.textContent === ' '))[0];
                let emptyIdx = cells.indexOf(emptyCell);
                const moveCell = function() {
                    if (sound === 'on') gameSound.play();
                    currentCell.textContent = ' ';
                    emptyCell.textContent = currentNumber;
                    moveCounter++;
                    counterValue.textContent = moveCounter;
                };
                const makeRedCell = function() {
                    if (sound === 'on') nopeSound.play();
                    currentCell.style.backgroundColor = 'rgba(233, 21, 21, 0.2)';
                    setTimeout(() => {
                        currentCell.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
                    }, 150);
                };

                max = Math.max(idx, emptyIdx);
                min = Math.min(idx, emptyIdx);

                if (max === 8 && min === 7) {
                    makeRedCell();
                    table8.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 16 && min === 15) {
                    makeRedCell();
                    table8.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 24 && min === 23) {
                    makeRedCell();
                    table8.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 32 && min === 31) {
                    makeRedCell();
                    table8.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 40 && min === 39) {
                    makeRedCell();
                    table8.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 48 && min === 47) {
                    makeRedCell();
                    table8.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === 56 && min === 55) {
                    makeRedCell();
                    table8.style.pointerEvents = 'auto';
                    return false;
                };
                if (max === min + 1 || min === max - 8 || max === min + 8) {
                    moveCell();
                } else {
                    makeRedCell();
                    table8.style.pointerEvents = 'auto';
                    return false;
                };
                setTimeout(() => checkWin(), 200);
                table8.style.pointerEvents = 'auto';
            });
    };
};
addListeners();

//WIN
const overlay = document.querySelector('.overlay');
const win = document.querySelector('.win');
const inputName = document.querySelector('.input-winner');

function checkWin() {
    let n = cells.length;
    if (cells[0].textContent != 1) return;
    if (cells[n - 1].textContent != ' ') return;
    let counter = 0;
    for (let i = 1; i < n - 1; i++) {
        if (cells[i].textContent === `${i + 1}`) {
            counter++;
        } else break;
    };
    if (counter === n - 2) {
        pauseTimer();
        declareWin();
    } else return;
};

function declareWin() {
    let moves = moveCounter === 1 ? 'move' : 'moves';
    document.querySelector('.win-text').textContent = `Hooray! You solved the puzzle in ${timerValue.textContent} and ${moveCounter} ${moves}!`;
    overlay.classList.add('active');
    win.classList.add('active');
    if (sound === 'on') victorySound.play();
    clearInterval(timer);
    afterWin = 'yes';
    addClassesAfterWin();
};

function addClassesAfterWin() {
    saveBtn.classList.add('none');
    pauseBtn.classList.add('none');
};

function removeClassesAfterWin() {
    saveBtn.classList.remove('none');
    pauseBtn.classList.remove('none');
};

function addWinner() {
    let obj = {
        name: inputName.value,
        mode: mode,
        moves: moveCounter,
        time: timerValue.textContent
    };

    if (winners.length < 11) {
        winners.push(obj);
    } else {
        winners.splice(10, 1);
        winners.push(obj);
    };
};

function closeWinBlock() {
    localStorage.scorePlayers = JSON.stringify(winners);
    overlay.classList.remove('active');
    win.classList.remove('active');
    setOpacity1();
};

function closeWin() {
    addWinner();
    closeWinBlock();
};

inputName.addEventListener('keypress', function(e) {
    if (e.key === "Enter") closeWin();
});

//SAVE-LOAD

function save() {
    let numbers = [];
    for (let i = 0; i < cells.length; i++) {
        numbers.push(cells[i].textContent);
    }
    localStorage.saveCells = numbers;
    localStorage.moves = moveCounter;
    localStorage.timer = totalTime;
    localStorage.mode = mode;

};

function load() {
    if (localStorage.getItem('mode') === mode) {
        let savedNumbers = localStorage.getItem('saveCells').split(',');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = `${savedNumbers[i]}`;
        };
        moveCounter = localStorage.getItem('moves');
        counterValue.textContent = moveCounter;
        resetTimer();
        totalTime = +(localStorage.getItem('timer'));
        startTimer();
    } else {
        mode = localStorage.getItem('mode');
        removeTables();
        setGame();
        addListeners();
        let savedNumbers = localStorage.getItem('saveCells').split(',');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = `${savedNumbers[i]}`;
        };
        moveCounter = localStorage.getItem('moves');
        counterValue.textContent = moveCounter;
        resetTimer();
        totalTime = +(localStorage.getItem('timer'));
        startTimer();
    };
}

//RESULTS
function openResults() {
    pauseBtn.textContent = 'Start';
    pauseTimer();
    setTimeout(() => {
        overlay.classList.add('active');
        document.querySelector('.results-wrapper').classList.add('active');
    }, 300);
}

function closeResults() {
    overlay.classList.remove('active');
    document.querySelector('.results-wrapper').classList.remove('active');
    setOpacity1();
    if (afterWin === 'no') pausePlay();
}

//ADD WINNER RESULT 
let players = Array.from(document.querySelectorAll('.player'));
let winners = [{
        name: 'Tremere',
        mode: '5x5',
        moves: 1,
        time: '0:01'
    }, {
        name: 'Lasombra',
        mode: '4x4',
        moves: 210,
        time: '2:28'
    },
    {
        name: 'Tzimisce',
        mode: '8x8',
        moves: 300,
        time: '20:15'
    },
    {
        name: 'Slowpoke',
        mode: '3x3',
        moves: 900,
        time: '90:00'
    }
];

function setWinners() {
    let arr = [
        [],
        [],
        [],
        [],
        [],
        []
    ];

    winners.forEach((item) => {
        arr[parseInt(item.mode) - 3].push(item);
    });
    (arr.reverse()).forEach((item) => {
        item.sort((a, b) => a.moves - b.moves);
    });
    winners = [];
    arr.forEach((item) => {
        if (item.length != 0) item.forEach((item) => winners.push(item));
    });

    for (let i = 1; i <= winners.length && i < 11; i++) {
        players[i].firstChild.textContent = `${winners[i-1].name}`;
        players[i].children[1].textContent = `${winners[i-1].mode}`;
        players[i].children[2].textContent = `${winners[i-1].moves}`;
        players[i].lastChild.textContent = `${winners[i-1].time}`;
    };
};


//BUTTONS
document.querySelector('.start').addEventListener('click', function() {
    if (sound === 'on') menuSound.play();
    afterWin = 'no';
    resetTimer();
    setTable();
});
pauseBtn.addEventListener('click', function() {
    if (afterWin === 'yes') return;
    if (sound === 'on') menuSound.play();
    pausePlay();
});
saveBtn.addEventListener('click', function() {
    if (afterWin === 'yes') return;
    if (sound === 'on') menuSound.play();
    save();
});
loadBtn.addEventListener('click', function() {
    if (sound === 'on') menuSound.play();
    afterWin = 'no';
    load();
});
document.querySelector('.results').addEventListener('click', function() {
    if (sound === 'on') menuSound.play();
    setWinners();
    openResults();
});
soundBtn.addEventListener('click', function() {
    menuSound.play();
    if (sound === 'on') {
        soundBtn.style.backgroundImage = 'url("assets/volumeoff.svg")';
        sound = 'off';
        localStorage.sound = 'off';
    } else {
        soundBtn.style.backgroundImage = 'url("assets/volume.svg")';
        sound = 'on';
        localStorage.sound = 'on';
    };
});
document.querySelector('.win-ok').addEventListener('click', function() {
    if (sound === 'on') menuSound.play();
    closeWin();
});
document.querySelector('.results-ok').addEventListener('click', function() {
    if (sound === 'on') menuSound.play();
    closeResults();
});

//GAME CHOICE
function removeTables() {
    if (table3 != undefined) table3.remove();
    if (table != undefined) table.remove();
    if (table5 != undefined) table5.remove();
    if (table6 != undefined) table6.remove();
    if (table7 != undefined) table7.remove();
    if (table8 != undefined) table8.remove();
};
document.querySelector('.btn3x3').addEventListener('click', function() {
    if (mode === '3x3') return;
    afterWin = 'no';
    if (sound === 'on') menuSound.play();
    mode = '3x3';
    removeTables();
    resetTimer();
    moveCounter = 0;
    counterValue.textContent = moveCounter;
    setGame();
    setNumbers();
    setTable();
    addListeners();
});
document.querySelector('.btn4x4').addEventListener('click', function() {
    if (mode === '4x4') return;
    afterWin = 'no';
    if (sound === 'on') menuSound.play();
    mode = '4x4';
    removeTables();
    resetTimer();
    moveCounter = 0;
    counterValue.textContent = moveCounter;
    setGame();
    setNumbers();
    setTable();
    addListeners();
});
document.querySelector('.btn5x5').addEventListener('click', function() {
    if (mode === '5x5') return;
    afterWin = 'no';
    if (sound === 'on') menuSound.play();
    mode = '5x5';
    removeTables();
    resetTimer();
    moveCounter = 0;
    counterValue.textContent = moveCounter;
    setGame();
    setNumbers();
    setTable();
    addListeners();
});
document.querySelector('.btn6x6').addEventListener('click', function() {
    if (mode === '6x6') return;
    afterWin = 'no';
    if (sound === 'on') menuSound.play();
    mode = '6x6';
    removeTables();
    resetTimer();
    moveCounter = 0;
    counterValue.textContent = moveCounter;
    setGame();
    setNumbers();
    setTable();
    addListeners();
});
document.querySelector('.btn7x7').addEventListener('click', function() {
    if (mode === '7x7') return;
    afterWin = 'no';
    if (sound === 'on') menuSound.play();
    mode = '7x7';
    removeTables();
    resetTimer();
    moveCounter = 0;
    counterValue.textContent = moveCounter;
    setGame();
    setNumbers();
    setTable();
    addListeners();
});
document.querySelector('.btn8x8').addEventListener('click', function() {
    if (mode === '8x8') return;
    afterWin = 'no';
    if (sound === 'on') menuSound.play();
    mode = '8x8';
    removeTables();
    resetTimer();
    moveCounter = 0;
    counterValue.textContent = moveCounter;
    setGame();
    setNumbers();
    setTable();
    addListeners();
});


//OTHERS
function setOpacity0() {
    if (table != undefined) table.style.opacity = '0';
    if (table3 != undefined) table3.style.opacity = '0';
    if (table5 != undefined) table5.style.opacity = '0';
    if (table6 != undefined) table6.style.opacity = '0';
    if (table7 != undefined) table7.style.opacity = '0';
    if (table8 != undefined) table8.style.opacity = '0';
};

function setOpacity1() {
    if (table != undefined && table.style.opacity === '0') table.style.opacity = '1';
    if (table3 != undefined && table3.style.opacity === '0') table3.style.opacity = '1';
    if (table5 != undefined && table5.style.opacity === '0') table5.style.opacity = '1';
    if (table6 != undefined && table6.style.opacity === '0') table6.style.opacity = '1';
    if (table7 != undefined && table7.style.opacity === '0') table7.style.opacity = '1';
    if (table8 != undefined && table8.style.opacity === '0') table8.style.opacity = '1';
};

function toWin() {
    n = cells.length;
    for (let i = 0; i < cells.length - 2; i++) {
        cells[i].textContent = `${i + 1}`;
    };
    cells[n - 2].textContent = ' ';
    cells[n - 1].textContent = n - 1;
};