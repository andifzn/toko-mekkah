const navbarMenu = document.querySelector('.navbar-menu');

const hamburgerMenu = document.querySelector('.hamburger-menu');

// Hamburger Menu Section
// Open Navbar menu
hamburgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    navbarMenu.classList.toggle('active')
});

// Close Navbar Menu
document.addEventListener('click', (e) => {
    // Logikanya 
    // jika didalam navbarMenu mengandung class active dan yang di klik bukan di dalam area navbarMenu
    if (navbarMenu.classList.contains('active') && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active')
    }
});

const items = document.querySelectorAll('.best-seller-items');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
        items.forEach(el => {
            if (el !== item) el.classList.add('faded');
        });
        });

        item.addEventListener('mouseleave', () => {
        items.forEach(el => el.classList.remove('faded'));
        });
    });
