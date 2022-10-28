const menu = document.getElementById('menu');
const btnOpenMenu = document.getElementById('menu-open');
const btnCloseMenu = document.getElementById('menu-close');
const classAnimationMenuOpen = 'animation-menu-open';
const classAnimationMenuClose = 'animation-menu-close';

function elemVisible(el, classOpen, display) {
  el.style.display = display;
  el.classList.add(classOpen);
}

function elemHidden(el, classOpen, classClose) {
  el.classList.remove(classOpen);
  el.classList.add(classClose);
  setTimeout(() => {
    el.style.display = 'none';
    el.classList.remove(classClose);
  }, 400);
}

btnOpenMenu.addEventListener('click', () => {
  elemVisible(menu, classAnimationMenuOpen, 'block');
});
btnCloseMenu.addEventListener('click', () => {
  elemHidden(menu, classAnimationMenuOpen, classAnimationMenuClose);
});
document.body.addEventListener('click', (el) => {
  if (!btnOpenMenu.contains(el.target) && !menu.contains(el.target)) {
    if (window.screen.width <= 992)
      elemHidden(menu, classAnimationMenuOpen, classAnimationMenuClose);
  }
});

function smoothScroll(link, topOffset) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    if (href !== '') {
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  });
}

document
  .querySelectorAll('.header__menu-link')
  .forEach((link) => smoothScroll(link, 50));

smoothScroll(document.querySelector('.section-hero__btn'), 50);
