// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Animate skill bars when in viewport
const animateSkills = () => {
    const skillBars = document.querySelectorAll('.progress-bar');
    skillBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = value + '%';
        }, 200);
    });
};

// Check if element is in viewport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Animate skills when scrolling into view
let skillsAnimated = false;
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection && isInViewport(skillsSection) && !skillsAnimated) {
        animateSkills();
        skillsAnimated = true;
    }
});

// Service card hover effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Portfolio hover effect
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const content = this.querySelector('.portfolio-content');
        content.style.transform = 'translateY(0)';
        content.style.opacity = '1';
    });
    card.addEventListener('mouseleave', function() {
        const content = this.querySelector('.portfolio-content');
        content.style.transform = 'translateY(100%)';
        content.style.opacity = '0';
    });
});

// Handle hire form submission
document.querySelector('.hire-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
     
    // Show success message
    const modal = document.querySelector('#hireModal');
    const modalBody = modal.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="text-center">
            <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
            <h4 class="mt-3">Thank You!</h4>
            <p>Your request has been submitted successfully. I'll get back to you soon!</p>
            <button class="btn btn-primary mt-3" data-bs-dismiss="modal">Close</button>
        </div>
    `;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
});