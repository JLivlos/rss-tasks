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


//FUNCTIONS

function closeBurgerMenu() {
    burgerMenu.classList.remove('header__menu__ul_active');
    burgerIcon.classList.remove('burger_close');
    overlay.classList.remove('overlay_active');
    document.body.classList.remove('body_no-scroll');
};