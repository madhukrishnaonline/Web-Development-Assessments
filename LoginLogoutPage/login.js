document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === 'user' && password === 'pass') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        window.location.href = 'logoutPage.html'; // Redirect to logout page
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});

function LogoutClick() {
    document.getElementById('user').innerText = localStorage.getItem('username');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'loginPage.html'; // Redirect to login page
}
LogoutClick();