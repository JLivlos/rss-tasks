/* BURGER */
const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.menu');
const closeIcon = document.querySelector('.burger-close-icon');
const menuList = document.querySelector('.nav-list');

document.addEventListener('click', function(e) {
    const itsMenu = e.target === burgerMenu || burgerMenu.contains(e.target);
    const itsBurgerIcon = e.target === burgerIcon || burgerIcon.contains(e.target);
    const itsCloseIcon = e.target === closeIcon || closeIcon.contains(e.target);
    const itsMenuList = e.target === menuList || menuList.contains(e.target);
    const isActive = burgerMenu.classList.contains('active');

    if (!itsMenu && !itsBurgerIcon && isActive) {
        burgerMenu.classList.toggle('active');
    } else if (!itsMenu && itsBurgerIcon) {
        burgerMenu.classList.toggle('active');
    } else if (itsCloseIcon) {
        burgerMenu.classList.toggle('active');
    } else if (itsMenuList) {
        burgerMenu.classList.toggle('active');
    };
    return;
});

/* POPUP */
const loginButton = document.querySelector('.form-login-button');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const accButton = document.querySelector('#account-item');
const signInButton = document.querySelector('.sign-in-button');
const toCreate = document.querySelector('#to-create');
const toLogin = document.querySelector('#to-login');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const loginOff = document.querySelectorAll('.login-off');
const сreateOff = document.querySelectorAll('.сreate-off');

document.addEventListener('click', function(e) {
    const itsLogin = e.target === loginButton || loginButton.contains(e.target);
    const itsPopup = e.target === popup || popup.contains(e.target);
    const itsAccButton = e.target === accButton || accButton.contains(e.target);
    const itsToCreate = e.target === toCreate || toCreate.contains(e.target);
    const itsToLogin = e.target === toLogin || toLogin.contains(e.target);
    const isPopupActive = popup.classList.contains('active');

    if (!itsPopup && !itsLogin && isPopupActive) {
        popup.classList.toggle('active');
        overlay.classList.toggle('active');
    } else if (itsLogin && !isPopupActive) {
        popup.classList.toggle('active');
        overlay.classList.toggle('active');
        сreateOff.forEach(item => item.style.display = "none");
        loginOff.forEach(item => item.style.display = "flex");
    } else if (itsAccButton && !isPopupActive) {
        popup.classList.toggle('active');
        overlay.classList.toggle('active');
        сreateOff.forEach(item => item.style.display = "none");
        loginOff.forEach(item => item.style.display = "flex");
    } else if (itsToCreate && isPopupActive) {
        loginOff.forEach(item => item.style.display = "none");
        сreateOff.forEach(item => item.style.display = "flex");
    } else if (itsToLogin && isPopupActive) {
        сreateOff.forEach(item => item.style.display = "none");
        loginOff.forEach(item => item.style.display = "flex");
    };
    return false;
});

signInButton.addEventListener('click', function() {
    if (document.querySelector('.login-off').style.display === 'flex') {
        alert(`Log in in to your account \nLogin: ${emailInput.value} \nPassword: ${passwordInput.value}`);
        popup.classList.toggle('active');
        overlay.classList.toggle('active');
    } else {
        alert(`Create account \nLogin: ${emailInput.value} \nPassword: ${passwordInput.value}`);
        popup.classList.toggle('active');
        overlay.classList.toggle('active');
    };
});


/* SLIDER */
let offset = -100; //смещение от левого края
const sliderLike = document.querySelector('.slider-like');
const eclSpain = document.querySelector('.ecl-spain');
const eclJapan = document.querySelector('.ecl-japan');
const eclUsa = document.querySelector('.ecl-usa');
const spain = document.querySelectorAll('.spain');
const japan = document.querySelectorAll('.japan');
const usa = document.querySelectorAll('.usa');
const arrowPrev = document.querySelector('.slider-prev');
const arrowNext = document.querySelector('.slider-next');

function eclSpainAct() {
    eclSpain.style.backgroundImage = 'url(assets/img/Ellipse2.svg)';
    eclJapan.style.backgroundImage = 'url(assets/img/Ellipse1.svg)';
    eclUsa.style.backgroundImage = 'url(assets/img/Ellipse1.svg)';
    arrowPrev.style.opacity = '0.5';
    arrowNext.style.opacity = '1';
};

function eclJapanAct() {
    eclSpain.style.backgroundImage = 'url(assets/img/Ellipse1.svg)';
    eclJapan.style.backgroundImage = 'url(assets/img/Ellipse2.svg)';
    eclUsa.style.backgroundImage = 'url(assets/img/Ellipse1.svg)';
    arrowPrev.style.opacity = '1';
    arrowNext.style.opacity = '1';
};

function eclUsaAct() {
    eclSpain.style.backgroundImage = 'url(assets/img/Ellipse1.svg)';
    eclJapan.style.backgroundImage = 'url(assets/img/Ellipse1.svg)';
    eclUsa.style.backgroundImage = 'url(assets/img/Ellipse2.svg)';
    arrowPrev.style.opacity = '1';
    arrowNext.style.opacity = '0.5';
};

arrowPrev.addEventListener('click', function(e) {
    if (offset > 0) {
        offset = -207.5;
    } else {
        offset = offset + 107.5;
    };
    sliderLike.style.left = offset + '%';
    offset === 7.5 ? eclSpainAct() : offset === -100 ? eclJapanAct() : eclUsaAct();

});

arrowNext.addEventListener('click', function(e) {
    if (offset < -207) {
        offset = 7.5;
    } else {
        offset = offset - 107.5;
    };
    sliderLike.style.left = offset + '%';
    offset === 7.5 ? eclSpainAct() : offset === -100 ? eclJapanAct() : eclUsaAct();
})

spain.forEach(item => {
    item.addEventListener('click', function(e) {
        sliderLike.style.left = '7.5%';
        eclSpainAct();
    })
});

japan.forEach(item => {
    item.addEventListener('click', function(e) {
        sliderLike.style.left = '-100%';
        eclJapanAct();
    })
});

usa.forEach(item => {
    item.addEventListener('click', function(e) {
        sliderLike.style.left = '-207.5%';
        eclUsaAct();
    })
});