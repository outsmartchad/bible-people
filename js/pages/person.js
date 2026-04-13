import { PEOPLE } from '../data.js';
import { getPersonImage, getPersonById } from '../app.js';

export function renderPerson(container, id) {
  const person = getPersonById(id);
  if (!person) {
    container.innerHTML = '<div style="padding:120px 48px;text-align:center"><h2>Person not found</h2><p><a href="#/gallery">Back to Gallery</a></p></div>';
    return;
  }

  const idx = PEOPLE.indexOf(person);
  const prev = idx > 0 ? PEOPLE[idx - 1] : null;
  const next = idx < PEOPLE.length - 1 ? PEOPLE[idx + 1] : null;
  const imgUrl = getPersonImage(person);
  const tClass = person.testament === 'old' ? 'testament-old' : 'testament-new';
  const tLabel = person.testament === 'old' ? 'Old Testament' : 'New Testament';

  const bioHtml = person.bio.split('\n\n').map(p => `<p>${p}</p>`).join('');
  const journeyIcons = ['ri-star-line', 'ri-fire-line', 'ri-compass-line', 'ri-sun-line'];
  const journeyHtml = (person.journeyCards || []).map((c, i) =>
    `<div class="journey-card"><i class="${c.icon || journeyIcons[i % 4]}"></i><h4>${c.title}</h4><p>${c.description || c.text || ''}</p></div>`
  ).join('');
  const lessonsHtml = (person.lessons || []).map((l, i) => {
    const isString = typeof l === 'string';
    const title = isString ? `Lesson ${i + 1}` : l.title;
    const text = isString ? l : l.text;
    return `<div class="lesson-item"><div class="lesson-num">${i + 1}</div><div class="lesson-content"><h4>${title}</h4><p>${text}</p></div></div>`;
  }).join('');
  const scripturesHtml = (person.keyScriptures || []).map(s =>
    `<div class="scripture-block"><blockquote>${s.text}</blockquote><cite>${s.reference || s.ref || ''}</cite></div>`
  ).join('');
  const timelineHtml = (person.timeline || []).map(t =>
    `<div class="timeline-item"><div class="timeline-date">${t.date}</div><div class="timeline-event">${t.event}</div></div>`
  ).join('');

  const relatedHtml = (person.relatedPeople || []).map(rid => {
    const rp = getPersonById(rid);
    if (!rp) return '';
    return `<a href="#/person/${rp.id}" class="related-person"><img src="${getPersonImage(rp)}" alt="${rp.name}"><p>${rp.name}</p></a>`;
  }).join('');

  container.innerHTML = `
    <div class="breadcrumb"><a href="#/">Home</a> &rsaquo; <a href="#/gallery">Gallery</a> &rsaquo; ${person.name}</div>
    <div class="person-hero">
      <img class="person-hero-bg" src="${imgUrl}" alt="${person.name}">
      <div class="person-hero-content">
        <img class="person-portrait" src="${imgUrl}" alt="${person.name}">
        <div class="person-info">
          <div class="name">${person.name}</div>
          <div class="sub">${person.subtitle}</div>
          <div class="badges">
            <span class="badge ${tClass}">${tLabel}</span>
            <span class="badge era">${person.era}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="person-layout">
      <div class="main-content">
        <h2><i class="ri-book-open-line"></i> The Story</h2>
        <div class="bio-text">${bioHtml}</div>
        ${journeyHtml ? `<h2><i class="ri-compass-line"></i> Spiritual Journey</h2><div class="journey-grid">${journeyHtml}</div>` : ''}
        ${lessonsHtml ? `<h2><i class="ri-heart-line"></i> Learning to Walk with God</h2><div class="lessons-list">${lessonsHtml}</div>` : ''}
        ${scripturesHtml ? `<div class="scriptures-section"><h3><i class="ri-bookmark-line"></i> Key Scriptures</h3>${scripturesHtml}</div>` : ''}
      </div>
      <div class="timeline-sidebar">
        <h3>Timeline</h3>
        ${timelineHtml}
      </div>
    </div>
    ${relatedHtml ? `<div class="related-section"><h3>Related People</h3><div class="related-grid">${relatedHtml}</div></div>` : ''}
    <div class="person-nav">
      ${prev ? `<a href="#/person/${prev.id}"><i class="ri-arrow-left-line"></i> ${prev.name}</a>` : '<span></span>'}
      ${next ? `<a href="#/person/${next.id}">${next.name} <i class="ri-arrow-right-line"></i></a>` : '<span></span>'}
    </div>`;
}
