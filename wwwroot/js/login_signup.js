function pass() {
    var passwordInput = document.getElementById("passwordInput");
    var hideIcon = document.getElementById("hide_icon");

    if (passwordInput.type == "password") {
        passwordInput.type = "text";
        
    } else {
        passwordInput.type = "password";
        hideIcon.src = "images/hide icon inverted.png"; // Change to the "hide" icon
    }
}