// Select element
function selectElement(path) {
    return document.querySelector(path);
}



// Open and close mobile menu
const nav = selectElement('.nav');
const menuToggler = selectElement('.mobile-menu-toggler');
const menu = selectElement('.nav-list');
menuToggler.addEventListener('click', function () {
    nav.classList.toggle('open');
    menuToggler.classList.toggle('open');
    menu.classList.toggle('open');
});

// Change Nav style on scroll
let scrollpos = window.scrollY;
const nav_height = nav.offsetHeight;

const add_class_on_scroll = () => nav.classList.add('nav-scrolled');
const remove_class_on_scroll = () => nav.classList.remove("nav-scrolled");

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= (nav_height * 2)) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

});


// Tabs
/*
function onTabClick(event) {
    let activeTabs = document.querySelectorAll('.tab-active');
  
    // deactivate existing active tab and panel 
    activeTabs.forEach(function(tab) {
      tab.className = tab.className.replace('tab-active', '');
    });
  
    // activate new tab and panel
    event.target.parentElement.className += ' tab-active';
    console.log(event.target.parentElement);
    document.getElementById(event.target.href.split('#')[1]).className += ' tab-active';
  }
  
  const element = document.getElementById('nav-tab');
  
  element.addEventListener('click', onTabClick, false);
*/

const tabLinks = document.querySelectorAll('.nav-tab li');
const tabs = document.querySelectorAll('.tab');
tabLinks.forEach(link => {
    link.addEventListener('click', function() {
        tabLinks.forEach(element => {
            element.classList.remove('tab-active');
        })
        tabs.forEach(element => {
            element.classList.remove('tab-active');
        })
        link.classList.add('tab-active');
        let tab = link.firstElementChild.href.split('#')[1];
        console.log(tab);
        tabs.forEach(el => {
            if (el.classList.contains(tab)) {
                el.classList.add('tab-active');
            }
        })
    });
});