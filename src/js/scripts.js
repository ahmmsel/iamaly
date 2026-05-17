// Custom Mouse Cursor Effect
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

// Mobile Menu Logic
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const menuBackdrop = document.getElementById('menu-backdrop');
const menuContent = document.getElementById('menu-content');
const mobileLinks = document.querySelectorAll('.mobile-link');

const openMenu = () => {
    mobileMenu.classList.remove('invisible');
    mobileMenu.classList.add('visible');
    menuBackdrop.classList.add('opacity-100');
    menuContent.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
    menuBackdrop.classList.remove('opacity-100');
    menuContent.classList.add('translate-x-full');
    setTimeout(() => {
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('invisible');
        document.body.style.overflow = '';
    }, 300);
};

if (menuToggle) menuToggle.addEventListener('click', openMenu);
if (menuClose) menuClose.addEventListener('click', closeMenu);
if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

// Only run cursor logic on desktop
if (window.innerWidth >= 1024) {
    document.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursor.style.left = posX + 'px';
        cursor.style.top = posY + 'px';
        
        // Smoother follower effect
        follower.animate({
            left: posX + 'px',
            top: posY + 'px'
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .group, [title]');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('scale-[3]');
            follower.classList.add('scale-[1.5]', 'bg-accent/10');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('scale-[3]');
            follower.classList.remove('scale-[1.5]', 'bg-accent/10');
        });
    });
}

// Smooth scroll adjustment for floating nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
