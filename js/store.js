// 데이터 저장소 (데모용).
// 실제 서비스에서는 이 파일의 함수들이 서버 API(fetch)를 호출하도록 바뀐다.
// 데모에서는 SEED 데이터 + localStorage(관리자 수정분)를 합쳐서 돌려준다.
(function () {
  const KEY = 'demo.v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  }
  function save(state) { localStorage.setItem(KEY, JSON.stringify(state)); }

  function state() {
    const s = load();
    s.shopPatches = s.shopPatches || {};   // { shopId: {…수정된 필드} }
    s.addedShops = s.addedShops || [];     // 관리자에서 새로 등록한 샵
    s.deletedIds = s.deletedIds || [];
    s.regionActive = s.regionActive || {}; // { '고양시/덕양구/화정동': false }
    s.callStats = s.callStats || {};       // { shopId: [timestamp, …] }
    return s;
  }

  const Store = {
    regions() {
      const s = state();
      return window.SEED_REGIONS.map(r => ({
        ...r,
        dongs: r.dongs.map(d => {
          const k = `${r.city}/${r.gu}/${d.name}`;
          return { ...d, active: s.regionActive[k] === undefined ? d.active : s.regionActive[k] };
        }),
      }));
    },
    // 관리자용: 숨김 포함 전체
    allShops() {
      const s = state();
      const base = window.SEED_SHOPS.filter(x => !s.deletedIds.includes(x.id)).map(x => ({ ...x, ...(s.shopPatches[x.id] || {}) }));
      return base.concat(s.addedShops);
    },
    // 사용자용: 노출 중 + 활성 지역만
    visibleShops() {
      const activeDong = new Set();
      this.regions().forEach(r => r.dongs.forEach(d => { if (d.active) activeDong.add(`${r.city}/${d.name}`); }));
      return this.allShops().filter(x => x.visible !== false && activeDong.has(`${x.city}/${x.dong}`));
    },
    get(id) { return this.allShops().find(x => x.id === id); },
    upsert(shop) {
      const s = state();
      if (window.SEED_SHOPS.some(x => x.id === shop.id)) {
        s.shopPatches[shop.id] = { ...(s.shopPatches[shop.id] || {}), ...shop };
      } else {
        const i = s.addedShops.findIndex(x => x.id === shop.id);
        if (i >= 0) s.addedShops[i] = shop; else s.addedShops.push({ ...shop, id: shop.id || `n${Date.now()}` });
      }
      save(s);
    },
    remove(id) {
      const s = state();
      s.addedShops = s.addedShops.filter(x => x.id !== id);
      if (!s.deletedIds.includes(id)) s.deletedIds.push(id);
      save(s);
    },
    setRegionActive(city, gu, dong, active) {
      const s = state(); s.regionActive[`${city}/${gu}/${dong}`] = active; save(s);
    },
    logCall(id) {
      const s = state(); (s.callStats[id] = s.callStats[id] || []).push(Date.now()); save(s);
    },
    callStats() { return state().callStats; },
    reset() { localStorage.removeItem(KEY); },
  };

  // 영업시간 헬퍼. 네이버 데이터는 요일별 배열이고, 쉬는 날은 open/close 가 없다.
  const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = (d) => (d || '').replace(/\(.*\)/, '').trim();
  Store.todayHours = function (hours, now = new Date()) {
    if (!hours || !hours.week || !hours.week.length) return null;
    const t = DAYS[now.getDay()];
    return hours.week.find(w => dayName(w.day) === t) || null;
  };
  Store.isOpenNow = function (hours, now = new Date()) {
    const t = Store.todayHours(hours, now);
    if (!t) return null;                 // 정보 없음
    if (!t.open || !t.close) return false; // 휴무
    const toMin = (v) => { const [h, m] = v.split(':').map(Number); return h * 60 + m; };
    const cur = now.getHours() * 60 + now.getMinutes();
    const o = toMin(t.open), c = toMin(t.close);
    const inRange = c > o ? (cur >= o && cur < c) : (cur >= o || cur < c);
    if (!inRange) return false;
    for (const b of (t.brk || [])) { if (cur >= toMin(b.start) && cur < toMin(b.end)) return false; }
    return true;
  };
  Store.openLabel = function (hours) {
    const v = Store.isOpenNow(hours);
    return v === null ? { text: '영업시간 정보 없음', cls: 'unknown' } : v ? { text: '영업중', cls: 'open' } : { text: '영업종료', cls: 'closed' };
  };
  Store.todayLabel = function (hours) {
    const t = Store.todayHours(hours);
    if (!t) return '영업시간 정보 없음';
    if (!t.open || !t.close) return '오늘 휴무';
    const brk = (t.brk || []).map(b => `${b.start}~${b.end} 휴게`).join(', ');
    return `오늘 ${t.open} ~ ${t.close}${brk ? ' · ' + brk : ''}`;
  };
  Store.weekLines = function (hours) {
    if (!hours || !hours.week) return [];
    return hours.week.map(w => ({ day: w.day, text: (!w.open || !w.close) ? '휴무' : `${w.open} ~ ${w.close}` + ((w.brk || []).length ? ` (휴게 ${w.brk.map(b => b.start + '~' + b.end).join(', ')})` : '') }));
  };
  Store.hoursLabel = Store.todayLabel;
  Store.distanceKm = function (a, b) {
    const R = 6371, dLat = (b.lat - a.lat) * Math.PI / 180, dLng = (b.lng - a.lng) * Math.PI / 180;
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  };

  window.Store = Store;
})();
