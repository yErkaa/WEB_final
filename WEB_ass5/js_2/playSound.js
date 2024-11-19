function playSound() {
    const audio = new Audio('sounds/sound.mp3');
    audio.play()
}

document.getElementById('playSoundBtn').addEventListener('click', playSound);
document.getElementById('playSoundBtnn').addEventListener('click', playSound);