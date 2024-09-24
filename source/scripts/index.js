/* в этот файл добавляет скрипты*/
const mainNav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');
menuToggle.addEventListener('click', () =>{
  mainNav.classList.toggle('main-nav--closed');
});
