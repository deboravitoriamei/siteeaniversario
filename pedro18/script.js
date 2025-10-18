const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
    message.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
    const randomX = Math.random() * window.innerWidth * 0.6;
    const randomY = Math.random() * window.innerHeight * 0.6;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
