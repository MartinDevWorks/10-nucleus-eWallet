// JavaScript Mejorado
document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave para enlaces ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    // Configuración del IntersectionObserver para animaciones
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
  
    // Seleccionar elementos a observar y aplicar estilos iniciales
    document.querySelectorAll('.listado__elemento, .testimonial, .header__grafico').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(el);
    });
  
    // Sistema de partículas en el header
    function createParticles(container, count = 30) {
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        // Asignamos la clase 'particle'
        particle.className = 'particle';
        // Asignamos estilos de forma dinámica usando Object.assign
        Object.assign(particle.style, {
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          // Definimos un tamaño aleatorio entre 1px y 4px
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          aspectRatio: '1 / 1',
          backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`,
          borderRadius: '50%',
          animation: `twinkle ${Math.random() * 3 + 2}s infinite`
        });
        container.appendChild(particle);
      }
    }
  
    // Crear partículas en el header (se pueden ajustar el contenedor y la cantidad)
    const headerContainer = document.querySelector('.header');
    if (headerContainer) {
      createParticles(headerContainer, 50);
    }
  });
  
  // Añadir dinámicamente los keyframes y la clase .visible para las animaciones
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  /* Estilos para las partículas (opcional) */
  .particle {
    pointer-events: none;
  }
  `;
  document.head.appendChild(styleSheet);
  