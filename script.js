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

    // Hiệu ứng lá rơi
    const leafContainer = document.getElementById("leaf-container");
    function createLeaf() {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");
        leaf.style.left = Math.random() * 100 + "vw";
        leaf.style.animationDuration = Math.random() * 5 + 5 + "s";
        leafContainer.appendChild(leaf);

        // Xóa lá sau khi rơi xong
        setTimeout(() => {
            leaf.remove();
        }, 10000);
    }

    // Tạo lá rơi liên tục
    setInterval(createLeaf, 500);
});
