import { LOCATIONS } from '../data.js';
import { t, tLocation } from '../i18n/i18n.js';

const TYPE_COLORS = {
  City: '#6b1f3d', Mountain: '#8B4513', River: '#4169E1',
  'Sea/Lake': '#4169E1', Temple: '#DAA520', Garden: '#228B22',
  Fortress: '#555', Region: '#9370DB',
};

const TYPES = ['All Types', ...new Set(LOCATIONS.map(l => l.type))];

function badgeClass(period) {
  if (period === 'OT') return 'ot';
  if (period === 'NT') return 'nt';
  return 'both';
}

export function renderMap(container) {
  container.innerHTML = `<div class="map-page"><div class="map-container">
    <div class="map-sidebar">
      <h2>${t('biblicalMap')}</h2>
      <div class="subtitle">${t('exploreLocations')}</div>
      <div class="filter-label">PERIOD</div>
      <div class="period-filters">
        <span class="period-btn active" data-period="All">All</span>
        <span class="period-btn" data-period="OT">OT</span>
        <span class="period-btn" data-period="NT">NT</span>
        <span class="period-btn" data-period="Both">Both</span>
      </div>
      <div class="filter-label">PLACE TYPE</div>
      <div class="type-filters">
        ${TYPES.map((t, i) => `<span class="type-chip${i === 0 ? ' active' : ''}" data-type="${t}">${t}</span>`).join('')}
      </div>
      <div class="locations-label">LOCATIONS</div>
      <div id="locations-list">
        ${LOCATIONS.map((l, i) => `<div class="location-item" data-idx="${i}">
          <div class="loc-name">${tLocation(l.name)}</div>
          <div class="loc-meta">${l.type} · <span class="loc-badge ${badgeClass(l.period)}">${l.period}</span> · ${l.events} events</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="map-area">
      <div class="map-info"><h3>${t('biblicalIsrael')}</h3><p>${LOCATIONS.length} ${t('locations')} · ${LOCATIONS.reduce((s, l) => s + l.events, 0)} ${t('events')}</p></div>
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
    }).bindPopup(`<strong>${loc.name}</strong><br>${loc.type} · ${loc.period} · ${loc.events} events`);
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
    // Update sidebar list
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
