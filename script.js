// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



// Footer navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const footerNavItems = document.querySelectorAll('.footer-nav-item');
    footerNavItems.forEach(item => {
        const numberSpan = item.querySelector('.nav-number');
        if (numberSpan && (numberSpan.textContent.trim() === '1' || numberSpan.textContent.trim() === '4')) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', (e) => { e.preventDefault(); });
        } else if (numberSpan && numberSpan.textContent.trim() === '2') {
            item.addEventListener('click', () => {
                const targetElement = document.getElementById('block1');
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        } else if (numberSpan && numberSpan.textContent.trim() === '3') {
            item.addEventListener('click', () => {
                const targetElement = document.getElementById('block2');
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        } else if (item.textContent.trim().toLowerCase().includes('how to buy')) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', (e) => {
                e.preventDefault();
                window.open('https://jup.ag/tokens/74Mfb6CsPbnMaVrstLRtsTUrhdWZ6bY1dWMZf4iUpump', '_blank', 'noopener');
            });
        }
    });
});

// Copy contract address functionality
const copyBtn = document.querySelector('.copy-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const contractAddress = document.querySelector('.contract-address');
        if (contractAddress) {
            navigator.clipboard.writeText(contractAddress.textContent).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy CA';
                }, 2000);
            });
        }
    });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.querySelector('input[type="email"]').value = '';
        }
    });
}

// Connect wallet button functionality
const connectWalletBtn = document.querySelector('.btn-primary');
if (connectWalletBtn && connectWalletBtn.textContent.includes('Connect Wallet')) {
    connectWalletBtn.addEventListener('click', () => {
        // Mock wallet connection
        alert('Wallet connection feature would be implemented here with Solana wallet integration.');
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature, .gallery-item, .stat');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, target);
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Floating elements animation enhancement
const floatingElements = document.querySelectorAll('.element');
floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 2}s`;
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Simulate loading
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
    // Copy CA button for section 2
    const copyBtn = document.getElementById('copy-ca-btn');
    const caValue = document.getElementById('ca-value');
    const copySuccess = document.getElementById('copy-success');
    if (copyBtn && caValue && copySuccess) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(caValue.textContent.trim()).then(() => {
                copySuccess.style.display = 'block';
                setTimeout(() => {
                    copySuccess.style.display = 'none';
                }, 2000);
            });
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 

// Mobile burger menu toggle for footer nav
const mobileBurgerMenu = document.querySelector('.mobile-burger-menu');
if (mobileBurgerMenu) {
    const burgerBtn = mobileBurgerMenu.querySelector('.hamburger');
    const mobileFooterNav = mobileBurgerMenu.querySelector('.mobile-footer-nav');
    burgerBtn.addEventListener('click', () => {
        mobileBurgerMenu.classList.toggle('active');
    });
    // Закрытие меню при клике на пункт
    mobileFooterNav.querySelectorAll('.footer-nav-item').forEach(item => {
        item.addEventListener('click', () => {
            mobileBurgerMenu.classList.remove('active');
        });
    });
} 