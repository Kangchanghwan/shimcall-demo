// 서비스워커: 앱 껍데기(HTML/CSS/JS)는 캐시, 지도 타일/사진은 네트워크 우선.
const CACHE = 'shimcall-v3';
const SHELL = ['./app.html', './css/app.css?v=3', './js/app.js?v=3', './js/store.js?v=3', './js/map-adapter.js?v=3', './js/data.js?v=3', './manifest.json', './icons/icon-192.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // 외부(지도 타일, 사진, CDN)는 브라우저 기본 동작
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request)));
});
