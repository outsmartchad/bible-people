import { PEOPLE } from './data.js';
import { renderHome } from './pages/home.js';
import { renderGallery } from './pages/gallery.js';
import { renderMap } from './pages/map.js';
import { renderAbout } from './pages/about.js';
import { renderPerson } from './pages/person.js';
import { renderQuiz } from './pages/quiz.js';
import { setLang, getLang, updateStaticText, updateLangSwitcher } from './i18n/i18n.js';

export function getPersonImage(person) {
  if (person.imageUrl) return person.imageUrl;
  const q = encodeURIComponent(person.imageQuery);
  return `https://readdy.ai/api/search-image?query=${q}&width=400&height=600&seq=${person.id}01&orientation=portrait`;
}

export function getPersonById(id) {
  return PEOPLE.find(p => p.id === id);
}

const app = document.getElementById('app');

function updateNav(hash) {
  document.querySelectorAll('nav a[data-route]').forEach(a => {
    const route = a.dataset.route;
    if (hash.startsWith('/person/')) {
      a.classList.toggle('active', route === '/gallery');
    } else {
      a.classList.toggle('active', route === hash);
    }
  });
}

async function route() {
  const hash = location.hash.slice(1) || '/';
  updateNav(hash);
  document.querySelector('nav')?.classList.remove('open');
  window.scrollTo(0, 0);
  // Page transition
  app.style.animation = 'none';
  app.offsetHeight; // force reflow
  app.style.animation = 'fadeIn .3s ease-out';
  if (hash === '/' || hash === '') await renderHome(app);
  else if (hash.startsWith('/gallery')) renderGallery(app);
  else if (hash === '/map') renderMap(app);
  else if (hash === '/about') renderAbout(app);
  else if (hash === '/quiz') renderQuiz(app);
  else if (hash.startsWith('/person/')) renderPerson(app, hash.split('/person/')[1]);
  else await renderHome(app);
  updateStaticText();
  updateLangSwitcher();
}

// Language switcher event delegation
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (btn) setLang(btn.dataset.lang);
});

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
