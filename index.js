const menuToggleButton = document.getElementById('mobile-menu-toggle');
const menu = document.getElementById('navbar-default');

menuToggleButton.addEventListener('click', () => {
    // Toggle the 'hidden' class to show or hide the mobile menu
    menu.classList.toggle('hidden');
});