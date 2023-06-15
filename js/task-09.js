function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
/*const widgetEl = document.querySelector(".widget");
const spanColor = document.querySelector(".color");
const colorChangeBtn = document.querySelector(".change-color");*/

const refs = {
  bodyStyle: document.querySelector("body").style,
  buttonChangeColor: document.querySelector("button.change-color"),
  textColor: document.querySelector("span.color"),
};

refs.buttonChangeColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  refs.bodyStyle.backgroundColor = color;
  refs.textColor.textContent = color;
}
