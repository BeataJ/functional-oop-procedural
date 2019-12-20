function getUserInput(inputElement) {
  return document.getElementById(inputElement).value;
}

function signupHandler(e) {
  e.preventDefault();

  const enteredUsername = getUserInput('username')
  const enteredPassword = getUserInput('password');
}

function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signupHandler);