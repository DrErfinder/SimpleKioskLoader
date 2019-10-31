document.addEventListener("DOMContentLoaded", function () {
    // Transilations
    // If 'auto' read lang from browser-settings.
    if (lang == 'auto') {
        lang = navigator.language;
        lang = lang.substr(0, 2).toLowerCase();
    }
    // Read translations (sub-)obj
    let translation = translations[lang];
    // If not read (meaning transilation diesn't exist) set to en.
    if (translation == null) {
        translation = translations.en;
    }

    // Set Elements
    document.getElementsByTagName('html')[0].setAttribute('lang', lang);

    for (const name in translation) {
        if (translation.hasOwnProperty(name)) {
            if (name == 'title') {
                document.title = translation[name];
            } else {
                document.getElementById(name).innerHTML = translation[name];
            }
        }
    }

    // Get URL from URL#
    let hash = window.location.hash.substr(1);
    if (hash != '') {
        URL = decodeURI(hash);
    }

    // Main Stuff
    // Get Elements
    let TestIMG = document.getElementById('TestIMG'),
        Container = document.getElementsByClassName('container')[0],
        wait = document.getElementsByClassName('wait')[0],
        error = document.getElementsByClassName('error')[0];

    // Load Event des Bildes einsetzen
    TestIMG.onload = function () {
        Container.classList.add('op-0');
        Container.addEventListener('transitionend', function () {
            window.location.href = URL + '?t=' + new Date().getTime();
        });
    };

    // Seite Einblenden
    setTimeout(() => {
        Container.classList.remove('op-0');
        // Versuchs Intervall
        setInterval(() => {
            TestIMG.src = '';
            setTimeout(() => {
                TestIMG.src = URL + imgTest + '?t=' + new Date().getTime();
            }, 50);
        }, LoadInterval);
    }, 500);
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
