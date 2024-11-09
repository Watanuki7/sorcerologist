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
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error loading navbar:', error);
    });
