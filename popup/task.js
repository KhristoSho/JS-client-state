const popup = document.getElementById('subscribe-modal');
const popupClose = document.getElementsByClassName('modal__close')[0];

if (getCookie() !== 'true') {
	document.addEventListener('DOMContentLoaded', () => {
	popup.classList.add('modal_active');
	})
}

popupClose.addEventListener('click', () => {
	popup.classList.remove('modal_active');
	setCookie('true');
})

function setCookie(value) {
	document.cookie = `needPopup:${encodeURIComponent(value)};`;
}

function getCookie() {
	return decodeURIComponent(document.cookie).slice(10);
}