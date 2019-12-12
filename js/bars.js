let barsItems = document.querySelectorAll('.bars-slider__item');
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
