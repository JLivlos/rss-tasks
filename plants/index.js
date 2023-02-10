//BURGER
const burgerIcon = document.querySelector('.burger');
const burgerMenu = document.querySelector('.header__menu__ul');
const overlay = document.querySelector('.overlay');
burgerMenu.classList.contains('header__menu__ul_active');

burgerIcon.addEventListener('click', (e) => {
    if (!burgerMenu.classList.contains('header__menu__ul_active')) {
        burgerMenu.classList.add('header__menu__ul_active');
        burgerIcon.classList.add('burger_close');
        overlay.classList.add('overlay_active');
        document.body.classList.add('body_no-scroll');
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


//FUNCTIONS

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
    console.log(countActiveBtns())
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