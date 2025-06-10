document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', handleSubmit);
    emailInput.addEventListener('input', validateEmail);
});

function handleSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!validateEmailFormat(email)) {
        showError("Please use your Comp Sci High email address");
        return;
    }

    if (password === 'CSH2024') { // Replace with actual password
        window.location.href = '/coverage';
    } else {
        showError("Incorrect password. Please try again.");
        triggerShakeAnimation();
    }
}

function validateEmailFormat(email) {
    return email.endsWith('@compscihigh.org');
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => errorMessage.style.display = 'none', 3000);
}

function triggerShakeAnimation() {
    const container = document.querySelector('.container');
    container.style.animation = 'shake 0.5s';
    setTimeout(() => container.style.animation = '', 500);
}

function validateEmail() {
    this.style.border = validateEmailFormat(this.value) ? '2px solid #4CAF50' : 'none';
}