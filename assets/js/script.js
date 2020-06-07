const toggleSwitch = document.querySelector('#toggleDarkMode');
const toggleButtonWrapper = document.querySelector('#toggleButton');
const currentTheme = localStorage.getItem('theme');

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
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        changeTitle('light');
        localStorage.setItem('theme', 'light');
    }
}

function changeTitle (theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('title', 'Bravo Six, Going Bright');
    } else if (theme === 'light') {
        document.documentElement.setAttribute('title', 'Bravo Six, Going Dark');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
