import { LOCATIONS } from '../data.js';
import { t, tLocation, tName, tLocationContent } from '../i18n/i18n.js';
import { getPersonById } from '../app.js';

const TYPE_COLORS = {
  City: '#6b1f3d', Mountain: '#8B4513', River: '#4169E1',
  'Sea/Lake': '#4169E1', Temple: '#DAA520', Garden: '#228B22',
  Fortress: '#555', Region: '#9370DB',
};

const TYPE_ICONS = {
  'All Types': 'ri-apps-line', City: 'ri-building-line', Mountain: 'ri-cloud-line',
  River: 'ri-drop-line', 'Sea/Lake': 'ri-ship-line', Temple: 'ri-ancient-gate-line',
  Garden: 'ri-plant-line', Fortress: 'ri-shield-line', Region: 'ri-map-2-line',
};

const PERIOD_ICONS = {
  All: 'ri-layout-grid-line', OT: 'ri-ancient-pavilion-line', NT: 'ri-cross-line', Both: 'ri-links-line',
};

const TYPES = ['All Types', ...new Set(LOCATIONS.map(l => l.type))];

function badgeClass(period) {
  if (period === 'OT') return 'ot';
  if (period === 'NT') return 'nt';
  return 'both';
}

function tType(type) {
  return t(type) || type;
}

export function renderMap(container) {
  const totalEvents = LOCATIONS.reduce((s, l) => s + l.events, 0);
  container.innerHTML = `<div class="map-page"><div class="map-container">
    <div class="map-sidebar">
      <h2><i class="ri-map-pin-line"></i> ${t('biblicalMap')}</h2>
      <div class="subtitle">${LOCATIONS.length} ${t('locations')}</div>
      <div class="filter-label">${t('period').toUpperCase()}</div>
      <div class="period-filters">
        <span class="period-btn active" data-period="All"><i class="${PERIOD_ICONS.All}"></i> ${t('allPeriods')}</span>
        <span class="period-btn" data-period="OT"><i class="${PERIOD_ICONS.OT}"></i> ${t('oldTestament')}</span>
        <span class="period-btn" data-period="NT"><i class="${PERIOD_ICONS.NT}"></i> ${t('newTestament')}</span>
        <span class="period-btn" data-period="Both"><i class="${PERIOD_ICONS.Both}"></i> ${t('bothPeriods')}</span>
      </div>
      <div class="filter-label">${(t('placeType') || 'PLACE TYPE').toUpperCase()}</div>
      <div class="type-filters">
        ${TYPES.map((tp, i) => `<span class="type-chip${i === 0 ? ' active' : ''}" data-type="${tp}"><i class="${TYPE_ICONS[tp] || 'ri-map-pin-line'}"></i> ${tp === 'All Types' ? t('allTypes') : tType(tp)}</span>`).join('')}
      </div>
      <div class="locations-label">${t('locations').toUpperCase()}</div>
      <div id="locations-list">
        ${LOCATIONS.map((l, i) => `<div class="location-item" data-idx="${i}">
          <div class="loc-name"><i class="${TYPE_ICONS[l.type] || 'ri-map-pin-line'}" style="color:${TYPE_COLORS[l.type]};margin-right:6px"></i>${tLocation(l.name)}</div>
          <div class="loc-meta"><span class="loc-badge ${badgeClass(l.period)}">${t(l.period) || l.period}</span> · ${l.events} ${t('events')}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="map-area">
      <div class="map-info">
        <h3><i class="ri-map-pin-2-fill" style="color:var(--gold)"></i> ${t('biblicalIsrael')}</h3>
        <p>${t('mapInfoDesc')}</p>
        <p style="margin-top:4px;font-weight:600">${LOCATIONS.length} ${t('locations')} · ${totalEvents} ${t('events')}</p>
      </div>
      <div class="map-legend">
        ${Object.entries(TYPE_COLORS).map(([type, color]) => `<div class="legend-item"><span class="legend-dot" style="background:${color}"></span>${tType(type)}</div>`).join('')}
      </div>
      <div id="leaflet-map"></div>
    </div>
  </div></div>`;

  setTimeout(initMap, 50);
}

function renderLocationDetail(loc) {
  const existing = document.querySelector('.map-detail');
  if (existing) existing.remove();

  const locName = tLocation(loc.name);
  const hebrewName = loc.hebrewName || '';
  const modernName = loc.modernName || '';
  const tc = tLocationContent(loc.name);
  const description = tc?.description || loc.description || '';
  const rawEvents = loc.eventDetails || [];
  const eventDetails = rawEvents.map((ev, i) => {
    const tEv = tc?.eventDetails?.[i];
    return tEv ? { ...ev, title: tEv.title, description: tEv.description, scripture: tEv.scripture } : ev;
  });
  const keyEvents = eventDetails.filter(e => e.isKey);

  const panel = document.createElement('div');
  panel.className = 'map-detail';
  panel.innerHTML = `
    <button class="map-detail-close" aria-label="Close">&times;</button>
    <div class="map-detail-header">
      <h2>${locName}</h2>
      ${hebrewName ? `<div class="map-detail-hebrew">${hebrewName}</div>` : ''}
      ${modernName ? `<div class="map-detail-modern"><i class="ri-map-pin-line"></i> ${modernName}</div>` : ''}
      <div class="map-detail-badges">
        <span class="loc-badge ${badgeClass(loc.period)}">${t(loc.period) || loc.period}</span>
        <span class="map-detail-type-badge"><i class="${TYPE_ICONS[loc.type] || 'ri-map-pin-line'}"></i> ${tType(loc.type)}</span>
      </div>
    </div>
    ${description ? `<div class="map-detail-desc">${description}</div>` : ''}
    <div class="map-detail-stats">
      <div class="map-detail-stat">
        <div class="map-detail-stat-num">${loc.events}</div>
        <div class="map-detail-stat-label">${t('events')}</div>
      </div>
      <div class="map-detail-stat">
        <div class="map-detail-stat-num">${keyEvents.length}</div>
        <div class="map-detail-stat-label">${t('keyEvents') || 'Key Events'}</div>
      </div>
    </div>
    ${eventDetails.length > 0 ? `
      <div class="map-detail-events">
        <h3><i class="ri-calendar-event-line"></i> ${t('events')}</h3>
        ${eventDetails.map(ev => {
          const person = ev.person ? getPersonById(ev.person) : null;
          const personName = person
            ? (tName(ev.person) || person.name)
            : '';
          return `<div class="map-detail-event${ev.isKey ? ' key' : ''}">
            <div class="map-detail-event-head">
              <span class="map-detail-event-title">${ev.title}</span>
              ${ev.isKey ? `<span class="key-badge">${t('keyEvent') || 'Key Event'}</span>` : ''}
            </div>
            <div class="map-detail-event-meta">
              ${ev.date ? `<span class="map-detail-event-date"><i class="ri-time-line"></i> ${ev.date}</span>` : ''}
              ${personName ? `<a href="#/person/${ev.person}" class="map-detail-event-person"><i class="ri-user-line"></i> ${personName}</a>` : ''}
            </div>
            ${ev.description ? `<p class="map-detail-event-desc">${ev.description}</p>` : ''}
            ${ev.scripture ? `<div class="map-detail-event-scripture"><i class="ri-book-open-line"></i> ${ev.scripture}</div>` : ''}
          </div>`;
        }).join('')}
      </div>
    ` : ''}
  `;

  const mapArea = document.querySelector('.map-area');
  mapArea.appendChild(panel);

  // Trigger slide-in animation
  requestAnimationFrame(() => panel.classList.add('open'));

  // Highlight sidebar item
  document.querySelectorAll('.location-item').forEach(el => {
    const idx = parseInt(el.dataset.idx, 10);
    el.classList.toggle('selected', LOCATIONS[idx] === loc);
  });

  // Close handler
  panel.querySelector('.map-detail-close').addEventListener('click', () => {
    closeDetailPanel();
  });
}

function closeDetailPanel() {
  const panel = document.querySelector('.map-detail');
  if (!panel) return;
  panel.classList.remove('open');
  panel.addEventListener('transitionend', () => panel.remove(), { once: true });
  document.querySelectorAll('.location-item.selected').forEach(el => {
    el.classList.remove('selected');
  });
}

function initMap() {
  const map = L.map('leaflet-map').setView([31.5, 35.0], 8);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> &copy; <a href="https://carto.com">CARTO</a>',
    maxZoom: 19,
  }).addTo(map);

  const markers = LOCATIONS.map(loc => {
    const color = TYPE_COLORS[loc.type] || '#6b1f3d';
    const marker = L.circleMarker([loc.lat, loc.lng], {
      radius: 8, fillColor: color, color: '#fff', weight: 2, fillOpacity: 0.9,
    }).bindPopup(`<strong>${tLocation(loc.name)}</strong><br>${loc.type} · ${loc.period} · ${loc.events} ${t('events')}`);
    marker.addTo(map);
    marker._locData = loc;
    marker.on('click', () => renderLocationDetail(loc));
    return marker;
  });

  let activePeriod = 'All';
  let activeType = 'All Types';

  function filterMarkers() {
    markers.forEach(m => {
      const loc = m._locData;
      const matchP = activePeriod === 'All' || loc.period === activePeriod || (activePeriod === 'Both' && loc.period === 'Both');
      const matchT = activeType === 'All Types' || loc.type === activeType;
      if (matchP && matchT) { m.addTo(map); } else { m.removeFrom(map); }
    });
    document.querySelectorAll('.location-item').forEach((el, i) => {
      const loc = LOCATIONS[i];
      const matchP = activePeriod === 'All' || loc.period === activePeriod || (activePeriod === 'Both' && loc.period === 'Both');
      const matchT = activeType === 'All Types' || loc.type === activeType;
      el.style.display = (matchP && matchT) ? '' : 'none';
    });
  }

  document.querySelectorAll('.period-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePeriod = btn.dataset.period;
      filterMarkers();
    });
  });

  document.querySelectorAll('.type-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.type-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeType = chip.dataset.type;
      filterMarkers();
    });
  });

  document.querySelectorAll('.location-item').forEach((el, i) => {
    el.addEventListener('click', () => {
      const loc = LOCATIONS[i];
      map.flyTo([loc.lat, loc.lng], 12);
      markers[i].openPopup();
      renderLocationDetail(loc);
    });
  });
}
