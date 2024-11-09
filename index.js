document.addEventListener('DOMContentLoaded', () => {
    const menuToggleButton = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('navbar-default');

    if (menuToggleButton && menu) {
        menuToggleButton.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
});
