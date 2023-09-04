const userName = document.querySelector('#name-input');

const initialUser = document.querySelector("#name-output");

const initialValue = evt => {
    if (!evt.currentTarget.value ? initialUser.textContent = 'Anonymous' : initialUser.textContent = evt.currentTarget.value)
console.log(initialValue)
    }

userName.addEventListener('input', initialValue);
