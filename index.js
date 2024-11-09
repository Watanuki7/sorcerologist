document.addEventListener('DOMContentLoaded', function() {
    const menuToggleButton = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('navbar-default');

    if (menuToggleButton && menu) {
        menuToggleButton.addEventListener('click', function() {
            // Toggle the 'hidden' class to show or hide the mobile menu
            menu.classList.toggle('hidden');
        });
    } else {
        console.error('Menu toggle button or menu not found');
    }
});
