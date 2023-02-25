const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener("input", manageInputRange);
function manageInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}