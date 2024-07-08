const currentTheme = getTheme();
const logoDarkImg = document.querySelector('#logo-dark');
const logoLightImg = document.querySelector('#logo-light');
const toggleSwitch = document.querySelector('#toggleDarkMode');
const toggleButtonWrapper = document.querySelector('#toggleButton');

if (currentTheme) {
    setTheme(currentTheme);
    toggleSwitch.checked = currentTheme === 'dark';
}

function toggleTheme(e) {
    if (e.target.checked) {
        setTheme('dark');
        return;
    }

    setTheme('light');
}

function changeTitle(theme) {
    if (theme === 'dark') {
        toggleButtonWrapper.setAttribute('title', 'Bravo Six, Going Bright');
        return;
    }

    toggleButtonWrapper.setAttribute('title', 'Bravo Six, Going Dark');
}

function changeImg(theme) {
    if (theme === 'dark') {
        logoDarkImg.style.display = 'unset';
        logoLightImg.style.display = 'none';
    }

    if (theme === 'light') {
        logoDarkImg.style.display = 'none';
        logoLightImg.style.display = 'unset';
    }
}

function getTheme() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        return currentTheme;
    }

    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else {
            return 'light';
        }
    }

    return 'light';
}

function setTheme(theme) {
    changeImg(theme);
    changeTitle(theme);

    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
}

// event listeners
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = getTheme();

    setTheme(currentTheme);
    changeImg(currentTheme);
});
toggleSwitch.addEventListener('change', toggleTheme, false);
