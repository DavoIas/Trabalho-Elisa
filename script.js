// Animação de seções e cards ao scroll
const sections = document.querySelectorAll('section.animate');
const cards = document.querySelectorAll('.card');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < triggerBottom){
            section.classList.add('visible');
        }
    });

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if(top < triggerBottom){
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio real do formulário

    // Exibe a mensagem de sucesso
    const msg = document.getElementById("successMessage");
    msg.style.display = "block";

    // Limpa os campos do formulário
    this.reset();

    // Oculta a mensagem após 5 segundos (opcional)
    setTimeout(() => {
      msg.style.display = "none";
    }, 5000);
  });

 const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });