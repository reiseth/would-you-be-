const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const gif = document.getElementById("bongoGif");

/* Move NO button to a random position */
function moveNoButton() {
    const padding = 50;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

/* Run when mouse gets close or hovers */
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

/* YES button click */
yesBtn.addEventListener("click", () => {
    question.textContent = "Yay! I knew it 💖🐱";

    gif.src = "https://media.tenor.com/dEN66mMlhB8AAAAm/i-love-you.webp";

    // Hide NO button after winning
    noBtn.style.display = "none";
});