const form = document.getElementById('user-input');

function signupHandler(e) {
  e.preventDefault();

  const userNameInput = document.getElementById('username');
  const enteredUserName = userNameInput.nodeValue;
  
  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.nodeValue;
}

form.addEventListener('submit', signupHandler);