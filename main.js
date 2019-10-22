document.addEventListener("DOMContentLoaded", function () {
    // Get Elements
    let TestIMG = document.getElementById('TestIMG');
    let Container = document.getElementsByClassName('container')[0];
    let wait = document.getElementsByClassName('wait')[0];
    let error = document.getElementsByClassName('error')[0];

    // Load Event des Bildes einsetzen
    TestIMG.onload = function () {
        Container.classList.add('op-0');
        Container.addEventListener('transitionend', function () {
            window.location.href = URL + '?t=' + new Date().getTime();
        });
    };

    // Versuchs Intervall
    setInterval(() => {
        TestIMG.src = '';
        TestIMG.src = URLimgTest + '?t=' + new Date().getTime();
    }, LoadInterval);
    // Error einblenden
    setTimeout(() => {
        wait.classList.add('op-0');
        wait.addEventListener('transitionend', function () {
            wait.classList.add('d-none');
            error.classList.remove('d-none');
            setTimeout(() => {
                error.classList.remove('op-0');
            }, 1);
        });
    }, ErrorTimeout);
});