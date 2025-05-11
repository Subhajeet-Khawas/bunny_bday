function showStep(step) {
    // Hide all buttons and messages
    document.querySelectorAll('button, .message').forEach(el => el.classList.add('hidden'));

    // Show the next button and message based on step
    if (step === 1) {
        document.getElementById('btn2').classList.remove('hidden');
        document.getElementById('message1').classList.remove('hidden');
    } else if (step === 2) {
        document.getElementById('btn3').classList.remove('hidden');
        document.getElementById('message2').classList.remove('hidden');
        triggerBalloons();
    } else if (step === 3) {
        document.getElementById('btn4').classList.remove('hidden');
        document.getElementById('message3').classList.remove('hidden');
        triggerConfetti();
    } else if (step === 4) {
        document.getElementById('message4').classList.remove('hidden');
        triggerHearts();
        triggerConfetti();
    }
}

function triggerBalloons() {
    for (let i = 0; i < 12; i++) {
        createBalloon();
    }
}

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 5000);
}

function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });
}

function triggerHearts() {
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
