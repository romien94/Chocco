let menuItem = document.querySelectorAll('.menu__item');
let menuActive = 'menu__item--active';
let menuLink = document.querySelectorAll('.menu__title');

for (let i = 0; i < menuItem.length; i++) {
menuLink[i].addEventListener('click',function(e) {
e.preventDefault();
let menuItemActive = document.querySelector('.menu__item--active');
menuItemActive.classList.remove(menuActive);
menuItem[i].classList.add(menuActive);
});
}