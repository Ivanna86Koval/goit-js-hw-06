/*const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function onChangeSize(event) {
  textEl.style.fontSize = `${rangeEl.value}px`;

  // textEl.style.fontSize = `${rangeEl.value - 40}px`
}

rangeEl.addEventListener("input", onChangeSize);*/

const refs = {
  input: document.querySelector("input#font-size-control"),
  text: document.querySelector("span#text"),
};

const textStyle = refs.text.style;
textStyle.fontSize = `${refs.input.value}px`;

refs.input.addEventListener("input", onInputChange);

function onInputChange() {
  textStyle.fontSize = `${refs.input.value}px`;
}
