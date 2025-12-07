const loginForm = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const escape = document.getElementById('escape')

if (localStorage.getItem('userid')) {
  document.getElementById('welcome').classList.add('welcome_active');
  document.getElementById('signin').classList.remove('signin_active');
  document.getElementById('user_id').textContent = localStorage.userid;
}

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(loginForm);
	const xhr = new XMLHttpRequest();
	const url = loginForm.action

	xhr.open('POST', url);
  xhr.responseType = 'json';
	xhr.onload = () => {
		console.log(xhr);
    const response = xhr.response;
    if (response.success === true) {
      document.getElementById('welcome').classList.add('welcome_active');
      document.getElementById('signin').classList.remove('signin_active');
      document.getElementById('user_id').textContent = response.user_id;
      localStorage.setItem('userid', response.user_id)
    } else {
      document.getElementById('welcome').classList.remove('welcome_active');
      alert('Неверный логин или пароль.')
    }
  }
	xhr.send(formData);
})

escape.addEventListener('click', () => {
  localStorage.removeItem('userid');
  document.getElementById('welcome').classList.remove('welcome_active');
  document.getElementById('signin').classList.add('signin_active');
})