const body = document.querySelector('body');
const nav = document.querySelector('.navigation');
const link = document.querySelectorAll('.navigation__link');
const navToggle = document.querySelector('.navigation__button');
const navOverlap = document.querySelector('.navigation__overlap');

nav.classList.remove('navigation--nojs');

function openMenu() {
  nav.classList.add('navigation--opened');
  nav.classList.remove('navigation--closed');
  body.classList.add('scroll-lock');
}

function closeMenu() {
  nav.classList.remove('navigation--opened');
  nav.classList.add('navigation--closed');
  body.classList.remove('scroll-lock');
}

function initMenu() {
  if (nav.classList.contains('navigation--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
}

navToggle.addEventListener('click', initMenu);
navOverlap.addEventListener('click', closeMenu);

link.forEach((closed) => closed.addEventListener('click', closeMenu));
