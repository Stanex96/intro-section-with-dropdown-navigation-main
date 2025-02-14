// ***** Elements from HTML file *****
const features     = document.querySelector('#features');
const company      = document.querySelector('#company');
const featuresMenu = document.querySelector('#featuresMenu');
const companyMenu  = document.querySelector('#companyMenu');

// ***** Arrows from HTML file *****
const firstArrowDown  = document.querySelector('#firstArrowDown');
const firstArrowUp    = document.querySelector('#firstArrowUp');
const secondArrowDown = document.querySelector('#secondArrowDown');
const secondArrowUp   = document.querySelector('#secondArrowUp');

// ***** Event menus *****
features.addEventListener('click', () => {
    if (featuresMenu.style.display === 'none' || featuresMenu.style.display === '') {
        featuresMenu.style.display      = 'flex';
        featuresMenu.style.position     = 'absolute';
        featuresMenu.style.transform    = 'translateY(65%)';
        firstArrowDown.style.display    = 'none';
        firstArrowUp.style.display      = 'inline';
    } else {
        featuresMenu.style.display      = 'none';
        firstArrowDown.style.display    = 'inline';
        firstArrowUp.style.display      = 'none';
    }
});

company.addEventListener('click', () => {
    if (companyMenu.style.display === 'none' || companyMenu.style.display === '') {
        companyMenu.style.display        = 'flex';
        companyMenu.style.position       = 'absolute';
        companyMenu.style.transform      = 'translateY(65%)';
        secondArrowDown.style.display    = 'none';
        secondArrowUp.style.display      = 'inline';
    } else {
        companyMenu.style.display        = 'none';
        secondArrowDown.style.display    = 'inline';
        secondArrowUp.style.display      = 'none';
    }
});