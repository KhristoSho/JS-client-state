const textarea = document.getElementById('editor');
const clearButton = document.getElementById('clear');
const storage = window.localStorage;

if (storage.text) {
    textarea.value = storage.text;
}

textarea.addEventListener('keydown', () => {
    storage.setItem('text', textarea.value)
})

clearButton.addEventListener('click', () => {
    storage.text = '';
    textarea.value = '';
})
