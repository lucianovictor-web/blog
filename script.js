document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito de animação nos números das Estatísticas
    const counters = document.querySelectorAll('.stat-number');
    const speed = 60; // Quanto menor, mais rápida a animação

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Incremento calculado baseado na velocidade
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

    // 2. Feedback visual simples no console para checar se o script rodou na Bat-caverna
    console.log("Sistema Gotham Nexus ativado com sucesso. O Cavaleiro das Trevas observa.");
});