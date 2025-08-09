// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.background = window.scrollY > 100 ? 
        'rgba(44, 62, 80, 0.9)' : 'var(--dark)';
});

// Highlight current section in navigation
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = `#${section.id}`;
        }
    });
    
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === current);
    });
});

// Contact form handling
document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    if (!form.name.value || !form.email.value || !form.message.value) {
        alert('Please fill in all required fields.');
        return;
    }
    console.log('Form submitted:', {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    });
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
});