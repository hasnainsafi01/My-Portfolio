window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Function to hide loader
    const hideLoader = () => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    };

    // Agar internet connected hai to 1 sec baad hide kar do
    if (navigator.onLine) {
        setTimeout(hideLoader, 1000);
    } else {
        // Agar net nahi hai, to loader ke andar text change kar do
        const spinner = document.querySelector('.spinner');
        if(spinner) {
            spinner.style.display = 'none'; // Spinner rok do
            loader.innerHTML = '<h2 style="color: #333; font-family: sans-serif;">No Internet Connection...</h2>';
        }
    }
});

// Agar page khule khule net chala jaye ya wapas aa jaye
window.addEventListener('online', () => location.reload()); // Net aane par page reload hoga
window.addEventListener('offline', () => alert("Internet Disconnected!"));

// Form submission reset
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function() {
        // We use setTimeout to allow Formspree to process the data first
        setTimeout(() => {
            this.reset();
        }, 1000);
    });
}
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    
    navbar.classList.toggle('active');
    
    // Icon change (Optional: ☰ se ✕ banana)
    if (navbar.classList.contains('active')) {
        hamburger.innerHTML = '✕';
        document.body.style.overflow = 'hidden'; // Jab menu khula ho to scroll band
    } else {
        hamburger.innerHTML = '☰';
        document.body.style.overflow = 'auto';   // Menu band hone par scroll on
    }
}

// Sabhi links ko select karein (Home, About, Contact etc)
const navLinks = document.querySelectorAll('#navbar li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('navbar');
        const hamburger = document.querySelector('.hamburger');
        
        // Kisi bhi link par click hote hi menu band kar do
        navbar.classList.remove('active');
        hamburger.innerHTML = '☰';
        document.body.style.overflow = 'auto'; // Scroll wapas on karein
    });
});