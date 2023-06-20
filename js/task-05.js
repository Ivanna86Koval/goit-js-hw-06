/*const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInputFn = (event) => {
  spanEl.textContent = inputEl.value;

  if (spanEl.textContent === "") {
    spanEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", onInputFn);*/

document.querySelector("body").style.backgroundColor = "#cfd1e1";

const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== "") {
    nameRef.textContent = currentTarget.value.trim();
  } else {
    nameRef.textContent = "Anonymous";
  }
};

inputRef.addEventListener("input", getInputValue);
