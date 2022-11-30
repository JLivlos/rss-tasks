//LOGO
document.querySelector('.logo').addEventListener('click', function() {
    window.open('https://rolling-scopes-school.github.io/jlivlos-JSFE2022Q3/online-zoo/pages/main/', '_self')
})

document.querySelector('.footer-logo').addEventListener('click', function() {
    window.open('https://rolling-scopes-school.github.io/jlivlos-JSFE2022Q3/online-zoo/pages/main/', '_self')
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
document.querySelector('.donate-button').addEventListener('click', function() {
    window.scrollTo(0, 0)
})

document.querySelector('.feed-now').addEventListener('click', function() {
    window.scrollTo(0, 0)
})


// EMAIL INPUT
const emailSubmitButton = document.querySelector('.email-submit-button');
const emailInput = document.querySelector('.email-input');

/*emailSubmitButton.addEventListener(('click'), function() {
    emailSubmitButton.style.border = '1px solid #4B9200';
    emailSubmitButton.style.color = '#4B9200';
});*/

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
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
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
menuItems.addEventListener('click', closeMenu);
logoBurger.addEventListener('click', closeMenu);

burgerIcon.addEventListener('click', function() {
    console.log('burger click')
});

/* BURGER MENU ITEMS */
const burgerLogo = document.querySelector('.logo-burger');
const burgerAbout = document.querySelector('.about-item');
const burgerMap = document.querySelector('.map-item');
const burgerZoos = document.querySelector('.zoos-item');
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
burgerAbout.addEventListener('click', function() {
    window.open('https://rolling-scopes-school.github.io/jlivlos-JSFE2022Q3/online-zoo/pages/main/', '_self');
})
burgerContact.addEventListener('click', function() {
    window.scrollTo(0, 0);
})
burgerDesigned.addEventListener('click', function() {
    window.open('https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online');
})


// AMOUNT
const donateBar = document.querySelector('.donate-bar');
const anotherAmount = document.querySelector('.another-amount-input');
const numbers = document.querySelectorAll('.bar-el');

donateBar.addEventListener('click', function(e) {
    if (e.target.value != undefined) anotherAmount.value = e.target.value;
})

anotherAmount.addEventListener('keyup', function(e) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i].value === anotherAmount.value) {
            numbers[i].checked = true;
        } else {
            numbers[i].checked = false;
        }
    }
})