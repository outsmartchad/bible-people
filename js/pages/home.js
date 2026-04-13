import { PEOPLE } from '../data.js';
import { getPersonImage } from '../app.js';

const HERO_BG = 'https://readdy.ai/api/search-image?query=ancient%20parchment%20scroll%20illuminated%20manuscript%20golden%20decorative%20borders%20sacred%20text%20ancient%20biblical%20artwork%20warm%20amber%20golden%20light%20divine%20rays%20through%20old%20stone%20cathedral%20window%20rich%20deep%20warm%20tones%20aged%20texture%20beautiful%20classical%20religious%20atmosphere&width=1440&height=900&seq=hero01&orientation=landscape';
const CTA_BG = 'https://readdy.ai/api/search-image?query=ancient%20stone%20cathedral%20interior%20warm%20golden%20light%20streaming%20through%20stained%20glass%20windows%20stone%20columns%20arched%20ceiling%20divine%20atmosphere%20peaceful%20and%20majestic%20biblical%20setting%20warm%20amber%20tones&width=1440&height=600&seq=cta01&orientation=landscape';

function personCard(p) {
  const tClass = p.testament === 'old' ? 'old' : 'new';
  const tLabel = p.testament === 'old' ? 'Old Testament' : 'New Testament';
  return `<a href="#/person/${p.id}" class="person-card">
    <img src="${getPersonImage(p)}" alt="${p.name}" loading="lazy">
    <div class="overlay">
      <div class="name">${p.name}</div>
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
        <div class="hero-badge"><i class="ri-book-open-line"></i> Sacred Stories from Scripture</div>
        <h1>Discover the Lives of <em>Biblical Figures</em></h1>
        <p>Journey through the stories of faith, courage, and redemption that have shaped the course of human history — from the patriarchs of Genesis to the apostles of the early Church.</p>
        <div class="hero-divider"></div>
        <div class="hero-buttons">
          <a href="#/gallery" class="btn-gold">Explore the Gallery</a>
          <a href="#/about" class="btn-ghost">Learn More</a>
        </div>
      </div>
      <div class="scroll-indicator">Scroll</div>
    </section>
    <section class="featured">
      <div class="section-label">Hall of Faith</div>
      <h2>Featured Biblical Figures</h2>
      <div class="section-divider"></div>
      <div class="people-grid">${featured.map(personCard).join('')}</div>
      <a href="#/gallery" class="btn-view-all">View All People <i class="ri-arrow-right-line"></i></a>
    </section>
    <section class="stats">
      <div class="stat-item"><i class="ri-group-line"></i><div class="number">49+</div><div class="label">Biblical Figures</div></div>
      <div class="stat-item"><i class="ri-book-2-line"></i><div class="number">9</div><div class="label">Categories</div></div>
      <div class="stat-item"><i class="ri-history-line"></i><div class="number">4,000+</div><div class="label">Years of History</div></div>
      <div class="stat-item"><i class="ri-quill-pen-line"></i><div class="number">66</div><div class="label">Books of the Bible</div></div>
    </section>
    <section class="cta">
      <img class="cta-bg" src="${CTA_BG}" alt="Cathedral background">
      <div class="cta-overlay"></div>
      <div class="cta-content">
        <div class="cta-icon"><i class="ri-lightbulb-flash-line"></i></div>
        <h2>Every Story Holds a Lesson for Today</h2>
        <p>From the faith of Abraham to the courage of Esther, from the repentance of David to the devotion of Mary — the lives in Scripture are mirrors for our own.</p>
        <a href="#/gallery" class="btn-gold">Begin Your Journey</a>
      </div>
    </section>`;
}
