window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden'); 
});

window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.about-section, .courses-container, .footer');
    const screenHeight = window.innerHeight;

    elements.forEach(function (element) {
        const position = element.getBoundingClientRect().top;
        if (position < screenHeight - 100) {
            element.classList.add('visible');
        }
    });
});
