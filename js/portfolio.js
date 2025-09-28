// JavaScript específico para las páginas de portafolio personal

document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de proyectos en el portafolio
    const filterButtons = document.querySelectorAll('.portfolio-filter .filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else if (item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Animación al hacer scroll para elementos del portafolio
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 150) {
                section.classList.add('visible');
            }
        });
    }
    
    // Inicialmente verificar elementos visibles
    revealOnScroll();
    
    // Verificar al hacer scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí normalmente enviarías los datos a un servidor
            // Para este ejemplo, solo mostraremos un mensaje
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('¡Gracias por tu mensaje! Te contactaré pronto.');
                contactForm.reset();
            } else {
                alert('Por favor completa todos los campos.');
            }
        });
    }
});