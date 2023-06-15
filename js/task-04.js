const counterValueEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector('[data-action="increment"');

decrementBtnEl.addEventListener("click", onDecrementFn);
incrementBtnEl.addEventListener("click", onIncrementFn);

let count = 0;

function onDecrementFn(event) {
  counterValueEl.textContent = `${(count -= 1)}`;
}

function onIncrementFn(event) {
  counterValueEl.textContent = `${(count += 1)}`;
}
console.log(counterValueEl);
