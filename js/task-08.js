const formEl = document.querySelector(".login-form");
const emailInputEl = document.querySelector('[type="email"]');
const passwordInputEl = document.querySelector('[type="password"]');
const btntEl = document.querySelector('[type="submit"]');

function onSendForm(event) {
  event.preventDefault();

  if (emailInputEl.value.trim() === "" || passwordInputEl.value.trim() === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  const {
    elements: { email, password },
  } = event.currentTarget;
  // console.log(event.currentTarget)
  const userObj = {
    email: email.value,
    password: password.value,
  };

  console.log("User object", userObj);
  // console.log(email.value, password.value);
  formEl.reset();
}

formEl.addEventListener("submit", onSendForm);
