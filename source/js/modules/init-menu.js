const initMenu = () => {
  let nav = document.querySelector('.navigation');
  let navToggle = document.querySelector('.navigation__button');

  nav.classList.remove('navigation--nojs');

  navToggle.addEventListener('click', function () {
    if (nav.classList.contains('navigation--closed')) {
      nav.classList.remove('navigation--closed');
      nav.classList.add('navigation--opened');
    } else {
      nav.classList.add('navigation--closed');
      nav.classList.remove('navigation--opened');
    }
  });
};

export {initMenu};
