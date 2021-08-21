document.getElementById('login-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lavender';
    //Get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //Get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'farjanapopi8@gmail.com' && userPassword == '1234567') {
        window.location.href = 'img.html'
    }
});
