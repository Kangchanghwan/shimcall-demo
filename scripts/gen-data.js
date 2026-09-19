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
  '1인샵입니다. 예약제로 운영해서 전화 주시고 오시면 기다리는 시간 없어요.',
  '경력 12년 관리사가 직접 봅니다. 목이랑 어깨 뭉친 분들이 많이 오세요.',
  '커플룸 2개, 1인룸 3개. 건물 뒤에 주차 됩니다.',
  '운동하는 분들 위주로 딥티슈 위주로 합니다. 세게 받는 거 좋아하시면 잘 맞아요.',
  '아로마 오일 쓰고 조용하게 해드립니다. 여성 손님이 많은 편이에요.',
  '태국 현지에서 자격 받은 관리사 3명이 있습니다. 스트레칭 위주.',
  '역에서 걸어서 3분. 밤 12시까지 하니까 퇴근하고 오셔도 됩니다.',
  '발마사지 전문이고 40분, 60분 코스 있어요. 일요일은 쉽니다.',
  '처음 오시면 어디가 불편한지 먼저 여쭤보고 시작합니다. 당일 예약 가능.',
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
