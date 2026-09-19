// 샘플 데이터 생성기. `node scripts/gen-data.js` → js/data.js 를 다시 만든다.
// 실제 서비스에서는 관리자 웹에서 등록한 데이터가 DB에서 내려온다.
const fs = require('fs');
const path = require('path');

// 지역 마스터: 시 > 구 > 동 (파주시는 구가 없어 '파주시' 하나로 묶음)
const regions = [
  { city: '고양시', gu: '덕양구', dongs: [
    ['화정동', 37.634, 126.832], ['행신동', 37.612, 126.834], ['원흥동', 37.650, 126.872],
    ['삼송동', 37.653, 126.895], ['능곡동', 37.618, 126.820], ['주교동', 37.655, 126.834],
  ]},
  { city: '고양시', gu: '일산동구', dongs: [
    ['장항동', 37.657, 126.772], ['마두동', 37.652, 126.780], ['백석동', 37.643, 126.788],
    ['정발산동', 37.660, 126.776], ['풍동', 37.670, 126.800], ['중산동', 37.685, 126.790],
  ]},
  { city: '고양시', gu: '일산서구', dongs: [
    ['일산동', 37.683, 126.770], ['주엽동', 37.670, 126.760], ['대화동', 37.676, 126.745],
    ['탄현동', 37.695, 126.765], ['덕이동', 37.700, 126.750],
  ]},
  { city: '파주시', gu: '파주시', dongs: [
    ['금촌동', 37.760, 126.775], ['운정동', 37.720, 126.745], ['야당동', 37.712, 126.755],
    ['교하동', 37.735, 126.735], ['문산읍', 37.860, 126.785], ['조리읍', 37.740, 126.815],
    ['탄현면', 37.790, 126.700],
  ]},
];

// 결정적 난수 (매번 같은 데이터가 나오도록)
let seed = 20260919;
const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
const pick = (arr) => arr[Math.floor(rnd() * arr.length)];

const prefixes = ['더', '온', '휴', '라온', '소소', '루아', '봄', '결', '온유', '해온', '나린', '리프', '포레', '에이', '슬로우'];
const cores = ['테라피', '스웨디시', '힐링', '아로마', '타이', '스파', '케어', '마사지', '바디', '릴렉스'];
const suffixes = ['', '', '샵', '룸', '스튜디오', '하우스'];
const types = ['스웨디시', '타이마사지', '아로마', '스포츠마사지', '경락', '발마사지', '로미로미', '1인샵'];
const intros = [
  '조용한 프라이빗 룸에서 1:1 관리를 받으실 수 있습니다. 첫 방문 고객께는 코스 상담을 충분히 진행해 드립니다.',
  '10년 경력 관리사가 직접 케어합니다. 사전 전화 예약 시 대기 없이 바로 이용 가능합니다.',
  '커플룸과 1인룸을 모두 갖추고 있습니다. 주차 가능, 샤워실 완비.',
  '근육 이완과 피로 회복에 집중한 딥티슈 코스가 대표 메뉴입니다. 운동 후 방문 추천.',
  '은은한 아로마 오일과 따뜻한 스톤을 활용한 릴렉스 코스를 운영합니다. 여성 고객 비율이 높습니다.',
  '정통 태국식 스트레칭 마사지 전문. 관리사 전원 자격 보유.',
  '역에서 도보 3분. 늦은 시간까지 운영하여 퇴근 후 방문하기 좋습니다.',
];
const hoursPool = [
  { open: '10:00', close: '22:00' }, { open: '11:00', close: '23:00' }, { open: '10:00', close: '24:00' },
  { open: '12:00', close: '02:00' }, { open: '09:00', close: '21:00' }, { open: '00:00', close: '24:00' },
];
const streets = ['중앙로', '호수로', '일산로', '경의로', '고양대로', '무궁화로', '백마로', '강선로', '금릉역로', '와동로', '통일로', '문산로'];

const shops = [];
let id = 1;
for (const r of regions) {
  for (const [dong, lat, lng] of r.dongs) {
    const n = 1 + Math.floor(rnd() * 2.2); // 동당 1~3곳
    for (let i = 0; i < n; i++) {
      const name = `${pick(prefixes)}${pick(cores)}${pick(suffixes)}`;
      const h = pick(hoursPool);
      const closedDay = rnd() < 0.5 ? null : pick(['일', '월', '화', '수']);
      shops.push({
        id: `s${String(id++).padStart(3, '0')}`,
        name,
        type: pick(types),
        city: r.city, gu: r.gu, dong,
        address: `경기 ${r.city} ${r.gu === r.city ? '' : r.gu + ' '}${dong} ${pick(streets)} ${10 + Math.floor(rnd() * 300)}`,
        phone: `031-${900 + Math.floor(rnd() * 99)}-${1000 + Math.floor(rnd() * 8999)}`,
        lat: +(lat + (rnd() - 0.5) * 0.012).toFixed(6),
        lng: +(lng + (rnd() - 0.5) * 0.014).toFixed(6),
        hours: { ...h, closedDay },
        intro: pick(intros),
        photos: [1, 2, 3].map((k) => `https://picsum.photos/seed/${name}${id}${k}/640/420`),
        visible: true,
        createdAt: `2026-0${1 + Math.floor(rnd() * 9)}-${String(1 + Math.floor(rnd() * 28)).padStart(2, '0')}`,
      });
    }
  }
}

const out = `// 자동 생성 파일. scripts/gen-data.js 로 재생성.
// 실제 서비스에서는 /api/shops, /api/regions 응답으로 대체된다.
window.SEED_REGIONS = ${JSON.stringify(regions.map(r => ({ city: r.city, gu: r.gu, dongs: r.dongs.map(d => ({ name: d[0], lat: d[1], lng: d[2], active: true })) })), null, 2)};
window.SEED_SHOPS = ${JSON.stringify(shops, null, 2)};
`;
fs.mkdirSync(path.join(__dirname, '..', 'js'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '..', 'js', 'data.js'), out);
console.log(`generated ${shops.length} shops`);
