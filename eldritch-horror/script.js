/* ENEMIES SLIDER */
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
const enemies = document.querySelector('.enemies');
let offset = 0;

prev.addEventListener('click', () => {
    offset = offset + 350;
    if (offset > 0) {
        offset = -1050;
    };
    enemies.style.left = offset + 'px';
});

next.addEventListener('click', () => {
    offset = offset - 350;
    if (offset < -1050) {
        offset = 0;
    };
    enemies.style.left = offset + 'px';
});

/* CARDS AND ENEMIES*/
const greenCards = [{
        id: 'green1',
        difficulty: 'easy',
    },
    {
        id: 'green2',
        difficulty: 'hard',
    },
    {
        id: 'green3',
        difficulty: 'hard',
    },
    {
        id: 'green4',
        difficulty: 'hard',
    },
    {
        id: 'green5',
        difficulty: 'hard',
    },
    {
        id: 'green6',
        difficulty: 'hard',
    },
    {
        id: 'green7',
        difficulty: 'normal',
    },
    {
        id: 'green8',
        difficulty: 'normal',
    },
    {
        id: 'green9',
        difficulty: 'normal',
    },
    {
        id: 'green10',
        difficulty: 'normal',

    },
    {
        id: 'green11',
        difficulty: 'normal',
    },
    {
        id: 'green12',
        difficulty: 'easy',
    },
    {
        id: 'green13',
        difficulty: 'normal',
    },
    {
        id: 'green14',
        difficulty: 'normal',
    },
    {
        id: 'green15',
        difficulty: 'normal',
    },
    {
        id: 'green16',
        difficulty: 'easy',
    },
    {
        id: 'green17',
        difficulty: 'easy',
    },
    {
        id: 'green18',
        difficulty: 'easy',
    },
]

const brownCards = [{
        id: 'brown1',
        difficulty: 'normal',
    },
    {
        id: 'brown2',
        difficulty: 'normal',
    },
    {
        id: 'brown3',
        difficulty: 'normal',
    },
    {
        id: 'brown4',
        difficulty: 'normal',
    },
    {
        id: 'brown5',
        difficulty: 'normal',
    },
    {
        id: 'brown6',
        difficulty: 'hard',
    },
    {
        id: 'brown7',
        difficulty: 'hard',
    },
    {
        id: 'brown8',
        difficulty: 'hard',
    },
    {
        id: 'brown9',
        difficulty: 'hard',
    },
    {
        id: 'brown10',
        difficulty: 'hard',
    },
    {
        id: 'brown11',
        difficulty: 'easy',
    },
    {
        id: 'brown12',
        difficulty: 'easy',
    },
    {
        id: 'brown13',
        difficulty: 'easy',
    },
    {
        id: 'brown14',
        difficulty: 'easy',
    },
    {
        id: 'brown15',
        difficulty: 'normal',
    },
    {
        id: 'brown16',
        difficulty: 'normal',
    },
    {
        id: 'brown17',
        difficulty: 'normal',
    },
    {
        id: 'brown18',
        difficulty: 'normal',
    },
    {
        id: 'brown19',
        difficulty: 'normal',
    },
    {
        id: 'brown20',
        difficulty: 'normal',
    },
    {
        id: 'brown21',
        difficulty: 'easy',
    },
]

const blueCards = [{
        id: 'blue1',
        difficulty: 'hard',
    },
    {
        id: 'blue2',
        difficulty: 'hard',
    },
    {
        id: 'blue3',
        difficulty: 'easy',
    },
    {
        id: 'blue4',
        difficulty: 'easy',
    },
    {
        id: 'blue5',
        difficulty: 'easy',
    },
    {
        id: 'blue6',
        difficulty: 'hard',
    },
    {
        id: 'blue7',
        difficulty: 'normal',
    },
    {
        id: 'blue8',
        difficulty: 'hard',
    },
    {
        id: 'blue9',
        difficulty: 'normal',
    },
    {
        id: 'blue10',
        difficulty: 'easy',

    },
    {
        id: 'blue11',
        difficulty: 'normal',
    },
    {
        id: 'blue12',
        difficulty: 'normal',
    },
]

const azathoth = [
    [1, 2, 1],
    [2, 3, 1],
    [2, 4, 0],
    [5, 9, 2]
];

const cthulhu = [
    [0, 2, 2],
    [1, 3, 0],
    [3, 4, 0],
    [4, 9, 2]
];

const iogSothoth = [
    [0, 2, 1],
    [2, 3, 1],
    [3, 4, 0],
    [5, 9, 2]
];

const shubNiggurath = [
    [1, 2, 1],
    [3, 2, 1],
    [2, 4, 0],
    [6, 8, 2]
];

/* DECK */

let enemy;
let level;
const difficulties = document.querySelectorAll('.dif');
let deck = [
    [],
    [],
    []
];

function getDeck() {
    if (offset === 0) return makeDeck(azathoth);
    else if (offset === -350) return makeDeck(cthulhu);
    else if (offset === -700) return makeDeck(iogSothoth);
    else if (offset === -1050) return makeDeck(shubNiggurath);
};

function getLevel() {
    for (let i = 0; i < difficulties.length; i++) {
        if (difficulties[i].checked) return difficulties[i].value;
    }
};

function makeDeckVEasy(enemy) {
    let greenArr = shuffleDeck(greenCards);
    for (let i = 0; i < greenArr.length; i++) {
        if (greenArr[i].difficulty === 'easy') deck[0].push(greenArr[i].id);
    }
    if (deck[0].length > enemy[3][0]) {
        deck[0].splice(enemy[3][0]);
    } else if (deck[0].length < enemy[3][0]) {
        for (let i = 0; deck[0].length < enemy[3][0]; i++) {
            if (greenArr[i].difficulty === 'normal') {
                deck[0].push(greenArr[i].id);
            }
        };
    };
    let brownArr = shuffleDeck(brownCards);
    for (let i = 0; i < brownArr.length; i++) {
        if (brownArr[i].difficulty === 'easy') deck[1].push(brownArr[i].id);
    }
    if (deck[1].length > enemy[3][1]) {
        deck[1].splice(enemy[3][1]);
    } else if (deck[1].length < enemy[3][1]) {
        for (let i = 0; deck[1].length < enemy[3][1]; i++) {
            if (brownArr[i].difficulty === 'normal') {
                deck[1].push(brownArr[i].id);
            }
        };
    };
    let blueArr = shuffleDeck(blueCards);
    for (let i = 0; i < blueArr.length; i++) {
        if (blueArr[i].difficulty === 'easy') deck[2].push(blueArr[i].id);
    }
    if (deck[2].length > enemy[3][2]) {
        deck[2].splice(enemy[3][2]);
    } else if (deck[2].length < enemy[3][2]) {
        for (let i = 0; deck[2].length < enemy[3][2]; i++) {
            if (blueArr[i].difficulty === 'normal') {
                deck[2].push(blueArr[i].id);
            }
        };
    };
};

function makeDeckEasy(enemy) {
    let greenArr = shuffleDeck(greenCards);
    for (let i = 0; deck[0].length < enemy[3][0]; i++) {
        if (greenArr[i].difficulty != 'hard') deck[0].push(greenArr[i].id);
    }
    let brownArr = shuffleDeck(brownCards);
    for (let i = 0; deck[1].length < enemy[3][1]; i++) {
        if (brownArr[i].difficulty != 'hard') deck[1].push(brownArr[i].id);
    }
    let blueArr = shuffleDeck(blueCards);
    for (let i = 0; deck[2].length < enemy[3][2]; i++) {
        if (blueArr[i].difficulty != 'hard') deck[2].push(blueArr[i].id);
    }
};

function makeDeck(enemy) {
    let greenArr = shuffleDeck(greenCards);
    for (let i = 0; i < enemy[3][0]; i++) {
        deck[0].push(greenArr[i].id);
    }
    let brownArr = shuffleDeck(brownCards);
    for (let i = 0; i < enemy[3][1]; i++) {
        deck[1].push(brownArr[i].id);
    }
    let blueArr = shuffleDeck(blueCards);
    for (let i = 0; i < enemy[3][2]; i++) {
        deck[2].push(blueArr[i].id);
    }
};

function makeDeckHard(enemy) {
    let greenArr = shuffleDeck(greenCards);
    for (let i = 0; deck[0].length < enemy[3][0]; i++) {
        if (greenArr[i].difficulty != 'easy') deck[0].push(greenArr[i].id);
    }
    let brownArr = shuffleDeck(brownCards);
    for (let i = 0; deck[1].length < enemy[3][1]; i++) {
        if (brownArr[i].difficulty != 'easy') deck[1].push(brownArr[i].id);
    }
    let blueArr = shuffleDeck(blueCards);
    for (let i = 0; deck[2].length < enemy[3][2]; i++) {
        if (blueArr[i].difficulty != 'easy') deck[2].push(blueArr[i].id);
    }
};

function makeDeckVHard(enemy) {
    let greenArr = shuffleDeck(greenCards);
    for (let i = 0; i < greenArr.length; i++) {
        if (greenArr[i].difficulty === 'hard') deck[0].push(greenArr[i].id);
    }
    if (deck[0].length > enemy[3][0]) {
        deck[0].splice(enemy[3][0]);
    } else if (deck[0].length < enemy[3][0]) {
        for (let i = 0; deck[0].length < enemy[3][0]; i++) {
            if (greenArr[i].difficulty === 'normal') {
                deck[0].push(greenArr[i].id);
            }
        };
    };
    let brownArr = shuffleDeck(brownCards);
    for (let i = 0; i < brownArr.length; i++) {
        if (brownArr[i].difficulty === 'hard') deck[1].push(brownArr[i].id);
    }
    if (deck[1].length > enemy[3][1]) {
        deck[1].splice(enemy[3][1]);
    } else if (deck[1].length < enemy[3][1]) {
        for (let i = 0; deck[1].length < enemy[3][1]; i++) {
            if (brownArr[i].difficulty === 'normal') {
                deck[1].push(brownArr[i].id);
            }
        };
    };
    let blueArr = shuffleDeck(blueCards);
    for (let i = 0; i < blueArr.length; i++) {
        if (blueArr[i].difficulty === 'hard') deck[2].push(blueArr[i].id);
    }
    if (deck[2].length > enemy[3][2]) {
        deck[2].splice(enemy[3][2]);
    } else if (deck[2].length < enemy[3][2]) {
        for (let i = 0; deck[2].length < enemy[3][2]; i++) {
            if (blueArr[i].difficulty === 'normal') {
                deck[2].push(blueArr[i].id);
            }
        };
    };
};

function makeDecks() {
    makeDecksSt1(enemy);
    deck = shuffledDeckForStages();
    makeDecksSt2(enemy);
    deck = shuffledDeckForStages();
    makeDecksSt3(enemy);
}

function shuffleDeck(arr) {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
};

function shuffledDeckForStages() {
    let green = shuffleDeck(deck[0]);
    let brown = shuffleDeck(deck[1]);
    let blue = shuffleDeck(deck[2]);
    return [green, brown, blue];
}
let deck1 = [
    [],
    [],
    []
];

let deck2 = [
    [],
    [],
    []
];

let deck3 = [
    [],
    [],
    []
];
let currentDeck1 = [];
let currentDeck2 = [];
let currentDeck3 = [];

function makeDecksSt1(enemy) {
    //green
    for (let i = 0; deck1[0].length < enemy[0][0]; i += 0) {
        deck1[0].push(deck[0][i]);
        deck[0].splice(deck[0][i], 1);
    };
    //brown
    for (let i = 0; deck1[1].length < enemy[0][1]; i += 0) {
        deck1[1].push(deck[1][i]);
        deck[1].splice(deck[1][i], 1);
    };
    //blue
    for (let i = 0; deck1[2].length < enemy[0][2]; i += 0) {
        deck1[2].push(deck[2][i]);
        deck[2].splice(deck[2][i], 1);
    };
}

function makeDecksSt2(enemy) {
    //green
    for (let i = 0; deck2[0].length < enemy[1][0]; i += 0) {
        deck2[0].push(deck[0][i]);
        deck[0].splice(deck[0][i], 1);
    };
    //brown
    for (let i = 0; deck2[1].length < enemy[1][1]; i += 0) {
        deck2[1].push(deck[1][i]);
        deck[1].splice(deck[1][i], 1);
    };
    //blue
    for (let i = 0; deck2[2].length < enemy[1][2]; i += 0) {
        deck2[2].push(deck[2][i]);
        deck[2].splice(deck[2][i], 1);
    };
}

function makeDecksSt3(enemy) {
    //green
    for (let i = 0; deck3[0].length < enemy[2][0]; i += 0) {
        deck3[0].push(deck[0][i]);
        deck[0].splice(deck[0][i], 1);
    };
    //brown
    for (let i = 0; deck3[1].length < enemy[2][1]; i += 0) {
        deck3[1].push(deck[1][i]);
        deck[1].splice(deck[1][i], 1);
    };
    //blue
    for (let i = 0; deck3[2].length < enemy[2][2]; i += 0) {
        deck3[2].push(deck[2][i]);
        deck[2].splice(deck[2][i], 1);
    };
}

function getCurrentDeck1(deck1) {
    for (let i = 0; i < deck1[0].length; i++) currentDeck1.push(deck1[0][i]);
    for (let i = 0; i < deck1[1].length; i++) currentDeck1.push(deck1[1][i]);
    for (let i = 0; i < deck1[2].length; i++) currentDeck1.push(deck1[2][i]);
    console.log(currentDeck1);
}

function getCurrentDeck2(deck2) {
    for (let i = 0; i < deck2[0].length; i++) currentDeck2.push(deck2[0][i]);
    for (let i = 0; i < deck2[1].length; i++) currentDeck2.push(deck2[1][i]);
    for (let i = 0; i < deck2[2].length; i++) currentDeck2.push(deck2[2][i])
}

function getCurrentDeck3(deck3) {
    for (let i = 0; i < deck3[0].length; i++) currentDeck3.push(deck3[0][i]);
    for (let i = 0; i < deck3[1].length; i++) currentDeck3.push(deck3[1][i]);
    for (let i = 0; i < deck3[2].length; i++) currentDeck3.push(deck3[2][i])
}

document.querySelector('.start').addEventListener('click', () => {
    enemy = offset === 0 ? azathoth : offset === -350 ? cthulhu : offset === -700 ? iogSothoth : shubNiggurath;
    level = getLevel();
    if (level === 'very-easy') {
        makeDeckVEasy(enemy);
    } else if (level === 'easy') {
        makeDeckEasy(enemy);
    } else if (level === 'normal') {
        getDeck(enemy);
    } else if (level === 'hard') {
        makeDeckHard(enemy);
    } else if (level === 'very-hard') {
        makeDeckVHard(enemy);
    };
    makeDecks();
    getTrackerNumbers();
    getCurrentDeck1(deck1);
    getCurrentDeck2(deck2);
    getCurrentDeck3(deck3);
});

/* TRACKER */
const green1st = document.querySelector('.gr1');
const brown1st = document.querySelector('.br1');
const blue1st = document.querySelector('.bl1');
const green2st = document.querySelector('.gr2');
const brown2st = document.querySelector('.br2');
const blue2st = document.querySelector('.bl2');
const green3st = document.querySelector('.gr3');
const brown3st = document.querySelector('.br3');
const blue3st = document.querySelector('.bl3');

/* CHECK AND DELETE
green1st.textContent = 0;
brown1st.textContent = 0;
blue1st.textContent = 0;
green2st.textContent = 0;
brown2st.textContent = 0;
blue2st.textContent = 0;
green3st.textContent = 0;
brown3st.textContent = 0;
blue3st.textContent = 0;*/

function getTrackerNumbers() {
    green1st.textContent = deck1[0].length;
    brown1st.textContent = deck1[1].length;
    blue1st.textContent = deck1[2].length;
    green2st.textContent = deck2[0].length;
    brown2st.textContent = deck2[1].length;
    blue2st.textContent = deck2[2].length;
    green3st.textContent = deck3[0].length;
    brown3st.textContent = deck3[1].length;
    blue3st.textContent = deck3[2].length;
}

/* GAME */
const activeCard = document.querySelector('.active-card');
const deckOfCards = document.querySelector('.deck');
let currentCard;

deckOfCards.addEventListener('click', () => {

    if (currentDeck1.length > 0) {
        if (currentDeck1.length === 1) document.querySelector('.st1-title').style.textDecoration = 'line-through';
        let i = randomInteger(0, currentDeck1.length - 1);
        currentCard = currentDeck1[i];
        activeCard.style.backgroundImage = `url("assets/MythicCards/${changeBg(currentCard)}/${currentCard}.png")`;
        getRest1(currentCard);
        currentDeck1.splice(i, 1);
        return currentDeck1;
    };

    if (currentDeck2.length > 0) {
        if (currentDeck2.length === 1) document.querySelector('.st2-title').style.textDecoration = 'line-through';
        let i = randomInteger(0, currentDeck2.length - 1);
        currentCard = currentDeck2[i];
        activeCard.style.backgroundImage = `url("assets/MythicCards/${changeBg(currentCard)}/${currentCard}.png")`;
        getRest2(currentCard);
        currentDeck2.splice(i, 1);
        return currentDeck2;
    };

    if (currentDeck3.length > 0) {
        console.log('starts stage 3')
        if (currentDeck3.length === 1) document.querySelector('.st3-title').style.textDecoration = 'line-through';
        let i = randomInteger(0, currentDeck3.length - 1);
        currentCard = currentDeck3[i];
        activeCard.style.backgroundImage = `url("assets/MythicCards/${changeBg(currentCard)}/${currentCard}.png")`;
        getRest3(currentCard);
        currentDeck3.splice(i, 1);
        return currentDeck3;
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };

    function changeBg(currentCard) {
        if (currentCard[2] === 'e') return 'green';
        else if (currentCard[2] === 'o') return 'brown';
        else if (currentCard[2] === 'u') return 'blue';
    }

    function getRest1(currentCard) {
        if (currentCard[2] === 'e') green1st.textContent -= 1;
        else if (currentCard[2] === 'o') brown1st.textContent -= 1;
        else if (currentCard[2] === 'u') blue1st.textContent -= 1;
    }

    function getRest2(currentCard) {
        if (currentCard[2] === 'e') green2st.textContent -= 1;
        else if (currentCard[2] === 'o') brown2st.textContent -= 1;
        else if (currentCard[2] === 'u') blue2st.textContent -= 1;
    }

    function getRest3(currentCard) {
        if (currentCard[2] === 'e') green3st.textContent -= 1;
        else if (currentCard[2] === 'o') brown3st.textContent -= 1;
        else if (currentCard[2] === 'u') blue3st.textContent -= 1;
    }
});

document.querySelector('.restart').addEventListener('click', () => location.reload());