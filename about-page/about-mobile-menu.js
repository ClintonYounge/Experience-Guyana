const menuBtn = document.querySelector('.about-menu-icon');
const menu = document.getElementById('theMenu');
const xBtn = document.getElementById('xBtn');
const navLinks = document.querySelectorAll('.navs');
const introductionSection = document.querySelector('.about-introduction');
const mainProg = document.querySelector('.about-description');
const featuredSection = document.querySelector('.past-events');
const footer = document.querySelector('footer');

function openMenu() {
  menu.style.display = 'block';
  introductionSection.style.display = 'none';
  mainProg.style.display = 'none';
  featuredSection.style.display = 'none';
  footer.style.display = 'none';
}

function closeMenu() {
  menu.style.display = 'none';
  introductionSection.style.display = 'block';
  mainProg.style.display = 'block';
  featuredSection.style.display = 'block';
  footer.style.display = 'block';
}

menuBtn.addEventListener('click', openMenu);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', closeMenu);
}

xBtn.addEventListener('click', closeMenu);