let menuItem = document.querySelectorAll('.menu__item');
let menuActive = 'menu__item--active';
let menuLink = document.querySelectorAll('.menu__title');

menuLink.forEach((element,index) => {
  element.addEventListener('click',(e)=>{
    e.preventDefault;
    menuItem[index].classList.toggle(menuActive);
    
    menuLink.forEach((el,ind) => {
      if (ind != index) menuItem[ind].classList.remove(menuActive);
    })
  })  
})
