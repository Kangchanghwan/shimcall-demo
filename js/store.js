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

  // 영업시간 헬퍼 (공용)
  Store.isOpenNow = function (hours, now = new Date()) {
    if (!hours) return null;
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    if (hours.closedDay && days[now.getDay()] === hours.closedDay) return false;
    const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    const cur = now.getHours() * 60 + now.getMinutes();
    const o = toMin(hours.open), c = toMin(hours.close);
    if (c >= 24 * 60 && o === 0) return true;          // 24시간
    if (c > o) return cur >= o && cur < c;              // 같은 날 마감
    return cur >= o || cur < c;                         // 자정 넘김 (12:00~02:00)
  };
  Store.hoursLabel = function (h) {
    if (!h) return '-';
    const base = (h.open === '00:00' && h.close === '24:00') ? '24시간' : `${h.open} ~ ${h.close}`;
    return h.closedDay ? `${base} (${h.closedDay}요일 휴무)` : `${base} (연중무휴)`;
  };
  Store.distanceKm = function (a, b) {
    const R = 6371, dLat = (b.lat - a.lat) * Math.PI / 180, dLng = (b.lng - a.lng) * Math.PI / 180;
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  };

  window.Store = Store;
})();
