let passwordInput = document.getElementById("passwordInput");
let hideIcon = document.getElementById("hide_icon");

hideIcon.addEventListener('mousedown', function () {
    // Show the password when the button is held down
    passwordInput.type = "text";
});

hideIcon.addEventListener('mouseup', function () {
    // Hide the password when the button is released
    passwordInput.type = "password";
});