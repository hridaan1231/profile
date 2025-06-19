
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').slice(1);
    document.getElementById(targetID).scrollIntoView({ behavior: 'smooth' });

 
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }

    
    links.forEach(l => l.classList.remove('active'));
  
    link.classList.add('active');
  });
});


const themeSelect = document.getElementById('theme-select');

function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

themeSelect.addEventListener('change', () => {
  setTheme(themeSelect.value);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light-theme';
  setTheme(savedTheme);
  themeSelect.value = savedTheme;

  const currentHash = window.location.hash.substring(1);
  if (currentHash) {
    links.forEach(l => l.classList.remove('active'));
    const activeLink = Array.from(links).find(l => l.getAttribute('href').slice(1) === currentHash);
    if (activeLink) activeLink.classList.add('active');
  } else {
    links[0].classList.add('active');
  }
});
