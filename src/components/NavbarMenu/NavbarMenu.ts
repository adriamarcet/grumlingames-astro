const menu = document.getElementById('navbar-menu');
const openButtons = document.querySelectorAll('.openNavBarMenu');
const closeButtons = document.querySelectorAll('.closeNavbarMenu');
const navLinks = document.querySelectorAll('[data-navlink]');

openButtons.forEach((openButton) => {
    openButton.addEventListener('click', () => {
    if(menu && menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('is-open');
        document.body.classList.add('menu-opened');
    }
    });
});

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
    if(menu  && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        menu.classList.remove('is-open');
        document.body.classList.remove('menu-opened');
    }
    });
});

navLinks.forEach((navLink) => {
    if(navLink.getAttribute('href') === window.location.pathname) {
        navLink.setAttribute('aria-current', 'page');
    }
});
