// 네이버 플레이스에서 수집한 실제 매장 데이터 (수집일 2026-09-19).
// 출처: pcmap.place.naver.com 각 매장 상세 페이지. 좌표/주소/전화/영업시간/사진 모두 네이버 등록 정보.
// 실제 서비스에서는 이 파일 대신 서버 API(/api/shops, /api/regions) 응답을 사용한다.
window.SEED_REGIONS = [
  {
    "city": "고양시",
    "gu": "덕양구",
    "dongs": [
      {
        "name": "덕은동",
        "lat": 37.579458,
        "lng": 126.87063,
        "active": true
      },
      {
        "name": "삼송동",
        "lat": 37.652476,
        "lng": 126.896745,
        "active": true
      },
      {
        "name": "원흥동",
        "lat": 37.649703,
        "lng": 126.875248,
        "active": true
      },
      {
        "name": "주교동",
        "lat": 37.655656,
        "lng": 126.834802,
        "active": true
      },
      {
        "name": "지축동",
        "lat": 37.649526,
        "lng": 126.915015,
        "active": true
      },
      {
        "name": "향동동",
        "lat": 37.600678,
        "lng": 126.894271,
        "active": true
      },
      {
        "name": "화정동",
        "lat": 37.633166,
        "lng": 126.832156,
        "active": true
      }
    ]
  },
  {
    "city": "고양시",
    "gu": "일산동구",
    "dongs": [
      {
        "name": "백석동",
        "lat": 37.643042,
        "lng": 126.787601,
        "active": true
      },
      {
        "name": "식사동",
        "lat": 37.676338,
        "lng": 126.810347,
        "active": true
      },
      {
        "name": "장항동",
        "lat": 37.658768,
        "lng": 126.769613,
        "active": true
      },
      {
        "name": "정발산동",
        "lat": 37.668814,
        "lng": 126.773492,
        "active": true
      },
      {
        "name": "중산동",
        "lat": 37.681472,
        "lng": 126.781369,
        "active": true
      }
    ]
  },
  {
    "city": "고양시",
    "gu": "일산서구",
    "dongs": [
      {
        "name": "대화동",
        "lat": 37.676043,
        "lng": 126.748553,
        "active": true
      },
      {
        "name": "덕이동",
        "lat": 37.696608,
        "lng": 126.756406,
        "active": true
      },
      {
        "name": "일산동",
        "lat": 37.686123,
        "lng": 126.772805,
        "active": true
      },
      {
        "name": "주엽동",
        "lat": 37.66991,
        "lng": 126.760414,
        "active": true
      },
      {
        "name": "탄현동",
        "lat": 37.690034,
        "lng": 126.762999,
        "active": true
      }
    ]
  },
  {
    "city": "파주시",
    "gu": "파주시",
    "dongs": [
      {
        "name": "금촌동",
        "lat": 37.757625,
        "lng": 126.772474,
        "active": true
      },
      {
        "name": "동패동",
        "lat": 37.718617,
        "lng": 126.718668,
        "active": true
      },
      {
        "name": "목동동",
        "lat": 37.728887,
        "lng": 126.734848,
        "active": true
      },
      {
        "name": "문산읍",
        "lat": 37.867991,
        "lng": 126.783978,
        "active": true
      },
      {
        "name": "야당동",
        "lat": 37.712943,
        "lng": 126.759776,
        "active": true
      }
    ]
  }
];
window.SEED_SHOPS = [
  {
    "id": "s001",
    "name": "순수지압안마원 삼송원흥마사지",
    "type": "부분안마",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "삼송동",
    "address": "경기 고양시 덕양구 동송로 70 힐스테이트 삼송역 힐스몰 상가 2층 242호",
    "phone": "0507-1328-4481",
    "lat": 37.6524756,
    "lng": 126.8967447,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "09:00",
          "close": "21:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "일",
          "open": "09:00",
          "close": "21:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "월",
          "open": "09:00",
          "close": "21:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "화",
          "open": "09:00",
          "close": "21:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "수",
          "open": "09:00",
          "close": "21:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "목(9/24)",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "부분안마 전문입니다. 삼송역 1번출구 앞에 있는\n힐스테이트 삼송역 힐스몰 상가 에스컬레이터를 타시고 2층 242호로 오셔요!\n\n<자가용 이용시>\n주차 2시간 무료 제공 - 힐스몰 지하 주차장을 이용하세요!\n힐스몰 상가 주차장 지하로 오셔서 입차하시자마자 차단기 부근에 주차하신 후 힐스몰상가 전용 엘리베이터 2호기를 이용하시면 빠르게 오실 수 있습니다~ 엘리베이터 앞쪽 벽면의 안내도를 보시고 찾아오세요~ 찾기 힘드실 땐 전화주세요! ^^. 예약, 남/녀 화장실 구분, 대기공간, 무선 인터넷, 간편결제, 주차 가능합니다. 가격은 39,000원~입니다. 네이버 방문자 리뷰 2,413개, 평점 4.92입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20241112_126/1731396359054Ny7Xr_JPEG/KakaoTalk_20241106_135351167_01.jpg",
      "https://ldb-phinf.pstatic.net/20241112_155/1731396359110GVfbF_JPEG/KakaoTalk_20241106_135351167.jpg",
      "https://ldb-phinf.pstatic.net/20241112_9/1731396359047zgRKn_JPEG/%B1%B9%B0%A1%B0%F8%C0%CE%BE%C8%B8%B6%BF%F8%B7%CE%B0%ED.jpg",
      "https://ldb-phinf.pstatic.net/20260316_155/1773640701038BnBBj_PNG/%C3%B9%B8%B8%B3%B2%C0%CC%BF%EB%B1%C7.png",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MThfMTgz/MDAxNzg5NzA3Nzg2NzQ1.DbFMBMzGAyaUNdbLNw_FqSOwMdLfIlcbCYMonGz3bD8g.6UAEfnSsZPr1i8YJl9vFlWayX0qWYxzTqZcudd3seu8g.JPEG/7C67717A-C281-4C20-9BF6-20F8B092873A.jpeg"
    ],
    "price": "39,000원~",
    "score": 4.92,
    "reviews": 2413,
    "naverId": "1651691721",
    "visible": true
  },
  {
    "id": "s002",
    "name": "신의손 안마원",
    "type": "안마",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "원흥동",
    "address": "경기 고양시 덕양구 삼송로 8 한일 골드타워 7층 703호",
    "phone": "031-967-4093",
    "lat": 37.6497902,
    "lng": 126.8749647,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "09:30",
          "close": "19:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "일",
          "open": "09:30",
          "close": "19:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "월",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "화",
          "open": "09:30",
          "close": "19:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "수",
          "open": "09:30",
          "close": "19:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "목(9/24)",
          "open": "09:30",
          "close": "19:00",
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "안마 전문입니다. 원흥역 1번 출구 50m 한일 골드 타워 메가커피 건물 ,\n주차장 만차 시 맞은편 KB 중앙타워 나이스파크 주차장 이용가능. 주차 가능합니다. 네이버 방문자 리뷰 1,327개, 평점 4.9입니다.",
    "photos": [
      "https://naverbooking-phinf.pstatic.net/20240730_232/17223324457756gLKC_JPEG/image.jpg",
      "https://ldb-phinf.pstatic.net/20260616_239/1781593111432PfcuI_JPEG/2026_%C0%CE%BB%F3_%B0%A1%B0%DD%C7%A5.jpg",
      "https://ldb-phinf.pstatic.net/20231027_229/1698366362307eKFlt_JPEG/20231027_092307.jpg",
      "https://ldb-phinf.pstatic.net/20231027_254/169836636214657zz0_JPEG/20231027_092414.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MTlfMTAy/MDAxNzg5NzgzNzk4NjI3.Sj8MR4Is7iALZHj8XYnnSZZ29Hmkhdabgj4ZiMI-qrUg.lxO6dHwTv_N8tfsBVYZsRXMaon_Q5YxpLF0PBK916pQg.JPEG/0A31138B-D0BA-4341-9843-D6DC0339DAA2.jpeg"
    ],
    "price": null,
    "score": 4.9,
    "reviews": 1327,
    "naverId": "1028777518",
    "visible": true
  },
  {
    "id": "s003",
    "name": "예손지압안마원",
    "type": "지압/안마",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "원흥동",
    "address": "경기 고양시 덕양구 삼송로 12 반도유스퀘어 703호",
    "phone": "0507-1439-8214",
    "lat": 37.6496167,
    "lng": 126.8755307,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "09:30",
          "close": "18:30",
          "brk": [
            {
              "start": "12:30",
              "end": "13:30"
            }
          ]
        },
        {
          "day": "일",
          "open": "09:30",
          "close": "18:30",
          "brk": [
            {
              "start": "12:30",
              "end": "13:30"
            }
          ]
        },
        {
          "day": "월",
          "open": "09:30",
          "close": "21:30",
          "brk": [
            {
              "start": "12:30",
              "end": "13:30"
            }
          ]
        },
        {
          "day": "화",
          "open": "09:30",
          "close": "21:30",
          "brk": [
            {
              "start": "12:30",
              "end": "13:30"
            }
          ]
        },
        {
          "day": "수",
          "open": "09:30",
          "close": "21:30",
          "brk": [
            {
              "start": "12:30",
              "end": "13:30"
            }
          ]
        },
        {
          "day": "목(9/24)",
          "open": "10:00",
          "close": "19:00",
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "지압/안마 전문입니다. 원흥역1번 출구 100m직진 버스정류장 앞 반도유스퀘어 건물 703호 (걸어서 2분 거리). 주차 가능합니다. 네이버 방문자 리뷰 763개, 평점 4.84입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260330_206/17748499019638bTH5_JPEG/KakaoTalk_20260330_111354312_16.jpg",
      "https://ldb-phinf.pstatic.net/20260915_240/1789472639385o7rAo_JPEG/ChatGPT_Image_2026%B3%E2_9%BF%F9_15%C0%CF_%BF%C0%C8%C4_08_26_31.jpg",
      "https://ldb-phinf.pstatic.net/20260823_29/1787479954660OhHL5_JPEG/1000043036.jpg",
      "https://ldb-phinf.pstatic.net/20260823_19/1787479955420H0l27_JPEG/1000042805.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MTZfMjIx/MDAxNzg5NTU3MDE2MjUx.nemuV4gdruwh3Cd5rv_1mZlil_uyJmLQXZiSe10TL44g.pgmnRpDOlau4lMRwqwfWmPBTlvjax-kUepcNNi7vXSAg.JPEG/D70BF4FD-7EAE-4CF0-A4AD-E7A4594146AB.jpeg"
    ],
    "price": null,
    "score": 4.84,
    "reviews": 763,
    "naverId": "1988133284",
    "visible": true
  },
  {
    "id": "s004",
    "name": "일산보건마사지안마원",
    "type": "안마",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "장항동",
    "address": "경기 고양시 일산동구 장백로 184 우신프라자 3층 306호",
    "phone": "0507-1338-5890",
    "lat": 37.6512836,
    "lng": 126.7771847,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "21:00",
          "brk": []
        },
        {
          "day": "일",
          "open": "11:00",
          "close": "19:00",
          "brk": []
        },
        {
          "day": "월(9/21)",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        },
        {
          "day": "목",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "안마 전문입니다. 일산보건안마원 오시는 길 : 우신프라자 3층 306호\n\n[지하철] 3호선 마두역 2번출구(에스켈레이터)앞 메가커피건물 GS편의점 우측 지나 로비에서 엘리베이터 탄후, 3층에서 내려 우측으로 화장실 지나 오시면 바로 보입니다\n\n[자차] 넓은 주차장 완비\n고양시 일산동구 장백로 184 (장항동 895-1)\n1층~ B4까지 이용가능\n\n[버스 이용안내]\n마두역(중) 으로 검색 버스정류장에서 지하철 2,3번방향/ 도보 5분 거리\n메가커피, GS편의점 건물 3층 306호. 주차 가능합니다. 가격은 53,000원~입니다. 네이버 방문자 리뷰 678개, 평점 4.88입니다.",
    "photos": [
      "https://naverbooking-phinf.pstatic.net/20260903_251/1788428527083J7w2B_PNG/image.png",
      "https://ldb-phinf.pstatic.net/20260215_94/1771117708029y4PFh_JPEG/KakaoTalk_20260215_100747822.jpg",
      "https://ldb-phinf.pstatic.net/20220727_21/1658898681151DfgEK_JPEG/%B4%D9%BF%EE%B7%CE%B5%E5.jpg",
      "https://ldb-phinf.pstatic.net/20240821_167/1724214695298SE0Fb_JPEG/KakaoTalk_Photo_2024-08-21-13-31-22_01_.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MThfMjkx/MDAxNzg5NzEwNjk1NzY3.xVRj7l-FBai8sEmHP6r-bP3BetAd2CzOnbRAVEArFKkg.G1jFdtfLL26c99R2PKMiEVNevD3pme5T57KFcxyu6MAg.JPEG/459C75D5-D8FD-496E-A6BA-A30256EF35FF.jpeg"
    ],
    "price": "53,000원~",
    "score": 4.88,
    "reviews": 678,
    "naverId": "1220077644",
    "visible": true
  },
  {
    "id": "s005",
    "name": "엄지약손마사지 일산점",
    "type": "마사지",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "장항동",
    "address": "경기 고양시 일산동구 호수로 646-24 위너스빌딩2 2층 201호",
    "phone": "0507-1484-9039",
    "lat": 37.6597162,
    "lng": 126.7678354,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        }
      ]
    },
    "intro": "마사지 전문입니다. 청원오피스텔주차장앞건물(포항집2층). 단체 이용 가능, 예약, 남/녀 화장실 구분, 대기공간, 방문접수/출장, 무선 인터넷, 주차 가능합니다. 가격은 50,000원~입니다. 네이버 방문자 리뷰 606개, 평점 4.87입니다.",
    "photos": [
      "https://naverbooking-phinf.pstatic.net/20260802_158/1785640265005tR0dJ_PNG/image.png",
      "https://naverbooking-phinf.pstatic.net/20260802_12/1785640281907ejxoz_PNG/image.png",
      "https://ldb-phinf.pstatic.net/20260303_137/17725496245431dqvq_PNG/%C3%B9%B9%E6%B9%AE%C7%D2%C0%CE.png",
      "https://ldb-phinf.pstatic.net/20260512_20/1778574732293DtdjU_JPEG/%C5%D7%C0%CC%BA%ED%C5%A5%BE%CB%B8%AE%BA%E4-_%BA%B9%BB%E7%BA%BB.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MTlfMjYw/MDAxNzg5ODA0MTg5NjUz.9_VoqFTug6Jv3RtFfqGLGL5hFsPZcNTJqQq7QEEDCrMg.hGTlbRZi4e0B8EZu31rzf7j69iYGQLzNgI7MzlSx_YMg.JPEG/67E35E17-2B35-4242-88BE-FBFA32CF14FF.jpeg"
    ],
    "price": "50,000원~",
    "score": 4.87,
    "reviews": 606,
    "naverId": "1955723751",
    "visible": true
  },
  {
    "id": "s006",
    "name": "더풋샵마사지 백석역점",
    "type": "풋/바디",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "백석동",
    "address": "경기 고양시 일산동구 일산로 46 남정씨티프라자3차 403호",
    "phone": "031-905-7707",
    "lat": 37.6423224,
    "lng": 126.7877186,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "일",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "목",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "풋/바디 전문입니다. 백석역 1,2번 출구 앞 파리바게트 건물 4층에 위치해 있습니다. 예약, 무선 인터넷, 주차 가능합니다. 가격은 48,000원~입니다. 네이버 방문자 리뷰 476개, 평점 4.6입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20230113_286/1673590296779GdLcX_JPEG/A7_06872.jpg",
      "https://ldb-phinf.pstatic.net/20251005_87/1759625844687xT2m4_JPEG/1006%C8%DE%B9%AB_%281%29.jpg",
      "https://ldb-phinf.pstatic.net/20250726_78/17534983832070Vy7r_JPEG/%B9%CE%BB%FD%C8%B8%BA%B9_%BC%D2%BA%F1%C4%ED%C6%F9_%B9%AB%B7%E1%B3%AA%B4%AE_%B8%DE%C0%CE%C0%CC%B9%CC%C1%F6_4.jpg",
      "https://ldb-phinf.pstatic.net/20240605_159/1717565719540naAAV_JPEG/KakaoTalk_20240605_100854491.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA3MTJfMjE1/MDAxNzgzODE4MzAyNzc3.dm5PLxvN_iujPHimfGViJ8lLDrIcAJE6PFEFAS1SxFwg.LVEhQ2R36KVWxwbqxITHMbnM4mfg6bqSWEWiwj4LvuMg.JPEG/20260712_100213.jpg.jpg"
    ],
    "price": "48,000원~",
    "score": 4.6,
    "reviews": 476,
    "naverId": "1255164379",
    "visible": true
  },
  {
    "id": "s007",
    "name": "더풋샵마사지 라페스타점",
    "type": "풋/바디",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "장항동",
    "address": "경기 고양시 일산동구 호수로 662 삼성라끄빌오피스텔 2층 202호 (구) 소네피트",
    "phone": "0507-1494-8668",
    "lat": 37.6609245,
    "lng": 126.7658753,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "일",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "월",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "목",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "풋/바디 전문입니다. 더풋샵 라페스타점 찾아오시는 길\n\n주소\n경기도 고양시 일산동구 호수로 662\n삼성라끄빌오피스텔 202호\n(구) 소네피트\n\n라페스타 먹자골목에서 호수공원 방향으로 오시면 약손마사지가 있는 삼성라끄빌오피스텔 2층(202호)에 위치해 있습니다. 호수공원과 가까워 처음 방문하시는 분들도 쉽게 찾으실 수 있습니다.\n\n지하철 3호선 정발산역 2번 출구에서 도보 약 10분 거리이며, 킨텍스와 장항IC에서도 차량으로 약 5분이면 편리하게 오실 수 있습니다.\n\n건물 내 넓은 주차장을 이용하실 수 있으며, 3시간 무료 주차가 가능합니다. 예약 시간보다 조금 일찍 도착하셔도 편하게 주차 후 방문하실 수 있습니다.\n\n찾아오시는 길이 어려우시면 언제든지 연락 주세요.\n예약문의 031-932-8668. 단체 이용 가능, 예약, 무선 인터넷, 남/녀 화장실 구분, 대기공간, 간편결제, 주차 가능합니다. 네이버 방문자 리뷰 204개, 평점 4.86입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260815_140/1786784043139wbGIu_JPEG/ChatGPT_Image_2026%B3%E2_8%BF%F9_15%C0%CF_%BF%C0%C8%C4_05_38_44.jpg",
      "https://ldb-phinf.pstatic.net/20230511_98/1683784811307R3YXk_JPEG/KakaoTalk_20230509_163302832_18.jpg",
      "https://ldb-phinf.pstatic.net/20240803_24/1722682005335pEAf6_JPEG/%C7%B2%BC%A53.jpg",
      "https://ldb-phinf.pstatic.net/20240803_94/1722681984387VbnIF_JPEG/%C7%B2%BC%A55.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjAzMjNfMTYg/MDAxNzc0MTk5NTM0MTUw.3Dh4RzX8DUcBCxtigMJ3F-464WO_IrR08D3T2LqObuog.K28l5eu1eOIh7OS-sIwYCKQQCur4f6WbR1f_E8dLOVgg.JPEG/15F9E011-379E-4482-914C-C47E87364ED8.jpeg"
    ],
    "price": null,
    "score": 4.86,
    "reviews": 204,
    "naverId": "37350675",
    "visible": true
  },
  {
    "id": "s008",
    "name": "건강드림안마원",
    "type": "안마",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "정발산동",
    "address": "경기 고양시 일산동구 일산로 460 석우빌딩 502호",
    "phone": "0507-1424-2043",
    "lat": 37.6743922,
    "lng": 126.7762272,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "09:00",
          "close": "17:00",
          "brk": []
        },
        {
          "day": "일",
          "open": "13:00",
          "close": "18:00",
          "brk": []
        },
        {
          "day": "월",
          "open": "16:00",
          "close": "19:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "09:00",
          "close": "19:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "09:00",
          "close": "19:00",
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": "09:00",
          "close": "20:00",
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "안마 전문입니다. 밤가시마을 3단지 버스정류장 앞입니다.\n(제자광성교회 옆). 예약, 무선 인터넷, 남/녀 화장실 구분, 주차 가능합니다. 가격은 66,000원~입니다. 네이버 방문자 리뷰 179개, 평점 4.86입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20211025_209/16351255781674nFM7_JPEG/6770NCadWi9G177CzapyfhfS.jpg",
      "https://ldb-phinf.pstatic.net/20211025_30/1635125610754xnroT_JPEG/oNkB1miqs7h9JXgiJROVQIKK.jpg",
      "https://ldb-phinf.pstatic.net/20211025_175/163512562020465GIc_JPEG/G4ZIdAcP2DFNjElSYqhgL4jO.jpg",
      "https://ldb-phinf.pstatic.net/20211025_215/16351256328967IUL5_JPEG/UluHKnt5N2V9zvefxID6ROQo.jpg",
      "https://blogfiles.pstatic.net/MjAyNjA5MTNfOTcg/MDAxNzg5MjkwMzk0NTA1.IvsoIjXpRcaRPANWL_I3T1TLlhd2Rq8GEXT06mQhqgIg.N7Gcp43XILJAEXfgn3_cQQ0g_7lCUQH3P3hSF0x17OMg.JPEG/KakaoTalk_20260912_153900003_17.jpg/5712x4284"
    ],
    "price": "66,000원~",
    "score": 4.86,
    "reviews": 179,
    "naverId": "1178818613",
    "visible": true
  },
  {
    "id": "s009",
    "name": "힐링캠프마사지",
    "type": "테라피",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "화정동",
    "address": "경기 고양시 덕양구 화신로260번길 37 진솔프라자 5층 501-1호",
    "phone": null,
    "lat": 37.6324879,
    "lng": 126.8325775,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "17:00",
          "brk": []
        },
        {
          "day": "일",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "테라피 전문입니다. 화정역 1번출구 5분거리. 예약, 주차, 무선 인터넷, 남/녀 화장실 구분, 단체 이용 가능 가능합니다. 가격은 23,000원~입니다. 네이버 방문자 리뷰 146개, 평점 4.83입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20191006_45/15703071438163lgO8_JPEG/GUFxbjVcR0uH_kYM2N1AUfty.jpeg.jpg",
      "https://ldb-phinf.pstatic.net/20191006_107/1570307116242Gsi94_JPEG/5hMXrDwVBY-acNRQ4RLfC7cJ.jpeg.jpg",
      "https://ldb-phinf.pstatic.net/20191101_250/1572567574895Hts6S_JPEG/oIQeCOC0224XDlTXZdJpSauU.jpeg.jpg",
      "https://ldb-phinf.pstatic.net/20191120_6/15742268332438xtEE_JPEG/SpULl_PLEdDvVlVj2aYhDoaM.jpg",
      "https://ldb-phinf.pstatic.net/20191120_96/1574226724599f67Vc_JPEG/eyKxU0LYRK31SCxTah7ItEDM.jpg"
    ],
    "price": "23,000원~",
    "score": 4.83,
    "reviews": 146,
    "naverId": "21817887",
    "visible": true
  },
  {
    "id": "s010",
    "name": "노블린에스테틱&스파",
    "type": "스파/에스테틱",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "식사동",
    "address": "경기 고양시 일산동구 위시티로 81 풍산트윈시티 2동203호",
    "phone": "0507-1435-9971",
    "lat": 37.6792862,
    "lng": 126.8114821,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "18:00",
          "brk": []
        },
        {
          "day": "일",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "21:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "21:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "21:00",
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "스파/에스테틱 전문입니다. 일산 피부관리샵 노블린에스테틱&스파 의 네비게이션 주소는\n[경기 고양시 일산동구 위시티로 81] 입니다.\n\n풍산역에서 차량으로 9분 소요되며 대중교통 버스 이용시\n999번 으로 19분 소요됩니다.\n 위시티주상복합단지 정류장에 하차 하시면\n길건너편 위시티 신한은행 건물 2층에 위치하고 있습니다.\n\n주차안내\n주차는 건물 지하에 무료로 주차 가능합니다. 예약, 주차 가능합니다. 가격은 80,000원~입니다. 네이버 방문자 리뷰 150개, 평점 4.95입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20241217_162/1734435396743eKt2U_PNG/%B3%EB%BA%ED%B8%B0_%BB%E7%C1%F8_1.png",
      "https://ldb-phinf.pstatic.net/20241217_213/1734435396756z0sor_PNG/%B3%EB%BA%ED%B8%B0_%BB%E7%C1%F8_2.png",
      "https://ldb-phinf.pstatic.net/20150831_283/1441019669021qRshA_JPEG/SUBMIT_1366623470121_32284398.jpg",
      "https://ldb-phinf.pstatic.net/20241217_234/1734435478828G6y71_PNG/%B3%EB%BA%ED%B8%B0_%BB%E7%C1%F8_3.png",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MTdfNzMg/MDAxNzg5NjE1MjkxNDc4.mrs7iJuo-QemJ94aOjpwmwjymbd9rkoDmsEG5f8uiVkg.gvXv4UT9vHNi7AjlpRtulEmpdrh_Zy8h86y2-qY2JLgg.JPEG/IMG_0726.jpeg"
    ],
    "price": "80,000원~",
    "score": 4.95,
    "reviews": 150,
    "naverId": "32284398",
    "visible": true
  },
  {
    "id": "s011",
    "name": "힐링바디샵 마사지 일산점",
    "type": "마사지",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "식사동",
    "address": "경기 고양시 일산동구 위시티1로 6-70",
    "phone": "0507-1425-6027",
    "lat": 37.6733078,
    "lng": 126.8067402,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "일",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "목",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        },
        {
          "day": "금",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        }
      ]
    },
    "intro": "마사지 전문입니다. 화덕으러간고등어건물 4층 힐링바디샵. 예약, 단체 이용 가능, 주차, 남/녀 화장실 구분 가능합니다. 네이버 방문자 리뷰 170개, 평점 4.99입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20251222_34/1766376450740sMnrG_PNG/%C8%FA%B8%B5%B9%D9%B5%F0%BC%A5.png",
      "https://ldb-phinf.pstatic.net/20260504_260/1777856722322gQHjA_JPEG/%C1%A6%B8%F1%C0%BB_%C0%D4%B7%C2%C7%D8%C1%D6%BC%BC%BF%E4..jpg",
      "https://ldb-phinf.pstatic.net/20250410_7/1744259115335enwl4_JPEG/KakaoTalk_20250410_132244358.jpg",
      "https://ldb-phinf.pstatic.net/20250410_184/1744259115398C8HU8_JPEG/KakaoTalk_20250410_132244358_01.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA0MDJfMjU4/MDAxNzc1MTIyMzA0Mzky.L4NJSOJfs1wOGykSiaUJBv8_7R6t75NyaCe4boyEZ2gg.aYiftL0xj862hZQR10hn05xMcWsAxkcCH1jpePl7bbIg.JPEG/20260402_121028.jpg.jpg"
    ],
    "price": null,
    "score": 4.99,
    "reviews": 170,
    "naverId": "36751033",
    "visible": true
  },
  {
    "id": "s012",
    "name": "홍마사지 고양화정점",
    "type": "발관리/마사지",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "화정동",
    "address": "경기 고양시 덕양구 화정로 53 새롬프라자 504호",
    "phone": "0507-1308-5443",
    "lat": 37.6351911,
    "lng": 126.8319146,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "02:00",
          "brk": []
        },
        {
          "day": "일",
          "open": "10:00",
          "close": "02:00",
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "02:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "02:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "02:00",
          "brk": []
        },
        {
          "day": "목",
          "open": "10:00",
          "close": "02:00",
          "brk": []
        },
        {
          "day": "금",
          "open": "10:00",
          "close": "02:00",
          "brk": []
        }
      ]
    },
    "intro": "발관리/마사지 전문입니다. [지하철 이용 시]\n화정역 3번출구 도보 1분거리\n\n[버스 이용 시]\n023번, 030번, 031번, 060번, 065번 버스 이용이 가능합니다.\n\n[도보, 차량 이용 시]\n\n홍마사지 고양화정점은 경기 고양시 덕양구 화정동 969-1에 위치해 있습니다. 화정역 중심상권에 자리하고 있어 대중교통은 물론 차량으로도 편리하게 방문하실 수 있습니다. 차량 이용 시에는 인근 주차장을 이용하실 수 있으며, 내비게이션에서 '홍마사지 고양화정점' 또는 주소를 검색하시면 쉽게 찾아오실 수 있습니다. 처음 방문하시는 분들도 네이버 지도 길찾기를 이용하시면 더욱 편리하게 방문하실 수 있습니다. 남/녀 화장실 구분, 예약, 주차 가능합니다. 가격은 40,000원~입니다. 네이버 방문자 리뷰 175개, 평점 4.97입니다.",
    "photos": [
      "https://naverbooking-phinf.pstatic.net/20260708_50/17834919108864qcIn_JPEG/image.jpg",
      "https://naverbooking-phinf.pstatic.net/20260708_118/1783491038971t8fGl_PNG/image.png",
      "https://naverbooking-phinf.pstatic.net/20260708_56/1783491039218TIL63_PNG/image.png",
      "https://ldb-phinf.pstatic.net/20260709_296/1783563073239mxr2n_JPEG/KakaoTalk_20260709_110949540_06.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MTdfMzkg/MDAxNzg5NjU2NTM3OTgy.eR0nNbdNBM9Fpv7WugdOPF7NLI3RA15uYQulfPLx_gkg.UdjwG2C8jgaVaZRxv2fIZLmL_sOpibfUOlJYqcrodJQg.JPEG/review_photo_1.jpg"
    ],
    "price": "40,000원~",
    "score": 4.97,
    "reviews": 175,
    "naverId": "2073595263",
    "visible": true
  },
  {
    "id": "s013",
    "name": "에스테티아 일산라페스타점",
    "type": "에스테틱",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "장항동",
    "address": "경기 고양시 일산동구 무궁화로 18 남정씨티프라자 1차 301호",
    "phone": "031-903-5930",
    "lat": 37.6617062,
    "lng": 126.7669205,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "19:00",
          "brk": []
        },
        {
          "day": "일",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "21:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "21:00",
          "brk": []
        },
        {
          "day": "수",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "에스테틱 전문입니다. 에스테티아 일산라페스타점은 라페스타 F동 주차장입구 맞은편 건물에 위치합니다,. 예약, 무선 인터넷, 주차 가능합니다. 가격은 70,000원~입니다. 네이버 방문자 리뷰 131개, 평점 4.84입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20250106_201/1736142701700Xoh1I_JPEG/1000013991.jpg",
      "https://ldb-phinf.pstatic.net/20220420_146/1650432228146MteSr_JPEG/%BF%EB%B7%AE%C1%D9%C0%CE%B0%CD.jpg",
      "https://ldb-phinf.pstatic.net/20220420_179/1650432228100F62H2_JPEG/KakaoTalk_20220418_180711538.jpg",
      "https://ldb-phinf.pstatic.net/20181203_39/1543805411928mJDWc_JPEG/jLZHYKjm5WHEcZJITreVo6EM.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA3MjNfNjYg/MDAxNzg0Nzg0MDY0ODg3.osdT6fGnxMMAiu3bHLTOSTz_ouynqOgI1Qu7DqlERvQg.l-bR828fJJDX3cCk66Hkp4z_a-PwlN4en2EWCjK0ZZMg.JPEG/7BF91705-61B4-4A77-9987-2A8E2DC0EB28.jpeg"
    ],
    "price": "70,000원~",
    "score": 4.84,
    "reviews": 131,
    "naverId": "1766704318",
    "visible": true
  },
  {
    "id": "s014",
    "name": "산후명인 일산점",
    "type": "산후관리",
    "city": "고양시",
    "gu": "일산서구",
    "dong": "탄현동",
    "address": "경기 고양시 일산서구 산현로17번길 7-8 102호 Q052호",
    "phone": "0507-1429-0707",
    "lat": 37.690034,
    "lng": 126.7629987,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "일",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "16:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "16:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "16:00",
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "산후관리 전문입니다. 방문접수/출장, 간편결제 가능합니다. 네이버 방문자 리뷰 89개, 평점 4.9입니다.",
    "photos": [
      "https://naverbooking-phinf.pstatic.net/20251208_34/1765159949085SttvI_JPEG/%BB%EA%C8%C4%B8%ED%C0%CEN%C7%C3%B7%B9%C0%CC%BD%BA%281%29.jpg",
      "https://naverbooking-phinf.pstatic.net/20251208_264/1765159949793b2g38_JPEG/%BB%EA%C8%C4%B8%ED%C0%CEN%C7%C3%B7%B9%C0%CC%BD%BA%282%29.jpg",
      "https://naverbooking-phinf.pstatic.net/20251208_75/1765159950612xqhdl_JPEG/%BB%EA%C8%C4%B8%ED%C0%CEN%C7%C3%B7%B9%C0%CC%BD%BA%283%29.jpg",
      "https://naverbooking-phinf.pstatic.net/20251208_257/1765159951376ficlb_JPEG/%BB%EA%C8%C4%B8%ED%C0%CEN%C7%C3%B7%B9%C0%CC%BD%BA%284%29.jpg",
      "https://blogfiles.pstatic.net/MjAyNjA5MTVfMzQg/MDAxNzg5NDczMzY3MDEy.-el723uS1rgtYys8rIISwfdIua6NIMe7NCPou-aWnP8g.47W200_FtkXRgYHngaWtgD8tFhUH19hqccMh997S3Bgg.JPEG/IMG%EF%BC%BF2190.JPG/900x1200"
    ],
    "price": null,
    "score": 4.9,
    "reviews": 89,
    "naverId": "1084039268",
    "visible": true
  },
  {
    "id": "s015",
    "name": "미소원스킨앤바디",
    "type": "바디케어",
    "city": "고양시",
    "gu": "일산서구",
    "dong": "덕이동",
    "address": "경기 고양시 일산서구 하이파크1로 77 하이스퀘어 204호",
    "phone": "0507-1446-7553",
    "lat": 37.6966078,
    "lng": 126.7564061,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "09:00",
          "close": "18:00",
          "brk": []
        }
      ]
    },
    "intro": "바디케어 전문입니다. [주차 정보]\n\n자차를 이용해 방문하시는 고객님들을 위해 편리한 주차 환경을 제공합니다.\n\n주차 장소: 하이스퀘어 건물 내 주차장 이용 가능. 예약, 무선 인터넷, 남/녀 화장실 구분, 주차 가능합니다. 가격은 70,000원~입니다. 네이버 방문자 리뷰 112개, 평점 4.95입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260224_91/1771860468415oKh21_JPEG/KakaoTalk_20240122_221914371.jpg",
      "https://ldb-phinf.pstatic.net/20260224_122/17718604684195E2Ii_JPEG/KakaoTalk_20240122_221914371_01.jpg",
      "https://ldb-phinf.pstatic.net/20260224_90/17718604685940Fxyl_JPEG/KakaoTalk_20240122_221914371_02.jpg",
      "https://ldb-phinf.pstatic.net/20260224_96/1771860468533xJuiX_JPEG/KakaoTalk_20240122_221911851.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA0MjRfNTMg/MDAxNzc2OTU2NTkzNTMw.q0JVsWsp58mvM74ipBMrPqZd6lhWXw41Iu-KtyK9HI0g.aYbvsEvO2D8hG6noCvNkJ-o6c2erVjL9Rqa0hxrdZTwg.JPEG/Screenshot_20260424_000143_KakaoTalk.jpg.jpg"
    ],
    "price": "70,000원~",
    "score": 4.95,
    "reviews": 112,
    "naverId": "36123687",
    "visible": true
  },
  {
    "id": "s016",
    "name": "뷰웰에스테틱 향동점",
    "type": "에스테틱",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "향동동",
    "address": "경기 고양시 덕양구 향기로 123 5층 511호",
    "phone": "0507-1380-4110",
    "lat": 37.6006777,
    "lng": 126.894271,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "09:00",
          "close": "20:00",
          "brk": []
        },
        {
          "day": "일",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "월",
          "open": "09:00",
          "close": "20:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "09:00",
          "close": "20:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "09:00",
          "close": "20:00",
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "에스테틱 전문입니다. 향동 중심지구 센타프라자 - DMC 중흥S클래스 앞, 디엠씨 하우스 앞, 고양시립 늘품어린이집 앞\n\n도보 오시는 길\n향동초, 향동중 5분 거리\n향동 지식산업센터, 고양 지식산업센터 10분 거리\n\n버스 오시는 길\n수색역에서 20여분 075A번, 730번 등\n\n차로 오실 경우 화정/삼송/도래울에서 20분 거리\n\n무료 주차시설 완비. 주차, 무선 인터넷, 예약, 남/녀 화장실 구분 가능합니다. 네이버 방문자 리뷰 108개, 평점 5입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20240124_94/1706075944938lsugc_JPEG/1000031760.jpg",
      "https://ldb-phinf.pstatic.net/20230819_109/16924364676268EHj0_JPEG/20230729_083322.jpg",
      "https://ldb-phinf.pstatic.net/20230820_82/1692457641748soef3_JPEG/KakaoTalk_20220430_014013891_02.jpg",
      "https://ldb-phinf.pstatic.net/20230726_132/1690344472124onevr_PNG/1690343515419.png",
      "https://pup-review-phinf.pstatic.net/MjAyNjA1MTJfOTAg/MDAxNzc4NTg1ODU5NDc0.pHc2m_yeX7Plg80CyEJm8V9Z686rK_VduLfXjX7iR_kg.bNtPTM4tRYfB5v3FyLsJ8F-tb9P0KW1Sul9j7M3D1eMg.JPEG/20260512_180516.jpg"
    ],
    "price": null,
    "score": 5,
    "reviews": 108,
    "naverId": "1444925220",
    "visible": true
  },
  {
    "id": "s017",
    "name": "황실정통아로마마사지",
    "type": "아로마/건식",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "주교동",
    "address": "경기 고양시 덕양구 호국로 773 코스모프라자 2층",
    "phone": "031-968-4778",
    "lat": 37.6556555,
    "lng": 126.834802,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "12:00",
          "close": "06:00",
          "brk": []
        }
      ]
    },
    "intro": "아로마/건식 전문입니다. 코스모프라자 2층 입니다.(조마루감자탕건물2층). 예약, 무선 인터넷, 남/녀 화장실 구분, 단체 이용 가능, 주차 가능합니다. 가격은 50,000원~입니다. 네이버 방문자 리뷰 26개, 평점 5입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20230710_175/16889183092299SC6e_JPEG/1688918201493.jpg",
      "https://ldb-phinf.pstatic.net/20230710_248/16889183163787KiHP_JPEG/1688918216683.jpg",
      "https://ldb-phinf.pstatic.net/20230710_106/1688917930280xki5m_JPEG/Screenshot_20230710_005017.jpg",
      "https://ldb-phinf.pstatic.net/20230710_260/16889174860514h7DD_JPEG/1688916704672.jpg",
      "https://blogfiles.pstatic.net/MjAyNjA2MDFfMTI0/MDAxNzgwMjQ1MDY4NDA4.Pn59ijLrGc0uP6ApSURSDHDnO7SxtaQotSVA8lUZTtog.ypue29AR1zC3iJ3flvXmEWSm-MP5lK0hbPl0ZIqdzAog.JPEG/IMG%EF%BC%BF9391.jpg/900x676"
    ],
    "price": "50,000원~",
    "score": 5,
    "reviews": 26,
    "naverId": "1356523899",
    "visible": true
  },
  {
    "id": "s018",
    "name": "바다캐슬 주엽본점",
    "type": "발관리",
    "city": "고양시",
    "gu": "일산서구",
    "dong": "주엽동",
    "address": "경기 고양시 일산서구 주화로 70 6층 603호",
    "phone": "0507-1338-1094",
    "lat": 37.6697551,
    "lng": 126.760307,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "12:00",
          "close": "05:00",
          "brk": []
        }
      ]
    },
    "intro": "발관리 전문입니다. 고양시 일산서구 주엽동에 위치하고 있으며,\n주엽역2번출구에서 80M 우신프라자 6층에 있습니다. 예약, 무선 인터넷, 남/녀 화장실 구분, 대기공간, 단체 이용 가능, 주차 가능합니다. 가격은 40,000원~입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20240428_146/1714283733418HlLEK_JPEG/DSC09381.JPG",
      "https://ldb-phinf.pstatic.net/20240909_226/1725844038838YWrmf_JPEG/KakaoTalk_20240906_153744543.jpg",
      "https://ldb-phinf.pstatic.net/20240909_180/17258440389119thWB_JPEG/KakaoTalk_20240906_153744543_01.jpg",
      "https://ldb-phinf.pstatic.net/20240909_231/1725844038856I2FBp_JPEG/KakaoTalk_20240906_153744543_02.jpg",
      "https://ldb-phinf.pstatic.net/20240428_197/1714283733548oB7vQ_JPEG/DSC09424.JPG"
    ],
    "price": "40,000원~",
    "score": 0,
    "reviews": 26,
    "naverId": "1802274063",
    "visible": true
  },
  {
    "id": "s019",
    "name": "풀어드림",
    "type": "등관리",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "식사동",
    "address": "경기 고양시 일산동구 위시티2로 19",
    "phone": "031-965-2156",
    "lat": 37.6764212,
    "lng": 126.8128174,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        }
      ]
    },
    "intro": "등관리 전문입니다. 예약 가능합니다. 가격은 20,000원~입니다. 네이버 방문자 리뷰 26개, 평점 4.53입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20230104_233/1672787768550hfT90_JPEG/20221230_131252.jpg",
      "https://apis.naver.com/place/panorama/thumbnail/36105310/0?width=800&height=400&msgpad=1789822046287&md=C8KAPUwcDiStmO6ttHaNkUOThh4%3D"
    ],
    "price": "20,000원~",
    "score": 4.53,
    "reviews": 26,
    "naverId": "36105310",
    "visible": true
  },
  {
    "id": "s020",
    "name": "중국정통마사지",
    "type": "중국식 마사지",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "화정동",
    "address": "경기 고양시 덕양구 화신로 263 4층 410호",
    "phone": "0507-1383-0664",
    "lat": 37.6304621,
    "lng": 126.8320507,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "10:00",
          "close": "24:00",
          "brk": []
        }
      ]
    },
    "intro": "중국식 마사지 전문입니다. 화정역2번출구에서 로데오거리 방향으로 500m( 화정중앙공원 맞은편). 주차, 예약 가능합니다. 네이버 방문자 리뷰 24개, 평점 5입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20220505_106/1651742980872uvAMG_JPEG/1646904684010.jpg",
      "https://apis.naver.com/place/panorama/thumbnail/1619823274/0?width=800&height=400&msgpad=1789822046890&md=U9%2FhU%2BKV1srrN3UeSfqOCLt93GY%3D"
    ],
    "price": null,
    "score": 5,
    "reviews": 24,
    "naverId": "1619823274",
    "visible": true
  },
  {
    "id": "s021",
    "name": "명품바디풋샵",
    "type": "풋/바디",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "중산동",
    "address": "경기 고양시 일산동구 중산로 105 현해프라자 202호",
    "phone": "0507-1377-9216",
    "lat": 37.6814721,
    "lng": 126.7813688,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "일",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": "10:00",
          "close": "20:00",
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "풋/바디 전문입니다. 현프라자202호 명품바디풋샵\n주차 무료 가능합니다. 예약, 무선 인터넷, 남/녀 화장실 구분, 단체 이용 가능, 대기공간, 주차 가능합니다. 가격은 25,000원~입니다. 네이버 방문자 리뷰 50개, 평점 5입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260602_72/1780391429213JUSHr_JPEG/KakaoTalk_20260602_175426898_13.jpg",
      "https://ldb-phinf.pstatic.net/20260905_54/1788597915312KDF0c_JPEG/%DA%B0%E3%E1%F8%B8_20260905174458.jpg",
      "https://ldb-phinf.pstatic.net/20260602_34/1780391385525AA9Vo_JPEG/KakaoTalk_20260602_175409503_07.jpg",
      "https://ldb-phinf.pstatic.net/20260602_107/1780391385660nsGUU_JPEG/KakaoTalk_20260602_175409503_03.jpg",
      "https://blogfiles.pstatic.net/MjAyNjA5MThfNDIg/MDAxNzg5NjU3NzA2NTIy.J4AdyHoYtJqO7Y7JAv-dO9Rll0IR6khHFekCdiNCpxUg.Xbc_ahXHDhJevnv1P0zCSVGU3mb-H2aRPjl-F3wmtr4g.JPEG/KakaoTalk_20260917_100906960_08.jpg/5712x4284"
    ],
    "price": "25,000원~",
    "score": 5,
    "reviews": 50,
    "naverId": "1260677200",
    "visible": true
  },
  {
    "id": "s022",
    "name": "바디 리치 마사지",
    "type": "바디케어",
    "city": "고양시",
    "gu": "일산서구",
    "dong": "일산동",
    "address": "경기 고양시 일산서구 탄중로471번길 52",
    "phone": "0507-1414-9071",
    "lat": 37.6861234,
    "lng": 126.7728052,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "00:00",
          "close": "24:00",
          "brk": []
        }
      ]
    },
    "intro": "바디케어 전문입니다. 일산마사지 I 바디리치마사지 찾아오는 방법\n\n주소 : 경기 고양시 일산서구 탄중로471번길 52\n\n[도보 이용 시]\n\n일산역 2번 출구에서 약 550m 거리로 도보 7분 정도 소요됩니다.\n일산2동 행정복지센터와 일산서구보건소, 일산시장 인근에 위치해 있어 찾아오기 편리합니다.\n\n[차량 이용 시]\n\n일산역 기준 차량 3분 거리입니다.\n네비게이션에 '일산동 592-34' 검색 후 방문해 주세요.\n\n[주차 안내]\n\n매장 앞 주차 가능하며 발렛파킹도 제공되고 있어 편하게 이용하실 수 있습니다. 예약, 무선 인터넷, 대기공간, 방문접수/출장, 간편결제, 주차, 발렛파킹 가능합니다. 가격은 40,000원~입니다. 네이버 방문자 리뷰 26개, 평점 5입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20251128_50/1764318558659ddO3d_PNG/KakaoTalk_20251125_163339376.png",
      "https://ldb-phinf.pstatic.net/20251128_206/1764318558577h8KlB_PNG/KakaoTalk_20251125_163339376_01.png",
      "https://ldb-phinf.pstatic.net/20251128_73/1764318558556eVS2P_PNG/KakaoTalk_20251125_163339376_02.png",
      "https://ldb-phinf.pstatic.net/20251128_106/1764318558478j7lWx_PNG/KakaoTalk_20251125_163339376_03.png",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MTNfMTk1/MDAxNzg5MjM2MjQ2OTg5.bauOm1WX2ZLKTbk_TDoNefg5IKGdQxO9MDzr1lRbXfAg.qOTTxOID9s_jPWrm-2YEtfT3oQS99tO3GNdW0Kr-X3Ig.JPEG/16D8804D-B3F1-42BD-9917-CAD06696931C.jpeg"
    ],
    "price": "40,000원~",
    "score": 5,
    "reviews": 26,
    "naverId": "2059275015",
    "visible": true
  },
  {
    "id": "s023",
    "name": "로얄 타이 마사지",
    "type": "타이",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "백석동",
    "address": "경기 고양시 일산동구 중앙로 1047 2층 207호",
    "phone": "0507-1337-1331",
    "lat": 37.6431275,
    "lng": 126.7872025,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "13:00",
          "close": "02:00",
          "brk": []
        }
      ]
    },
    "intro": "타이 전문입니다. 백석역 3번출구 앞 영림브레아 2층 207호 입니다. 단체 이용 가능, 주차, 무선 인터넷, 예약 가능합니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20191027_75/1572178728970wGNa8_JPEG/BncSai34Emps6E9CYx36i-1T.jpg",
      "https://ldb-phinf.pstatic.net/20191027_50/157217872893050tLS_JPEG/VeETP_WTAIJDTwAaFYkiyM7F.jpg",
      "https://ldb-phinf.pstatic.net/20191027_140/1572178728926HBqRx_JPEG/Y-qTvLvaWBcCAQ7ivcGow-DN.jpg",
      "https://ldb-phinf.pstatic.net/20191027_70/1572178728895bd4YM_JPEG/PxQ_B4mhyIRSmN6v5ljvTufF.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNTA3MTBfMTQ5/MDAxNzUyMDc4MDI3NDcz.tOeM4xIfUd5Zg-act7cOGPwkywKOpsXK-KJ4Mc0XRQgg.CDtrigEuyhg_yMWTF6r4RYEZb60E6CrSnXeW6hpxrAAg.JPEG/20250709_231657.jpg.jpg"
    ],
    "price": null,
    "score": 0,
    "reviews": 21,
    "naverId": "1365534424",
    "visible": true
  },
  {
    "id": "s024",
    "name": "사월의테라피",
    "type": "수기테라피",
    "city": "고양시",
    "gu": "일산서구",
    "dong": "대화동",
    "address": "경기 고양시 일산서구 중앙로 1560 다산스카이빌 2층",
    "phone": "0507-1400-2421",
    "lat": 37.6760429,
    "lng": 126.7485534,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        },
        {
          "day": "일",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "수기테라피 전문입니다. 네비게이션 : 사월의테라피 검색\n\n<대중교통>\n대화역 5,6번출구 이용하셔서 서구청방향으로 올라오시면 1층에 위치한 GS편의점 or CU편의점 위치한 건물 2층 (다산스카이빌2층). 예약, 무선 인터넷, 남/녀 화장실 구분, 주차 가능합니다. 가격은 77,000원~입니다. 네이버 방문자 리뷰 19개, 평점 5입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20191024_1/1571879647749XW3Md_JPEG/x1PdzUhtVMt_iRvox9EzreWe.jpg",
      "https://ldb-phinf.pstatic.net/20191024_252/1571879648382dvW6o_JPEG/spWQk_7_RAIGJd5s6c5KA19y.jpg",
      "https://ldb-phinf.pstatic.net/20191024_139/1571879647701oEjds_JPEG/bLJeHNCo-vhtsUsFwXyf1Wry.jpg",
      "https://ldb-phinf.pstatic.net/20191024_242/1571879647621Ar47b_JPEG/LqUxRlIIcb2a1YiW4qPSM63i.jpg",
      "https://ldb-phinf.pstatic.net/20191024_93/1571879648294P53NY_JPEG/5ISfpeYd78b1rZ2XpzVs3wmH.jpg"
    ],
    "price": "77,000원~",
    "score": 5,
    "reviews": 19,
    "naverId": "36886664",
    "visible": true
  },
  {
    "id": "s025",
    "name": "제일안마원",
    "type": "안마",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "화정동",
    "address": "경기 고양시 덕양구 화정로 53-1 글로리아프라자 309호",
    "phone": "031-963-9222",
    "lat": 37.6354888,
    "lng": 126.8323815,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "일",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "월",
          "open": "09:00",
          "close": "20:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "화",
          "open": "09:00",
          "close": "20:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "수",
          "open": "09:00",
          "close": "20:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "목",
          "open": "09:00",
          "close": "20:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        },
        {
          "day": "금",
          "open": "09:00",
          "close": "20:00",
          "brk": [
            {
              "start": "12:00",
              "end": "13:00"
            }
          ]
        }
      ]
    },
    "intro": "안마 전문입니다. 예약, 방문접수/출장 가능합니다. 네이버 방문자 리뷰 16개, 평점 4.83입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20150901_156/1441089647080Yimbp_JPEG/156167548476978_0.jpeg",
      "https://apis.naver.com/place/panorama/thumbnail/34321284/0?width=800&height=400&msgpad=1789822050301&md=zxpB6f4dY2tc3n%2FiR8tDqFw5tRQ%3D"
    ],
    "price": null,
    "score": 4.83,
    "reviews": 16,
    "naverId": "34321284",
    "visible": true
  },
  {
    "id": "s026",
    "name": "yj뷰티",
    "type": "뷰티/테라피",
    "city": "고양시",
    "gu": "일산서구",
    "dong": "주엽동",
    "address": "경기 고양시 일산서구 중앙로 1437 화성프라자",
    "phone": null,
    "lat": 37.670065,
    "lng": 126.760521,
    "hours": null,
    "intro": "뷰티/테라피 전문입니다. 주엽역4번출구로 나오시면 바로 옆에 있는 건물 2층입니다.kfc있는 건물 2층으로 오시면 됩니다. 예약 가능합니다. 네이버 방문자 리뷰 16개, 평점 5입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20220902_227/1662123380121PwvOP_JPEG/20220902_184326.jpg",
      "https://apis.naver.com/place/panorama/thumbnail/883139183/0?width=800&height=400&msgpad=1789822050795&md=HI6ZUOuRop2yLMnj2%2BX5Y%2FbhFw4%3D"
    ],
    "price": null,
    "score": 5,
    "reviews": 16,
    "naverId": "883139183",
    "visible": true
  },
  {
    "id": "s027",
    "name": "테라피아뜰리에 마사지 일산점",
    "type": "스웨디시/딥티슈",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "장항동",
    "address": "경기 고양시 일산동구 정발산로 15 5층 511, 512호",
    "phone": "0507-1348-8831",
    "lat": 37.6564196,
    "lng": 126.7705699,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "12:00",
          "close": "01:00",
          "brk": []
        }
      ]
    },
    "intro": "스웨디시/딥티슈 전문입니다. 1. 지하철 이용시\n3호선 정발산역에서 웨스턴 돔 방향, 일산MBC 맞은 편에 있습니다.\n\n2. 자차 이용시\n네이게이션 주소 검색 후 오시면 지하 주차장 무료 이용 가능합니다. 단체 이용 가능, 무선 인터넷, 남/녀 화장실 구분, 대기공간, 예약, 주차 가능합니다. 가격은 100,000원~입니다. 네이버 방문자 리뷰 46개, 평점 4.91입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260803_75/1785760039645fPTSd_JPEG/EBD8963F-2674-451E-933D-4BFAF53CAFCC.jpg",
      "https://ldb-phinf.pstatic.net/20260803_291/1785760042032AoavU_JPEG/IMG_6734.jpg",
      "https://ldb-phinf.pstatic.net/20260803_40/1785760042351gclVb_JPEG/IMG_6735.jpg",
      "https://ldb-phinf.pstatic.net/20260803_9/1785760042491h2Yo7_JPEG/IMG_6737.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA4MjFfOTgg/MDAxNzg3MzExOTEzMDQw.UzlvLTslBH0dxCKYv30jMgI3ioC20E68cI2287nsPVEg.iyi6WVwCe8cdFMJPik_yFJA5pz9w_Mcx1muqC3mz2Ewg.JPEG/96A29C91-4E04-4A78-8E3D-F042C925349E.jpeg"
    ],
    "price": "100,000원~",
    "score": 4.91,
    "reviews": 46,
    "naverId": "1575447573",
    "visible": true
  },
  {
    "id": "s028",
    "name": "에브리바디 마사지 일산점",
    "type": "마사지",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "장항동",
    "address": "경기 고양시 일산동구 중앙로1275번길 60-17 트루엘파크스테이 오피스텔 2층 211호",
    "phone": null,
    "lat": 37.6594338,
    "lng": 126.7680865,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "일",
          "open": "10:30",
          "close": "18:00",
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "20:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "20:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "20:00",
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "마사지 전문입니다. 트루엘파크스테이 오피스텔 2층에 위치해 있으며 홈플러스 뒷쪽 건물, 한국마사회 옆 건물입니다. 예약, 무선 인터넷, 남/녀 화장실 구분, 대기공간, 간편결제, 주차 가능합니다. 네이버 방문자 리뷰 66개, 평점 4.96입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260421_150/17767665064730hoxs_JPEG/IMG_6948.jpeg",
      "https://ldb-phinf.pstatic.net/20260904_263/1788494442413xr64u_JPEG/IMG_7484.jpg",
      "https://ldb-phinf.pstatic.net/20260904_274/1788494432900uEjem_JPEG/IMG_8624.jpg",
      "https://ldb-phinf.pstatic.net/20260421_131/1776746847780BjLbd_JPEG/IMG_7175.jpeg",
      "https://blogfiles.pstatic.net/MjAyNjA5MTFfMTgx/MDAxNzg5MTExNTAwNDAz.2NftAxCTxZJztlEaDw7YgwypZ_ose5m1k5nmBAS3vkUg.fUbgAEgHB_3fSRMZpf9WyKVvcqeW1uPCjIIrUb-iNqIg.JPEG/IMG%EF%BC%BF7524.jpg/900x676"
    ],
    "price": null,
    "score": 4.96,
    "reviews": 66,
    "naverId": "2009946969",
    "visible": true
  },
  {
    "id": "s029",
    "name": "한송스포츠마사지 덕은지구점",
    "type": "스포츠",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "덕은동",
    "address": "경기 고양시 덕양구 으뜸로 130 위프라임 트윈타워 2층 207호",
    "phone": "0507-1369-4087",
    "lat": 37.5794583,
    "lng": 126.8706296,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "10:00",
          "close": "02:00",
          "brk": []
        }
      ]
    },
    "intro": "스포츠 전문입니다. [버스 이용 시]\n\n7602번, 7726번, 022A번, 022B번, 054번 버스를 이용하실 수 있습니다.\n\n[도보, 차량 이용시]\n\n한송스포츠마사지 덕은지구점은 경기 고양시 덕양구 덕은동 716에 위치해 있습니다. 스타벅스 고양덕은점이 있는 건물 2층 207호로 올라오시면 됩니다. 차량 이용 시 내비게이션에서 한송스포츠마사지 덕은지구점 또는 주소를 검색하시면 편리하게 찾아오실 수 있습니다. 예약, 남/녀 화장실 구분, 방문접수/출장, 무선 인터넷, 주차 가능합니다. 네이버 방문자 리뷰 192개, 평점 4.99입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260915_192/178946243525103reC_JPEG/9428b980-f6f8-474a-89fc-be4a0afb881e.jpg",
      "https://ldb-phinf.pstatic.net/20230719_250/16897653700261Uq8K_JPEG/%C7%D1%BC%DB%BB%E7%C1%F8.jpg",
      "https://ldb-phinf.pstatic.net/20231130_39/1701334216531RJc5V_JPEG/KakaoTalk_20231129_115403958_03.jpg",
      "https://ldb-phinf.pstatic.net/20231130_106/1701334216586RLuKP_JPEG/KakaoTalk_20231129_115403958_02.jpg",
      "https://blogfiles.pstatic.net/MjAyNjA5MTZfNDAg/MDAxNzg5NTYzOTc5NTE1.TeJIMHohkds5L8bjFKE03OKu1zv3pw2qicGQulsN82cg.Y1wyLT7sq0boFX5obQhtiLPiFZi0o3C0mZmpIN2uDz8g.JPEG/KakaoTalk_20260916_160207453_08.jpg/2274x3024"
    ],
    "price": null,
    "score": 4.99,
    "reviews": 192,
    "naverId": "1818565956",
    "visible": true
  },
  {
    "id": "s030",
    "name": "더하노이풋앤바디 지축점",
    "type": "풋/바디",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "지축동",
    "address": "경기 고양시 덕양구 지축로 62 아인시티 3층 303~304호",
    "phone": "0507-1320-6311",
    "lat": 37.6495263,
    "lng": 126.9150149,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "일",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": "10:00",
          "close": "23:30",
          "brk": []
        }
      ]
    },
    "intro": "풋/바디 전문입니다. 지축역에서 푸르지오아파트 방향으로 3분정도 걸어오면 1층에 파리바게트,베스킨라빈스 있는 건물 3층입니다. 예약, 무선 인터넷, 남/녀 화장실 구분, 간편결제, 주차 가능합니다. 네이버 방문자 리뷰 379개, 평점 4.88입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260831_120/17881715543925xFgR_JPEG/019.jpg",
      "https://ldb-phinf.pstatic.net/20260831_268/1788171554366kGWja_JPEG/020.jpg",
      "https://ldb-phinf.pstatic.net/20260831_45/1788182597930hImsx_JPEG/%BD%BA%C5%E6_9%BF%F9%B4%DE_%C0%CC%BA%A5%C6%AE.jpg",
      "https://ldb-phinf.pstatic.net/20260806_299/1785994223629FehpS_JPEG/%B3%D7%C0%CC%B9%F6%C7%C3%B7%B9%C0%CC%BD%BA_1080x1080.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MDZfMjQ4/MDAxNzg4NzAxMzczNDYx.TKRm5FUtS4a1LjkUPxnO76OLAjGL4ehUcNvfwZwyKxYg.j7SOahoKyd1n3gW0w4NyOcKVgqr5ILAAkmWaWNjnqrQg.JPEG/13981295-1FE2-4266-95C9-D75AA1FD34EE.jpeg"
    ],
    "price": null,
    "score": 4.88,
    "reviews": 379,
    "naverId": "1620874070",
    "visible": true
  },
  {
    "id": "s031",
    "name": "티락타이",
    "type": "타이",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "백석동",
    "address": "경기 고양시 일산동구 중앙로 1048 르메이에르프라자 3층",
    "phone": null,
    "lat": 37.6436761,
    "lng": 126.7878807,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "12:00",
          "close": "03:00",
          "brk": []
        }
      ]
    },
    "intro": "타이 전문입니다. 일산 백석역 5번출구 도보1분거리\n전원 20~30대 실력있는 관리사님\n개인샤워실. 단체 이용 가능, 무선 인터넷, 대기공간, 예약, 주차 가능합니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20200722_190/15954019798653ospt_PNG/smr4c1pS0YT7LCu995HdK1F4.PNG.png",
      "https://apis.naver.com/place/panorama/thumbnail/1040571884/0?width=800&height=400&msgpad=1789822054267&md=7xvf%2FvcJC1iLj6rK2PtWl6uPNx0%3D"
    ],
    "price": null,
    "score": null,
    "reviews": null,
    "naverId": "1040571884",
    "visible": true
  },
  {
    "id": "s032",
    "name": "우리바디발마사지 일산점",
    "type": "스포츠/풋",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "장항동",
    "address": "경기 고양시 일산동구 무궁화로 25-3 이레빌딩2 304호",
    "phone": "0507-1495-5585",
    "lat": 37.6624602,
    "lng": 126.7669637,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "10:00",
          "close": "22:00",
          "brk": []
        }
      ]
    },
    "intro": "스포츠/풋 전문입니다. 네이버 검색창에 '우리바디발마사지 일산점' 검색하셔서 길찾기로 경로 확인후 오시면 쉽게 방문하실 수 있습니다.!\n\n일산호수공원에서 5분, 3호선 정발산역에서 13분 정도 소요됩니다.\n\n자동차로 오실 경우 '일산동부경찰서' '일산소방서' 사거리에서 호수공원 방면으로 진입하시면 라페스타 맞은편에 '본가' 건물 3층에 있습니다.\n\n지하주차장에 구비되어 있어서 주차가 쉽고 편리하며 주차비는 '무료' 주차 가능합니다^^\n\n대중교통으로 오시는 고객님의 경우\n지하철 이용고객은 3호선 정발산역 2번출구를 이용해주시고, 버스로 오시는 분들은 일산경찰서 버스정류장에서 하차하시면 도보로 5분거리에 위치해 있습니다.\n\n우리바디발마사지 일산점은 고객님들의 피로와 힐링에 항상 진심을 다하겠습니다!. 예약, 남/녀 화장실 구분, 무선 인터넷, 단체 이용 가능, 대기공간, 주차 가능합니다. 네이버 방문자 리뷰 656개, 평점 4.93입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260722_91/1784708123214yY2no_JPEG/IMG_1805.jpg",
      "https://ldb-phinf.pstatic.net/20260901_174/1788245641095x5r0l_JPEG/2418F539-0A9F-440B-B4B5-CCFEE444DD44.jpg",
      "https://ldb-phinf.pstatic.net/20260826_178/17877542917368tQmV_JPEG/0270048F-9F3E-4EA6-A682-25219E0724E3.jpg",
      "https://ldb-phinf.pstatic.net/20260720_272/17845444113210kJyQ_JPEG/IMG_1713.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MThfMjc3/MDAxNzg5Njk0NTgwNTYz.r0EweU8PjBzKlA_uW1G-9k8nJ8L2Fns62I2yYmfO9Kcg.o8K_yl1bUOKQwpQwN_2EMgud7DrOXaLAOS__YJPyJB8g.JPEG/1000017786.jpg.jpg"
    ],
    "price": null,
    "score": 4.93,
    "reviews": 656,
    "naverId": "37430014",
    "visible": true
  },
  {
    "id": "s033",
    "name": "진심을다한 마사지&스파 화정점",
    "type": "마사지/스파",
    "city": "고양시",
    "gu": "덕양구",
    "dong": "화정동",
    "address": "경기 고양시 덕양구 화신로272번길 30 제이케이 프라자 402호",
    "phone": "0507-1475-0444",
    "lat": 37.6322021,
    "lng": 126.8318546,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "일",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "목(9/24)",
          "open": null,
          "close": null,
          "brk": []
        },
        {
          "day": "금",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        }
      ]
    },
    "intro": "마사지/스파 전문입니다. 1. 도보이용시 : 3호선 화정역 2번출구에서 왼쪽 방향 286m 이동,, 스타램 화정2호점에서 왼쪽방향 23m이동하시면\n도착지는 도로의 왼쪽에 있습니다 :)\n2. 차량이용시 : 네비게이션에 경기도 고양시 덕양구 화신로272번길 30 검색후 도착지는 도로의 왼쪽에 있습니다 ^^\n(JK프라자 건물, 1층에 스타램 매장이 있는 건물입니다 ^^)\n\n롯데마트 화정점에서 도보 232m\n덕양구청에서 757m. 주차 가능합니다. 네이버 방문자 리뷰 899개, 평점 4.88입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260504_159/1777871470267nEvVz_JPEG/22.jpg",
      "https://ldb-phinf.pstatic.net/20260601_36/1780300150089nrsj9_JPEG/30.jpg",
      "https://ldb-phinf.pstatic.net/20250526_165/1748251074690OIHXD_JPEG/KakaoTalk_20210605_113131176_13.jpg",
      "https://ldb-phinf.pstatic.net/20250526_264/17482511192992nRwG_JPEG/KakaoTalk_20210605_113131176_09.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MTZfMjY2/MDAxNzg5NTI4NjQzNTMy.qoLa4Mw87jPcNuS-HxAiitltdU8SzDfEo4Q8fglzjqwg.izYi1nwTRwX28GUS_tA6RP5VeiRQHJqCg0-_qRQkq14g.JPEG/1000024451.jpg.jpg"
    ],
    "price": null,
    "score": 4.88,
    "reviews": 899,
    "naverId": "1722541515",
    "visible": true
  },
  {
    "id": "s034",
    "name": "테라피드레브 일산점",
    "type": "스포츠/테라피",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "장항동",
    "address": "경기 고양시 일산동구 정발산로 43-20 3층 316호",
    "phone": "0507-1469-8965",
    "lat": 37.6581975,
    "lng": 126.7734705,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "일",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "월",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "목",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "금",
          "open": "11:00",
          "close": "01:00",
          "brk": []
        }
      ]
    },
    "intro": "스포츠/테라피 전문입니다. 정발산역 1번 출구 바로 앞 센트럴프라자 건물 3층. 남/녀 화장실 구분, 예약, 무선 인터넷, 주차 가능합니다. 네이버 방문자 리뷰 344개, 평점 4.96입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20241101_154/1730462479072qOa0x_JPEG/1730447943381.jpg",
      "https://ldb-phinf.pstatic.net/20241101_171/173046248433048NhK_JPEG/1730447943481.jpg",
      "https://ldb-phinf.pstatic.net/20241101_241/1730462472222bcY37_JPEG/1730447943336.jpg",
      "https://ldb-phinf.pstatic.net/20241101_76/17304624652340og8u_JPEG/1730447943206.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA1MjRfMjMz/MDAxNzc5NjEwNDM3NjM0.yuspwToH7IgKcNDCCNoXQ9VUThpQFY9aByI__IFodHsg.uXznSK0WdLAKn57TqFsF1Mb0PJ6Xzrc4qAuL282Cy1Ig.JPEG/6CAF4A3B-8E70-40E8-82A8-F4CEEC83E464.jpeg"
    ],
    "price": null,
    "score": 4.96,
    "reviews": 344,
    "naverId": "1619899145",
    "visible": true
  },
  {
    "id": "s035",
    "name": "타이월드태국전통관리샵",
    "type": "타이/아로마/크림",
    "city": "파주시",
    "gu": "파주시",
    "dong": "동패동",
    "address": "경기 파주시 청석로 256 3층",
    "phone": "031-957-7779",
    "lat": 37.7246618,
    "lng": 126.7176972,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "11:00",
          "close": "02:00",
          "brk": []
        }
      ]
    },
    "intro": "타이/아로마/크림 전문입니다. 교하1번가빌딩 스타벅스건물3층입니다. 예약, 남/녀 화장실 구분, 대기공간, 무선 인터넷, 단체 이용 가능, 주차 가능합니다. 가격은 50,000원~입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20250207_254/1738930549719MXhxT_JPEG/20250207_211140.jpg",
      "https://ldb-phinf.pstatic.net/20250207_297/173893055031085kmU_JPEG/20250207_204311.jpg",
      "https://ldb-phinf.pstatic.net/20250207_222/1738930550467tW1V4_JPEG/20250207_205625.jpg",
      "https://ldb-phinf.pstatic.net/20250207_232/17389305484397inln_JPEG/20250207_205535.jpg",
      "https://blogfiles.pstatic.net/MjAyNjA3MjhfOTgg/MDAxNzg1MjAxODk3NjQ3.FBAxWw0uO4355d-2ELmTCG_4IQRqxFLbi112BQGGcUkg.16OxkchUK1IzznayKWLWPcoHPbbyDZsKUASZRHxqiikg.PNG/image.png/763x573"
    ],
    "price": "50,000원~",
    "score": 0,
    "reviews": 22,
    "naverId": "30938706",
    "visible": true
  },
  {
    "id": "s036",
    "name": "9까오타이",
    "type": "타이",
    "city": "파주시",
    "gu": "파주시",
    "dong": "목동동",
    "address": "경기 파주시 청암로17번길 47",
    "phone": "0507-1425-1922",
    "lat": 37.7288867,
    "lng": 126.7348483,
    "hours": null,
    "intro": "타이 전문입니다. 가격은 50,000원~입니다. 네이버 방문자 리뷰 7개, 평점 4.13입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260820_170/1787198893691OWpQd_JPEG/1.jpg",
      "https://ldb-phinf.pstatic.net/20260820_38/1787198893157LH3gB_JPEG/2.jpg",
      "https://ldb-phinf.pstatic.net/20260820_1/1787198893223nBWqy_JPEG/3.jpg",
      "https://ldb-phinf.pstatic.net/20260820_81/1787198893248BKFqS_JPEG/4.jpg",
      "https://ldb-phinf.pstatic.net/20260820_33/1787198893267vHspT_JPEG/5.jpg"
    ],
    "price": "50,000원~",
    "score": 4.13,
    "reviews": 7,
    "naverId": "1479784462",
    "visible": true
  },
  {
    "id": "s037",
    "name": "심쿵테라피",
    "type": "테라피",
    "city": "파주시",
    "gu": "파주시",
    "dong": "야당동",
    "address": "경기 파주시 경의로 1068",
    "phone": "031-941-8870",
    "lat": 37.7125555,
    "lng": 126.7596743,
    "hours": null,
    "intro": "테라피 전문입니다. 가격은 80,000원~입니다.",
    "photos": [],
    "price": "80,000원~",
    "score": null,
    "reviews": null,
    "naverId": "1579718967",
    "visible": true
  },
  {
    "id": "s038",
    "name": "웰빙스웨디시",
    "type": "스웨디시",
    "city": "파주시",
    "gu": "파주시",
    "dong": "금촌동",
    "address": "경기 파주시 시청로 25 4층 406호",
    "phone": "0507-1341-8207",
    "lat": 37.7591525,
    "lng": 126.776291,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "12:00",
          "close": "04:00",
          "brk": []
        }
      ]
    },
    "intro": "스웨디시 전문입니다. KT파주지사 건너편 메가커피있는 건물 4층이며 금촌역에서 7분거리입니다\n\n금촌로타리에서 파주시청방향으로 내려오시다 보면 왼편에 kt 파주지사 건물 가기전 메가커피와 콩나물국밥 건물 4층에 위치합니다\n\n건물 지하에 두개층의 주차장이 있으며 맞은편에 금촌공영주차장이\n있습니다. 남/녀 화장실 구분, 예약, 단체 이용 가능, 주차 가능합니다. 가격은 70,000원입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20220922_1/1663786794924jwTJO_JPEG/Resized_Screenshot_20220921-211207.jpg",
      "https://ldb-phinf.pstatic.net/20220922_227/1663786779467wEWRb_JPEG/Resized_Screenshot_20220921-211214.jpg",
      "https://ldb-phinf.pstatic.net/20220922_238/1663786779386uQllx_JPEG/Resized_Screenshot_20220921-211221.jpg"
    ],
    "price": "70,000원",
    "score": null,
    "reviews": null,
    "naverId": "1444093721",
    "visible": true
  },
  {
    "id": "s039",
    "name": "BJ스웨디시",
    "type": "스웨디시",
    "city": "파주시",
    "gu": "파주시",
    "dong": "금촌동",
    "address": "경기 파주시 한마음1길 38 3층",
    "phone": "0507-1386-8262",
    "lat": 37.7569832,
    "lng": 126.7712362,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "12:00",
          "close": "05:00",
          "brk": []
        }
      ]
    },
    "intro": "스웨디시 전문입니다. 한마음1길 38, 3층(308호~310호). 단체 이용 가능, 남/녀 화장실 구분 가능합니다. 가격은 60,000원~입니다. 네이버 방문자 리뷰 2개, 평점 5입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20220926_2/1664159179398H2rkW_JPEG/BJ00.jpg",
      "https://ldb-phinf.pstatic.net/20220926_165/1664159179370fyK38_JPEG/BJ02.jpg",
      "https://ldb-phinf.pstatic.net/20220926_279/1664159179404qLTk2_JPEG/BJ03.jpg",
      "https://ldb-phinf.pstatic.net/20220926_192/16641591794444MKhS_JPEG/BJ04.jpg",
      "https://ldb-phinf.pstatic.net/20220926_274/1664159179514Yc9d6_JPEG/BJ08.jpg"
    ],
    "price": "60,000원~",
    "score": 5,
    "reviews": 2,
    "naverId": "1242669351",
    "visible": true
  },
  {
    "id": "s040",
    "name": "홍콩테라피",
    "type": "테라피",
    "city": "파주시",
    "gu": "파주시",
    "dong": "야당동",
    "address": "경기 파주시 경의로 1056 아이플렉스211호",
    "phone": "0507-1487-5507",
    "lat": 37.7117681,
    "lng": 126.7595841,
    "hours": null,
    "intro": "테라피 전문입니다. 가격은 50,000원~입니다.",
    "photos": [],
    "price": "50,000원~",
    "score": 0,
    "reviews": 2,
    "naverId": "1554580444",
    "visible": true
  },
  {
    "id": "s041",
    "name": "디타이",
    "type": "타이/아로마",
    "city": "파주시",
    "gu": "파주시",
    "dong": "문산읍",
    "address": "경기 파주시 문산읍 당동2로 11 우리빌4층401호",
    "phone": "0507-1408-7767",
    "lat": 37.8679912,
    "lng": 126.7839783,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "11:00",
          "close": "02:30",
          "brk": []
        }
      ]
    },
    "intro": "타이/아로마 전문입니다. 홈플러스 건너편1층건어물 포차 4층 혹은 헬스장건물 4층에 위치하고 있습니다.\n\n파주힐스테이트1차아파트에서 도보5분. 문산당동3단지휴먼시아아파트에서 도보10분. 파주문산역2차동문디이스트에서 도보 10분. CGV에서 도보 3분.\n\n네이버 네비게이션에 '디타이' 를 검색하시면 더욱더 편리하게 이용이 가능합니다!\n\n지하1층에 주차 가능합니다 :). 예약, 단체 이용 가능, 무선 인터넷, 남/녀 화장실 구분, 대기공간, 간편결제, 주차 가능합니다. 가격은 35,000원~입니다. 네이버 방문자 리뷰 19개, 평점 5입니다.",
    "photos": [
      "https://naverbooking-phinf.pstatic.net/20240828_211/1724801446804GPq5k_JPEG/image.jpg",
      "https://ldb-phinf.pstatic.net/20241118_17/1731885418162trslB_JPEG/1000003997.jpg",
      "https://ldb-phinf.pstatic.net/20250827_31/1756253730520qJaut_JPEG/1000005698.jpg",
      "https://ldb-phinf.pstatic.net/20250827_187/1756253736078Fi6Sy_JPEG/1000005699.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNDEwMTlfODMg/MDAxNzI5MzQ2NDE0ODU4.PVpQ2AZKihT8sKWMZPkoLl7Azw0iMvmozQwCdUrC470g.Q24Dci5sHhRp7TpTNlMmWJFt7If5blWbyjLCj9VRGA0g.JPEG/1000029236.jpg.jpg"
    ],
    "price": "35,000원~",
    "score": 5,
    "reviews": 19,
    "naverId": "37405781",
    "visible": true
  },
  {
    "id": "s042",
    "name": "나움테라피마사지",
    "type": "타이/아로마/건식",
    "city": "파주시",
    "gu": "파주시",
    "dong": "야당동",
    "address": "경기 파주시 경의로 1090 307호",
    "phone": "031-945-1667",
    "lat": 37.7145065,
    "lng": 126.7600697,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "11:00",
          "close": "04:00",
          "brk": []
        }
      ]
    },
    "intro": "타이/아로마/건식 전문입니다. 예약, 무선 인터넷, 대기공간, 주차 가능합니다. 가격은 40,000원~입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20250715_88/1752590270117KAwHz_JPEG/KakaoTalk_20250712_140407540_03.jpg",
      "https://ldb-phinf.pstatic.net/20250715_117/1752590281686IILPd_JPEG/KakaoTalk_20250712_140407540.jpg",
      "https://ldb-phinf.pstatic.net/20250715_268/1752590291957cQcHU_JPEG/KakaoTalk_20250712_140407540_01.jpg",
      "https://ldb-phinf.pstatic.net/20250715_122/1752590291960cv8uI_JPEG/KakaoTalk_20250712_140407540_02.jpg",
      "https://blogfiles.pstatic.net/MjAyNjAyMDNfNTYg/MDAxNzcwMTMwMTc5Njcx.g0GnGVSYOVOmhA-nwgJFL-emwFKVnDGeSJuo-l1zAcog.AnTGiqkftcPB9Z25WzMmQK9GdrpXnQz3CncVq8lub-4g.JPEG/KakaoTalk_20260203_230620652_14.jpg/4000x3000"
    ],
    "price": "40,000원~",
    "score": 0,
    "reviews": 59,
    "naverId": "2060997320",
    "visible": true
  },
  {
    "id": "s043",
    "name": "카이로힐링타이마사지",
    "type": "타이/아로마",
    "city": "파주시",
    "gu": "파주시",
    "dong": "금촌동",
    "address": "경기 파주시 중앙로 308 현대타워상가6층",
    "phone": "031-941-6610",
    "lat": 37.7634441,
    "lng": 126.7757246,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "12:00",
          "close": "05:00",
          "brk": []
        }
      ]
    },
    "intro": "타이/아로마 전문입니다. 금촌역 1번출구로 나와 200m직진하면 보이는 가장 큰 건물 현대타워 6층에 위치해있습니다. 단체 이용 가능, 무선 인터넷, 예약, 대기공간, 주차 가능합니다. 가격은 40,000원~입니다. 네이버 방문자 리뷰 1개, 평점 3입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20190701_262/15619523682584RUqI_JPEG/cYxu1LaBStvgoGXV0sBsmbtC.jpg",
      "https://ldb-phinf.pstatic.net/20190701_4/1561952385031vByxn_JPEG/7E5dBxEzppeccptajNG_Lqun.jpg",
      "https://ldb-phinf.pstatic.net/20190701_210/1561952430674pbanD_JPEG/0bztEdxrJd74ITyDdc6h71Zr.jpg",
      "https://ldb-phinf.pstatic.net/20190701_64/1561952436393Oc2oH_JPEG/Zz8P7yy_0nOemdWd8GSHUdgf.jpg",
      "https://ldb-phinf.pstatic.net/20190701_17/1561952441162IJz68_JPEG/mKb-eoNs1FLnSXLz0Xajy26z.jpg"
    ],
    "price": "40,000원~",
    "score": 3,
    "reviews": 1,
    "naverId": "1432055014",
    "visible": true
  },
  {
    "id": "s044",
    "name": "한송스포츠마사지 일산본점",
    "type": "스포츠/수기",
    "city": "고양시",
    "gu": "일산동구",
    "dong": "정발산동",
    "address": "경기 고양시 일산동구 중앙로 1322 현대아이스페이스 204호",
    "phone": "0507-1418-5595",
    "lat": 37.6632365,
    "lng": 126.7707568,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "10:00",
          "close": "02:00",
          "brk": []
        }
      ]
    },
    "intro": "스포츠/수기 전문입니다. 정발산역 3번출구에서 500m직진하시면 현대아이스페이스 건물이 나옵니다.\n\n현대아이스페이스 건물 2층 204호에 위치하고 있습니다.\n\n주차는 무료입니다.\n\n일산경찰서 바로 옆이며 일산소방서,허유재병원 바로 건너편에 있는 현대아이스페이스2층에 위치해있습니다.\n\n롯데백화점에서 약 200M 위치. 예약, 방문접수/출장, 무선 인터넷, 남/녀 화장실 구분, 대기공간, 주차 가능합니다. 네이버 방문자 리뷰 132개, 평점 4.55입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20190704_239/1562227199945L8Vt5_JPEG/2.jpg",
      "https://ldb-phinf.pstatic.net/20241119_77/1732017137727Ul2OW_JPEG/1000012565.jpg",
      "https://ldb-phinf.pstatic.net/20241119_150/1732017137299sQL5w_JPEG/1000012560.jpg",
      "https://ldb-phinf.pstatic.net/20241119_54/1732017137550dPqPD_JPEG/1000012532.jpg",
      "https://blogfiles.pstatic.net/MjAyNjA3MDdfMTQ3/MDAxNzgzNDI4ODczNzc4.mV2B_CETJ1cJs8cps-DY3A3d2yY0eRFk0u9eRKWX2CQg.l2VIZwtjPvgj82xsLct2eeHsqwGxGk1t-W3a09Mqkbog.JPEG/Image179_%EA%B2%B0%EA%B3%BC.jpg/858x649"
    ],
    "price": null,
    "score": 4.55,
    "reviews": 132,
    "naverId": "11838921",
    "visible": true
  },
  {
    "id": "s045",
    "name": "진심을다한 마사지&스파 운정GTX점",
    "type": "마사지",
    "city": "파주시",
    "gu": "파주시",
    "dong": "동패동",
    "address": "경기 파주시 초롱꽃로 139 스타타워 301호, 302호",
    "phone": "0507-1317-1443",
    "lat": 37.7125724,
    "lng": 126.7196386,
    "hours": {
      "week": [
        {
          "day": "토",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "일",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "월",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "화",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "수",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "목",
          "open": "10:00",
          "close": "01:00",
          "brk": []
        },
        {
          "day": "금(9/25)",
          "open": null,
          "close": null,
          "brk": []
        }
      ]
    },
    "intro": "마사지 전문입니다. 오시는 길 (주소: 경기 파주시 초롱꽃로 139 스타타워 301호, 302호 )\n[차량이용]\n- 내비게이션에 '초롱꽃로 139' / '운정 스타타워A' 검색\n- 주차 : 스타타워 지하 주차장 주차가능\n\n'GTX 운정역 1번출구' 차량 15분\n'야당역 2번출구' 차량 10분\n\n[도보 및 대중교통 이용]\n- '초롱꽃마을 8단지' 하차 도보 5분거리\n- '스타타워A동' 3층\n- 팔각도, 금별맥주, 투다리가 있는 건물 3층\n- 운정6동 행복복지센터 인근. 단체 이용 가능, 예약, 무선 인터넷, 남/녀 화장실 구분, 대기공간, 주차 가능합니다. 네이버 방문자 리뷰 537개, 평점 4.91입니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20260514_275/1778721241970pwtJf_JPEG/22.jpg",
      "https://naverbooking-phinf.pstatic.net/20260831_215/17881445758994AQj4_JPEG/image.jpg",
      "https://ldb-phinf.pstatic.net/20251107_167/1762480381194qu34m_JPEG/%BC%DB%B5%B5%BB%E7%C1%F83.jpg",
      "https://ldb-phinf.pstatic.net/20251107_266/1762480381192H6S9q_JPEG/%BC%DB%B5%B5%C1%A1%BB%E7%C1%F82.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyNjA5MTdfODQg/MDAxNzg5NjQ1NzY1OTk5.Q50tPUR7GbQz83MSjkO99tmXNhg0NpX_E98wU-NZi0Qg.b9bus_r8dkWoX9lcbAv3bcLqQD8QsuXqEGcCN0mK-acg.JPEG/45D81C47-6C76-40B6-A7B1-43A26C8D5A13.jpeg"
    ],
    "price": null,
    "score": 4.91,
    "reviews": 537,
    "naverId": "1196911893",
    "visible": true
  },
  {
    "id": "s046",
    "name": "킹타이테라피",
    "type": "타이",
    "city": "파주시",
    "gu": "파주시",
    "dong": "금촌동",
    "address": "경기 파주시 금빛로 15 204호, 205호",
    "phone": "0507-1367-2916",
    "lat": 37.7509197,
    "lng": 126.7666431,
    "hours": {
      "week": [
        {
          "day": "매일",
          "open": "11:00",
          "close": "04:00",
          "brk": []
        }
      ]
    },
    "intro": "타이 전문입니다. 금릉역 2번출구 건너편, 미라클프라자. 단체 이용 가능, 예약, 무선 인터넷, 남/녀 화장실 구분, 대기공간, 주차 가능합니다.",
    "photos": [
      "https://ldb-phinf.pstatic.net/20231016_210/1697463821110KkcSF_JPEG/11.jpg",
      "https://apis.naver.com/place/panorama/thumbnail/1959434697/0?width=800&height=400&msgpad=1789822064002&md=vTpbUkq%2FUGVNMVbaVDdBuIiEJdU%3D"
    ],
    "price": null,
    "score": null,
    "reviews": null,
    "naverId": "1959434697",
    "visible": true
  }
];
