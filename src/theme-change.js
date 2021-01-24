const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  toggleTheme: document.getElementById('theme-switch-toggle'),
  body: document.querySelector('body'),
};
const savedTheme = localStorage.getItem('theme');

if (savedTheme === JSON.stringify(Theme.DARK)) {
  refs.body.classList.add(`${Theme.DARK}`);
  refs.toggleTheme.setAttribute('checked', 'true');
} else {
  refs.body.classList.add(`${Theme.LIGHT}`);
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

function toDarkTheme() {
  refs.toggleTheme.setAttribute('checked', 'true');
  refs.body.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
  localStorage.setItem('theme', JSON.stringify(Theme.DARK));
}

function toLigthTheme() {
  refs.toggleTheme.removeAttribute('checked');
  refs.body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

function changeTheme() {
  if (refs.toggleTheme.hasAttribute('checked')) {
    toLigthTheme();
  } else toDarkTheme();
}

refs.toggleTheme.addEventListener('change', changeTheme);
