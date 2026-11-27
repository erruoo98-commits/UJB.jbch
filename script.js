/* ============================================================
   링크 설정  (기존 설정 방식 그대로예요)
   - url을 ''(빈칸)으로 두면 "준비 중"으로 표시됩니다.
   - 미리보기 옵션 (항목마다 선택):
       shot:true    → 사이트 첫 화면의 대표 이미지(메인 이미지)를 자동으로 가져옴
                      (대표 이미지가 없는 사이트는 화면 캡처로 대신함)
       thumb:'...'  → 직접 만든 사진 주소/파일 (예: 'img/blog.jpg') — shot보다 우선
       video:'...'  → 유튜브 영상 주소. 누르면 영상이 바로 재생됨
       appId:'...'  → 앱스토어 앱 번호. 앱 아이콘을 자동으로 가져오고 아이콘에 '앱' 표시가 붙음
                      (앱 항목의 url = 아이폰 App Store 주소)
       android:'...'→ 안드로이드 Google Play 주소. 안드로이드 폰에서는 이 주소로 열림
                      (비워두면 안드로이드에서는 "아이폰 전용" 안내가 나옴)
       web:'...'    → 앱을 안 깔고 바로 볼 수 있는 웹 주소. 채우면 누를 때
                      "웹에서 바로 보기"와 "앱 받기" 중에 고르는 창이 떠요
       noShot:true  → 대표 이미지가 없을 때 화면 캡처로 대신하지 않음 (개인정보가 있는 사이트용)
       direct:true  → 미리보기 화면 없이 바로 이동 (앱스토어 연결 등)
       scheme:'...' → 앱 실행 주소 (예: 'myapp://'). 채우면 설치된 앱이 바로 열리고,
                      설치가 안 되어 있으면 앱스토어로 이동. 비워두면 앱스토어로 이동
       short:'...'  → 아이콘 아래에 보일 짧은 이름 (없으면 name 사용)
   - 섹션 layout:  'carousel' = 옆으로 넘기는 큰 사진 카드,  'grid' = 앱 아이콘 격자
   ============================================================ */

/* 주일말씀 — 누르면 유튜브로 이동하고, 카드에는 유튜브 썸네일이 보여요.
   썸네일은 아래 순서로 찾아요 (채운 것 중 가장 위의 것을 사용):
   1) thumb     : 직접 고른 사진 (예: 'img/sermon.jpg')
   2) videoId   : 이번 주 영상 주소를 통째로 붙여넣기 → 그 영상의 썸네일 + 그 영상으로 바로 이동
   3) channelId : 유튜브 채널 ID (UC로 시작, 24글자) → 최신 영상 썸네일·제목·날짜가 자동으로 바뀜 (추천)
   4) 아무것도 없으면 → 교회 표어 이미지로 만든 기본 썸네일
   * 채널 ID 찾는 법: 유튜브 채널 → 정보(더보기) → 채널 공유 → '채널 ID 복사' */
const SUNDAY_SERMON = {
  url: 'https://www.youtube.com/@%EC%83%9D%EB%AA%85%EC%9D%98%EB%A7%90%EC%94%80%EC%84%A0%EA%B5%90%ED%9A%8C%EC%9D%98%EC%A0%95',
  channelName: '의정부교회',
  title: '주일말씀 다시보기',
  thumb: '',
  videoId: '',
  channelId: '',
};

const SECTIONS = [
  {
    id: 'news',
    title: '교회 소식',
    layout: 'carousel',
    items: [
      { name: '블로그_주일말씀 소식',  short: '블로그',     desc: '주일말씀 리마인드',            icon: 'blog',   url: 'https://blog.naver.com/soguem26', shot: true },
      { name: '카페_주일말씀 소식',    short: '카페',       desc: '주일말씀 소식 카페',           icon: 'chat',   url: 'https://cafe.naver.com/jbchujb', shot: true },
      { name: '주일포토 스토리',       short: '주일포토',   desc: '주일소식',                     icon: 'camera', url: 'https://ujb.jbch.org/newsnotice/news/list.php?flag=1&chId=87', shot: true },
      { name: '의정부교회 홈페이지',   short: '홈페이지',   desc: '깨사모 의정부교회 홈페이지',   icon: 'home',   url: 'https://ujb.jbch.org/', shot: true },
    ],
  },
  {
    id: 'apps',
    title: '성도 앱·사이트',
    layout: 'grid',
    items: [
      { name: '토브성경',          desc: '라이프성경',        icon: 'book',   appId: '6473773823', scheme: '', direct: true,
        url: 'https://apps.apple.com/kr/app/%ED%86%A0%EB%B8%8C%EC%84%B1%EA%B2%BD/id6473773823',
        android: 'https://play.google.com/store/apps/details?id=org.jbch.tovbible_for_android',
        web: 'https://bible.jbch.org/' },
      { name: '암송수첩',          desc: '성경 암송 앱',      icon: 'kid',    appId: '1529992404', scheme: '', direct: true,
        url: 'https://apps.apple.com/kr/app/%EC%84%B1%EA%B2%BD%EC%95%94%EC%86%A1%EC%88%98%EC%B2%A9/id1529992404',
        android: 'https://play.google.com/store/apps/details?id=com.hkkim.biblerecitationnotebook' },
      { name: '뿌리깊은싯딤나무',  short: '싯딤나무',   desc: '싯딤나무 Radio',    icon: 'mark',   appId: '552294904', scheme: '', direct: true,
        url: 'https://apps.apple.com/kr/app/%EB%BF%8C%EB%A6%AC%EA%B9%8A%EC%9D%80-%EC%8B%AF%EB%94%A4%EB%82%98%EB%AC%B4/id552294904',
        android: 'https://play.google.com/store/apps/details?id=org.jbch.shittimtree' },
      { name: '찬송 & 은혜찬송',   short: '찬송가',     desc: '찬송가 보기',       icon: 'music',  url: 'https://osan-chansong.web.app/', shot: true },
      /* 연락처 사이트: 화면 캡처가 공개 화면에 남지 않도록 미리보기 없이 바로 열려요 (noShot + direct) */
      { name: '성도연락처',        desc: '성도 주소록',       icon: 'people', url: 'https://phone.jbch.org/index.php', shot: true, noShot: true, direct: true },
      { name: '임원수첩',          desc: '임원 연락처',       icon: 'notes',  url: 'https://address.jbch.org/', shot: true, noShot: true, direct: true },
      { name: '생명선지도',        desc: '생명선 지도',       icon: 'map',    url: 'https://map.jbch.org', shot: true },
      { name: '생명기도수첩',      short: '기도수첩',   desc: '함께 드리는 기도',  icon: 'pray',   url: 'https://pray.jbch.org/', shot: true },
      { name: '세계선교 현황판',   short: '세계선교',   desc: '세계 선교지 소식',  icon: 'globe',  url: 'https://dlrlgk4506.github.io/worldmission_website/', shot: true },
    ],
  },
];

/* 찾기 화면의 추천 검색어 */
const SEARCH_CHIPS = ['성경', '기도', '찬송', '연락처', '소식', '선교'];

/* ---------------- 아이콘 ---------------- */
const ICONS = {
  blog:   '<path d="M5 3h14v18H5z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  chat:   '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
  home:   '<path d="M4 11 12 4l8 7v9h-5v-6H9v6H4z"/>',
  news:   '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  camera: '<path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/>',
  people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6"/><path d="M16 5a3.5 3.5 0 0 1 0 6.5M18 14c2.5.6 3.5 2.5 3.5 6"/>',
  notes:  '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3v3h6V3M9 12h6M9 16h6"/>',
  book:   '<path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z"/><path d="M12 6v14"/>',
  mark:   '<path d="M6 3h12v18l-6-4-6 4z"/>',
  map:    '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
  kid:    '<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01"/>',
  music:  '<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
  globe:  '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  out:    '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
  arrow:  '<path d="M7 17 17 7M8 7h9v9"/>',
  chev:   '<path d="m9 5 7 7-7 7"/>',
};
/* 채워진(면) 아이콘 — Font Awesome Free v7.3.1 (https://fontawesome.com, CC BY 4.0) */
const FILLED = {
  pray: {
    viewBox: '-30 -30 700 700',
    d: 'M224 360C224 373.3 213.3 384 200 384C186.7 384 176 373.3 176 360L176 247.4L264.2 127.7C277.3 109.9 273.5 84.9 255.7 71.8C237.9 58.7 212.9 62.5 199.8 80.3L106.5 206.9C89.3 230.2 80 258.5 80 287.6L80 398.3L21.9 417.7C8.8 422 0 434.2 0 448L0 544C0 554 4.7 563.5 12.7 569.5C20.7 575.5 31.1 577.5 40.8 574.7L195.2 530.6C250.2 514.9 288 464.7 288 407.5L288 288C288 270.3 273.7 256 256 256C238.3 256 224 270.3 224 288L224 360zM416 360L416 288C416 270.3 401.7 256 384 256C366.3 256 352 270.3 352 288L352 407.6C352 464.8 389.9 515 444.8 530.7L599.2 574.8C608.9 577.6 619.2 575.6 627.3 569.6C635.4 563.6 640 554 640 544L640 448C640 434.2 631.2 422 618.1 417.6L560 398.2L560 287.5C560 258.5 550.7 230.2 533.5 206.8L440.2 80.3C427.1 62.5 402.1 58.7 384.3 71.8C366.5 84.9 362.7 109.9 375.8 127.7L464 247.4L464 360C464 373.3 453.3 384 440 384C426.7 384 416 373.3 416 360z',
  },
};
const svg = (name, cls = '') => FILLED[name]
  ? `<svg class="fa ${cls}" viewBox="${FILLED[name].viewBox}" aria-hidden="true"><path d="${FILLED[name].d}"/></svg>`
  : `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.globe}</svg>`;

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------------- 유튜브 도우미 ---------------- */
const ytId = (v) => {
  if (!v) return '';
  const m = String(v).match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);
  return m ? m[1] : (/^[\w-]{11}$/.test(v) ? v : '');
};
const ytEmbed = (id, autoplay) =>
  `https://www.youtube.com/embed/${id}?rel=0&playsinline=1${autoplay ? '&autoplay=1' : ''}`;
const channelEmbed = (v) => {
  const m = String(v || '').match(/UC[\w-]{22}/);
  return m ? `https://www.youtube.com/embed/videoseries?list=UU${m[0].slice(2)}&rel=0&playsinline=1` : '';
};

/* ---------------- 미리보기 사진 ---------------- */
const shotUrl = (url) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=600`;
const hasPreview = (it) => Boolean(it.url) && !it.direct && Boolean(it.video || it.thumb || it.shot);
const imgFor = (it) => {
  if (it.thumb) return it.thumb;
  if (it.video && ytId(it.video)) return `https://img.youtube.com/vi/${ytId(it.video)}/hqdefault.jpg`;
  return it.img || '';
};

/* 각 사이트의 대표 이미지(og:image)를 찾아 7일간 저장해 둡니다 */
const CACHE_KEY = 'ujb-main-image-v1';
const CACHE_TTL = 7 * 24 * 3600 * 1000;
let cache = {};
try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}'); } catch (e) { cache = {}; }
const saveCache = () => { try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (e) { /* 저장 불가 */ } };

const pending = new Map();
function resolveImage(it) {
  if (!it.shot || it.thumb || !it.url || it.resolved) return Promise.resolve();
  if (pending.has(it.url)) return pending.get(it.url);
  const job = (async () => {
    const hit = cache[it.url];
    if (hit && Date.now() - hit.t < CACHE_TTL) { it.img = hit.img; it.small = hit.small; it.resolved = true; return; }
    let img = '', small = false;
    try {
      const ctl = new AbortController();
      const timeout = setTimeout(() => ctl.abort(), 9000);
      const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(it.url)}`, { signal: ctl.signal });
      clearTimeout(timeout);
      const json = await res.json();
      const im = json && json.status === 'success' && json.data && json.data.image;
      if (im && im.url) {
        img = im.url.replace(/^http:\/\//, 'https://');
        small = Boolean(im.width && im.width < 400);   /* 로고처럼 작은 이미지는 잘리지 않게 */
      }
    } catch (e) { /* 아래에서 화면 캡처로 대신함 */ }
    if (img) { cache[it.url] = { img, small, t: Date.now() }; saveCache(); }
    else if (!it.noShot) img = shotUrl(it.url);
    it.img = img; it.small = small; it.resolved = true;
  })();
  pending.set(it.url, job);
  return job;
}

/* ---------------- 화면 그리기 ---------------- */
const ITEMS = {};

function linkAttrs(it, key) {
  if (!it.url) return `href="#" data-soon="1"`;
  if (it.appId) return `href="${esc(it.url)}" data-open-app="${key}"`;
  if (hasPreview(it)) return `href="${esc(it.url)}" data-view="${key}"`;
  return `href="${esc(it.url)}" target="_blank" rel="noopener noreferrer"`;
}

function tileIcon(it) {
  return `<span class="tile-icon"${it.appId ? ` data-app="${it.appId}"` : ''}>${svg(it.icon)}${it.appId ? '<span class="tag">앱</span>' : ''}</span>`;
}

function tileHTML(it, key, i) {
  const tint = it.appId ? 2 : (i % 3 === 2 ? 3 : 1);
  return `<li data-key="${key}">
    <a class="tile tint-${tint}${it.url ? '' : ' soon'}" ${linkAttrs(it, key)} aria-label="${esc(it.name)} — ${esc(it.desc)}">
      ${tileIcon(it)}<span class="tile-name">${esc(it.short || it.name)}</span>
    </a></li>`;
}

function newsHTML(it, key) {
  const loading = it.shot && !it.thumb ? ' loading' : '';
  return `<li data-key="${key}">
    <a class="news-card${loading}${it.url ? '' : ' soon'}" ${linkAttrs(it, key)}>
      ${svg(it.icon)}
      <span class="shade"></span>
      <span class="news-text"><b>${esc(it.name.replace(/_/g, ' · '))}</b><span>${esc(it.desc)}</span></span>
      <span class="news-go">${svg('arrow')}</span>
    </a></li>`;
}

const tintOf = {};
SECTIONS.forEach((sec, si) => {
  const html = sec.items.map((it, ii) => {
    const key = `${si}-${ii}`;
    ITEMS[key] = { ...it, section: sec.title };
    tintOf[key] = it.appId ? 2 : (ii % 3 === 2 ? 3 : 1);
    return sec.layout === 'carousel' ? newsHTML(ITEMS[key], key) : tileHTML(ITEMS[key], key, ii);
  }).join('');
  if (sec.layout === 'carousel') document.getElementById('carousel').innerHTML = html;
  else {
    document.getElementById('quick').innerHTML = html;
    document.getElementById('apps-count').textContent = sec.items.length;
  }
});

/* 소식 카드에 대표 이미지 넣기 */
function paintNews(key) {
  const it = ITEMS[key];
  const card = document.querySelector(`#carousel [data-key="${key}"] .news-card`);
  if (!card) return;
  card.classList.remove('loading');
  const src = imgFor(it);
  if (!src) return;
  const im = new Image();
  im.alt = '';
  im.decoding = 'async';
  im.referrerPolicy = 'no-referrer';
  if (it.small) im.className = 'contain';
  im.onload = () => im.classList.add('ready');
  im.onerror = () => {
    if (it.url && !it.noShot && !it.thumb && !it.video && im.src !== shotUrl(it.url)) {
      im.className = ''; it.small = false; it.img = shotUrl(it.url); im.src = it.img;
    } else im.remove();
  };
  im.src = src;
  card.insertBefore(im, card.querySelector('.shade'));
}
(async () => {
  const keys = Object.keys(ITEMS).filter((k) => k.startsWith(`${SECTIONS.findIndex((s) => s.layout === 'carousel')}-`));
  keys.filter((k) => ITEMS[k].thumb || ITEMS[k].video).forEach(paintNews);
  const queue = keys.filter((k) => ITEMS[k].shot && !ITEMS[k].thumb);
  const worker = async () => { while (queue.length) { const k = queue.shift(); await resolveImage(ITEMS[k]); paintNews(k); } };
  await Promise.all([worker(), worker()]);
})();

/* 소식 넘기기 점 표시 */
(() => {
  const list = document.getElementById('carousel');
  const dots = document.getElementById('dots');
  const n = list.children.length;
  dots.innerHTML = Array.from({ length: n }, (_, i) => `<i class="${i ? '' : 'on'}"></i>`).join('');
  let raf = 0;
  list.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const w = list.children[0] ? list.children[0].getBoundingClientRect().width + 12 : 1;
      const atEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 4;
      const idx = atEnd ? n - 1 : Math.round(list.scrollLeft / w);
      [...dots.children].forEach((d, i) => d.classList.toggle('on', i === idx));
    });
  }, { passive: true });
})();

/* 앱 아이콘 가져오기 (앱스토어 공개 정보) — 같은 앱은 한 번만 불러와요 */
const appArt = {};
function loadAppIcon(id) {
  if (appArt[id]) return appArt[id];
  appArt[id] = new Promise((resolve) => {
    const cb = `__itunes_${id}`;
    const s = document.createElement('script');
    const done = (url) => { delete window[cb]; s.remove(); resolve(url || ''); };
    window[cb] = (data) => {
      const r = data && data.results && data.results[0];
      done(r && (r.artworkUrl512 || r.artworkUrl100));
    };
    s.onerror = () => done('');
    s.src = `https://itunes.apple.com/lookup?id=${id}&country=kr&callback=${cb}`;
    document.head.appendChild(s);
  });
  return appArt[id];
}
function paintAppIcons(root = document) {
  root.querySelectorAll('[data-app]').forEach(async (box) => {
    if (box.querySelector('img')) return;
    const art = await loadAppIcon(box.dataset.app);
    if (!art) return;
    const im = new Image();
    im.alt = '';
    im.onload = () => requestAnimationFrame(() => im.classList.add('ready'));
    im.src = art;
    box.insertBefore(im, box.firstChild);
  });
}
paintAppIcons();

/* ---------------- 머리말: 날짜·인사 ---------------- */
(() => {
  const d = new Date();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const sunday = d.getDay() === 0;
  document.getElementById('today').textContent =
    `${d.getMonth() + 1}월 ${d.getDate()}일 ${days[d.getDay()]}요일${sunday ? ' · 주일' : ''}`;
  const h = d.getHours();
  const hi = sunday ? '복된 주일이에요' : h < 11 ? '좋은 아침이에요' : h < 18 ? '평안한 오후 되세요' : '편안한 저녁 되세요';
  document.getElementById('greet').textContent = hi;
})();

/* 방문자 수 — 무료 카운터(Abacus)를 사용해요.
   같은 기기는 하루에 한 번만 세고, 숫자는 "기기 기준"이라 사람 수와 조금 다를 수 있어요. */
const VISITOR = {
  enabled: true,
  namespace: 'ujb-jbch-portal',   /* 다른 사이트와 겹치지 않는 이름 (영문·숫자·-·_ 만) */
};
async function showVisitors() {
  if (!VISITOR.enabled) return;
  const base = 'https://abacus.jasoncameron.dev';
  const today = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);   /* 한국 날짜 */
  const dev = location.protocol === 'file:' || ['localhost', '127.0.0.1', ''].includes(location.hostname);
  let seen = null;
  try { seen = JSON.parse(localStorage.getItem('ujb-visit') || 'null'); } catch (e) { seen = null; }

  const call = async (op, key) => {
    const ctl = new AbortController();
    const timeout = setTimeout(() => ctl.abort(), 8000);
    const res = await fetch(`${base}/${op}/${VISITOR.namespace}/${key}`, { signal: ctl.signal });
    clearTimeout(timeout);
    const json = await res.json();
    if (typeof json.value !== 'number') throw new Error('no value');
    return json.value;
  };

  try {
    const countToday = !dev && !(seen && seen.day === today);
    const countTotal = !dev && !(seen && seen.total);
    const [day, total] = await Promise.all([
      call(countToday ? 'hit' : 'get', `visit-${today}`),
      call(countTotal ? 'hit' : 'get', 'visit-total'),
    ]);
    if (!dev) { try { localStorage.setItem('ujb-visit', JSON.stringify({ day: today, total: true })); } catch (e) { /* 저장 불가 */ } }
    const visit = document.getElementById('visit');
    visit.textContent = `오늘 ${day.toLocaleString('ko-KR')}명이 함께하고 있어요`;
    visit.hidden = false;
    const totalEl = document.getElementById('total');
    totalEl.textContent = `누적 방문 ${total.toLocaleString('ko-KR')}명`;
    totalEl.hidden = false;
    if (window.gsap && !reduceMotion) gsap.from(visit, { y: 8, opacity: 0, duration: 0.5, ease: 'power3.out' });
  } catch (e) { /* 불러오지 못하면 숫자는 숨겨요 */ }
}

/* ---------------- 주일말씀 (유튜브 썸네일) ---------------- */
(() => {
  const card = document.getElementById('yt');
  const thumbBox = document.getElementById('yt-thumb');
  const titleEl = document.getElementById('yt-title');
  const dateEl = document.getElementById('yt-date');
  const more = document.getElementById('sermon-more');
  document.getElementById('yt-channel').textContent = SUNDAY_SERMON.channelName || '유튜브';
  titleEl.textContent = SUNDAY_SERMON.title || '주일말씀 다시보기';

  const setLink = (url) => {
    [card, more].forEach((a) => {
      if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; delete a.dataset.soon; }
      else { a.href = '#'; a.removeAttribute('target'); a.dataset.soon = '1'; }
    });
    if (SUNDAY_SERMON.url) more.href = SUNDAY_SERMON.url;   /* "채널 보기"는 항상 채널로 */
  };

  /* 썸네일 사진 바꾸기: 고화질 → 안 되면 보통 화질 → 그래도 안 되면 기본 썸네일 유지 */
  const showThumb = (sources) => {
    const list = sources.filter(Boolean);
    if (!list.length) return;
    const im = new Image();
    im.alt = '';
    im.referrerPolicy = 'no-referrer';
    let i = 0;
    im.onload = () => {
      /* 유튜브는 없는 고화질 썸네일 대신 120px 회색 그림을 줘요 → 다음 것으로 */
      if (im.naturalWidth <= 120 && i < list.length - 1) { im.src = list[++i]; return; }
      thumbBox.querySelectorAll('img').forEach((old) => old.remove());
      thumbBox.prepend(im);
      thumbBox.classList.add('has-video');
    };
    im.onerror = () => { if (i < list.length - 1) im.src = list[++i]; };
    im.src = list[0];
  };
  const ytThumbs = (id) => [
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  ];
  const showDate = (d) => {
    const t = new Date(d);
    if (isNaN(t)) return;
    dateEl.textContent = `${t.getMonth() + 1}.${t.getDate()}`;
    dateEl.hidden = false;
  };

  setLink(SUNDAY_SERMON.url);

  /* 1) 직접 고른 사진 */
  if (SUNDAY_SERMON.thumb) { showThumb([SUNDAY_SERMON.thumb]); return; }

  /* 2) 영상 하나 고정 */
  const vid = ytId(SUNDAY_SERMON.videoId);
  if (vid) {
    showThumb(ytThumbs(vid));
    setLink(`https://www.youtube.com/watch?v=${vid}`);
    return;
  }

  /* 3) 채널의 최신 영상 (1시간 저장) */
  const ch = (String(SUNDAY_SERMON.channelId || '').match(/UC[\w-]{22}/) || [])[0];
  if (!ch) return;   /* 4) 기본 썸네일 그대로 */
  const KEY = `ujb-latest-${ch}`;
  const apply = (v) => {
    showThumb(ytThumbs(v.id));
    titleEl.textContent = v.title;
    showDate(v.date);
    setLink(`https://www.youtube.com/watch?v=${v.id}`);
  };
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { saved = null; }
  if (saved && saved.v) apply(saved.v);
  if (saved && Date.now() - saved.t < 3600 * 1000) return;

  (async () => {
    try {
      const feed = `https://www.youtube.com/feeds/videos.xml?channel_id=${ch}`;
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 9000);
      const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`, { signal: ctl.signal });
      clearTimeout(timer);
      const json = await res.json();
      const item = json && json.items && json.items[0];
      const id = item && ytId(item.link);
      if (!id) return;
      const v = { id, title: item.title, date: (item.pubDate || '').replace(' ', 'T') + 'Z' };
      try { localStorage.setItem(KEY, JSON.stringify({ v, t: Date.now() })); } catch (e) { /* 저장 불가 */ }
      apply(v);
    } catch (e) { /* 못 불러오면 기본 썸네일 그대로 */ }
  })();
})();

/* ---------------- 앱 열기 ---------------- */
/* 폰 종류 알아내기 */
const PLATFORM = (() => {
  const ua = navigator.userAgent || '';
  if (/android/i.test(ua)) return 'android';
  if (/iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  return 'other';
})();

/* 앱 열기: 아이폰 → App Store(scheme이 있으면 설치된 앱 먼저), 안드로이드 → Google Play,
   컴퓨터이거나 그 폰용 앱이 없으면 → 스토어 고르는 창 */
function openApp(it, opener) {
  if (it.web) { openViewer(it, opener, true); return; }   /* 웹·앱 고르기 */
  if (PLATFORM === 'android' && it.android) { window.open(it.android, '_blank', 'noopener'); return; }
  if (PLATFORM === 'ios' && it.url) { openIosApp(it); return; }
  openViewer(it, opener, true);
}
function openIosApp(it) {
  if (!it.scheme) { window.open(it.url, '_blank', 'noopener'); return; }
  let left = document.hidden;
  const onChange = () => { if (document.hidden) left = true; };
  document.addEventListener('visibilitychange', onChange);
  window.addEventListener('pagehide', onChange, { once: true });
  location.href = it.scheme;
  setTimeout(() => {
    document.removeEventListener('visibilitychange', onChange);
    if (!left && !document.hidden) location.href = it.url;
  }, 1600);
}

/* ---------------- 알림 ---------------- */
const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

/* ---------------- 미리보기 (아래 시트) ---------------- */
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const viewer = document.getElementById('viewer');
const sheet = document.getElementById('sheet');
const viewerBg = viewer.querySelector('.viewer-bg');
const viewerMedia = document.getElementById('viewer-media');
const viewerTitle = document.getElementById('viewer-title');
const viewerDesc = document.getElementById('viewer-desc');
const viewerGo = document.getElementById('viewer-go');
let lastOpener = null;
let current = null;
let closing = false;

function setViewerImage(it) {
  const src = imgFor(it) || (it.noShot ? '' : shotUrl(it.url));
  const old = viewerMedia.querySelector('img');
  if (old) old.remove();
  if (!src) return;
  const im = new Image();
  im.alt = `${it.name} 대표 이미지`;
  im.referrerPolicy = 'no-referrer';
  if (it.small) im.className = 'contain';
  im.onerror = () => {
    if (!it.noShot && im.src !== shotUrl(it.url)) { im.className = ''; im.src = shotUrl(it.url); }
    else im.remove();
  };
  im.src = src;
  viewerMedia.appendChild(im);
}

function lockScroll(on) { document.documentElement.style.overflow = on ? 'hidden' : ''; }

const viewerMore = document.getElementById('viewer-more');
const viewerNote = document.getElementById('viewer-note');
const STORE_ICON = {
  apple: '<svg class="store" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.4-4zM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.5 2.8-1.3z"/></svg>',
  play: '<svg class="store" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.2 2.6c-.3.3-.4.7-.4 1.2v16.4c0 .5.1.9.4 1.2l9.2-9.4z" fill="#00d7fe"/><path d="m16.5 15.1-3.1-3.1-9.2 9.4c.4.4.9.4 1.5.1z" fill="#f83c4e"/><path d="m16.5 8.9-10.8-6.4c-.6-.3-1.1-.3-1.5.1l9.2 9.4z" fill="#00f076"/><path d="m20.1 11-3.6-2.1-3.1 3.1 3.1 3.1 3.6-2.1c1-.6 1-1.4 0-2z" fill="#ffc900"/></svg>',
};

async function openViewer(it, opener, storeMode) {
  current = it;
  lastOpener = opener || null;
  viewerTitle.textContent = it.name.replace(/_/g, ' · ');
  viewerDesc.textContent = it.desc;
  viewerMore.innerHTML = '';
  viewerNote.hidden = true;

  if (storeMode) {
    /* 앱 받기 창: 폰에서는 그 폰의 스토어만, 컴퓨터에서는 둘 다 */
    const apple = it.url && { href: it.url, html: `${STORE_ICON.apple} App Store에서 앱 받기` };
    const play = it.android && { href: it.android, html: `${STORE_ICON.play} Google Play에서 앱 받기` };
    let stores = PLATFORM === 'ios' ? [apple] : PLATFORM === 'android' ? [play] : [apple, play];
    stores = stores.filter(Boolean);
    if (!stores.length) stores = [apple, play].filter(Boolean);
    const links = it.web
      ? [{ href: it.web, html: `${svg('globe', 'store line')} 앱 없이 웹에서 바로 보기` }, ...stores]
      : stores;
    viewerGo.href = links[0].href; viewerGo.innerHTML = links[0].html;
    viewerMore.innerHTML = links.slice(1).map((l) =>
      `<a class="go alt" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${l.html}</a>`).join('');
    if (!it.android && PLATFORM !== 'ios') { viewerNote.textContent = '이 앱은 아이폰(App Store)용만 있어요.'; viewerNote.hidden = false; }
    else if (it.web) { viewerNote.textContent = '웹은 설치 없이 바로 열려요.'; viewerNote.hidden = false; }
    viewerMedia.classList.remove('video');
    viewerMedia.innerHTML = `<div class="viewer-app"><span class="tile-icon" data-app="${it.appId}">${svg(it.icon)}<span class="tag">앱</span></span></div>`;
    paintAppIcons(viewerMedia);
  } else {
    viewerGo.href = it.url;
    viewerGo.innerHTML = `바로 열기 ${svg('out')}`;
  }

  const id = storeMode ? '' : ytId(it.video);
  viewerMedia.classList.toggle('video', Boolean(id));
  if (id) {
    viewerMedia.innerHTML =
      `<iframe src="${ytEmbed(id, true)}" title="${esc(it.name)}" allowfullscreen
         allow="autoplay; accelerometer; encrypted-media; picture-in-picture; fullscreen"
         referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  } else if (!storeMode) {
    viewerMedia.innerHTML = `<div class="viewer-fallback">${svg(it.icon)}<span>미리보기를 불러오는 중이에요</span></div>`;
    if (it.resolved || it.thumb || !it.shot) setViewerImage(it);
    else resolveImage(it).then(() => { if (current === it) setViewerImage(it); });
  }

  viewer.hidden = false;
  lockScroll(true);
  closing = false;
  if (window.gsap && !reduceMotion) {
    gsap.fromTo(viewerBg, { opacity: 0 }, { opacity: 1, duration: 0.25 });
    gsap.fromTo(sheet, { yPercent: 100 }, { yPercent: 0, y: 0, duration: 0.45, ease: 'power3.out' });
  }
  viewerGo.focus({ preventScroll: true });
}

function closeViewer() {
  if (viewer.hidden || closing) return;
  closing = true;
  const done = () => {
    viewer.hidden = true;
    viewerMedia.innerHTML = '';   /* 영상 재생도 함께 멈춤 */
    lockScroll(false);
    if (window.gsap) gsap.set(sheet, { clearProps: 'transform' });
    if (lastOpener) lastOpener.focus({ preventScroll: true });
    closing = false;
  };
  if (window.gsap && !reduceMotion) {
    gsap.to(viewerBg, { opacity: 0, duration: 0.25 });
    gsap.to(sheet, { yPercent: 100, duration: 0.3, ease: 'power2.in', onComplete: done });
  } else done();
}

/* 시트를 아래로 끌어내리면 닫혀요 */
(() => {
  let startY = 0, dy = 0, dragging = false;
  /* 손잡이나 사진 부분을 잡고 끌어요 */
  sheet.addEventListener('pointerdown', (e) => {
    if (!e.target.closest('#grab, .viewer-media:not(.video)')) return;
    dragging = true; startY = e.clientY; dy = 0;
  });
  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    dy = Math.max(0, e.clientY - startY);
    sheet.style.transform = `translateY(${dy}px)`;
    viewerBg.style.opacity = String(Math.max(0.2, 1 - dy / 400));
  });
  const end = () => {
    if (!dragging) return;
    dragging = false;
    if (dy > 110) {
      if (window.gsap && !reduceMotion) {
        closing = true;
        gsap.to(viewerBg, { opacity: 0, duration: 0.2 });
        gsap.to(sheet, { y: window.innerHeight, duration: 0.25, ease: 'power2.in', onComplete: () => {
          sheet.style.transform = ''; viewerBg.style.opacity = '';
          closing = false; viewer.hidden = false; closeImmediate();
        } });
      } else { sheet.style.transform = ''; viewerBg.style.opacity = ''; closeViewer(); }
    } else {
      sheet.style.transition = 'transform .25s ease';
      sheet.style.transform = '';
      viewerBg.style.opacity = '';
      setTimeout(() => { sheet.style.transition = ''; }, 260);
    }
  };
  window.addEventListener('pointerup', end);
  window.addEventListener('pointercancel', end);
  function closeImmediate() {
    viewer.hidden = true; viewerMedia.innerHTML = ''; lockScroll(false);
    if (window.gsap) gsap.set(sheet, { clearProps: 'all' });
    if (lastOpener) lastOpener.focus({ preventScroll: true });
  }
})();

async function shareCurrent() {
  if (!current) return;
  const data = { title: current.name, text: current.desc, url: current.url };
  try {
    if (navigator.share) { await navigator.share(data); return; }
    await navigator.clipboard.writeText(current.url);
    showToast('링크를 복사했어요');
  } catch (err) { /* 공유 창을 닫은 경우 */ }
}

/* ---------------- 메뉴 찾기 ---------------- */
const searchPage = document.getElementById('search');
const q = document.getElementById('q');
const qClear = document.getElementById('q-clear');
const results = document.getElementById('results');
const emptyEl = document.getElementById('empty');
let searchOpener = null;

document.getElementById('chips').innerHTML =
  SEARCH_CHIPS.map((c) => `<button type="button" data-chip="${esc(c)}">${esc(c)}</button>`).join('');

const mark = (text, term) => {
  const t = esc(text);
  if (!term) return t;
  const i = text.toLowerCase().indexOf(term);
  if (i < 0) return t;
  return `${esc(text.slice(0, i))}<mark>${esc(text.slice(i, i + term.length))}</mark>${esc(text.slice(i + term.length))}`;
};

function runSearch() {
  const term = q.value.trim().toLowerCase();
  qClear.hidden = !term;
  const keys = Object.keys(ITEMS).filter((k) => {
    const it = ITEMS[k];
    return !term || `${it.name} ${it.short || ''} ${it.desc} ${it.section}`.toLowerCase().includes(term);
  });
  results.innerHTML = keys.map((k) => {
    const it = ITEMS[k];
    return `<li><a class="row tint-${tintOf[k]}" ${linkAttrs(it, k)}>
      ${tileIcon(it)}
      <span class="row-text"><b>${mark(it.name.replace(/_/g, ' · '), term)}</b><span>${mark(it.desc, term)}</span></span>
      <span class="row-sec">${esc(it.section)}</span>
    </a></li>`;
  }).join('');
  emptyEl.hidden = keys.length !== 0;
  paintAppIcons(results);
}

function openSearch(opener) {
  searchOpener = opener || null;
  searchPage.hidden = false;
  lockScroll(true);
  runSearch();
  setTimeout(() => q.focus(), 60);
}
function closeSearch() {
  if (searchPage.hidden) return;
  searchPage.hidden = true;
  q.value = '';
  lockScroll(!viewer.hidden);
  if (searchOpener) searchOpener.focus({ preventScroll: true });
}
q.addEventListener('input', runSearch);
qClear.addEventListener('click', () => { q.value = ''; runSearch(); q.focus(); });

/* ---------------- 눌렀을 때 ---------------- */
document.addEventListener('click', (e) => {
  const soon = e.target.closest('[data-soon]');
  if (soon) { e.preventDefault(); showToast('아직 링크가 준비되지 않았어요'); return; }
  if (e.target.closest('[data-open-search]')) { openSearch(e.target.closest('[data-open-search]')); return; }
  if (e.target.closest('[data-close-search]')) { closeSearch(); return; }
  const chip = e.target.closest('[data-chip]');
  if (chip) { q.value = chip.dataset.chip; runSearch(); return; }
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
  const app = e.target.closest('[data-open-app]');
  if (app) { e.preventDefault(); openApp(ITEMS[app.dataset.openApp], app); return; }
  const opener = e.target.closest('[data-view]');
  if (opener) { e.preventDefault(); openViewer(ITEMS[opener.dataset.view], opener); return; }
  if (e.target.closest('[data-share]')) { shareCurrent(); return; }
  if (e.target.closest('[data-close]')) closeViewer();
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!viewer.hidden) closeViewer(); else closeSearch();
});

/* ---------------- 하단 탭: 지금 보고 있는 곳 표시 ---------------- */
const tabs = [...document.querySelectorAll('.tabbar [data-tab]')];
const setTab = (id) => tabs.forEach((a) => a.classList.toggle('on', a.dataset.tab === id));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) setTab(en.target.id); });
  }, { rootMargin: '-35% 0px -55% 0px' });
  ['sermon', 'apps', 'news'].forEach((id) => io.observe(document.getElementById(id)));
}
const appbar = document.getElementById('appbar');
window.addEventListener('scroll', () => {
  appbar.classList.toggle('scrolled', window.scrollY > 8);
  if (window.scrollY < 120) setTab('top');
  else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setTab('news');
}, { passive: true });
tabs.forEach((a) => a.addEventListener('click', () => setTab(a.dataset.tab)));

/* ---------------- 움직임 (GSAP) — 모션 줄이기 설정이면 쓰지 않아요 ---------------- */
(function initMotion() {
  if (!window.gsap || reduceMotion) return;
  const hasST = Boolean(window.ScrollTrigger);
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  /* 첫 화면: 로고 비둘기가 날아들고, 인사와 카드가 차례로 */
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.brand img', { x: -14, y: 10, rotate: -18, opacity: 0, duration: 0.8 })
    .from('.brand-text', { x: -8, opacity: 0, duration: 0.5 }, '-=0.45')
    .from('.greet > *', { y: 16, opacity: 0, stagger: 0.08, duration: 0.6 }, '-=0.3')
    .fromTo('.greet h1 em', { backgroundSize: '0% 100%' }, { backgroundSize: '100% 100%', duration: 0.6, ease: 'power2.inOut' }, '-=0.25')
    .from('.slogan', { y: 24, scale: 0.97, opacity: 0, duration: 0.7, clearProps: 'transform,opacity' }, '-=0.5')
    .from('.tabbar', { yPercent: 100, duration: 0.6, clearProps: 'transform' }, '-=0.6');

  if (!hasST) return;

  /* 표어 이미지: 스크롤하면 살짝 천천히 움직여요 */
  gsap.to('.slogan img', {
    yPercent: 8, scale: 1.06, ease: 'none',
    scrollTrigger: { trigger: '.slogan', start: 'top 70px', end: 'bottom top', scrub: true },
  });

  /* 블록이 화면에 들어오면 올라와요 */
  gsap.utils.toArray('.block').forEach((b) => {
    gsap.from(b.querySelector('.block-head'), {
      y: 16, opacity: 0, duration: 0.5, ease: 'power3.out', clearProps: 'transform,opacity',
      scrollTrigger: { trigger: b, start: 'top 90%', once: true },
    });
  });
  gsap.from('.yt', {
    y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform,opacity',
    scrollTrigger: { trigger: '.yt', start: 'top 92%', once: true },
  });
  gsap.from('.quick', {
    y: 24, opacity: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity',
    scrollTrigger: { trigger: '.quick', start: 'top 92%', once: true },
  });
  gsap.from('.quick .tile', {
    y: 14, scale: 0.85, opacity: 0, duration: 0.45, ease: 'back.out(1.8)', stagger: 0.04, clearProps: 'transform,opacity',
    scrollTrigger: { trigger: '.quick', start: 'top 88%', once: true },
  });
  gsap.from('.carousel li', {
    x: 60, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1, clearProps: 'transform,opacity',
    scrollTrigger: { trigger: '.carousel', start: 'top 92%', once: true },
  });
})();

showVisitors();
