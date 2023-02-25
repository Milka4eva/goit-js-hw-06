const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    event.preventDefault();
    if (event.value === null) {
        output.textContent = "Anonymous";
    }
  else output.textContent = event.currentTarget.value;
});