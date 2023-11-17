import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function saveToLocalStorage(event) {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  }
}

function onSubmit(event) {
  event.preventDefault();
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
}

form.addEventListener('input', throttle(saveToLocalStorage, 500));
window.addEventListener('DOMContentLoaded', loadFromLocalStorage);
form.addEventListener('submit', onSubmit);
