// Detectar cuando la sección entra en la vista
const counterSection = document.getElementById("counter-section");
const counterElement = document.getElementById("counter");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Activar la animación cuando la sección entra en la vista
            counterSection.classList.add("visible");
            startCounting();
        }
    });
}, { threshold: 0.5 });

observer.observe(counterSection);

function startCounting() {
    let count = 0;
    const target = 5000;
    const interval = setInterval(() => {
        count += 10; // Incrementar en 10 para hacerlo más rápido
        if (count >= target) {
            clearInterval(interval);
            count = target;
        }
        counterElement.textContent = count;
    }, 15); // Actualiza cada 30ms para la animación
}