function toggleLightMode() {
    const body = document.body;
    const darkToggler = document.getElementById('dark_toggler');

    if (darkToggler.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved user preference, if any, on page load
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    const darkToggler = document.getElementById('dark_toggler');

    // Set default theme to dark if no theme is saved
    if (!savedTheme) {
        localStorage.setItem('theme', 'dark');
        document.body.setAttribute('data-theme', 'dark');
        darkToggler.checked = true;
    } else {
        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            darkToggler.checked = true;
        } else {
            document.body.setAttribute('data-theme', 'light');
            darkToggler.checked = false;
        }
    }
};