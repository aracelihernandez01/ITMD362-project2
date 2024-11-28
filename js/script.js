document.getElementById('loginButton').addEventListener('click', function() {
    alert("Redirecting to login page...");
});

window.addEventListener('scroll', function() {
    const mainSection = document.querySelector('.main');
    const scrollPosition = window.scrollY;
    mainSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
