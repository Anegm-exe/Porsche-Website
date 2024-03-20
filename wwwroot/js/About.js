var texts = [
    { h: "Porsche? The Dream", p: "Founded in 1931 by Ferdinand Porsche, Porsche initially offered motor vehicle development work and consulting but did not build any cars under its own name. The first Porsche-branded vehicle, the Porsche 356, was produced in 1948. It was a lightweight and nimble sports car based on Volkswagen components." },
    { h: "Mission", p: "Porsche's mission is to build sports cars that deliver exceptional performance, precision engineering, and timeless design. The company aims to provide an unparalleled driving experience, combining cutting-edge technology with the thrill of driving." },
    { h: "Notable Acheivements", p: "Porsche has achieved significant success in motorsport, innovation, design excellence, and brand loyalty. Its victories in prestigious races like the 24 Hours of Le Mans and its continuous innovation in automotive technology have solidified its position as one of the most respected brands in the industry." },
    { h: "With that the legendary cars of Porsche were introduced to our world", p: "which became a better place :D, but this isn't the end for Porsche's beasts" },
];

var index = 0;
var leftArrow = document.getElementById("leftarrow");
var rightArrow = document.getElementById("rightarrow");

leftArrow.addEventListener("click", function () {
    var textElement = document.getElementById("text");
    var subTextElement = document.getElementById("subText");

    leftArrow.style.pointerEvents = "none";
    rightArrow.style.pointerEvents = "none";

    leftArrow.style.animation = "fadeOut 0.5s forwards";
    rightArrow.style.animation = "fadeOut 0.5s forwards";

    textElement.style.animation = "fadeOutRight 0.5s forwards, glow 6s ease-in-out infinite";
    subTextElement.style.animation = "fadeOutRight 0.5s forwards";

    setTimeout(function () {
        index--;
        if (index < 0) index = texts.length - 1;
        updateText();

        textElement.style.animation = "fadeInRight 0.5s forwards, glow 6s ease-in-out infinite";
        subTextElement.style.animation = "fadeInRight 0.5s forwards";

        leftArrow.style.animation = "fadeIn 0.5s forwards";
        rightArrow.style.animation = "fadeIn 0.5s forwards";

        leftArrow.style.pointerEvents = "auto";
        rightArrow.style.pointerEvents = "auto";
    }, 500);
});

rightArrow.addEventListener("click", function () {
    var textElement = document.getElementById("text");
    var subTextElement = document.getElementById("subText");

    leftArrow.style.pointerEvents = "none";
    rightArrow.style.pointerEvents = "none";

    leftArrow.style.animation = "fadeOut 0.5s forwards";
    rightArrow.style.animation = "fadeOut 0.5s forwards";

    textElement.style.animation = "fadeOutLeft 0.5s forwards, glow 6s ease-in-out infinite";
    subTextElement.style.animation = "fadeOutLeft 0.5s forwards";

    setTimeout(function () {
        index++;
        if (index >= texts.length) index = 0;
        updateText();

        textElement.style.animation = "fadeInLeft 0.5s forwards, glow 6s ease-in-out infinite";
        subTextElement.style.animation = "fadeInLeft 0.5s forwards";

        leftArrow.style.animation = "fadeIn 0.5s forwards";
        rightArrow.style.animation = "fadeIn 0.5s forwards";

        leftArrow.style.pointerEvents = "auto";
        rightArrow.style.pointerEvents = "auto";
    }, 500);
});

function updateText() {
    document.getElementById("text").innerText = texts[index].h;
    document.getElementById("subText").innerText = texts[index].p;
}