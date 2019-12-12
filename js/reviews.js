let reviewItems = document.querySelectorAll('.review__item');
let reviews = document.querySelectorAll('.reviews__item');

for (let i = 0 ; i < reviews.length; i++) {
  reviews[i].addEventListener('click', () => {
    let reviewsActive = document.querySelector('.reviews__item--active')
    reviewsActive.classList.remove('reviews__item--active');
    reviews[i].classList.add('reviews__item--active');
    let reviewActive = document.querySelector('.review__item--active');
    reviewActive.classList.remove('review__item--active');
    reviewItems[i].classList.add('review__item--active');
  })
}