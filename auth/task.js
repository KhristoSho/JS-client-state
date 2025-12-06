const loginForm = document.getElementById('signin__form');
const storage = window.localStorage;
let dataForStorage = {}

try {
	document.getElementById('login').value = JSON.parse(storage.data).login;
	document.getElementById('password').value = JSON.parse(storage.data).password;
} catch (_) {}

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(loginForm);
	console.log(formData);
	for (let [key, value] of formData.entries()) {
		dataForStorage[key] = value;
	}
	storage.setItem('data', JSON.stringify(dataForStorage))

	const xhr = new XMLHttpRequest();
	const url = loginForm.action

	xhr.open('POST', url);
	xhr.onload = () => {
		console.log(xhr);
		if (xhr.status > 200 && xhr.status < 300) {
			const response = JSON.parse(xhr.responseText);
  
			if (response.success === true) {
				document.getElementById('welcome').classList.add('welcome_active');
        document.getElementById('user_id').textContent = response.user_id;
		  } else {
        document.getElementById('welcome').classList.remove('welcome_active');
        alert('Неверный логин или пароль.')
      }
    }
  }
	xhr.send(formData);

})
