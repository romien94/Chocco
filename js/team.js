let teamItem = document.querySelectorAll('.team__item');
let teamActive = 'team__item--active';
let teamName = document.querySelectorAll('.team__name');

for (let i = 0; i < teamItem.length; i++) {
  teamName[i].addEventListener('click',function(e) {
    let teamItemActive = document.querySelector('.team__item--active');
    teamItemActive.classList.remove(teamActive);
    teamItem[i].classList.add(teamActive);
  });
}