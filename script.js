// FPS Counter
let lastTime = performance.now();
let frameCount = 0;

function updateFPS() {
    const now = performance.now();
    frameCount++;
    if (now - lastTime >= 1000) {
        const fps = frameCount;
        document.getElementById('fps').textContent = `FPS: ${fps}`;
        frameCount = 0;
        lastTime = now;
    }
    requestAnimationFrame(updateFPS);
}

updateFPS();

// Time Display
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();

// Play Music Function
function playMusic() {
    const audio = document.getElementById('background-music');
    audio.play().then(() => {
        // Hide the play button after music starts
        document.querySelector('.play-music-btn').style.display = 'none';
    }).catch(error => {
        console.log("Error playing audio:", error);
    });
}
