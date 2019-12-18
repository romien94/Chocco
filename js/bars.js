const buttonLeft = document.querySelector('.bars__button--left');
const buttonRight = document.querySelector('.bars__button--right');
const barsList = document.querySelector('.bars-slider__list');

let currentRight = parseInt(getComputedStyle(barsList).right);
const minRight = 0;
const maxRight = (barsList.childElementCount - 1) * 100;
const step = 100;

buttonRight.addEventListener('click',function(e) {
  e.preventDefault();
  if (currentRight == maxRight) {
    currentRight = minRight;
  } else {
    currentRight += step;
  }
  barsList.style.right = currentRight + '%';
});

buttonLeft.addEventListener('click',function(e) {
  e.preventDefault();
  if (currentRight == minRight) {
    currentRight = maxRight;
  } else {
    currentRight -= step;
  }
  barsList.style.right = currentRight + '%';
});
