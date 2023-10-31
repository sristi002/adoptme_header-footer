// JavaScript for the login dropdown


const loginButton = document.getElementById('loginBtn');
const loginDropdown = document.getElementById('loginDropdown');
const loginIcon = document.getElementById('loginIcon');


loginButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from closing the dropdown
    loginDropdown.classList.toggle('show');
});


window.addEventListener('click', function(event) {
    if (loginIcon.contains(event.target)) {
        return; // Click inside the icon, do nothing
    }
    if (loginDropdown.classList.contains('show')) {
        loginDropdown.classList.remove('show');
    }
});
