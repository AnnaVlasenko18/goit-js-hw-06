const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', onFocusChange);

function onFocusChange(evt) {
    const symbolLength = inputField.dataset.length;
   
    const inputContentLength = inputField.value.length;
   
    if (inputContentLength === Number(symbolLength)) {
        inputField.classList.remove('invalid')
        inputField.classList.add('valid')
    } else {
           inputField.classList.remove('valid')
        inputField.classList.add('invalid')
    }
};
