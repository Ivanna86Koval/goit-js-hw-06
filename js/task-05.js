const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInputFn = (event) => {
  spanEl.textContent = inputEl.value;

  if (spanEl.textContent === "") {
    spanEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", onInputFn);
