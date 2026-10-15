document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Menú Desplegable Responsivo
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 2. Filtro de Productos en el Catálogo
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 3. Envío del Formulario de Contacto
  const contactForm = document.getElementById('contactForm');
  const modal = document.getElementById('successModal');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value;
      const asunto = document.getElementById('asunto').value;
      const modalMessage = document.getElementById('modalMessage');

      if (modalMessage) {
        modalMessage.innerText = `¡Gracias, ${nombre}! Hemos recibido tu consulta sobre "${asunto}". Te responderemos en muy poco tiempo.`;
      }
      
      if (modal) {
        modal.style.display = 'flex';
      }

      contactForm.reset();
    });
  }
});

// Función para cerrar la ventana modal
function closeModal() {
  const modal = document.getElementById('successModal');
  if (modal) {
    modal.style.display = 'none';
  }
}