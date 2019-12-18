const form = document.querySelector('.form');
const sendButton = form.querySelector('.button');
const formBlock = document.querySelectorAll('.form__block');
const formElements = form.elements;

for (let i = 0; i < formBlock.length; i++) {
  const error = document.createElement('span');
  formBlock[i].appendChild(error);
  error.classList.add('error');
  error.style.color = 'red';
}

sendButton.addEventListener('click',(e) => {
  e.preventDefault();
  validateForm(form);
})

function validateForm(form) {
  for (let i = 0; i < formElements.length; i++) {
    validateField(formElements[i]);
  }
}

function validateField(field) {
  if (!field.checkValidity()) {
    field.parentNode.lastChild.textContent = field.validationMessage;
  }
  else {
    field.parentNode.lastChild.textContent = '';
  }
}
