const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function onChangeSize(event) {
  textEl.style.fontSize = `${rangeEl.value}px`;

  // textEl.style.fontSize = `${rangeEl.value - 40}px`
}

rangeEl.addEventListener("input", onChangeSize);
