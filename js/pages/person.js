import { PEOPLE } from '../data.js';
import { getPersonImage, getPersonById } from '../app.js';
import * as i18n from '../i18n/i18n.js';
import { DISCUSSION_QUESTIONS } from '../discussion-questions.js';
import { DISCUSSION_QUESTIONS_ZH } from '../discussion-questions-zh.js';
import { sharePersonCard } from '../share-card.js';
const { t, tName, tSubtitle, getLang } = i18n;
const tPersonContent = i18n.tPersonContent || (() => null);

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
  const tLabel = person.testament === 'old' ? t('oldTestament') : t('newTestament');
  const displayName = tName(person.id) || person.name;
  const displaySubtitle = tSubtitle(person.id) || person.subtitle;

  // Use translated content if available, otherwise fall back to English data
  const tc = tPersonContent(person.id);
  const bio = tc?.bio || person.bio;
  const journeyData = tc?.journeyCards || person.journeyCards || [];
  const lessonsData = tc?.lessons || person.lessons || [];
  const scripturesData = tc?.keyScriptures || person.keyScriptures || [];
  const timelineData = tc?.timeline || person.timeline || [];

  const bioHtml = bio.split('\n\n').map(p => `<p>${p}</p>`).join('');
  const journeyIcons = ['ri-star-line', 'ri-fire-line', 'ri-compass-line', 'ri-sun-line'];
  const journeyHtml = journeyData.map((c, i) =>
    `<div class="journey-card"><i class="${c.icon || journeyIcons[i % 4]}"></i><h4>${c.title}</h4><p>${c.description || c.text || ''}</p></div>`
  ).join('');
  const lessonsHtml = lessonsData.map((l, i) => {
    const isString = typeof l === 'string';
    const title = isString ? `${t('lesson')} ${i + 1}` : l.title;
    const text = isString ? l : l.text;
    return `<div class="lesson-item"><div class="lesson-num">${i + 1}</div><div class="lesson-content"><h4>${title}</h4><p>${text}</p></div></div>`;
  }).join('');
  const scripturesHtml = scripturesData.map(s =>
    `<div class="scripture-block"><blockquote>${s.text}</blockquote><cite>${s.reference || s.ref || ''}</cite></div>`
  ).join('');
  const timelineHtml = timelineData.map(t =>
    `<div class="timeline-item"><div class="timeline-date">${t.date}</div><div class="timeline-event">${t.event}</div></div>`
  ).join('');

  // Discussion questions
  const isZh = getLang() === 'zh-TW';
  const questionsSource = isZh ? DISCUSSION_QUESTIONS_ZH : DISCUSSION_QUESTIONS;
  const questions = questionsSource?.[person.id] || DISCUSSION_QUESTIONS?.[person.id] || [];
  const questionsHtml = questions.length ? `
    <div class="discussion-questions" id="discussion-questions" data-person-name="${displayName}"
      <div class="dq-header">
        <h3><i class="ri-discuss-line"></i> ${t('discussionQuestions')}</h3>
        <button class="dq-print-btn" onclick="window.print()"><i class="ri-printer-line"></i> ${t('printQuestions')}</button>
      </div>
      <p class="dq-desc">${t('discussionQuestionsDesc')}</p>
      <ol class="dq-list">
        ${questions.map(q => `<li>${q}</li>`).join('')}
      </ol>
    </div>` : '';

  const relatedHtml = (person.relatedPeople || []).map(rid => {
    const rp = getPersonById(rid);
    if (!rp) return '';
    return `<a href="#/person/${rp.id}" class="related-person"><img src="${getPersonImage(rp)}" alt="${tName(rp.id) || rp.name}"><p>${tName(rp.id) || rp.name}</p></a>`;
  }).join('');

  container.innerHTML = `
    <div class="breadcrumb"><a href="#/">${t('home')}</a> &rsaquo; <a href="#/gallery">${t('peopleGallery')}</a> &rsaquo; ${displayName}</div>
    <div class="person-hero">
      <img class="person-hero-bg" src="${imgUrl}" alt="${person.name}">
      <div class="person-hero-content">
        <img class="person-portrait" src="${imgUrl}" alt="${person.name}">
        <div class="person-info">
          <div class="name">${displayName}</div>
          <div class="sub">${displaySubtitle}</div>
          <div class="badges">
            <span class="badge ${tClass}">${tLabel}</span>
            <span class="badge era">${person.era}</span>
            <button class="share-btn" id="share-person-btn"><i class="ri-share-line"></i> ${t('shareCard')}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="person-layout">
      <div class="main-content">
        <h2><i class="ri-book-open-line"></i> ${t('theStory')}</h2>
        <div class="bio-text">${bioHtml}</div>
        ${journeyHtml ? `<h2><i class="ri-compass-line"></i> ${t('spiritualJourney')}</h2><div class="journey-grid">${journeyHtml}</div>` : ''}
        ${lessonsHtml ? `<h2><i class="ri-heart-line"></i> ${t('learningToWalk')}</h2><div class="lessons-list">${lessonsHtml}</div>` : ''}
        ${scripturesHtml ? `<div class="scriptures-section"><h3><i class="ri-bookmark-line"></i> ${t('keyScriptures')}</h3>${scripturesHtml}</div>` : ''}
        <div class="how-saw-god">
          <h3><i class="ri-eye-line"></i> ${t('howSawGod').replace('{name}', displayName)}</h3>
          <div class="saw-god-content">
            ${lessonsData.map((l, i) => {
              const text = typeof l === 'string' ? l : l.text;
              const icons = ['ri-number-1', 'ri-number-2', 'ri-number-3'];
              return `<div class="saw-god-item"><i class="${icons[i] || 'ri-checkbox-circle-line'}"></i><p>${text}</p></div>`;
            }).join('')}
          </div>
        </div>
        ${questionsHtml}
      </div>
      <div class="timeline-sidebar">
        <h3>${t('timeline')}</h3>
        ${timelineHtml}
        <div class="scripture-links">
          <h4>${t('scriptureLinks') || 'Scripture Links'}</h4>
          ${scripturesData.map(s => `<a href="#" class="scripture-link"><i class="ri-links-line"></i> ${s.reference || s.ref}</a>`).join('')}
        </div>
      </div>
    </div>
    ${relatedHtml ? `<div class="related-section"><h3>${t('relatedPeople')}</h3><div class="related-grid">${relatedHtml}</div></div>` : ''}
    <div class="person-nav">
      ${prev ? `<a href="#/person/${prev.id}"><i class="ri-arrow-left-line"></i> ${tName(prev.id) || prev.name}</a>` : '<span></span>'}
      ${next ? `<a href="#/person/${next.id}">${tName(next.id) || next.name} <i class="ri-arrow-right-line"></i></a>` : '<span></span>'}
    </div>`;

  // Wire share button
  const shareBtn = container.querySelector('#share-person-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const scripture = scripturesData[0] || null;
      sharePersonCard(person, displayName, scripture, imgUrl);
    });
  }
}
