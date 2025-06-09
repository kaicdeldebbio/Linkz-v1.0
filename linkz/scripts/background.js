    const starsBackground = document.querySelector('.background_star');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.bottom = `${Math.random() * -100}px`;
        star.style.animationDuration = `${5 + Math.random() * 10}s`;
        star.style.width = star.style.height = `${1 + Math.random() * 2}px`;
        starsBackground.appendChild(star);
    }

/*
 ██ ▄█▀ ██ ▄█▀▒███████▒
 ██▄█▒  ██▄█▒ ▒ ▒ ▒ ▄▀░
▓███▄░ ▓███▄░ ░ ▒ ▄▀▒░ 
▓██ █▄ ▓██ █▄   ▄▀▒   ░
▒██▒ █▄▒██▒ █▄▒███████▒
▒ ▒▒ ▓▒▒ ▒▒ ▓▒░▒▒ ▓░▒░▒
Developed by kkZ (@kaicdeldebbio)
*/
