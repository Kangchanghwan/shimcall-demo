// 지도 어댑터.
// 앱 코드는 이 파일의 함수만 호출한다. 지도 엔진(Leaflet/OSM ↔ 카카오맵 ↔ 네이버지도)을
// 바꿔야 할 때는 이 파일 하나만 교체하면 된다. (카카오 JavaScript 키 발급 후 kakao 버전으로 교체 예정)
(function () {
  function createMap(el, opts) {
    const map = L.map(el, { zoomControl: false, attributionControl: true, tap: false })
      .setView([opts.lat, opts.lng], opts.zoom || 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, attribution: '&copy; OpenStreetMap',
    }).addTo(map);

    const cluster = L.markerClusterGroup({
      maxClusterRadius: 48, showCoverageOnHover: false, spiderfyOnMaxZoom: true,
      iconCreateFunction: (c) => L.divIcon({ html: `<div class="cluster">${c.getChildCount()}</div>`, className: '', iconSize: [40, 40] }),
    });
    map.addLayer(cluster);
    const markers = new Map();
    let activeId = null;
    let userMarker = null;

    // 핀 모양: 물방울 핀 + 아래 상호 라벨. 선택되면 주황색으로 커진다.
    const PIN = (fill, w, h) => `<svg viewBox="0 0 28 36" width="${w}" height="${h}" aria-hidden="true">
      <path d="M14 1C7 1 1.5 6.5 1.5 13.5 1.5 22.5 14 35 14 35s12.5-12.5 12.5-21.5C26.5 6.5 21 1 14 1z" fill="${fill}" stroke="#fff" stroke-width="2"/>
      <circle cx="14" cy="13.5" r="4.5" fill="#fff"/></svg>`;
    const icon = (shop, active) => L.divIcon({
      className: '',
      html: `<div class="pin ${active ? 'active' : ''}">${PIN(active ? '#f4a261' : '#1f6f5f', active ? 34 : 28, active ? 44 : 36)}<span class="pin-label">${shop.name}</span></div>`,
      iconSize: [0, 0], iconAnchor: [0, 0],
    });
    const pickIcon = L.divIcon({ className: '', html: `<div class="pin pick">${PIN('#f4a261', 34, 44)}</div>`, iconSize: [0, 0], iconAnchor: [0, 0] });

    return {
      raw: map,
      setMarkers(shops, onClick) {
        cluster.clearLayers(); markers.clear();
        shops.forEach(s => {
          const m = L.marker([s.lat, s.lng], { icon: icon(s, s.id === activeId) });
          m.on('click', () => onClick(s));
          markers.set(s.id, { m, s });
          cluster.addLayer(m);
        });
      },
      highlight(id) {
        if (activeId && markers.has(activeId)) { const { m, s } = markers.get(activeId); m.setIcon(icon(s, false)); }
        activeId = id;
        if (id && markers.has(id)) { const { m, s } = markers.get(id); m.setIcon(icon(s, true)); m.setZIndexOffset(1000); }
      },
      fitTo(shops, pad) {
        if (!shops.length) return;
        const b = L.latLngBounds(shops.map(s => [s.lat, s.lng]));
        map.fitBounds(b, { paddingTopLeft: [30, 90], paddingBottomRight: [30, pad || 220], maxZoom: 15 });
      },
      panTo(lat, lng, zoom) { map.setView([lat, lng], zoom || Math.max(map.getZoom(), 13), { animate: true }); },
      inView(shop) { return map.getBounds().contains([shop.lat, shop.lng]); },
      center() { const c = map.getCenter(); return { lat: c.lat, lng: c.lng }; },
      onMove(cb) { map.on('movestart', cb); },
      onMoveEnd(cb) { map.on('moveend', cb); },
      setUser(lat, lng) {
        if (userMarker) userMarker.remove();
        userMarker = L.marker([lat, lng], { icon: L.divIcon({ className: '', html: '<div class="me"></div>', iconSize: [18, 18], iconAnchor: [9, 9] }), interactive: false }).addTo(map);
      },
      invalidate() { setTimeout(() => map.invalidateSize(), 50); },
      // 관리자: 클릭으로 핀 찍기
      pickable(onPick, initial) {
        let pm = initial ? L.marker([initial.lat, initial.lng], { draggable: true, icon: pickIcon }).addTo(map) : null;
        const put = (lat, lng) => {
          if (!pm) pm = L.marker([lat, lng], { draggable: true, icon: pickIcon }).addTo(map).on('dragend', (e) => { const p = e.target.getLatLng(); onPick(p.lat, p.lng); });
          else pm.setLatLng([lat, lng]);
          onPick(lat, lng);
        };
        if (pm) pm.on('dragend', (e) => { const p = e.target.getLatLng(); onPick(p.lat, p.lng); });
        map.on('click', (e) => put(e.latlng.lat, e.latlng.lng));
        return { set: put };
      },
    };
  }
  window.MapAdapter = { createMap };
})();
