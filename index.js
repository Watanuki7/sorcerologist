document.addEventListener('DOMContentLoaded', () => {
    const menuToggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const menu = document.getElementById('navbar-default');

    // Check if both elements exist before adding the event listener
    if (menuToggleButton && menu) {
        menuToggleButton.addEventListener('click', () => {
            // Toggle the 'hidden' class to show or hide the mobile menu
            menu.classList.toggle('hidden');
        });
    }
});