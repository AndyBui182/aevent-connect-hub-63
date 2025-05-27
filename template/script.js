
// Simple JavaScript for interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navDesktop = document.querySelector('.nav-desktop');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Toggle mobile menu (you can add mobile menu HTML and styles as needed)
            console.log('Mobile menu toggled');
        });
    }
    
    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically filter the events
            console.log('Filter:', this.textContent);
        });
    });
    
    // Testimonial slider functionality
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonials = [
        {
            text: "Aevent revolutionized how we organize our startup pitch competitions. The platform made it easy to find sponsors, manage registrations, and connect with participants.",
            author: "Minh Nguyen",
            role: "Founder, TechHub Vietnam",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            text: "As a sponsor, Aevent helps us discover relevant events to support. The analytics and reporting features provide valuable insights on our ROI from each event.",
            author: "Linh Tran",
            role: "Marketing Director, FutureTech",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            text: "The event service marketplace saved us so much time. We found all the vendors we needed in one place and coordinated everything through the platform.",
            author: "David Pham",
            role: "Event Manager, Innovation Summit",
            avatar: "https://randomuser.me/api/portraits/men/62.jpg"
        },
        {
            text: "Aevent helped me discover relevant startup events in my industry. The networking features allowed me to connect with potential investors before the events even began.",
            author: "Mai Le",
            role: "CEO, GreenTech Solutions",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];
    
    let currentTestimonial = 0;
    
    function updateTestimonial(index) {
        const testimonialText = document.querySelector('.testimonial-text');
        const testimonialAvatar = document.querySelector('.testimonial-avatar');
        const testimonialAuthor = document.querySelector('.testimonial-author h4');
        const testimonialRole = document.querySelector('.testimonial-author p');
        
        if (testimonialText && testimonials[index]) {
            testimonialText.textContent = `"${testimonials[index].text}"`;
            testimonialAvatar.src = testimonials[index].avatar;
            testimonialAvatar.alt = testimonials[index].author;
            testimonialAuthor.textContent = testimonials[index].author;
            testimonialRole.textContent = testimonials[index].role;
        }
        
        // Update active dot
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        if (testimonialDots[index]) {
            testimonialDots[index].classList.add('active');
        }
        
        currentTestimonial = index;
    }
    
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            updateTestimonial(index);
        });
    });
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
    }, 5000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.feature-card, .event-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
