import { PEOPLE } from '../data.js';
import { getPersonImage } from '../app.js';

const LIBRARY_IMG = 'https://readdy.ai/api/search-image?query=ornate%20ancient%20library%20interior%20warm%20golden%20light%20illuminated%20manuscripts%20sacred%20books%20beautiful%20classical%20architecture%20cathedral%20ceiling%20stained%20glass%20warm%20amber%20atmosphere&width=600&height=500&seq=about01&orientation=landscape';

const QUICK_LINKS = ['moses', 'david', 'mary', 'paul'];

export function renderAbout(container) {
  const cards = QUICK_LINKS.map(id => PEOPLE.find(p => p.id === id)).filter(Boolean);
  container.innerHTML = `
    <section class="about-hero">
      <div class="section-label">Our Mission</div>
      <h1>About Bible People</h1>
      <p>A curated guide to the men and women of Scripture — their stories told with care, their lives explored in depth, their faith honored with integrity.</p>
    </section>
    <div class="about-content">
      <div class="about-two-col">
        <div class="text-side">
          <div class="section-label">Why We Built This</div>
          <h2>Stories That Have Shaped the World</h2>
          <p>The Bible is not merely a religious text — it is a record of real people who faced impossible circumstances, wrestled with profound doubt, committed terrible failures, and experienced astonishing grace. Their stories have shaped art, law, philosophy, music, and the moral foundations of entire civilizations.</p>
          <p>We built Bible People because we believe these stories deserve to be told clearly, beautifully, and accessibly. Whether you are a lifelong believer, a curious student, or someone who has never opened a Bible, we invite you to discover the remarkable lives within its pages.</p>
          <p>Each portrait is drawn directly from Scripture, placed in its historical context, and presented with deep respect for the traditions that have honored these lives across millennia.</p>
          <a href="#/gallery" class="btn-gold" style="margin-top:16px">Explore the Gallery <i class="ri-arrow-right-line"></i></a>
        </div>
        <img src="${LIBRARY_IMG}" alt="Ancient library">
      </div>
    </div>
    <section class="values-section">
      <div class="section-label">Our Approach</div>
      <h2>What We Stand For</h2>
      <div class="values-grid">
        <div class="value-card"><i class="ri-heart-line"></i><h3>Faith & Devotion</h3><p>We present the stories of biblical figures with reverence, honoring the faith and devotion that defined their lives.</p></div>
        <div class="value-card"><i class="ri-eye-line"></i><h3>Historical Context</h3><p>Each story is grounded in its historical setting, helping you understand the world these extraordinary people navigated.</p></div>
        <div class="value-card"><i class="ri-book-open-line"></i><h3>Scripture-First</h3><p>Every detail is drawn directly from the biblical text, with scripture references for every key story element.</p></div>
        <div class="value-card"><i class="ri-lightbulb-line"></i><h3>Timeless Lessons</h3><p>The lives in Scripture are mirrors for our own — we highlight the universal lessons woven into each journey.</p></div>
      </div>
    </section>
    <section class="explore-section">
      <h2>Start Exploring</h2>
      <div class="explore-grid">
        ${cards.map(p => `<div class="explore-card">
          <i class="ri-user-line"></i>
          <h4>${p.name}</h4>
          <div class="sub">${p.subtitle}</div>
          <a href="#/person/${p.id}">Read story &rarr;</a>
        </div>`).join('')}
      </div>
    </section>
    <section class="scripture-section">
      <div class="quote-icon"><i class="ri-double-quotes-l"></i></div>
      <blockquote>All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.</blockquote>
      <cite>— 2 Timothy 3:16</cite>
    </section>`;
}
