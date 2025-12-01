// Toggle forms
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const message = document.getElementById('message');

signInBtn.addEventListener('click', () => {
    signInForm.classList.remove('hidden');
    signUpForm.classList.add('hidden');
    signInBtn.classList.add('active');
    signUpBtn.classList.remove('active');
    message.textContent = '';
});

signUpBtn.addEventListener('click', () => {
    signUpForm.classList.remove('hidden');
    signInForm.classList.add('hidden');
    signUpBtn.classList.add('active');
    signInBtn.classList.remove('active');
    message.textContent = '';
});

// Handle Sign Up
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    localStorage.setItem('user_' + username, password);
    message.style.color = 'green';
    message.textContent = 'Sign up successful! You can now sign in.';
    signUpForm.reset();
});

// Handle Sign In
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const storedPassword = localStorage.getItem('user_' + username);

    if(storedPassword && storedPassword === password){
        message.style.color = 'blue';
        message.textContent = 'Login successful! Redirecting...';

        // Save logged-in user (optional, for auto-login)
        localStorage.setItem('loggedInUser', username);

        signInForm.reset();

        // Redirect to portfolio home
        setTimeout(() => {
            window.location.href = "home.html#home"; // change to your portfolio page if different
        }, 1000); // 1-second delay so user can see message
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid username or password.';
    }
});z
