let passwordInput = document.getElementById("PI");
let hideIcon = document.getElementById("HI");
let passwordInput2 = document.getElementById("P");
let hideIcon2 = document.getElementById("H");

hideIcon.addEventListener('mousedown', function () {
    passwordInput.type = "text";
    hideIcon.src = "/images/Sign/Show-Pass.png";
});

hideIcon.addEventListener('mouseup', function () {
    passwordInput.type = "password";
    hideIcon.src = "/images/Sign/Hide-Pass.png";
});

hideIcon2.addEventListener('mousedown', function () {
    passwordInput2.type = "text";
    hideIcon2.src = "/images/Sign/Show-Pass.png";
});

hideIcon2.addEventListener('mouseup', function () {
    passwordInput2.type = "password";
    hideIcon2.src = "/images/Sign/Hide-Pass.png";
});