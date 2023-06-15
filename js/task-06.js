const inputValidationEl = document.querySelector("#validation-input");

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

inputValidationEl.addEventListener("blur", onIsValid);

/*document.querySelector("body").style.backgroundColor = "#EBECF0";
const inputRef = document.getElementById("validation-input");
inputRef.addEventListener("blur", onBlurBorderColor);*/
