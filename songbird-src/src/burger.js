document.querySelector('.burger-icon').addEventListener('click', () => {
    document.querySelector('.header__ul').classList.toggle('header__ul_burger-active');
});

document.querySelector('.header__ul__close').addEventListener('click', () => {
    document.querySelector('.header__ul').classList.remove('header__ul_burger-active');
});

//media query for burger
const mediaQuery = window.matchMedia('(max-width: 800px)')

function handleTabletChange(e) {
    if (e.matches) {
        document.querySelector('.header__ul').classList.remove('header__ul_burger-active');
    }
};

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);