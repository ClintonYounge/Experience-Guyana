const menuBtn = document.querySelector('.menu-icon');
const menu = document.getElementById('theMenu');
const xBtn = document.getElementById('xBtn');
const navLinks = document.querySelectorAll('.navs');
const introductionSection = document.querySelector('.introduction');
const mainProg = document.querySelector('.main-program');
const featuredSection = document.querySelector('.featured')

function openMenu() {
  menu.style.display = 'block';
  introductionSection.style.display = 'none'
  mainProg.style.display = 'none'
  featuredSection.style.display = 'none'
}

function closeMenu() {
  menu.style.display = 'none';
  introductionSection.style.display = 'block'
  mainProg.style.display = 'block'
  featuredSection.style.display = 'block'
}

menuBtn.addEventListener('click', openMenu);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', closeMenu);
}

xBtn.addEventListener('click', closeMenu);