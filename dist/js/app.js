const menuToggler = document.querySelector('.mobile-menu-toggler');
const menu = document.querySelector('.nav-list');
menuToggler.addEventListener('click', function() {
    menuToggler.classList.toggle('open');
    menu.classList.toggle('open');
});