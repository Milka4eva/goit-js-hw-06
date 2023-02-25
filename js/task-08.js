const form = document.querySelector('.login-form');

form.addEventListener('submit', manageSubmit);

function manageSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }
    const usersDetails = { email: email.value, Password: password.value };
    
    console.log(usersDetails);
    event.currentTarget.reset();
}

