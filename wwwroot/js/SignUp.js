let passwordInput = document.getElementById("P");
let passwordInput2 = document.getElementById("PP");
let hideIcon = document.getElementById("H");
let hideIcon2 = document.getElementById("HH");

hideIcon.addEventListener('mousedown', function () {
    passwordInput.type = "text";
    hideIcon.src = "/images/Sign/Show-Pass.png";
});

hideIcon2.addEventListener('mousedown', function () {
    passwordInput2.type = "text";
    hideIcon2.src = "/images/Sign/Show-Pass.png";
});

hideIcon.addEventListener('mouseup', function () {
    passwordInput.type = "password";
    hideIcon.src = "/images/Sign/Hide-Pass.png";
});

hideIcon2.addEventListener('mouseup', function () {
    passwordInput2.type = "password";
    hideIcon2.src = "/images/Sign/Hide-Pass.png";
});