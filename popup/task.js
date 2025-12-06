const popup = document.getElementById('subscribe-modal');
const popupClose = document.getElementsByClassName('modal__close')[0];
const storage = window.localStorage;

if (storage.needPopup !== 'false') {
	document.addEventListener('DOMContentLoaded', () => {
	popup.classList.add('modal_active');
	})
}

popupClose.addEventListener('click', () => {
	popup.classList.remove('modal_active');
	storage.needPopup = 'false';
})