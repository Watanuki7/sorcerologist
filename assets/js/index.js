// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the container element where the navbar will be injected
    const navbarContainer = document.getElementById('navbar-container');

    // Fetch the navbar HTML content
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            // Inject the fetched HTML into the container
            navbarContainer.innerHTML = html;

            // Now that the navbar is loaded, we can initialize the menu toggle functionality
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
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Error loading navbar:', error);
        });
});