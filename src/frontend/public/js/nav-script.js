document.addEventListener('DOMContentLoaded', function () {
    const navButton = document.getElementById('navButton');
    const navTray = document.getElementById('navTray');
    const mainContent = document.getElementById('mainContent');
    const mainFooter = document.getElementById('mainFooter');

    let isOpen = false;

    navButton.addEventListener('click', function () {
        if (!isOpen) {
            navTray.classList.add('open');
            mainContent.classList.add('nav-open');
            mainFooter.classList.add('nav-open');
            isOpen = true;
        } else {
            navTray.classList.remove('open');
            mainContent.classList.remove('nav-open');
            mainFooter.classList.remove('nav-open');
            isOpen = false;
        }
    })
})
