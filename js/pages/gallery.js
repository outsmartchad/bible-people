import { PEOPLE } from '../data.js';
import { getPersonImage } from '../app.js';
import { t, tName, tSubtitle, tCategory } from '../i18n/i18n.js';

const CATEGORIES = ['All', ...new Set(PEOPLE.map(p => p.category))];

export function renderGallery(container) {
  const ntCount = PEOPLE.filter(p => p.testament === 'new').length;
  const otCount = PEOPLE.filter(p => p.testament === 'old').length;
  container.innerHTML = `
    <section class="gallery-hero">
      <h1>${t('peopleOfBible')}</h1>
      <p>${t('galleryDesc')}</p>
      <div class="gallery-stats">
        <div class="gallery-stat"><div class="num">${PEOPLE.length}</div><div class="lbl">${t('people')}</div></div>
        <div class="gallery-stat"><div class="num">${CATEGORIES.length - 1}</div><div class="lbl">${t('categories')}</div></div>
        <div class="gallery-stat"><div class="num">${otCount}</div><div class="lbl">${t('oldTestament')}</div></div>
        <div class="gallery-stat"><div class="num">${ntCount}</div><div class="lbl">${t('newTestament')}</div></div>
      </div>
    </section>
    <div class="filter-section">
      <div class="filter-row" id="cat-filters">
        ${CATEGORIES.map((c, i) => `<span class="filter-chip${i === 0 ? ' active' : ''}" data-cat="${c}">${c === 'All' ? t('all') : tCategory(c)}</span>`).join('')}
      </div>
      <div class="filter-row" id="test-filters">
        <span class="filter-chip active" data-test="All">${t('all')}</span>
        <span class="filter-chip" data-test="old">${t('oldTestament')}</span>
        <span class="filter-chip" data-test="new">${t('newTestament')}</span>
      </div>
      <div class="search-box"><i class="ri-search-line"></i><input type="text" id="search-input" placeholder="${t('searchByName')}"></div>
      <div class="results-count" id="results-count">${PEOPLE.length} ${t('people').toLowerCase()}</div>
    </div>
    <div class="gallery-grid" id="gallery-grid">
      ${PEOPLE.map(p => {
        const tClass = p.testament === 'old' ? 'old' : 'new';
        const tLabel = p.testament === 'old' ? 'OT' : 'NT';
        const name = tName(p.id) || p.name;
        const sub = tSubtitle(p.id) || p.subtitle;
        const searchText = `${p.name} ${p.subtitle} ${p.category} ${tName(p.id)||''} ${tSubtitle(p.id)||''}`.toLowerCase();
        return `<a href="#/person/${p.id}" class="person-card" data-category="${p.category}" data-testament="${p.testament}" data-search="${searchText}">
          <img src="${getPersonImage(p)}" alt="${name}" loading="lazy">
          <div class="card-badges">
            <span class="card-cat-badge">${tCategory(p.category)}</span>
            <span class="card-test-badge ${tClass}">${tLabel}</span>
          </div>
          <div class="card-read-btn"><i class="ri-arrow-right-line"></i></div>
          <div class="overlay">
            <div class="card-subtitle">${sub}</div>
            <div class="name">${name}</div>
          </div>
        </a>`;
      }).join('')}
    </div>`;

  let activeCat = 'All';
  let activeTest = 'All';

  // Check for testament filter from URL (e.g. #/gallery?testament=old)
  const hashQuery = location.hash.split('?')[1];
  if (hashQuery) {
    const params = new URLSearchParams(hashQuery);
    const testParam = params.get('testament');
    if (testParam === 'old' || testParam === 'new') {
      activeTest = testParam;
      document.querySelectorAll('#test-filters .filter-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.test === testParam);
      });
    }
  }

  function filterCards() {
    const search = document.getElementById('search-input').value.toLowerCase();
    let count = 0;
    document.querySelectorAll('#gallery-grid .person-card').forEach(card => {
      const matchCat = activeCat === 'All' || card.dataset.category === activeCat;
      const matchTest = activeTest === 'All' || card.dataset.testament === activeTest;
      const matchSearch = !search || card.dataset.search.includes(search);
      const show = matchCat && matchTest && matchSearch;
      card.style.display = show ? '' : 'none';
      if (show) count++;
    });
    document.getElementById('results-count').textContent = `${count} ${t('people').toLowerCase()}`;
  }

  document.querySelectorAll('#cat-filters .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#cat-filters .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCat = chip.dataset.cat;
      filterCards();
    });
  });

  document.querySelectorAll('#test-filters .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#test-filters .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeTest = chip.dataset.test;
      filterCards();
    });
  });

  document.getElementById('search-input').addEventListener('keyup', filterCards);

  // Apply initial filter (for testament pre-filter from footer links)
  if (activeTest !== 'All') filterCards();
}
