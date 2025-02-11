function revealMessage() {
    const message = document.getElementById('secretMessage');
    const button = document.querySelector('.heart-btn');
    const finalMessage = document.getElementById('finalMessage');
    
    message.style.display = 'block';
    button.style.display = 'none';
    
    // Add confetti effect
    const colors = ['#ff69b4', '#ff1493', '#ff85c0'];
    const confettiCount = 50;

    for(let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `float ${3 + Math.random() * 4}s linear`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }

    setTimeout(() => {
        finalMessage.style.display = 'block';
    }, 2000);
}

// Create floating hearts
function createHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const heartEmojis = ['💖', '💕', '🌸', '🎀'];
    
    for(let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 3 + 's';
        heartsContainer.appendChild(heart);
    }
}

createHearts();

        // Array de sugerencias diferentes
        const suggestions = [
            "¿Segura? ¡Mira bien los botones! 🧐",
            "Creo que tocaste el botón equivocado 😉",
            "Hello Kitty dice que pruebes el otro botón 🐱",
            "¡Pero si somos tan lindos juntos! 😢",
            "¿Y si le das otra oportunidad al botón rosado? 🌸",
            "Venga, ¡no seas tímida! 😘",
            "Cada 'no' acerca más el 'sí'... digo yo 😅"
        ];

        let currentSuggestion = 0;
        let moveDistance = 0;

        function acceptInvitation() {
            const message = document.getElementById('secretMessage');
            const finalMessage = document.getElementById('finalMessage');
            
            message.style.display = 'block';
            document.querySelector('.buttons-container').style.display = 'none';
            
            // Efecto confeti (mantener mismo código anterior)
            // ...
            
            setTimeout(() => {
                finalMessage.style.display = 'block';
            }, 2000);
        }

        function declineInvitation() {
            const suggestionElement = document.getElementById('suggestion');
            const rejectBtn = document.getElementById('rejectBtn');
            
            // Mostrar sugerencia
            suggestionElement.textContent = suggestions[currentSuggestion];
            currentSuggestion = (currentSuggestion + 1) % suggestions.length;
            
            // Efecto de movimiento
            moveDistance += 3;
            rejectBtn.style.transform = `translateX(${moveDistance}px)`;
            
            // Efecto shake
            rejectBtn.classList.add('shake');
            setTimeout(() => {
                rejectBtn.classList.remove('shake');
            }, 500);
        }
