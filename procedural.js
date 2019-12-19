const form = document.getElementById('user-input');

function signupHandler(e) {
  e.preventDefault();

  const userNameInput = document.getElementById('username');
  const enteredUserName = userNameInput.value;
  
  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if(enteredUserName.trim().length === 0) {
    alert('Invalid input = password must be six character or longer');
    return;
  }
  if(enteredPassword.trim().length <= 5) {
    alert('Invalid input - password muast be six character or longer');
    return;
  }


}

form.addEventListener('submit', signupHandler);