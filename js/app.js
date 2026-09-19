// 사용자 모바일 웹 (데모). 화면 흐름: 홈(지도+리스트) → 상세 → 전화.
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const el = {
    map: $('#map'), sheet: $('#sheet'), handle: $('#sheetHandle'), list: $('#list'), count: $('#listCount'), hint: $('#listHint'),
    detail: $('#detail'), regionModal: $('#regionModal'), cityTabs: $('#cityTabs'), dongGrid: $('#dongGrid'), regionLabel: $('#regionLabel'),
    searchModal: $('#searchModal'), searchInput: $('#searchInput'), searchResults: $('#searchResults'),
    btnResearch: $('#btnResearch'), btnLocate: $('#btnLocate'), toast: $('#toast'), installBar: $('#installBar'),
  };
  const state = { dongs: new Set(), openOnly: false, nearSort: false, userLoc: null, activeId: null, listOnly: false, draftDongs: new Set(), city: '고양시' };
  let programmatic = false;
  // 시뮬레이터(폰 프레임) 안에서 열릴 때 노치만큼 상단 여백
  if (location.search.includes('sim=1')) document.documentElement.style.setProperty('--safe-top', '38px');

  // ---------- 지도 ----------
  const map = MapAdapter.createMap(el.map, { lat: 37.69, lng: 126.79, zoom: 11 });
  map.onMove(() => { if (!programmatic) el.btnResearch.classList.remove('hidden'); });
  const fit = (shops) => { programmatic = true; map.fitTo(shops, el.sheet.classList.contains('half') ? window.innerHeight * 0.5 : 220); setTimeout(() => programmatic = false, 600); };

  // ---------- 필터/목록 ----------
  function filtered() {
    let shops = Store.visibleShops();
    if (state.dongs.size) shops = shops.filter(s => state.dongs.has(`${s.city}/${s.dong}`));
    if (state.openOnly) shops = shops.filter(s => Store.isOpenNow(s.hours));
    return shops;
  }
  function render({ refit = false } = {}) {
    const all = filtered();
    map.setMarkers(all, onMarkerClick);
    if (refit) fit(all);
    renderList(all);
  }
  function renderList(all) {
    let shops = state.listOnly ? all : all.filter(s => map.inView(s));
    const origin = state.nearSort && state.userLoc ? state.userLoc : map.center();
    shops = shops.map(s => ({ ...s, km: Store.distanceKm(origin, s) })).sort((a, b) => a.km - b.km);
    el.count.textContent = `${shops.length}곳`;
    el.hint.textContent = state.listOnly ? '선택한 조건의 전체 샵' : (state.nearSort && state.userLoc ? '내 위치에서 가까운 순' : '지도 영역 안의 샵');
    el.list.innerHTML = shops.length ? shops.map(cardHTML).join('') :
      `<div class="empty">이 지역에 등록된 샵이 없어요.<br><button class="link" id="btnShowAll">고양·파주 전체 보기</button></div>`;
    $('#btnShowAll')?.addEventListener('click', () => { state.dongs.clear(); syncRegionLabel(); render({ refit: true }); });
    el.list.querySelectorAll('.card').forEach(c => {
      c.addEventListener('click', (e) => { if (e.target.closest('.call')) return; openDetail(c.dataset.id); });
      c.querySelector('.call').addEventListener('click', () => call(c.dataset.id));
    });
  }
  function cardHTML(s) {
    const open = Store.isOpenNow(s.hours);
    return `<div class="card ${s.id === state.activeId ? 'active' : ''}" data-id="${s.id}">
      <img src="${s.photos[0]}" alt="" loading="lazy">
      <div class="info">
        <h3>${s.name}</h3>
        <div class="meta"><span class="badge type">${s.type}</span><span class="badge ${open ? 'open' : 'closed'}">${open ? '영업중' : '영업종료'}</span></div>
        <div class="meta" style="margin-top:6px">${s.dong} · ${s.km < 1 ? Math.round(s.km * 1000) + 'm' : s.km.toFixed(1) + 'km'} · ${s.hours.open}~${s.hours.close}</div>
      </div>
      <button class="call" aria-label="전화"><svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2z"/></svg></button>
    </div>`;
  }
  function onMarkerClick(s) {
    state.activeId = s.id; map.highlight(s.id);
    programmatic = true; map.panTo(s.lat, s.lng); setTimeout(() => programmatic = false, 600);
    setSheet('half');
    setTimeout(() => { renderList(filtered()); $(`.card[data-id="${s.id}"]`)?.scrollIntoView({ block: 'start', behavior: 'smooth' }); }, 350);
  }
  el.btnResearch.addEventListener('click', () => { el.btnResearch.classList.add('hidden'); renderList(filtered()); });

  // ---------- 바텀시트 ----------
  const snaps = ['peek', 'half', 'full'];
  function setSheet(pos) {
    el.sheet.classList.remove('half', 'full', 'dragging');
    if (pos !== 'peek') el.sheet.classList.add(pos);
    el.sheet.style.transform = '';
    const bottom = pos === 'peek' ? 'calc(var(--sheet-peek) + 14px)' : pos === 'half' ? 'calc(50% + 14px)' : '-100px';
    el.btnLocate.style.bottom = bottom; el.btnResearch.style.bottom = bottom;
    if (pos !== 'full') map.invalidate();
  }
  (function drag() {
    let startY = 0, startT = 0, cur = 'peek', h = 0, moved = false;
    const H = () => el.sheet.getBoundingClientRect().height;
    const offsetOf = (p) => p === 'peek' ? H() - 132 : p === 'half' ? H() * 0.5 : 0;
    const down = (e) => {
      if (e.target.closest('.sheet-body') && el.sheet.classList.contains('full') && el.list.scrollTop > 0) return;
      startY = e.clientY; h = H(); cur = snaps.find(p => el.sheet.classList.contains(p)) || 'peek'; startT = offsetOf(cur); moved = false;
      el.sheet.classList.add('dragging'); el.sheet.setPointerCapture?.(e.pointerId);
      el.sheet.addEventListener('pointermove', move); el.sheet.addEventListener('pointerup', up); el.sheet.addEventListener('pointercancel', up);
    };
    const move = (e) => {
      const dy = e.clientY - startY; if (Math.abs(dy) > 6) moved = true;
      const t = Math.min(Math.max(startT + dy, 0), h - 132);
      el.sheet.style.transform = `translateY(${t}px)`;
    };
    const up = (e) => {
      el.sheet.removeEventListener('pointermove', move); el.sheet.removeEventListener('pointerup', up); el.sheet.removeEventListener('pointercancel', up);
      const dy = e.clientY - startY;
      let next = cur;
      if (moved) { const i = snaps.indexOf(cur); next = dy < -50 ? snaps[Math.min(i + 1, 2)] : dy > 50 ? snaps[Math.max(i - 1, 0)] : cur; }
      else if (e.target.closest('.sheet-handle, .sheet-head') && !e.target.closest('button')) next = cur === 'peek' ? 'half' : cur === 'half' ? 'full' : 'peek';
      setSheet(next);
    };
    el.sheet.addEventListener('pointerdown', (e) => { if (!e.target.closest('.card, button')) down(e); });
    el.handle.addEventListener('pointerdown', down);
  })();
  $('#btnToggleView').addEventListener('click', (e) => {
    state.listOnly = !state.listOnly; e.target.textContent = state.listOnly ? '지도로 보기' : '목록만 보기';
    setSheet(state.listOnly ? 'full' : 'half'); renderList(filtered());
  });

  // ---------- 상세 ----------
  function openDetail(id) { location.hash = `#shop/${id}`; }
  function renderDetail(id) {
    const s = Store.get(id); if (!s) return closeDetail();
    const open = Store.isOpenNow(s.hours);
    el.detail.innerHTML = `
      <div class="detail-top"><button id="btnBack" aria-label="뒤로"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg></button><b>${s.name}</b></div>
      <div class="gallery">${s.photos.map(p => `<img src="${p}" alt="${s.name} 사진">`).join('')}</div>
      <div class="detail-body">
        <div class="meta" style="margin-bottom:8px"><span class="badge type">${s.type}</span> <span class="badge ${open ? 'open' : 'closed'}">${open ? '영업중' : '영업종료'}</span></div>
        <h1>${s.name}</h1>
        <div class="muted">${s.city} ${s.gu !== s.city ? s.gu + ' ' : ''}${s.dong}</div>
        <div style="height:12px"></div>
        <div class="row"><svg viewBox="0 0 24 24"><path d="M12 22s7-7.1 7-12a7 7 0 0 0-14 0c0 4.9 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg><span>${s.address}</span><button class="link" id="btnCopy">복사</button></div>
        <div class="row"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>${Store.hoursLabel(s.hours)}</span></div>
        <div class="row"><svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2z"/></svg><span>${s.phone}</span></div>
        <h3 style="margin:20px 0 4px;font-size:15px">소개</h3>
        <p>${s.intro}</p>
        <div class="mini-map" id="miniMap"></div>
        <button class="link" id="btnOnMap">지도에서 위치 보기</button>
        <p class="muted" style="margin-top:28px;font-size:12px;line-height:1.6">본 서비스는 매장 정보를 안내하는 서비스이며, 예약·이용·환불에 대한 책임은 각 매장에 있습니다. 잘못된 정보 또는 부적절한 업소는 <a href="mailto:help@example.com" style="color:inherit">신고</a>해 주세요.</p>
      </div>
      <div class="cta">
        <a class="route" href="https://map.kakao.com/link/to/${encodeURIComponent(s.name)},${s.lat},${s.lng}" target="_blank" rel="noopener">길찾기</a>
        <a class="call" href="tel:${s.phone.replace(/-/g, '')}" id="btnCall"><svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2z"/></svg>전화하기</a>
      </div>`;
    el.detail.classList.remove('hidden'); el.detail.scrollTop = 0;
    $('#btnBack').addEventListener('click', () => history.back());
    $('#btnCopy').addEventListener('click', () => { navigator.clipboard?.writeText(s.address); toast('주소를 복사했어요'); });
    $('#btnCall').addEventListener('click', () => { Store.logCall(s.id); toast(`${s.phone} 로 전화 연결`); });
    $('#btnOnMap').addEventListener('click', () => { history.back(); setTimeout(() => onMarkerClick(s), 100); });
    const mini = MapAdapter.createMap($('#miniMap'), { lat: s.lat, lng: s.lng, zoom: 15 });
    mini.raw.dragging.disable(); mini.raw.scrollWheelZoom.disable(); mini.setMarkers([s], () => {}); mini.highlight(s.id);
  }
  function closeDetail() { el.detail.classList.add('hidden'); el.detail.innerHTML = ''; }
  function call(id) { const s = Store.get(id); Store.logCall(id); toast(`${s.phone} 로 전화 연결`); location.href = `tel:${s.phone.replace(/-/g, '')}`; }
  window.addEventListener('hashchange', route);
  function route() { const m = location.hash.match(/^#shop\/(.+)$/); if (m) renderDetail(m[1]); else closeDetail(); }

  // ---------- 지역 필터 ----------
  const regions = Store.regions();
  function openRegion() {
    state.draftDongs = new Set(state.dongs);
    renderCityTabs(); renderDongs(); el.regionModal.classList.remove('hidden');
  }
  function renderCityTabs() {
    const cities = [...new Set(regions.map(r => r.city))];
    el.cityTabs.innerHTML = cities.map(c => `<button class="${c === state.city ? 'on' : ''}" data-city="${c}">${c}</button>`).join('');
    el.cityTabs.querySelectorAll('button').forEach(b => b.addEventListener('click', () => { state.city = b.dataset.city; renderCityTabs(); renderDongs(); }));
  }
  function renderDongs() {
    const groups = regions.filter(r => r.city === state.city);
    el.dongGrid.innerHTML = groups.map(g => `${g.gu !== g.city ? `<div class="group">${g.gu}</div>` : ''}` +
      g.dongs.filter(d => d.active).map(d => { const k = `${g.city}/${d.name}`; return `<button class="${state.draftDongs.has(k) ? 'on' : ''}" data-k="${k}">${d.name}</button>`; }).join('')).join('');
    el.dongGrid.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      const k = b.dataset.k; state.draftDongs.has(k) ? state.draftDongs.delete(k) : state.draftDongs.add(k); b.classList.toggle('on');
    }));
  }
  function syncRegionLabel() {
    const n = state.dongs.size;
    el.regionLabel.textContent = n === 0 ? '전체 지역' : n === 1 ? [...state.dongs][0].split('/')[1] : `${[...state.dongs][0].split('/')[1]} 외 ${n - 1}`;
  }
  $('#btnRegion').addEventListener('click', openRegion);
  $('#btnRegionClear').addEventListener('click', () => { state.draftDongs.clear(); renderDongs(); });
  $('#btnRegionApply').addEventListener('click', () => {
    state.dongs = new Set(state.draftDongs); syncRegionLabel(); el.regionModal.classList.add('hidden');
    setSheet('half'); render({ refit: true }); setTimeout(() => renderList(filtered()), 700);
  });
  $('#btnOpen').addEventListener('click', (e) => { state.openOnly = !state.openOnly; e.target.classList.toggle('on', state.openOnly); render(); });
  $('#btnNear').addEventListener('click', (e) => { if (!state.userLoc) return locate(() => { state.nearSort = true; e.target.classList.add('on'); renderList(filtered()); }); state.nearSort = !state.nearSort; e.target.classList.toggle('on', state.nearSort); renderList(filtered()); });
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => b.closest('.modal').classList.add('hidden')));

  // ---------- 검색 ----------
  $('#btnSearch').addEventListener('click', () => { el.searchModal.classList.remove('hidden'); el.searchInput.value = ''; el.searchResults.innerHTML = ''; setTimeout(() => el.searchInput.focus(), 50); });
  el.searchInput.addEventListener('input', () => {
    const q = el.searchInput.value.trim();
    const hits = q ? Store.visibleShops().filter(s => s.name.includes(q) || s.dong.includes(q) || s.type.includes(q)).slice(0, 20) : [];
    el.searchResults.innerHTML = hits.length ? hits.map(s => `<div class="card" data-id="${s.id}"><img src="${s.photos[0]}" alt=""><div class="info"><h3>${s.name}</h3><div class="meta">${s.dong} · ${s.type}</div></div></div>`).join('') : (q ? '<div class="empty">검색 결과가 없어요</div>' : '');
    el.searchResults.querySelectorAll('.card').forEach(c => c.addEventListener('click', () => { el.searchModal.classList.add('hidden'); onMarkerClick(Store.get(c.dataset.id)); }));
  });

  // ---------- 위치 ----------
  function locate(done) {
    if (!navigator.geolocation) return toast('위치 기능을 사용할 수 없어요');
    toast('현재 위치 확인 중…');
    navigator.geolocation.getCurrentPosition((p) => {
      state.userLoc = { lat: p.coords.latitude, lng: p.coords.longitude };
      map.setUser(state.userLoc.lat, state.userLoc.lng);
      programmatic = true; map.panTo(state.userLoc.lat, state.userLoc.lng, 14); setTimeout(() => { programmatic = false; renderList(filtered()); }, 600);
      done && done();
    }, () => {
      // 권한 거부/실패: 서비스 중심(고양·파주)으로 안내
      toast('위치 권한이 없어 고양·파주 전체를 보여드려요'); fit(filtered());
    }, { timeout: 6000 });
  }
  el.btnLocate.addEventListener('click', () => locate());

  // ---------- PWA ----------
  let deferredPrompt = null;
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; if (!standalone && !sessionStorage.installDismissed) el.installBar.classList.remove('hidden'); });
  if (isIOS && !standalone && !sessionStorage.installDismissed) { $('#installHint').textContent = '공유 버튼 → "홈 화면에 추가"'; $('#btnInstall').textContent = '방법'; el.installBar.classList.remove('hidden'); }
  $('#btnInstall').addEventListener('click', async () => { if (deferredPrompt) { deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; el.installBar.classList.add('hidden'); } else toast('Safari 하단 공유(⬆) → "홈 화면에 추가"를 눌러주세요'); });
  $('#btnInstallClose').addEventListener('click', () => { sessionStorage.installDismissed = 1; el.installBar.classList.add('hidden'); });
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});

  // ---------- 기타 ----------
  let toastTimer;
  function toast(msg) { el.toast.textContent = msg; el.toast.classList.remove('hidden'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.toast.classList.add('hidden'), 2200); }
  window.addEventListener('storage', () => render()); // 관리자 화면에서 수정하면 즉시 반영 (데모)

  // 시작
  setSheet('peek'); render({ refit: true }); setTimeout(() => renderList(filtered()), 700); route();
})();
