//BURGER
const burgerIcon = document.querySelector('.burger');
const burgerMenu = document.querySelector('.header__menu__ul');
const overlay = document.querySelector('.overlay');

burgerIcon.addEventListener('click', (e) => {
    if (!burgerMenu.classList.contains('header__menu__ul_active')) {
        openBurgermenu();
    } else {
        closeBurgerMenu();
    };
});

overlay.addEventListener('click', closeBurgerMenu);

//SERVICES
const serviceBtns = Array.from(document.querySelectorAll('.service__top__btn'));
const gardensBtn = document.querySelector('.service__top__btn__gardens');
const plantingBtn = document.querySelector('.service__top__btn__planting');
const lawnBtn = document.querySelector('.service__top__btn__lawn');
const gardensItems = [document.querySelector('.services__garden'), document.querySelector('.services__garden2')];
const plantingItems = [document.querySelector('.services__planting'), document.querySelector('.services__planting2'), document.querySelector('.services__planting3')];
const lawnItems = [document.querySelector('.services__lawn')];

gardensBtn.addEventListener('click', () => {
    gardensBtn.classList.toggle('service__top__btn_active');
    makeBtnGrey();
    if (countActiveBtns() === 0) return;
    gardensItems.forEach(elem => {
        if (gardensBtn.classList.contains('service__top__btn_active')) {
            elem.classList.remove('service__item_blur');
        } else {
            elem.classList.add('service__item_blur');
        };
    });
    plantingItems.forEach(elem => {
        if (!plantingBtn.classList.contains('service__top__btn_active')) {
            elem.classList.add('service__item_blur');
        };
    });
    lawnItems.forEach(elem => {
        if (!lawnBtn.classList.contains('service__top__btn_active')) {
            elem.classList.add('service__item_blur');
        };
    });
});

plantingBtn.addEventListener('click', () => {
    plantingBtn.classList.toggle('service__top__btn_active');
    makeBtnGrey();
    if (countActiveBtns() === 0) return;
    plantingItems.forEach(elem => {
        if (plantingBtn.classList.contains('service__top__btn_active')) {
            elem.classList.remove('service__item_blur');
        } else {
            elem.classList.add('service__item_blur');
        };
    });
    gardensItems.forEach(elem => {
        if (!gardensBtn.classList.contains('service__top__btn_active')) {
            elem.classList.add('service__item_blur');
        };
    });
    lawnItems.forEach(elem => {
        if (!lawnBtn.classList.contains('service__top__btn_active')) {
            elem.classList.add('service__item_blur');
        };
    });
});

lawnBtn.addEventListener('click', () => {
    lawnBtn.classList.toggle('service__top__btn_active');
    makeBtnGrey();
    if (countActiveBtns() === 0) return;
    lawnItems.forEach(elem => {
        if (lawnBtn.classList.contains('service__top__btn_active')) {
            elem.classList.remove('service__item_blur');
        } else {
            elem.classList.add('service__item_blur');
        };
    });
    gardensItems.forEach(elem => {
        if (!gardensBtn.classList.contains('service__top__btn_active')) {
            elem.classList.add('service__item_blur');
        };
    });
    plantingItems.forEach(elem => {
        if (!plantingBtn.classList.contains('service__top__btn_active')) {
            elem.classList.add('service__item_blur');
        };
    });
});

//PRICES

const priceBtns = Array.from(document.querySelectorAll('.prices__variants__item__btn'));
const basicsBtn = document.querySelector('.prices__variants__item__btn__basics');
const basicsHead = document.querySelector('.prices__variants__basics');
const basicsInfo = document.querySelector('.prices__variants__basics__info');
const standartBtn = document.querySelector('.prices__variants__item__btn__standart');
const standartHead = document.querySelector('.prices__variants__standart');
const standartInfo = document.querySelector('.prices__variants__standart__info');
const protBtn = document.querySelector('.prices__variants__item__btn__pro-care');
const proHead = document.querySelector('.prices__variants__pro-care');
const proInfo = document.querySelector('.prices__variants__pro-care__info');
const orderBtns = Array.from(document.querySelectorAll('.prices__variants__item__info__btn'));

basicsBtn.addEventListener('click', (e) => {
    console.log()
    if (basicsBtn.classList.contains('prices__variants__item__btn_active')) {
        closePrice(basicsBtn, basicsHead, basicsInfo);
    } else {
        if (countActivePrices() === 1) {
            closePrice(standartBtn, standartHead, standartInfo);
            closePrice(protBtn, proHead, proInfo);
        };
        openPrice(basicsBtn, basicsHead, basicsInfo);
    };
});

standartBtn.addEventListener('click', (e) => {
    if (standartBtn.classList.contains('prices__variants__item__btn_active')) {
        closePrice(standartBtn, standartHead, standartInfo);
    } else {
        if (countActivePrices() === 1) {
            closePrice(basicsBtn, basicsHead, basicsInfo);
            closePrice(protBtn, proHead, proInfo);
        };
        openPrice(standartBtn, standartHead, standartInfo);
    };        
});

protBtn.addEventListener('click', (e) => {
    if (protBtn.classList.contains('prices__variants__item__btn_active')) {
        closePrice(protBtn, proHead, proInfo);
    } else {
        if (countActivePrices() === 1) {
            closePrice(basicsBtn, basicsHead, basicsInfo);
            closePrice(standartBtn, standartHead, standartInfo);
        };
        openPrice(protBtn, proHead, proInfo);
    }; 
});

orderBtns.forEach(elem => {
    elem.addEventListener('click', () => {
        document.getElementById('contacts').scrollIntoView();
    });
});

//FUNCTIONS

function openBurgermenu() {
    burgerMenu.classList.add('header__menu__ul_active');
        burgerIcon.classList.add('burger_close');
        overlay.classList.add('overlay_active');
        document.body.classList.add('body_no-scroll');
};

function closeBurgerMenu() {
    burgerMenu.classList.remove('header__menu__ul_active');
    burgerIcon.classList.remove('burger_close');
    overlay.classList.remove('overlay_active');
    document.body.classList.remove('body_no-scroll');
};

function countActiveBtns() {
    let counter = 0;
    serviceBtns.forEach(e => {
        if (e.classList.contains('service__top__btn_active')) counter++;
    });
    return counter;
};

function makeBtnGrey() {    
    if (countActiveBtns() === 2) {
        serviceBtns.forEach(e => {
            if (!e.classList.contains('service__top__btn_active')) e.classList.add('service__top__btn_grey');
        });
    };
    if (countActiveBtns() === 1) {
        serviceBtns.forEach(e => {
            e.classList.remove('service__top__btn_grey');
        });
    };
    if (countActiveBtns() === 0) {
        gardensItems.forEach(elem => elem.classList.remove('service__item_blur'));
        plantingItems.forEach(elem => elem.classList.remove('service__item_blur'));
        lawnItems.forEach(elem => elem.classList.remove('service__item_blur'));
    };
};

function openPrice(btn, head, info) {
    btn.classList.add('prices__variants__item__btn_active');
    head.classList.add('prices__variants__item_active');
    info.classList.add('prices__variants__basics__info_active');
};

function closePrice(btn, head, info) {
    btn.classList.remove('prices__variants__item__btn_active');
    head.classList.remove('prices__variants__item_active');
    info.classList.remove('prices__variants__basics__info_active');
};

function countActivePrices() {
    let counter = 0;
    priceBtns.forEach(e => {
        if (e.classList.contains('prices__variants__item__btn_active')) counter++;
    });
    return counter;
};