// Ensure DOM is fully loaded before executing animations
document.addEventListener("DOMContentLoaded", (event) => {
    // Register scroll trigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar interaction on scroll
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '15px 50px';
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            nav.style.padding = '20px 50px';
            nav.style.background = 'rgba(5, 5, 5, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });

    // Mobile Hamburger Menu (basic toggle)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Hero Section Enter Animation Timeline
    const tl = gsap.timeline();

    tl.from('.logo', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from('.nav-links li', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
    }, "-=0.6")
    .from('.image-wrapper', {
        scale: 0.5,
        rotation: 15,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.4")
    .from('.greeting', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.8")
    .from('.name', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from('.occupation', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from('.about-me', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4")
    .from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6");

    // Scroll-triggered animations for all section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Scroll-triggered animations for timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%"
            },
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Scroll-triggered animation for About content
    gsap.from('.about-content p', {
        scrollTrigger: {
            trigger: '.about-content',
            start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Scroll-triggered animations for skills container (disabled to fix visibility)
    /*
    gsap.utils.toArray('.skills-category').forEach(category => {
        gsap.from(category.querySelectorAll('.skill-card'), {
            scrollTrigger: {
                trigger: category,
                start: "top 90%"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)"
        });
    });
    */

    // Scroll-triggered animations for project cards
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Resume animation
    gsap.from('.resume-container', {
        scrollTrigger: {
            trigger: '.resume-container',
            start: "top 85%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    // Contact animation
    gsap.from('.contact-container', {
        scrollTrigger: {
            trigger: '.contact-container',
            start: "top 85%"
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    // Scroll-triggered animations for certificates
    gsap.from('.certificate-card', {
        scrollTrigger: {
            trigger: '.certificates-container',
            start: "top 85%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Content Placeholders (if any left)
    gsap.utils.toArray('.content-placeholder').forEach(placeholder => {
        gsap.from(placeholder, {
            scrollTrigger: {
                trigger: placeholder,
                start: "top 80%",
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Achievements animation
    gsap.from('.achievement-item', {
        scrollTrigger: {
            trigger: '.achievements-container',
            start: "top 85%"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });

    // Certificate Modal Logic
    const modal = document.getElementById("cert-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("modal-caption");
    const closeBtn = document.querySelector(".close-modal");

    document.querySelectorAll('.view-cert-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.certificate-card');
            const img = card.querySelector('.cert-img');
            const title = card.querySelector('h3').innerText;
            const desc = card.querySelector('.cert-desc').innerText;

            modal.style.display = "block";
            // Prevent scrolling on body when modal is open
            document.body.style.overflow = "hidden";
            
            modalImg.src = img.src;
            captionText.innerHTML = `<strong style="font-size: 1.8rem; color: var(--accent-color);">${title}</strong><br><br><span style="font-size: 1.1rem; color: #ddd; line-height: 1.6;">${desc}</span>`;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Force direct download for CV using embedded base64
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const fileName = this.getAttribute('download') || 'Abhilasha_Rana_Resume.pdf';
            
            if (typeof resumeBase64 !== 'undefined') {
                // Serve as octet-stream to force the browser to download instead of previewing
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = "data:application/octet-stream;base64," + resumeBase64;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                // Fallback if the variable isn't loaded
                const url = this.getAttribute('href');
                window.open(url, '_blank');
            }
        });
    }
});
