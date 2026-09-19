// 관리자 웹 (데모). 실제 서비스에서는 로그인 뒤 서버 API로 CRUD 한다.
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const regions = () => Store.regions();
  let photos = [];          // 편집 중인 사진 (dataURL 또는 URL)
  let pickMap, picker;

  // ---------- 라우팅 ----------
  function route() {
    const [name, id] = (location.hash.slice(1) || 'dashboard').split('/');
    document.querySelectorAll('.page').forEach(p => p.classList.toggle('hidden', p.id !== name));
    document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === name));
    ({ dashboard: renderDashboard, shops: renderShops, edit: () => renderEdit(id), regions: renderRegions })[name]?.();
  }
  window.addEventListener('hashchange', route);

  // ---------- 대시보드 ----------
  function renderDashboard() {
    const all = Store.allShops(), stats = Store.callStats();
    $('#stTotal').textContent = all.length;
    $('#stVisible').textContent = all.filter(s => s.visible !== false).length;
    $('#stHidden').textContent = all.filter(s => s.visible === false).length;
    $('#stCalls').textContent = Object.values(stats).reduce((a, b) => a + b.length, 0);
    const rows = all.map(s => ({ s, n: (stats[s.id] || []).length, last: Math.max(0, ...(stats[s.id] || [])) })).sort((a, b) => b.n - a.n).slice(0, 10);
    $('#callTable tbody').innerHTML = rows.map(r => `<tr><td>${r.s.name}</td><td>${r.s.dong}</td><td><b>${r.n}</b></td><td class="muted">${r.last ? new Date(r.last).toLocaleString('ko-KR') : '-'}</td></tr>`).join('') || '<tr><td colspan="4" class="muted">아직 전화 클릭이 없습니다. 사용자 웹에서 "전화하기"를 눌러보세요.</td></tr>';
    const byDong = {}; all.forEach(s => byDong[s.dong] = (byDong[s.dong] || 0) + 1);
    $('#dongStats').innerHTML = Object.entries(byDong).sort((a, b) => b[1] - a[1]).map(([d, n]) => `<span>${d}<b>${n}</b></span>`).join('');
  }

  // ---------- 샵 목록 ----------
  function renderShops() {
    const q = $('#shopSearch').value.trim(), f = $('#shopFilter').value;
    let list = Store.allShops();
    if (q) list = list.filter(s => s.name.includes(q) || s.dong.includes(q));
    if (f === 'visible') list = list.filter(s => s.visible !== false);
    if (f === 'hidden') list = list.filter(s => s.visible === false);
    $('#shopTable tbody').innerHTML = list.map(s => `<tr class="${s.visible === false ? 'hidden-row' : ''}">
      <td><img src="${s.photos[0] || ''}" alt=""></td>
      <td><b>${s.name}</b><br><small class="muted">${s.type}</small></td>
      <td>${s.city} ${s.dong}</td><td>${s.phone}</td><td>${Store.hoursLabel(s.hours)}</td>
      <td><button class="switch ${s.visible !== false ? 'on' : ''}" data-toggle="${s.id}" title="노출/숨김"></button></td>
      <td><a class="link" href="#edit/${s.id}">수정</a></td></tr>`).join('');
    document.querySelectorAll('[data-toggle]').forEach(b => b.addEventListener('click', () => {
      const s = Store.get(b.dataset.toggle); Store.upsert({ ...s, visible: s.visible === false }); toast(s.visible === false ? '노출로 전환' : '숨김 처리'); renderShops();
    }));
  }
  $('#shopSearch').addEventListener('input', renderShops);
  $('#shopFilter').addEventListener('change', renderShops);

  // ---------- 등록/수정 ----------
  function fillRegionSelects(city, dong) {
    const cities = [...new Set(regions().map(r => r.city))];
    $('#selCity').innerHTML = cities.map(c => `<option ${c === city ? 'selected' : ''}>${c}</option>`).join('');
    const fillDong = () => {
      const c = $('#selCity').value;
      $('#selDong').innerHTML = regions().filter(r => r.city === c).flatMap(r => r.dongs.map(d => `<option value="${d.name}" data-gu="${r.gu}" data-lat="${d.lat}" data-lng="${d.lng}" ${d.name === dong ? 'selected' : ''}>${r.gu !== r.city ? r.gu + ' ' : ''}${d.name}</option>`)).join('');
    };
    fillDong(); $('#selCity').onchange = fillDong;
  }
  function renderEdit(id) {
    const f = $('#form'); f.reset(); photos = [];
    const s = id ? Store.get(id) : null;
    $('#editTitle').textContent = s ? `샵 수정 - ${s.name}` : '샵 등록';
    $('#btnDelete').classList.toggle('hidden', !s);
    fillRegionSelects(s?.city || '고양시', s?.dong);
    if (s) {
      f.id.value = s.id; f.name.value = s.name; f.type.value = s.type; f.address.value = s.address; f.phone.value = s.phone;
      f.visible.value = String(s.visible !== false); f.open.value = s.hours.open; f.close.value = s.hours.close === '24:00' ? '23:59' : s.hours.close; f.closedDay.value = s.hours.closedDay || '';
      f.intro.value = s.intro; f.lat.value = s.lat; f.lng.value = s.lng; photos = [...s.photos];
    }
    renderPhotos();
    // 위치 지도
    if (pickMap) { pickMap.raw.remove(); }
    const c = s ? { lat: s.lat, lng: s.lng } : { lat: 37.66, lng: 126.78 };
    pickMap = MapAdapter.createMap($('#pickMap'), { ...c, zoom: s ? 15 : 11 });
    picker = pickMap.pickable((lat, lng) => { f.lat.value = lat.toFixed(6); f.lng.value = lng.toFixed(6); $('#latlng').textContent = `좌표: ${lat.toFixed(5)}, ${lng.toFixed(5)}`; }, s ? c : null);
    $('#latlng').textContent = s ? `좌표: ${s.lat}, ${s.lng}` : '좌표: -';
    // 동 선택 시 지도 이동 (데모: 동 중심으로 핀 초기화)
    $('#selDong').onchange = () => { const o = $('#selDong').selectedOptions[0]; pickMap.panTo(+o.dataset.lat, +o.dataset.lng, 14); if (!f.lat.value) picker.set(+o.dataset.lat, +o.dataset.lng); };
    pickMap.invalidate();
  }
  function renderPhotos() {
    $('#photoPreview').innerHTML = photos.map((p, i) => `<div><img src="${p}" alt="">${i === 0 ? '<span class="rep">대표</span>' : ''}<button type="button" data-rm="${i}">✕</button></div>`).join('');
    document.querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => { photos.splice(+b.dataset.rm, 1); renderPhotos(); }));
  }
  $('#photoInput').addEventListener('change', (e) => {
    [...e.target.files].slice(0, 5 - photos.length).forEach(file => {
      // 데모: 브라우저에서 축소 후 dataURL 저장. 실서비스: S3/오브젝트 스토리지 업로드 + 리사이즈.
      const img = new Image(); const url = URL.createObjectURL(file);
      img.onload = () => { const c = document.createElement('canvas'); const r = Math.min(1, 640 / img.width); c.width = img.width * r; c.height = img.height * r; c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); photos.push(c.toDataURL('image/jpeg', .8)); renderPhotos(); URL.revokeObjectURL(url); };
      img.src = url;
    });
    e.target.value = '';
  });
  $('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target, o = $('#selDong').selectedOptions[0];
    if (!f.lat.value) return toast('지도에서 위치를 찍어주세요');
    const shop = {
      id: f.id.value || `n${Date.now()}`, name: f.name.value.trim(), type: f.type.value, city: f.city.value, gu: o.dataset.gu, dong: f.dong.value,
      address: f.address.value.trim(), phone: f.phone.value.trim(), lat: +f.lat.value, lng: +f.lng.value,
      hours: { open: f.open.value, close: f.close.value === '23:59' ? '24:00' : f.close.value, closedDay: f.closedDay.value || null },
      intro: f.intro.value.trim(), photos: photos.length ? photos : [`https://picsum.photos/seed/${encodeURIComponent(f.name.value)}/640/420`],
      visible: f.visible.value === 'true', createdAt: new Date().toISOString().slice(0, 10),
    };
    Store.upsert(shop); toast('저장했습니다. 사용자 웹에 바로 반영됩니다.'); location.hash = '#shops';
  });
  $('#btnDelete').addEventListener('click', () => { if (confirm('삭제할까요?')) { Store.remove($('#form').id.value); toast('삭제했습니다'); location.hash = '#shops'; } });

  // ---------- 지역 설정 ----------
  function renderRegions() {
    const counts = {}; Store.allShops().forEach(s => counts[`${s.city}/${s.dong}`] = (counts[`${s.city}/${s.dong}`] || 0) + 1);
    $('#regionList').innerHTML = regions().map(r => `<div class="region-group"><h3>${r.city}${r.gu !== r.city ? ' ' + r.gu : ''}</h3><div class="dongs">${r.dongs.map(d =>
      `<div class="dong"><span>${d.name}<small>${counts[`${r.city}/${d.name}`] || 0}곳</small></span><button class="switch ${d.active ? 'on' : ''}" data-region="${r.city}|${r.gu}|${d.name}" data-on="${d.active}"></button></div>`).join('')}</div></div>`).join('');
    document.querySelectorAll('[data-region]').forEach(b => b.addEventListener('click', () => {
      const [c, g, d] = b.dataset.region.split('|'); Store.setRegionActive(c, g, d, b.dataset.on !== 'true'); renderRegions(); toast(`${d} ${b.dataset.on !== 'true' ? '노출' : '숨김'}`);
    }));
  }

  // ---------- 기타 ----------
  let t; function toast(m) { const el = $('#toast'); el.textContent = m; el.classList.remove('hidden'); clearTimeout(t); t = setTimeout(() => el.classList.add('hidden'), 2200); }
  $('#btnReset').addEventListener('click', () => { if (confirm('관리자에서 수정한 데모 데이터를 모두 초기화할까요?')) { Store.reset(); toast('초기화했습니다'); route(); } });
  route();
})();
