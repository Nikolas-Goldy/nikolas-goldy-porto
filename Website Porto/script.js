document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Nikolas Goldy Sulihin"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const delayAfterTyping = 1500;

    function type() {
        currentText = texts[count % texts.length];

        if (isDeleting) {
            letter = currentText.slice(0, --index); // Delete characters
        } else {
            letter = currentText.slice(0, ++index); // Add characters
        }

        document.querySelector(".typewriter").textContent = letter;

        if (!isDeleting && letter.length === currentText.length) {
            // Pause at the end of the full text before deleting
            setTimeout(() => {
                isDeleting = true;
            }, delayAfterTyping);
        } else if (isDeleting && letter.length === 0) {
            // Move to the next text and start typing again
            isDeleting = false;
            count++;
        }

        const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, currentSpeed);
    }

    // Start typing on page load
    setTimeout(type, typingSpeed);
});