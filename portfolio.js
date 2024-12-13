document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and portfolio items
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isMenuOpen = mobileMenu.classList.contains('translate-y-0');
            
            if (!isMenuOpen) {
                mobileMenu.classList.remove('-translate-y-full', 'opacity-0', 'invisible');
                mobileMenu.classList.add('translate-y-0', 'opacity-100', 'visible');
            } else {
                mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'visible');
                mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'invisible');
            }
        });
    }

    // Portfolio filtering functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');

            // Filter items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    // Show item
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide item
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300); // Match this with CSS transition duration
                }
            });
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    
    if(navbar) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                navbar.classList.remove('shadow-lg');
                return;
            }
            
            if (currentScroll > lastScroll && currentScroll > 80) {
                // Scrolling down & past the navbar
                navbar.classList.add('-translate-y-full', 'shadow-lg');
            } else {
                // Scrolling up
                navbar.classList.remove('-translate-y-full');
                navbar.classList.add('shadow-lg');
            }
            
            lastScroll = currentScroll;
        });
    }
});