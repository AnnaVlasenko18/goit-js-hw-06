const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();

    const formEl = evt.currentTarget.elements;
    
    const email = formEl.email.value;
    const password = formEl.password.value;

    if (email === "" || password === "") {
        alert("Plaese fill in all the fields!");
        return;
    } else {
        const formData = {
            email,
            password,
        }
        console.log(formData);
        form.reset();
        }
};

