const initMenu = () => {
  let nav = document.querySelector('.navigation');
  let navToggle = document.querySelector('.navigation__button');
  let body = document.querySelector('body');

  nav.classList.remove('navigation--nojs');

  navToggle.addEventListener('click', function () {
    if (nav.classList.contains('navigation--closed')) {
      nav.classList.remove('navigation--closed');
      nav.classList.add('navigation--opened');
      body.classList.add('page--opened');
    } else {
      nav.classList.add('navigation--closed');
      nav.classList.remove('navigation--opened');
      body.classList.remove('page--opened');
    }
  });
};

export {initMenu};
