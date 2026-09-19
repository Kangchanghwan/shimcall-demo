# 쉼콜 (가칭)

고양·파주 마사지샵을 지도에서 찾고 전화하는 모바일 웹과 관리자 웹의 제안용 데모입니다.

파일 구성

- index.html: 시연 페이지. 폰 프레임 안에 사용자 화면을 띄웁니다.
- app.html: 사용자 모바일 웹. PWA로 홈 화면에 추가할 수 있습니다.
- admin.html: 관리자 웹.
- js/map-adapter.js: 지도 엔진을 감싼 파일. 지금은 Leaflet과 OpenStreetMap을 쓰고, 카카오맵으로 바꿀 때 이 파일만 고칩니다.
- js/store.js: 데이터 계층. 데모에서는 localStorage에 저장하고, 실제 서비스에서는 서버 API를 호출하도록 바꿉니다.
- scripts/gen-data.js: 샘플 데이터 생성기. `node scripts/gen-data.js`로 js/data.js를 다시 만듭니다.

빌드 과정이 없어서 정적 파일을 그대로 올리면 됩니다.
