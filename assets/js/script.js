const currentTheme = localStorage.getItem('theme');
const logoDarkImg = document.querySelector('#logo-dark');
const logoLightImg = document.querySelector('#logo-light');
const toggleSwitch = document.querySelector('#toggleDarkMode');
const toggleButtonWrapper = document.querySelector('#toggleButton');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        changeTitle('dark');
    } else {
        changeTitle('light');
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        changeTitle('dark');
        changeImg('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        changeTitle('light');
        changeImg('light');
        localStorage.setItem('theme', 'light');
    }
}

function changeTitle(theme) {
    if (theme === 'dark') {
        toggleButtonWrapper.setAttribute('title', 'Bravo Six, Going Bright');
    } else if (theme === 'light') {
        toggleButtonWrapper.setAttribute('title', 'Bravo Six, Going Dark');
    }
}

function changeImg(theme) {
    if (theme === 'dark') {
        logoDarkImg.style.display = 'unset';
        logoLightImg.style.display = 'none';
    } else if (theme === 'light') {
        logoDarkImg.style.display = 'none';
        logoLightImg.style.display = 'unset';
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
