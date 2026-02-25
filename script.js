// ===================================
// Smooth Scrolling Navigation
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle smooth scroll for all anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // ===================================
    // Header Scroll Effect
    // ===================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Validate required fields
            const parentName = document.getElementById('parentName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const emergencyCheckbox = document.getElementById('emergency').checked;
            
            // Reset previous messages
            formSuccess.style.display = 'none';
            formError.style.display = 'none';
            
            // Validation
            if (!parentName || !phone || !email || !emergencyCheckbox) {
                alert('Please fill in all required fields and accept the emergency disclaimer.');
                return;
            }
            
            // Basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Basic phone validation (allow various formats)
            const phonePattern = /[\d\s\-\(\)]+/;
            if (!phonePattern.test(phone) || phone.length < 10) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // ===================================
            // FORM SUBMISSION OPTIONS
            // ===================================
            // This form needs a backend endpoint to actually send emails.
            // Choose one of these integration methods:
            //
            // OPTION 1: Formspree (Recommended - Easiest)
            // 1. Sign up at https://formspree.io
            // 2. Create a form and get your endpoint
            // 3. Replace the fetch URL below with: 'https://formspree.io/f/YOUR_FORM_ID'
            //
            // OPTION 2: FormSubmit (Free, No Signup)
            // 1. Change the form to use native HTML submission:
            //    <form action="https://formsubmit.co/YOUR_EMAIL" method="POST">
            // 2. Remove this JavaScript submit handler
            //
            // OPTION 3: Custom Backend
            // 1. Create a serverless function or API endpoint
            // 2. Update the fetch URL to your endpoint
            // 3. Ensure CORS is configured properly
            //
            // OPTION 4: Mailto Link (Simple Fallback)
            // Opens the user's email client with pre-filled information
            
            // CURRENT IMPLEMENTATION: mailto fallback
            // This opens the user's default email client with form data
            const subject = encodeURIComponent('Consultation Request from ' + parentName);
            const childInfo = data.childName ? `Child's Name: ${data.childName}\n` : '';
            const ageInfo = data.childAge ? `Child's Age: ${data.childAge}\n` : '';
            const body = encodeURIComponent(
                `Parent/Guardian Name: ${parentName}\n` +
                childInfo +
                ageInfo +
                `Phone: ${phone}\n` +
                `Email: ${email}\n` +
                `Preferred Contact Method: ${data.contactMethod}\n\n` +
                `Message:\n${data.message || 'No message provided'}`
            );
            
            // Open email client
            window.location.href = `mailto:info@jennyleeslp.com?subject=${subject}&body=${body}`;
            
            // Show success message
            formSuccess.style.display = 'flex';
            
            // Update success message for mailto method
            const successMessage = formSuccess.querySelector('p');
            successMessage.textContent = 'Your email client should open with the message. Please send it to complete your request. If it doesn\'t open, please call 859-545-2117.';
            
            // Reset form
            contactForm.reset();
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Hide success message after 15 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
                // Restore original message
                successMessage.textContent = 'Your message has been sent. I\'ll get back to you within 1-2 business days.';
            }, 15000);
            
            // ===================================
            // ALTERNATIVE: Direct API submission
            // ===================================
            // Uncomment this code when you have a working endpoint:
            /*
            fetch('YOUR_ENDPOINT_URL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Server error: ' + response.status);
                }
                return response.json();
            })
            .then(result => {
                // Show success message
                formSuccess.style.display = 'flex';
                
                // Reset form
                contactForm.reset();
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Hide success message after 10 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 10000);
            })
            .catch(error => {
                // Show error message
                console.error('Form submission error:', error);
                formError.style.display = 'flex';
                formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
            */
        });
    }
    
    // ===================================
    // Form Input Enhancement
    // ===================================
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    
    formInputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'all 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
    
    // ===================================
    // Accordion — Meet Jenny
    // ===================================
    const accordionToggles = document.querySelectorAll('.accordion-toggle');

    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            const isOpen = this.getAttribute('aria-expanded') === 'true';

            // Close all panels
            accordionToggles.forEach(t => {
                t.setAttribute('aria-expanded', 'false');
                const p = t.nextElementSibling;
                p.setAttribute('hidden', '');
            });

            // Open clicked panel if it was closed
            if (!isOpen) {
                this.setAttribute('aria-expanded', 'true');
                panel.removeAttribute('hidden');
            }
        });
    });

    // ===================================
    // Accessibility: Keyboard Navigation
    // ===================================
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // ===================================
    // Update Copyright Year Dynamically
    // ===================================
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `&copy; 2018–${currentYear} Jenny Lee LLC. All rights reserved.`;
    }
    
    // ===================================
    // Performance: Lazy Loading Effect
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ===================================
// Console Message for Developers
// ===================================
console.log('%c🗣️ Jenny Lee SLP Website', 'font-size: 20px; font-weight: bold; color: #5aa9c7;');
console.log('%cBuilt with care for families across Central Kentucky', 'font-size: 12px; color: #546e7a;');
console.log('%c📞 Need help? Call 859-545-2117', 'font-size: 12px; color: #7ec4dd;');
