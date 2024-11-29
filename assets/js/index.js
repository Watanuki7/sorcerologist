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

document.querySelectorAll('.ripple-container').forEach(container => {
    container.addEventListener('click', function (e) {
        const rect = container.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height); // Ripple will be square and cover the largest side
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        // Create the ripple element
        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        // Append the ripple to the container
        container.appendChild(ripple);

        // Remove ripple after animation ends
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

document.getElementById('scroll-btn').addEventListener('click', () => {
    document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
  });