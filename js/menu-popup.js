let openButton = document.querySelector('.burger-menu');
let closeButton = document.querySelector('.close');
let nav = document.querySelector('.nav');
let active = 'nav--active';

openButton.addEventListener('click',function(e){
  e.preventDefault();
  nav.classList.add(active);
});

closeButton.addEventListener('click',function(e){
  e.preventDefault();
  nav.classList.remove(active);
});