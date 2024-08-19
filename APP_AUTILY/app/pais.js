
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    menuBtn.addEventListener('click', function() {
        sideMenu.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.classList.remove('open');
    });
});

