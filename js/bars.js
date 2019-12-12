let barsItem = document.querySelectorAll('.bars-slider__item');
let right = document.querySelector('.bars__button--right');
let left = document.querySelector('.bars__button--left');

for (let i = 0; i < barsItem.length; i++) {
  let barsActive = document.querySelector('.bars-slider__item--active');
  right.addEventListener('click', function(e) {
    e.preventDefault();
    i++;
    barsActive.classList.remove('bars-slider__item--active');
    barsItem[i].classList.add('bars-slider__item--active');
  });

  left.addEventListener('click', function(e) {
    e.preventDefault();
    i--;
    barsActive.classList.remove('bars-slider__item--active');
    barsItem[i].classList.add('bars-slider__item--active');
  })
}