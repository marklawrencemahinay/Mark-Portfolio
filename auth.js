const LOGGED_IN_KEY = 'isLoggedIn';

function checkSignInState() {
    return localStorage.getItem(LOGGED_IN_KEY) === 'true';
}

function logInUser() {
    // Sets the state to 'true' in the browser's local storage
    localStorage.setItem(LOGGED_IN_KEY, 'true');
    // Redirects to the main content page
    window.location.href = 'home.html'; 
}

function logOutUser() {
    // Sets the state to 'false'
    localStorage.setItem(LOGGED_IN_KEY, 'false');
    // Redirects back to the login page (the new entry point)
    window.location.href = 'login.html'; 
}

// This will redirect the user to the login page if they are not logged in
if (window.location.pathname === '/login.html' && checkSignInState()) {
    window.location.href = 'home.html';  // Redirect logged-in user to the homepage
}



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
});

    