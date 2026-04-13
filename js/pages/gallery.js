import { PEOPLE } from '../data.js';
import { getPersonImage } from '../app.js';
import { t, tName, tCategory } from '../i18n/i18n.js';

const CATEGORIES = ['All', ...new Set(PEOPLE.map(p => p.category))];

export function renderGallery(container) {
  const ntCount = PEOPLE.filter(p => p.testament === 'new').length;
  container.innerHTML = `
    <section class="gallery-hero">
      <h1>${t('peopleOfBible')}</h1>
      <p>${t('galleryDesc')}</p>
      <div class="gallery-stats">
        <div class="gallery-stat"><div class="num">${PEOPLE.length}</div><div class="lbl">${t('people')}</div></div>
        <div class="gallery-stat"><div class="num">${CATEGORIES.length - 1}</div><div class="lbl">${t('categories')}</div></div>
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
    </div>
    <div class="gallery-grid" id="gallery-grid">
      ${PEOPLE.map(p => {
        const tClass = p.testament === 'old' ? 'old' : 'new';
        const tLabel = p.testament === 'old' ? t('oldTestament') : t('newTestament');
        const name = tName(p.id) || p.name;
        return `<a href="#/person/${p.id}" class="person-card" data-category="${p.category}" data-testament="${p.testament}" data-name="${p.name.toLowerCase()} ${(tName(p.id)||'').toLowerCase()}">
          <img src="${getPersonImage(p)}" alt="${name}" loading="lazy">
          <div class="overlay">
            <div class="name">${name}</div>
            <div class="testament ${tClass}">${tLabel}</div>
          </div>
        </a>`;
      }).join('')}
    </div>`;

  // Attach filter listeners
  let activeCat = 'All';
  let activeTest = 'All';

  function filterCards() {
    const search = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('#gallery-grid .person-card').forEach(card => {
      const matchCat = activeCat === 'All' || card.dataset.category === activeCat;
      const matchTest = activeTest === 'All' || card.dataset.testament === activeTest;
      const matchSearch = !search || card.dataset.name.includes(search);
      card.style.display = (matchCat && matchTest && matchSearch) ? '' : 'none';
    });
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
}
