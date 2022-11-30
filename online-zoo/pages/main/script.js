//LOGO
document.querySelector('.logo').addEventListener('click', function() {
    location.reload();
    return false;
})

document.querySelector('.footer-logo').addEventListener('click', function() {
    window.scrollTo(0, 0)
})

// SOCIAL MEDIA
document.querySelector('.sm-icon-fb').addEventListener('click', function() {
    window.open('https://www.facebook.com/')
})

document.querySelector('.sm-icon-tw').addEventListener('click', function() {
    window.open('https://twitter.com/home')
})

document.querySelector('.sm-icon-inst').addEventListener('click', function() {
    window.open('https://www.instagram.com/')
})

document.querySelector('.sm-icon-you').addEventListener('click', function() {
    window.open('https://www.youtube.com/')
})

// BUTTONS
document.querySelector('.watch-button').addEventListener('click', function() {
    window.open('https://youtu.be/OObOQ2GElhA')
})

document.querySelector('.choose-button').addEventListener('click', function() {
    window.open('https://as1.ftcdn.net/v2/jpg/04/26/75/14/1000_F_426751452_WlDPBoyRlBQbLXFK8P4Pu9IJAEGsGdWd.jpg')
})

document.querySelector('.feed-button').addEventListener('click', function() {
    window.open('https://rolling-scopes-school.github.io/jlivlos-JSFE2022Q3/online-zoo/pages/donate/')
})

document.querySelector('.donate-button').addEventListener('click', function() {
    window.open('https://rolling-scopes-school.github.io/jlivlos-JSFE2022Q3/online-zoo/pages/donate/')
})

// EMAIL INPUT
const emailSubmitButton = document.querySelector('.email-submit-button');
const emailInput = document.querySelector('.email-input');

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
};

function onInput() {
    if (isEmailValid(emailInput.value)) {
        emailSubmitButton.style.border = '1px solid #333B41';
        emailSubmitButton.style.color = '#000000';
        emailInput.style.border = 'solid 0.7px #4B9200';
    } else {
        emailSubmitButton.style.border = '1px solid #D31414';
        emailSubmitButton.style.color = '#D31414';
        emailInput.style.border = 'solid 0.7px #D31414';
    }
}
emailInput.addEventListener('input', onInput);

// BURGER
const burgerIcon = document.querySelector('.burger-icon');
const closeMenuIcon = document.querySelector('.logo-burger-x');
const overlay = document.querySelector('.overlay');
const burgerMenu = document.querySelector('.burger-menu-open');
const body = document.querySelector('.body');
const logoBurger = document.querySelector('.logo-burger');
const menuItems = document.querySelector('.burger-menu');

function openMenu() {
    burgerMenu.classList.add('active');
    overlay.style.backgroundColor = '#000000';
    overlay.classList.add('active');
    body.style.overflowY = "hidden";
}

function closeMenu() {
    burgerMenu.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflowY = "auto";
}

burgerIcon.addEventListener('click', openMenu);
closeMenuIcon.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
overlay.addEventListener('click', closePopup);
menuItems.addEventListener('click', closeMenu);
logoBurger.addEventListener('click', closeMenu);

/* BURGER MENU ITEMS */
const burgerLogo = document.querySelector('.logo-burger');
const burgerMap = document.querySelector('.map-item');
const burgerZoos = document.querySelector('.zoos-item');
const burgerDonate = document.querySelector('.donate-item');
const burgerContact = document.querySelector('.contact-item');
const burgerDesigned = document.querySelector('.designed-item');

burgerLogo.addEventListener('click', function() {
    location.reload();
    return false;
})
burgerMap.addEventListener('click', function() {
    window.scrollTo(0, 0);
})
burgerZoos.addEventListener('click', function() {
    window.scrollTo(0, 0);
})
burgerDonate.addEventListener('click', function() {
    window.open('https://rolling-scopes-school.github.io/jlivlos-JSFE2022Q3/online-zoo/pages/donate/', '_self');
})
burgerContact.addEventListener('click', function() {
    window.scrollTo(0, 0);
})
burgerDesigned.addEventListener('click', function() {
    window.open('https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online');
})

/* TESTIMONIALS SLIDER */
const mediaQuery1000 = window.matchMedia('(max-width: 1000px)');
const mediaQuery1200 = window.matchMedia('(max-width: 1200px)');
const range = document.querySelector('.range-input');
//const testSlider = document.querySelector('.test-slider');
const sliderItem = document.querySelector('.test-card-wrapper');

if (mediaQuery1000.matches) {
    range.max = '8';
}

range.addEventListener('input', function() {
    if (mediaQuery1200.matches) {
        testSlider.style.left = `-${range.value * (sliderItem.offsetWidth + 4)}px`;
    }
    if (mediaQuery1000.matches) {
        testSlider.style.left = `-${range.value * (sliderItem.offsetWidth + 31)}px`;
    } else {
        testSlider.style.left = `-${range.value * (sliderItem.offsetWidth + 30)}px`;
    };
})

/* TESTIMONIALS */
const testSlider = document.querySelector('.test-slider');
const testSliderItem = document.querySelector('.test-slider-item');

function getTestimonials() {
    for (let i = 0; i < 7; i++) {
        const testimoniasItem = document.createElement('div');
        testimoniasItem.classList.add('test-slider-item');
        testimoniasItem.innerHTML = testSliderItem.innerHTML;
        testSlider.append(testimoniasItem);
    }
}

async function getTestimonialsData() {
    const testData = 'testimonials.json';
    const res = await fetch(testData);
    const data = await res.json();

    const testCollection = Array.from(document.querySelectorAll('.test-slider-item'));
    const testPics = Array.from(document.querySelectorAll('.userpic'));
    const testNames = Array.from(document.querySelectorAll('.user-name'));
    const testLocals = Array.from(document.querySelectorAll('.local'));
    const testTimes = Array.from(document.querySelectorAll('.time'));
    const testTexts = Array.from(document.querySelectorAll('.test-text'));

    for (let i = 3; i < 11; i++) {
        testPics[i].style.backgroundImage = `url(${data[i].photo})`;
        testNames[i].textContent = data[i].name;
        testLocals[i].textContent = data[i].location;
        testTimes[i].textContent = data[i].time;
        testTexts[i].innerHTML = data[i].text;
    }
}
getTestimonials();
getTestimonialsData();

/* POPUP */
const mediaQuery = window.matchMedia('(max-width: 640px)')
const testimonials = document.querySelector('.test-cards');
const cardCloseIcon = document.querySelector('.test-cards-close');
const testimItems = document.querySelectorAll('.test-card-wrapper');

function closePopup() {
    if (mediaQuery.matches) {
        for (let i = 0; i < testimItems.length; i++) {
            if (testimItems[i].classList.contains('active')) testimItems[i].classList.remove('active');
        };
        overlay.classList.remove('active');
        overlay.classList.remove('popup');
        cardCloseIcon.classList.remove('active');
        cardCloseIcon.classList.remove('popup');
        body.style.overflowY = "auto";
    } else return;
}

cardCloseIcon.addEventListener('click', function() {
    if (overlay.classList.contains('active')) {
        closePopup();
    };
})

testimonials.addEventListener('click', function(e) {

    if (mediaQuery.matches && e.target != cardCloseIcon) {
        for (let i = 0; i < testimItems.length; i++) {
            if (testimItems[i].contains(e.target)) {
                testimItems[i].classList.add('active');
                cardCloseIcon.classList.add('active');
                setTimeout(() => cardCloseIcon.classList.add('popup'), 2);
                overlay.style.backgroundColor = '#F5F7F6';
                overlay.classList.add('active');
                setTimeout(() => overlay.classList.add('popup'), 2);
                body.style.overflowY = "hidden";
            };
        };
    } else return;
})

/* PETS SLIDER */
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
let startCards; // pets1-6
let restCards; // pets7-12
let currentPets1_6; //текущие карточки, видимые пользователю
let currentPets7_12; //текущие карточки, видимые пользователю


function shuffleArr(arr) {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
};

function getStartArrays() {
    let shuffledArr = shuffleArr(numbers);
    startCards = shuffledArr.slice(0, 11);
    restCards = shuffledArr.slice(11, 22);
}

function getArrays() {
    let availableCards;
    if (currentSlide.classList.contains('set2')) {
        availableCards = numbers.filter(item => !currentPets7_12.includes(item, 0));
        startCards = availableCards;
    } else {
        availableCards = numbers.filter(item => !currentPets1_6.includes(item, 0));
        restCards = availableCards;
    }
}

async function getPets1_6() {
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json();
    let currentCards = shuffleArr(startCards);
    currentPets1_6 = currentCards.slice(0, 6);

    //pet1
    document.querySelector('.pet1-title').textContent = data[currentCards[0]].name;
    document.querySelector('.pet1-text').textContent = data[currentCards[0]].location;
    document.querySelector('.pet1-pic').style.backgroundImage = `url(${data[currentCards[0]].image})`;
    document.querySelector('.pet1-meal').style.background = `url(${data[currentCards[0]].meal}) center no-repeat`;
    //pet2   
    document.querySelector('.pet2-title').textContent = data[currentCards[1]].name;
    document.querySelector('.pet2-text').textContent = data[currentCards[1]].location;
    document.querySelector('.pet2-pic').style.backgroundImage = `url(${data[currentCards[1]].image})`;
    document.querySelector('.pet2-meal').style.background = `url(${data[currentCards[1]].meal}) center no-repeat`;
    //pet3    
    document.querySelector('.pet3-title').textContent = data[currentCards[2]].name;
    document.querySelector('.pet3-text').textContent = data[currentCards[2]].location;
    document.querySelector('.pet3-pic').style.backgroundImage = `url(${data[currentCards[2]].image})`;
    document.querySelector('.pet3-meal').style.background = `url(${data[currentCards[2]].meal}) center no-repeat`;
    //pet4    
    document.querySelector('.pet4-title').textContent = data[currentCards[3]].name;
    document.querySelector('.pet4-text').textContent = data[currentCards[3]].location;
    document.querySelector('.pet4-pic').style.backgroundImage = `url(${data[currentCards[3]].image})`;
    document.querySelector('.pet4-meal').style.background = `url(${data[currentCards[3]].meal}) center no-repeat`;
    //pet5   
    document.querySelector('.pet5-title').textContent = data[currentCards[4]].name;
    document.querySelector('.pet5-text').textContent = data[currentCards[4]].location;
    document.querySelector('.pet5-pic').style.backgroundImage = `url(${data[currentCards[4]].image})`;
    document.querySelector('.pet5-meal').style.background = `url(${data[currentCards[4]].meal}) center no-repeat`;
    //pet6  
    document.querySelector('.pet6-title').textContent = data[currentCards[5]].name;
    document.querySelector('.pet6-text').textContent = data[currentCards[5]].location;
    document.querySelector('.pet6-pic').style.backgroundImage = `url(${data[currentCards[5]].image})`;
    document.querySelector('.pet6-meal').style.background = `url(${data[currentCards[5]].meal}) center no-repeat`;
}

async function getPets7_12() {
    const pets = 'pets.json';
    const res = await fetch(pets);
    const data = await res.json();
    let nextCards = shuffleArr(restCards);
    currentPets7_12 = nextCards.slice(0, 6);

    //pet7
    document.querySelector('.pet7-title').textContent = data[nextCards[0]].name;
    document.querySelector('.pet7-text').textContent = data[nextCards[0]].location;
    document.querySelector('.pet7-pic').style.backgroundImage = `url(${data[nextCards[0]].image})`;
    document.querySelector('.pet7-meal').style.background = `url(${data[nextCards[0]].meal}) center no-repeat`;
    //pet8
    document.querySelector('.pet8-title').textContent = data[nextCards[1]].name;
    document.querySelector('.pet8-text').textContent = data[nextCards[1]].location;
    document.querySelector('.pet8-pic').style.backgroundImage = `url(${data[nextCards[1]].image})`;
    document.querySelector('.pet8-meal').style.background = `url(${data[nextCards[1]].meal}) center no-repeat`;
    //pet9
    document.querySelector('.pet9-title').textContent = data[nextCards[2]].name;
    document.querySelector('.pet9-text').textContent = data[nextCards[2]].location;
    document.querySelector('.pet9-pic').style.backgroundImage = `url(${data[nextCards[2]].image})`;
    document.querySelector('.pet9-meal').style.background = `url(${data[nextCards[2]].meal}) center no-repeat`;
    //pet10
    document.querySelector('.pet10-title').textContent = data[nextCards[3]].name;
    document.querySelector('.pet10-text').textContent = data[nextCards[3]].location;
    document.querySelector('.pet10-pic').style.backgroundImage = `url(${data[nextCards[3]].image})`;
    document.querySelector('.pet10-meal').style.background = `url(${data[nextCards[3]].meal}) center no-repeat`;
    //pet11
    document.querySelector('.pet11-title').textContent = data[nextCards[4]].name;
    document.querySelector('.pet11-text').textContent = data[nextCards[4]].location;
    document.querySelector('.pet11-pic').style.backgroundImage = `url(${data[nextCards[4]].image})`;
    document.querySelector('.pet11-meal').style.background = `url(${data[nextCards[4]].meal}) center no-repeat`;
    //pet12
    document.querySelector('.pet12-title').textContent = data[nextCards[5]].name;
    document.querySelector('.pet12-text').textContent = data[nextCards[5]].location;
    document.querySelector('.pet12-pic').style.backgroundImage = `url(${data[nextCards[5]].image})`;
    document.querySelector('.pet12-meal').style.background = `url(${data[nextCards[5]].meal}) center no-repeat`;
};

getStartArrays();
getPets1_6();
getPets7_12();

const left = document.querySelector('.slider-left');
const right = document.querySelector('.slider-right');
const cardsOnScreen = document.querySelector('.cards');
const petsSlider = document.querySelector('.pets-items');
const nextSlide = document.querySelector('.next-slide');
const currentSlide = document.querySelector('.current-slide');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const petCard1 = document.querySelector('.pet1');

//startCards = currentCards.slice(0, 6)

function moveLeft() {
    leftSlide.innerHTML = nextSlide.innerHTML;
    petsSlider.style.left = '0';
    setTimeout(() => {
        currentSlide.innerHTML = leftSlide.innerHTML;
        petsSlider.style.transition = 'none';
        petsSlider.style.left = `-${cardsOnScreen.offsetWidth + 28}px`;
        left.style.pointerEvents = 'auto';
        right.style.pointerEvents = 'auto';
    }, 2000);
}

function moveRight() {
    rightSlide.innerHTML = nextSlide.innerHTML;
    petsSlider.style.left = `-${cardsOnScreen.offsetWidth * 2 + 28 * 2}px`;
    setTimeout(() => {
        currentSlide.innerHTML = rightSlide.innerHTML;
        petsSlider.style.transition = 'none';
        petsSlider.style.left = `-${cardsOnScreen.offsetWidth + 28}px`;
        right.style.pointerEvents = 'auto';
        left.style.pointerEvents = 'auto';
    }, 2000);
}

left.addEventListener('click', function() {
    left.style.pointerEvents = 'none';
    right.style.pointerEvents = 'none';
    let curHtml = currentSlide.innerHTML;
    moveLeft();
    petsSlider.style.transition = '2s';
    nextSlide.innerHTML = currentSlide.innerHTML;
    currentSlide.classList.toggle('set2');
    getArrays(); //new arrays
    currentSlide.classList.contains('set2') ? getPets1_6() : getPets7_12();
})

right.addEventListener('click', function() {
    right.style.pointerEvents = 'none';
    left.style.pointerEvents = 'none';
    let curHtml = currentSlide.innerHTML;
    moveRight();
    petsSlider.style.transition = '2s';
    nextSlide.innerHTML = currentSlide.innerHTML;
    currentSlide.classList.toggle('set2');
    getArrays(); //new arrays
    currentSlide.classList.contains('set2') ? getPets1_6() : getPets7_12();
})