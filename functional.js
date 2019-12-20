const REQUIRED = 'REQUIRED'; 
const MIN_LENGTH = 'MIN_LENGTH'

function validate(value, flag, validatorValue) {
  if (flag === this.REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === this.MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputElement) {
  return document.getElementById(inputElement).value;
}

function createUser(userName, userPassword) {
  if(!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
    throw new Error(
      'Invalid input - username or password is wrong (password should be at least six characters).'
    )
  }
  return {
    userName: userName,
    password: userPassword
  }
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