// i18n manager — language switching for Bible People
import { en } from './en.js';
import { zhTW } from './zh-TW.js';

const LANGS = { en, 'zh-TW': zhTW };
const STORAGE_KEY = 'bible-people-lang';

let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

export function t(key) {
  const lang = LANGS[currentLang] || en;
  return lang[key] ?? en[key] ?? key;
}

export function tName(personId) {
  const lang = LANGS[currentLang] || en;
  return lang.personNames?.[personId] || null;
}

export function tSubtitle(personId) {
  const lang = LANGS[currentLang] || en;
  return lang.personSubtitles?.[personId] || null;
}

export function tLocation(name) {
  const lang = LANGS[currentLang] || en;
  return lang.locationNames?.[name] || name;
}

export function tCategory(cat) {
  return t(cat) || cat;
}

export function tPersonContent(personId) {
  const lang = LANGS[currentLang] || en;
  return lang.personContent?.[personId] || null;
}

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (!LANGS[lang]) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  // Trigger re-render by dispatching hashchange
  window.dispatchEvent(new HashChangeEvent('hashchange'));
  // Update lang switcher UI
  updateLangSwitcher();
}

export function updateLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// Update static header/footer text
export function updateStaticText() {
  // Nav links
  const navLinks = document.querySelectorAll('nav a[data-route]');
  navLinks.forEach(a => {
    const route = a.dataset.route;
    if (route === '/') a.textContent = t('home');
    else if (route === '/gallery') a.textContent = t('peopleGallery');
    else if (route === '/map') a.textContent = t('bibleMap');
    else if (route === '/about') a.textContent = t('about');
  });
  const outlineBtn = document.querySelector('.btn-outline-nav');
  if (outlineBtn) outlineBtn.textContent = t('exploreGallery');

  // Footer
  const footerLinks = document.querySelector('.footer-links');
  if (footerLinks) {
    const h4 = footerLinks.querySelector('h4');
    if (h4) h4.textContent = t('explore');
  }
  const footerQuoteH4 = document.querySelector('.footer-quote h4');
  if (footerQuoteH4) footerQuoteH4.textContent = t('wordOfTheDay');
  const footerBQ = document.querySelector('.footer-quote blockquote');
  if (footerBQ) footerBQ.textContent = t('footerQuote');
  const footerCite = document.querySelector('.footer-quote cite');
  if (footerCite) footerCite.innerHTML = t('footerCite');
  const copyright = document.querySelector('.footer-bottom span:first-child');
  if (copyright) copyright.textContent = t('copyright');
  const verse = document.querySelector('.footer-bottom .verse');
  if (verse) verse.textContent = t('footerVerse');

  // Footer brand text
  const brandP = document.querySelector('.footer-brand > p');
  if (brandP) brandP.textContent = t('footerBrandDesc');

  // Footer link items
  const footerLinkItems = document.querySelectorAll('.footer-links li a');
  const linkKeys = ['home', 'peopleGallery', 'oldTestament', 'newTestament', 'bibleMap', 'about'];
  footerLinkItems.forEach((a, i) => {
    if (linkKeys[i]) a.textContent = t(linkKeys[i]);
  });

  // Page title
  document.title = t('pageTitle');
}
