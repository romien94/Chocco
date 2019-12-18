const form = document.querySelector('.form');
const sendButton = form.querySelector('.button');
const formBlock = document.querySelectorAll('.form__block');
const formElements = form.elements;
const input = document.querySelectorAll('input');

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
 }
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

/*

  const data = {
    name: form.elements.name.value,
    lastName: form.elements.lastName.value,
    email: form.elements.email.value
  };
  console.log(data);
  if (validateForm(form)) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST','');
    xhr.send(JSON.stringify(data));
  };
})


*/