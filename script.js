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
            
            // Build the message body
            const childInfo = data.childName ? `Child's Name: ${data.childName}\n` : '';
            const ageInfo = data.childAge ? `Child's Age: ${data.childAge}\n` : '';
            const messageBody =
                `Parent/Guardian: ${parentName}\n` +
                childInfo +
                ageInfo +
                `Phone: ${phone}\n` +
                `Email: ${email}\n` +
                `Best contact method: ${data.contactMethod}\n\n` +
                `Message:\n${data.message || '(none)'}`;

            // Submit via Web3Forms
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending…';

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '13597395-7513-4001-81bc-3bf1876f7ee0',
                    subject: `Consultation Request from ${parentName}`,
                    from_name: parentName,
                    email: 'admin@jennyleeslp.com',
                    reply_to: email,
                    phone: phone,
                    message: messageBody
                })
            })
            .then(response => response.json())
            .then(result => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send My Message';
                if (result.success) {
                    formSuccess.style.display = 'flex';
                    contactForm.reset();
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    setTimeout(() => { formSuccess.style.display = 'none'; }, 10000);
                } else {
                    throw new Error(result.message || 'Submission failed');
                }
            })
            .catch(error => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send My Message';
                console.error('Form submission error:', error);
                formError.style.display = 'flex';
                formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
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
        footerText.innerHTML = `&copy; 2018–${currentYear} Jenny Lee LLC. All rights reserved. &nbsp;&middot;&nbsp; <a href="/privacy.html">Privacy Policy</a>`;
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
