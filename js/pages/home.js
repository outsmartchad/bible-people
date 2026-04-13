import { PEOPLE } from '../data.js';
import { getPersonImage } from '../app.js';
import { t, tName, tSubtitle } from '../i18n/i18n.js';

const HERO_BG = 'https://readdy.ai/api/search-image?query=ancient%20parchment%20scroll%20illuminated%20manuscript%20golden%20decorative%20borders%20sacred%20text%20ancient%20biblical%20artwork%20warm%20amber%20golden%20light%20divine%20rays%20through%20old%20stone%20cathedral%20window%20rich%20deep%20warm%20tones%20aged%20texture%20beautiful%20classical%20religious%20atmosphere&width=1440&height=900&seq=hero01&orientation=landscape';
const CTA_BG = 'https://readdy.ai/api/search-image?query=ancient%20stone%20cathedral%20interior%20warm%20golden%20light%20streaming%20through%20stained%20glass%20windows%20stone%20columns%20arched%20ceiling%20divine%20atmosphere%20peaceful%20and%20majestic%20biblical%20setting%20warm%20amber%20tones&width=1440&height=600&seq=cta01&orientation=landscape';

function personCard(p) {
  const tClass = p.testament === 'old' ? 'old' : 'new';
  const tLabel = p.testament === 'old' ? t('oldTestament') : t('newTestament');
  const name = tName(p.id) || p.name;
  return `<a href="#/person/${p.id}" class="person-card">
    <img src="${getPersonImage(p)}" alt="${name}" loading="lazy">
    <div class="overlay">
      <div class="name">${name}</div>
      <div class="testament ${tClass}">${tLabel}</div>
    </div>
  </a>`;
}

export function renderHome(container) {
  const featured = PEOPLE.slice(0, 6);
  container.innerHTML = `
    <section class="hero">
      <img class="hero-bg" src="${HERO_BG}" alt="Biblical background">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge"><i class="ri-book-open-line"></i> ${t('heroBadge')}</div>
        <h1>${t('heroTitle')}</h1>
        <p>${t('heroDesc')}</p>
        <div class="hero-divider"></div>
        <div class="hero-buttons">
          <a href="#/gallery" class="btn-gold">${t('exploreTheGallery')}</a>
          <a href="#/about" class="btn-ghost">${t('learnMore')}</a>
        </div>
      </div>
      <div class="scroll-indicator">${t('scroll')}</div>
    </section>
    <section class="featured">
      <div class="section-label">${t('hallOfFaith')}</div>
      <h2>${t('featuredBiblicalFigures')}</h2>
      <div class="section-divider"></div>
      <div class="people-grid">${featured.map(personCard).join('')}</div>
      <a href="#/gallery" class="btn-view-all">${t('viewAllPeople')} <i class="ri-arrow-right-line"></i></a>
    </section>
    <section class="stats">
      <div class="stat-item"><i class="ri-group-line"></i><div class="number">49+</div><div class="label">${t('biblicalFigures')}</div></div>
      <div class="stat-item"><i class="ri-book-2-line"></i><div class="number">9</div><div class="label">${t('categories')}</div></div>
      <div class="stat-item"><i class="ri-history-line"></i><div class="number">4,000+</div><div class="label">${t('yearsOfHistory')}</div></div>
      <div class="stat-item"><i class="ri-quill-pen-line"></i><div class="number">66</div><div class="label">${t('booksOfBible')}</div></div>
    </section>
    <section class="cta">
      <img class="cta-bg" src="${CTA_BG}" alt="Cathedral background">
      <div class="cta-overlay"></div>
      <div class="cta-content">
        <div class="cta-icon"><i class="ri-lightbulb-flash-line"></i></div>
        <h2>${t('ctaTitle')}</h2>
        <p>${t('ctaDesc')}</p>
        <a href="#/gallery" class="btn-gold">${t('beginYourJourney')}</a>
      </div>
    </section>`;
}
