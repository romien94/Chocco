<<<<<<< HEAD
const buttonLeft = document.querySelector('.bars__button--left');
const buttonRight = document.querySelector('.bars__button--right');
const barsList = document.querySelector('.bars-slider__list');

let currentRight = parseInt(getComputedStyle(barsList).right);
const minRight = 0;
const maxRight = (barsList.childElementCount - 1) * 100;
const step = 100;

buttonRight.addEventListener('click',function(e) {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    barsList.style.right = currentRight + '%';
  } else {
    barsList.style.right = 0 + '%';
  }
});

buttonLeft.addEventListener('click',function(e) {
  e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    barsList.style.right = currentRight + '%';
  } else {
      barsList.style.right = 0 + '%';
    }
});
=======
let barsItems = document.querySelector('.bars-slider__list');
let buttonLeft = document.querySelector('.bars__button--left');
let buttonRight = document.querySelector('.bars__button--right');

buttonLeft.addEventListener('click',function(e) {
 loop('left', e); 
});

buttonRight.addEventListener('click',function(e) {
  loop('right', e);
});

function loop(direction, e) {
  e.preventDefault();
  if (direction === 'right') {
    barsItems.appendChild(barsItems.firstElementChild);
  }
  if (direction === 'left') {
    barsItems.insertBefore(barsItems.lastElementChild,barsItems.firstElementChild);    
  }
};
>>>>>>> ce29739efbda3c7ad7ca936b284e4a890d4d1ad2
