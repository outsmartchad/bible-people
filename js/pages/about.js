import { PEOPLE } from '../data.js';
import { getPersonImage } from '../app.js';
import { t, tName, tSubtitle } from '../i18n/i18n.js';

const LIBRARY_IMG = 'https://readdy.ai/api/search-image?query=ornate%20ancient%20library%20interior%20warm%20golden%20light%20illuminated%20manuscripts%20sacred%20books%20beautiful%20classical%20architecture%20cathedral%20ceiling%20stained%20glass%20warm%20amber%20atmosphere&width=600&height=500&seq=about01&orientation=landscape';

const QUICK_LINKS = ['moses', 'david', 'mary', 'paul'];

export function renderAbout(container) {
  const cards = QUICK_LINKS.map(id => PEOPLE.find(p => p.id === id)).filter(Boolean);
  container.innerHTML = `
    <section class="about-hero">
      <div class="section-label">${t('ourMission')}</div>
      <h1>${t('aboutBiblePeople')}</h1>
      <p>${t('aboutSubtitle')}</p>
    </section>
    <div class="about-content">
      <div class="about-two-col">
        <div class="text-side">
          <div class="section-label">${t('whyWeBuiltThis')}</div>
          <h2>${t('storiesThatShaped')}</h2>
          <p>${t('aboutP1')}</p>
          <p>${t('aboutP2')}</p>
          <p>${t('aboutP3')}</p>
          <a href="#/gallery" class="btn-gold" style="margin-top:16px">${t('exploreTheGallery')} <i class="ri-arrow-right-line"></i></a>
        </div>
        <img src="${LIBRARY_IMG}" alt="Ancient library">
      </div>
    </div>
    <section class="values-section">
      <div class="section-label">${t('ourApproach')}</div>
      <h2>${t('whatWeStandFor')}</h2>
      <div class="values-grid">
        <div class="value-card"><i class="ri-heart-line"></i><h3>${t('faithAndDevotion')}</h3><p>${t('faithAndDevotionDesc')}</p></div>
        <div class="value-card"><i class="ri-eye-line"></i><h3>${t('historicalContext')}</h3><p>${t('historicalContextDesc')}</p></div>
        <div class="value-card"><i class="ri-book-open-line"></i><h3>${t('scriptureFirst')}</h3><p>${t('scriptureFirstDesc')}</p></div>
        <div class="value-card"><i class="ri-lightbulb-line"></i><h3>${t('timelessLessons')}</h3><p>${t('timelessLessonsDesc')}</p></div>
      </div>
    </section>
    <section class="explore-section">
      <h2>${t('startExploring')}</h2>
      <div class="explore-grid">
        ${cards.map(p => `<div class="explore-card">
          <i class="ri-user-line"></i>
          <h4>${tName(p.id) || p.name}</h4>
          <div class="sub">${tSubtitle(p.id) || p.subtitle}</div>
          <a href="#/person/${p.id}">${t('readStory')} &rarr;</a>
        </div>`).join('')}
      </div>
    </section>
    <section class="scripture-section">
      <div class="quote-icon"><i class="ri-double-quotes-l"></i></div>
      <blockquote>${t('allScriptureQuote')}</blockquote>
      <cite>${t('timothy316')}</cite>
    </section>`;
}
