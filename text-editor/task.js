const textarea = document.getElementById('editor');
const clearButton = document.getElementById('clear');

textarea.value = localStorage.getItem('text');

textarea.addEventListener('keyup', () => {
    localStorage.setItem('text', textarea.value);
    
})

clearButton.addEventListener('click', () => {
    localStorage.removeItem('text');
    textarea.value = '';
})
