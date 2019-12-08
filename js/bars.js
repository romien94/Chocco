const left = document.querySelector('.bars__button--left');
const right = document.querySelector('.bars__button--right');
const bars = document.querySelectorAll('.bars-slider__item');
const current = 0;
active = 'bars-slider__item--active';

left.addEventListener('click', function(e) {
  loop('left',e);
});
right.addEventListener('click', function(e) {
  loop('right',e);
});

function loop (button,e) {
    e.preventDefault();
    if (button === 'right') {
      bars.current.classList.remove(active);
      ++current;
      bars.current.classList.add(active);
    }
    else {
      bars.current.classList.remove(active);
      --current;
      bars.current.classList.add(active);
    }
}