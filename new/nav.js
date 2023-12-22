const burgerMenu = document.querySelector('.nav');
const burgerMenuNav = document.querySelector('.navli');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  burgerMenuNav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navli ');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    burgerMenuNav.classList.remove('active');
  });
});