let form = document.querySelector('.form');
let sendButton = form.querySelector('.button');
let formElements = form.elements;

function createError(field) {
   const fieldParent = field.parentNode;
   const error = document.createElement('div');
  
   fieldParent.appendChild(error);
   error.classList.add('error');
   error.style.color = 'red';
   error.textContent = field.validationMessage;
}

sendButton.addEventListener('click',(e)=>{
  e.preventDefault();
  if (validateForm(form)) {
    console.log('все ок');
  } else {
    console.log('что-то пошло не так');
  }
});

 function validateForm(form) {
   let valid = true;
   for (let i = 0; i < formElements.length; i++) {
    if (!validateField(formElements[i])) {
      valid = false;
    }
  }
   return valid;
}
  
 function validateField(field) {
  if (!field.checkValidity()) {
    createError(field);
    return false;
  }    
    return true;
}
