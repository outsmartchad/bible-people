import { LOCATIONS } from '../data.js';
import { t, tLocation } from '../i18n/i18n.js';

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
    });
  });
}
