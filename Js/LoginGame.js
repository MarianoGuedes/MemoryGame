const input = document.querySelector('.inputLogin');
const button = document.querySelector('.butLogin');
const form = document.querySelector('.formLogin');

const confirmInput = ({target}) => {
  if (target.value.length >= 3){
    button.removeAttribute('disabled');
    return
  }
  button.setAttribute('disabled','');
}

const handleSubmit = (event) => {
  event.preventDefault ();

  localStorage.setItem ('Player', input.value);
  window.location = '../Html/PlayGame.html';
}

input.addEventListener('input', confirmInput);
form.addEventListener('submit', handleSubmit);
