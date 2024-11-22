document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');

    fetch('components/navbar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(html => {
        navbarContainer.innerHTML = html;

        const menuToggleButton = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('navbar-default');

        if (menuToggleButton && menu) {
            menuToggleButton.addEventListener('click', function() {
                menu.classList.toggle('hidden');
            });
        } else {
            console.error('Menu toggle button or menu not found');
        }
    })
    .catch(error => {
        console.error('Error loading navbar:', error);
    });
});
