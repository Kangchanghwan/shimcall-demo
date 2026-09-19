# 쉼콜 (가칭) — 지도 기반 마사지샵 안내 웹 데모

고양·파주 마사지샵을 지도에서 찾고 바로 전화하는 모바일 웹 + 관리자 웹의 **제안용 시연 데모**입니다.

- `index.html` — 시연 랜딩 (폰 프레임 시뮬레이터)
- `app.html` — 사용자 모바일 웹 (PWA)
- `admin.html` — 관리자 웹
- `js/map-adapter.js` — 지도 엔진 어댑터 (Leaflet/OSM → 카카오맵 교체 지점)
- `js/store.js` — 데이터 계층 (데모: localStorage → 실서비스: REST API)
- `scripts/gen-data.js` — 샘플 데이터 생성기

빌드 과정 없음. 정적 파일 그대로 배포됩니다.
