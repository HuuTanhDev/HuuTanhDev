document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    const toggleButton = document.getElementById("toggle-audio");

    // Bắt đầu với nhạc bật
    audio.play().catch((error) => {
        console.log("Trình duyệt chặn tự động phát nhạc:", error);
    });

    // Nút bật/tắt nhạc
    toggleButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            toggleButton.textContent = "Tắt nhạc";
        } else {
            audio.pause();
            toggleButton.textContent = "Bật nhạc";
        }
    });
});
