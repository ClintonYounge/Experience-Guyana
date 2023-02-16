const bottomRight = document.querySelector('.bottom-right p');

const mediaQuery = window.matchMedia('(min-width: 785px)');
if (mediaQuery.matches) {
  bottomRight.innerHTML = '2023, some rights reserved. This is a capstone project that shows my current level as it relates to web development.';
}