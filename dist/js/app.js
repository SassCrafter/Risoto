// Select element
function selectElement(path) {
    return document.querySelector(path);
}



// Open and close mobile menu
const nav = selectElement('.nav');
const menuToggler = selectElement('.mobile-menu-toggler');
const menu = selectElement('.nav-list');
menuToggler.addEventListener('click', function() {
    nav.classList.toggle('open');
    menuToggler.classList.toggle('open');
    menu.classList.toggle('open');
});

// Change Nav style on scroll
let scrollpos = window.scrollY;
const nav_height = nav.offsetHeight;

const add_class_on_scroll = () => nav.classList.add('nav-scrolled');
const remove_class_on_scroll = () => nav.classList.remove("nav-scrolled");

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= (nav_height * 2)) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

});