/*const inputValidationEl = document.querySelector("#validation-input");

console.dir(inputValidationEl);

function onIsValid(event) {
  if (
    inputValidationEl.value.trim().length ===
    Number(inputValidationEl.dataset.length)
  ) {
    inputValidationEl.classList.add("valid");
    inputValidationEl.classList.remove("invalid");
  } else {
    inputValidationEl.classList.remove("valid");
    inputValidationEl.classList.add("invalid");
  }
}

inputValidationEl.addEventListener("blur", onIsValid);*/

/*document.querySelector("body").style.backgroundColor = "#EBECF0";
const inputRef = document.getElementById("validation-input");
inputRef.addEventListener("blur", onBlurBorderColor);*/

const inputRef = document.querySelector("input#validation-input");

inputRef.addEventListener("blur", onInputChange);

function onInputChange(even) {
  const COUNT_SYMBOL = Number(even.currentTarget.dataset.length);
  const value = even.currentTarget.value.length;
  if (value === COUNT_SYMBOL) {
    inputRef.className = "valid";
  } else {
    inputRef.className = "invalid";
  }
}
