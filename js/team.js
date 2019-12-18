const teamName = document.querySelectorAll('.team__name');
const teamItem = document.querySelectorAll('.team__item');

teamItem.forEach(function(element,index) {
	element.addEventListener('click',(e)=>{
  	element.classList.toggle('team__item--active');
    
    teamItem.forEach(function(elem,ind) {
    	if (ind !== index) {
      	elem.classList.remove('team__item--active');
      }
    })
  })
})
