import { PEOPLE } from './data.js';
import { renderHome } from './pages/home.js';
import { renderGallery } from './pages/gallery.js';
import { renderMap } from './pages/map.js';
import { renderAbout } from './pages/about.js';
import { renderPerson } from './pages/person.js';

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

function route() {
  const hash = location.hash.slice(1) || '/';
  updateNav(hash);
  // Close mobile menu on navigation
  document.querySelector('nav')?.classList.remove('open');
  window.scrollTo(0, 0);
  if (hash === '/' || hash === '') renderHome(app);
  else if (hash === '/gallery') renderGallery(app);
  else if (hash === '/map') renderMap(app);
  else if (hash === '/about') renderAbout(app);
  else if (hash.startsWith('/person/')) renderPerson(app, hash.split('/person/')[1]);
  else renderHome(app);
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
