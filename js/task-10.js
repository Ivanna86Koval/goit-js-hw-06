function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector("input");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let boxSize = 30;

function createBoxes() {
  const amount = Number(inputEl.value);

  if (!inputEl.value) {
    return;
  }

  for (let i = 0; i < amount; i += 1) {
    const divElem = document.createElement("div");

    divElem.style = `background-color: ${getRandomHexColor()}; width: ${boxSize}px; height:${boxSize}px; margin: 10px; `;
    divElem.classList.add("new-box");

    boxesEl.append(divElem);
    boxSize += 10;
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  boxSize = 30;

  // const newBoxes = document.querySelectorAll('.new-box');
  // newBoxes.forEach(element => {
  //   element.remove()
  // });
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createEl.addEventListener("click", createBoxes);
destroyEl.addEventListener("click", destroyBoxes);
