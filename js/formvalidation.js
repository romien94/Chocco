const form = document.querySelector('.form');
const sendButton = form.querySelector('.button');
const formBlock = document.querySelectorAll('.form__block');
const formElements = form.elements;
const input = document.querySelectorAll('input');
const modal = document.querySelector('.modal');
const modalMessage = modal.querySelector('.modal__message');
const modalButton = modal.querySelector('.modal__button');

for (let i = 0; i < formBlock.length; i++) {
  const error = document.createElement('span');
  formBlock[i].appendChild(error);
  error.classList.add('error');
  error.style.color = 'red';
}

sendButton.addEventListener('click',(e) => {
  e.preventDefault();

 let data = {}
 
 for (let i = 0; i < formElements.length; i++) {
   data[formElements[i].name] = formElements[i].value;
 }
 console.log(data);

 if (validateForm(form)) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST','./data.json');
  xhr.send(JSON.stringify(data));
   modalMessage.textContent = 'Сообщение было успешно отправлено';
   modal.classList.add('modal--active');
 } else {
   modalMessage.textContent = 'Произошла ошибка';
   modal.classList.add('modal--active');
 }
 modalButton.addEventListener('click', (evt) => {
   evt.preventDefault();
   modal.classList.remove('modal--active');
 })
})

function validateForm(form) {
  let valid = true;
  for (let i = 0; i < formElements.length; i++) {
    validateField(formElements[i]);
    if (!validateField(formElements[i])) valid = false;
    }
  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
    field.parentNode.lastChild.textContent = field.validationMessage;
    return false;
  }
  else {
    field.parentNode.lastChild.textContent = '';
    return true;
  }
}
