const words = ["Visualiser.", "Structurer.", "Développer."];
let index = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
const changingText = document.getElementById("changing-text");
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 1500;

function typeEffect() {
    currentWord = words[index];
    if (isDeleting) {
        changingText.textContent = currentWord.substring(0, letterIndex--);
        if (letterIndex < 0) {
            isDeleting = false;
            index = (index + 1) % words.length;
            setTimeout(typeEffect, typingSpeed);
            return;
        }
        setTimeout(typeEffect, deletingSpeed);
    } else {
        changingText.textContent = currentWord.substring(0, letterIndex++);
        if (letterIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenWords);
            return;
        }
        setTimeout(typeEffect, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, typingSpeed);
});