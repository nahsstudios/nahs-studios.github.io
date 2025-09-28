// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad de pestañas para divisiones
    const tabButtons = document.querySelectorAll('.tab-btn');
    const divisionTabs = document.querySelectorAll('.division-tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const tabId = this.getAttribute('data-tab');
            
            divisionTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });
    
    // Filtrado de proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    // Navegación suave al hacer clic en los enlaces del menú
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí normalmente enviarías los datos a un servidor
            // Para este ejemplo, solo mostraremos un mensaje
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                contactForm.reset();
            } else {
                alert('Por favor completa todos los campos.');
            }
        });
    }
    
    // Animación al hacer scroll
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
    
    // Actualizar copyright al año actual
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer p');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Nahs Studios. Todos los derechos reservados.`;
    }
});