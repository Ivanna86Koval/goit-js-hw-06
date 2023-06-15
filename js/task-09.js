function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widgetEl = document.querySelector(".widget");
const spanColor = document.querySelector(".color");
const colorChangeBtn = document.querySelector(".change-color");
