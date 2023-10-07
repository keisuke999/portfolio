const burgerMenu = document.querySelector('.burgermenu');
const burgerMenuNav = document.querySelector('.burgermenu-nav');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  burgerMenuNav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.burgermenu-nav ');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    burgerMenuNav.classList.remove('active');
  });
});

