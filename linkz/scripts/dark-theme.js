/*
const toggleCheckbox = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    document.documentElement.setAttribute('data-theme', currentTheme);

    toggleCheckbox.checked = currentTheme === 'light';

    const switchLabel = toggleCheckbox.parentElement;
    switchLabel.setAttribute('aria-checked', toggleCheckbox.checked);

    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            switchLabel.setAttribute('aria-checked', 'true');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            switchLabel.setAttribute('aria-checked', 'false');
        }
    });


 ██ ▄█▀ ██ ▄█▀▒███████▒
 ██▄█▒  ██▄█▒ ▒ ▒ ▒ ▄▀░
▓███▄░ ▓███▄░ ░ ▒ ▄▀▒░ 
▓██ █▄ ▓██ █▄   ▄▀▒   ░
▒██▒ █▄▒██▒ █▄▒███████▒
▒ ▒▒ ▓▒▒ ▒▒ ▓▒░▒▒ ▓░▒░▒
Developed by kkZ (@kaicdeldebbio)
*/
