const button = document.querySelectorAll('.bars__button');

const barsSlider = document.querySelector('.bars-slider__list');
let currentRight = 0;
const minRight = 0;
const maxRight = barsSlider.childElementCount*100;
const step = 100;

button.forEach((element,index) => {
  element.addEventListener('click',(e) => {
    e.preventDefault();
    if (element.classList.contains('bars__button--right')) {
      currentRight += step;
      barsSlider.style.Right = currentRight + '%';
    }
    else {
      currentRight -= step;
      barsSlider.style.Right = currentRight + '%';
    }
  })
})
