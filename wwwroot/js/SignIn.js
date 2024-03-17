let passwordInput = document.getElementById("PI");
let hideIcon = document.getElementById("H");

hideIcon.addEventListener('mousedown', function () {
    passwordInput.type = "text";
});

hideIcon.addEventListener('mouseup', function () {
    passwordInput.type = "password";
});