document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);

    // Fade-in animation for text
    const letterContainer = document.querySelector(".container");
    letterContainer.style.opacity = "0";
    letterContainer.style.transform = "translateY(50px)";
    
    setTimeout(() => {
        letterContainer.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
        letterContainer.style.opacity = "1";
        letterContainer.style.transform = "translateY(0)";
    }, 500);
});
