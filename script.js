/* ============================================================
   링크 설정
   - url을 ''(빈칸)으로 두면 "준비 중"으로 표시됩니다.
   - 미리보기 옵션 (항목마다 선택):
       shot:true    → 사이트 첫 화면의 대표 이미지(메인 이미지)를 자동으로 가져옴
                      (대표 이미지가 없는 사이트는 화면 캡처로 대신함)
       thumb:'...'  → 직접 만든 사진 주소/파일 (예: 'images/blog.jpg') — shot보다 우선
       video:'...'  → 유튜브 영상 주소. 누르면 영상이 바로 재생됨
       appId:'...'  → 앱스토어 앱 번호. 앱 아이콘을 자동으로 가져옴
       noShot:true  → 대표 이미지가 없을 때 화면 캡처로 대신하지 않음 (개인정보가 있는 사이트용)
       direct:true  → 미리보기 화면 없이 바로 이동 (앱스토어 연결 등)
       scheme:'...' → 앱 실행 주소 (예: 'myapp://'). 채우면 설치된 앱이 바로 열리고,
                      설치가 안 되어 있으면 앱스토어로 이동. 비워두면 앱스토어로 이동
   ============================================================ */

/* 주일말씀 — 아래 둘 중 하나를 채우면 화면 맨 위에서 영상이 바로 재생됩니다.
   channelId : 유튜브 채널 ID (UC로 시작, 24글자) → 최신 영상이 자동으로 나옴 (추천)
   videoId   : 영상 하나를 고정하고 싶을 때 — 영상 주소를 통째로 붙여넣어도 됩니다 */
const SUNDAY_SERMON = {
  url: 'https://www.youtube.com/@%EC%83%9D%EB%AA%85%EC%9D%98%EB%A7%90%EC%94%80%EC%84%A0%EA%B5%90%ED%9A%8C%EC%9D%98%EC%A0%95',
  channelId: '',
  videoId: '',
};

const SECTIONS = [
  {
    title: '교회 소식',
    desc: '사진으로 미리 보고, 눌러서 들어가요',
    items: [
      { name: '블로그_주일말씀 소식',  desc: '주일말씀 리마인드',            icon: 'blog',   url: 'https://blog.naver.com/soguem26', shot: true },
      { name: '카페_주일말씀 소식',    desc: '주일말씀 소식 카페',           icon: 'chat',   url: 'https://cafe.naver.com/jbchujb', shot: true },
      { name: '주일포토 스토리',       desc: '주일소식',                     icon: 'camera', url: 'https://ujb.jbch.org/newsnotice/news/list.php?flag=1&chId=87', shot: true },
      { name: '의정부교회 홈페이지',   desc: '깨사모 의정부교회 홈페이지',   icon: 'news',   url: 'https://ujb.jbch.org/', shot: true },
    ],
  },
  {
    title: '성도 앱·사이트',
    desc: '자주 쓰는 앱과 사이트를 한곳에 모았어요',
    items: [
      { name: '토브성경',          desc: '라이프성경',        icon: 'book', url: 'https://bible.jbch.org/', shot: true },
      { name: '암송수첩',          desc: '성경 암송 앱',      icon: 'kid',  url: 'https://apps.apple.com/kr/app/%EC%84%B1%EA%B2%BD%EC%95%94%EC%86%A1%EC%88%98%EC%B2%A9/id1529992404', appId: '1529992404', scheme: '', direct: true },
      { name: '뿌리깊은싯딤나무',  desc: '싯딤나무 Radio',    icon: 'mark', url: 'https://apps.apple.com/kr/app/%EB%BF%8C%EB%A6%AC%EA%B9%8A%EC%9D%80-%EC%8B%AF%EB%94%A4%EB%82%98%EB%AC%B4/id552294904', appId: '552294904', scheme: '', direct: true },
      { name: '찬송 & 은혜찬송',   desc: '찬송가 보기',       icon: 'music',  url: 'https://osan-chansong.web.app/', shot: true },
      /* 연락처 사이트: 대표 이미지(og:image)만 사용하고, 없으면 화면 캡처 대신 아이콘 카드로 보여요.
         (연락처가 그대로 찍힌 사진이 공개 화면에 남지 않게 하려는 설정 — noShot) */
      { name: '성도연락처',        desc: '성도 주소록',       icon: 'people', url: 'https://phone.jbch.org/index.php', shot: true, noShot: true, direct: true },
      { name: '임원수첩',          desc: '임원 연락처',       icon: 'notes',  url: 'https://address.jbch.org/', shot: true, noShot: true, direct: true },
      { name: '생명선지도',        desc: '생명선 지도',       icon: 'map',    url: 'https://map.jbch.org', shot: true },
      { name: '생명기도수첩',      desc: '함께 드리는 기도',  icon: 'pray', url: 'https://pray.jbch.org/', shot: true },
      { name: '세계선교 현황판',   desc: '세계 선교지 소식',  icon: 'globe',  url: 'https://dlrlgk4506.github.io/worldmission_website/', shot: true },
    ],
  },
];

/* 아이콘 */
const ICONS = {
  play:   '<polygon points="7 4 20 12 7 20 7 4"/>',
  blog:   '<path d="M5 3h14v18H5z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  chat:   '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
  news:   '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  camera: '<path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/>',
  people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6"/><path d="M16 5a3.5 3.5 0 0 1 0 6.5M18 14c2.5.6 3.5 2.5 3.5 6"/>',
  notes:  '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3v3h6V3M9 12h6M9 16h6"/>',
  pray:   '<path d="M12 4c-3.5 2-6 5.5-6 10l3 6h3"/><path d="M12 4c3.5 2 6 5.5 6 10l-3 6h-3"/><path d="M12 4v16"/>',
  book:   '<path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z"/><path d="M12 6v14"/>',
  mark:   '<path d="M6 3h12v18l-6-4-6 4z"/>',
  map:    '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
  kid:    '<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01"/>',
  music:  '<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
  globe:  '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  out:    '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
};
/* 채워진(면) 아이콘 — Font Awesome Free v7.3.1 (https://fontawesome.com, CC BY 4.0) */
const FILLED = {
  pray: {
    viewBox: '-30 -30 700 700',
    d: 'M224 360C224 373.3 213.3 384 200 384C186.7 384 176 373.3 176 360L176 247.4L264.2 127.7C277.3 109.9 273.5 84.9 255.7 71.8C237.9 58.7 212.9 62.5 199.8 80.3L106.5 206.9C89.3 230.2 80 258.5 80 287.6L80 398.3L21.9 417.7C8.8 422 0 434.2 0 448L0 544C0 554 4.7 563.5 12.7 569.5C20.7 575.5 31.1 577.5 40.8 574.7L195.2 530.6C250.2 514.9 288 464.7 288 407.5L288 288C288 270.3 273.7 256 256 256C238.3 256 224 270.3 224 288L224 360zM416 360L416 288C416 270.3 401.7 256 384 256C366.3 256 352 270.3 352 288L352 407.6C352 464.8 389.9 515 444.8 530.7L599.2 574.8C608.9 577.6 619.2 575.6 627.3 569.6C635.4 563.6 640 554 640 544L640 448C640 434.2 631.2 422 618.1 417.6L560 398.2L560 287.5C560 258.5 550.7 230.2 533.5 206.8L440.2 80.3C427.1 62.5 402.1 58.7 384.3 71.8C366.5 84.9 362.7 109.9 375.8 127.7L464 247.4L464 360C464 373.3 453.3 384 440 384C426.7 384 416 373.3 416 360z',
  },
};
const svg = (name) => FILLED[name]
  ? `<svg class="fa" viewBox="${FILLED[name].viewBox}" aria-hidden="true"><path d="${FILLED[name].d}"/></svg>`
  : `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
const CHEVRON = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>';

/* 유튜브 도우미 */
const ytId = (v) => {
  if (!v) return '';
  const m = String(v).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : (/^[\w-]{11}$/.test(v) ? v : '');
};
const ytEmbed = (id, autoplay) =>
  `https://www.youtube.com/embed/${id}?rel=0&playsinline=1${autoplay ? '&autoplay=1' : ''}`;
const channelEmbed = (v) => {
  const m = String(v || '').match(/UC[\w-]{22}/);
  return m ? `https://www.youtube.com/embed/videoseries?list=UU${m[0].slice(2)}&rel=0&playsinline=1` : '';
};

/* 미리보기 사진 */
const shotUrl = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=600`;
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

async function resolveImage(it) {
  if (!it.shot || it.thumb || !it.url) return;
  const hit = cache[it.url];
  if (hit && Date.now() - hit.t < CACHE_TTL) { it.img = hit.img; it.small = hit.small; return; }

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
  it.img = img;
  it.small = small;
}

/* 카드 안에 사진 넣기 */
function paintImage(key) {
  const it = ITEMS[key];
  const media = document.querySelector(`[data-key="${key}"] .card-media`);
  if (!media) return;
  media.classList.remove('loading');
  const src = imgFor(it);
  if (!src || it.appId) return;
  const im = new Image();
  im.alt = '';
  im.decoding = 'async';
  im.referrerPolicy = 'no-referrer';
  if (it.small) im.className = 'contain';
  im.onload = () => im.classList.add('ready');
  im.onerror = () => {
    if (it.url && !it.noShot && im.src !== shotUrl(it.url) && !it.thumb && !it.video) { im.src = shotUrl(it.url); it.img = im.src; it.small = false; im.className = ''; }
    else im.remove();
  };
  im.src = src;
  media.appendChild(im);
}

/* 화면 그리기 */
const sectionsEl = document.getElementById('sections');
const ITEMS = {};
const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';

function cardHTML(it, key, big) {
  const loading = it.shot && !it.thumb;
  const badge = it.appId ? '<span class="badge">앱</span>' : '';
  const over = big
    ? `<span class="shade"></span><span class="big-text"><b>${it.name}</b><span>${it.desc}</span></span><span class="go-dot">${ARROW}</span>`
    : '';
  const media = `<span class="card-media${it.appId ? ' app' : ''}${loading ? ' loading' : ''}"${it.appId ? ` data-app="${it.appId}"` : ''}>${svg(it.icon)}${badge}${over}</span>`;
  const text = big ? '' : `<span class="card-body"><b>${it.name}</b><span>${it.desc}</span></span>`;
  const cls = `card${big ? ' big' : ''}`;

  if (!it.url) return `<li data-q="${it.name} ${it.desc}"><a class="${cls} soon" href="#" data-soon="1" data-key="${key}">${media}${text}</a></li>`;
  if (it.appId) return `<li data-q="${it.name} ${it.desc}"><a class="${cls}" href="${it.url}" data-open-app="${key}" data-key="${key}">${media}${text}</a></li>`;
  if (hasPreview(it)) return `<li data-q="${it.name} ${it.desc}"><a class="${cls}" href="${it.url}" data-view="${key}" data-key="${key}">${media}${text}</a></li>`;
  return `<li data-q="${it.name} ${it.desc}"><a class="${cls}" href="${it.url}" target="_blank" rel="noopener noreferrer" data-key="${key}">${media}${text}</a></li>`;
}

SECTIONS.forEach((sec, si) => {
  const big = sec.layout === 'big';
  const [w1, ...rest] = sec.title.split(' ');
  const titleHTML = rest.length ? `${w1} <em>${rest.join(' ')}</em>` : `<em>${w1}</em>`;
  const cards = sec.items.map((it, ii) => {
    const key = `${si}-${ii}`;
    ITEMS[key] = it;
    return cardHTML(it, key, big);
  }).join('');

  sectionsEl.insertAdjacentHTML('beforeend', `
    <section class="section" id="sec-${si}">
      <div class="section-head"><h2>${titleHTML}</h2><span class="count">${sec.items.length}</span></div>
      <p class="section-desc">${sec.desc || ''}</p>
      <ul class="${big ? 'stack' : 'grid'}">${cards}</ul>
    </section>`);
});

/* 사진 채우기: 직접 지정한 사진·영상은 바로, 나머지는 대표 이미지를 찾아서 (3개씩) */
const allKeys = Object.keys(ITEMS);
allKeys.filter((k) => ITEMS[k].thumb || ITEMS[k].video).forEach(paintImage);
const queue = allKeys.filter((k) => ITEMS[k].shot && !ITEMS[k].thumb);
async function worker() {
  while (queue.length) {
    const key = queue.shift();
    await resolveImage(ITEMS[key]);
    paintImage(key);
  }
}
Promise.all([worker(), worker(), worker()]);

/* 머리말: 오늘 날짜 */
(() => {
  const d = new Date();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  document.getElementById('stats').textContent =
    `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${days[d.getDay()]}요일${d.getDay() === 0 ? ' · 주일' : ''}`;
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
    visit.textContent = `오늘 방문 ${day.toLocaleString('ko-KR')}명`;
    visit.hidden = false;
    const totalEl = document.getElementById('total');
    totalEl.textContent = `누적 방문 ${total.toLocaleString('ko-KR')}명`;
    totalEl.hidden = false;
  } catch (e) { /* 불러오지 못하면 숫자는 숨겨요 */ }
}
showVisitors();

/* 위쪽 탭: 지금 보고 있는 곳 표시 */
const tabLinks = [...document.querySelectorAll('.tabs a')];
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      tabLinks.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === `#${en.target.id}`));
    });
  }, { rootMargin: '-25% 0px -60% 0px' });
  ['hero', 'sec-0', 'sec-1'].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
}

/* 앱 아이콘 가져오기 (앱스토어 공개 정보) */
document.querySelectorAll('[data-app]').forEach((box) => {
  const id = box.dataset.app;
  const cb = `__itunes_${id}`;
  const s = document.createElement('script');
  window[cb] = (data) => {
    const r = data && data.results && data.results[0];
    const art = r && (r.artworkUrl512 || r.artworkUrl100);
    if (art) {
      const im = new Image();
      im.alt = '';
      im.onload = () => { box.appendChild(im); requestAnimationFrame(() => im.classList.add('ready')); };
      im.src = art;
    }
    delete window[cb];
    s.remove();
  };
  s.onerror = () => { delete window[cb]; s.remove(); };
  s.src = `https://itunes.apple.com/lookup?id=${id}&country=kr&callback=${cb}`;
  document.head.appendChild(s);
});

/* 앱 열기: scheme이 있으면 설치된 앱을 먼저 열고, 안 열리면 앱스토어로 */
function openApp(it) {
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

/* 주일말씀 영상 */
const hero = document.getElementById('hero');
const heroBar = document.getElementById('hero-bar');
document.getElementById('hero-icon').innerHTML = svg('play');
heroBar.insertAdjacentHTML('beforeend', CHEVRON);

const vid = ytId(SUNDAY_SERMON.videoId);
const heroSrc = vid ? ytEmbed(vid, false) : channelEmbed(SUNDAY_SERMON.channelId);
if (heroSrc) {
  document.getElementById('hero-media').innerHTML =
    `<iframe src="${heroSrc}" title="주일말씀 다시보기" loading="lazy" allowfullscreen
       allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
       referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  document.getElementById('hero-sub').textContent = '유튜브 채널에서 더 보기';
} else {
  hero.classList.add('no-media');
}
if (SUNDAY_SERMON.url) {
  heroBar.href = SUNDAY_SERMON.url;
  heroBar.target = '_blank';
  heroBar.rel = 'noopener noreferrer';
} else {
  heroBar.dataset.soon = '1';
}

/* 알림 */
const toast = document.getElementById('toast');
let timer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

/* 미리보기 창 */
const viewer = document.getElementById('viewer');
const viewerMedia = document.getElementById('viewer-media');
const viewerTitle = document.getElementById('viewer-title');
const viewerDesc = document.getElementById('viewer-desc');
const viewerGo = document.getElementById('viewer-go');
let lastOpener = null;
let current = null;

function openViewer(it, opener) {
  current = it;
  lastOpener = opener || null;
  viewerTitle.textContent = it.name;
  viewerDesc.textContent = it.desc;
  viewerGo.href = it.url;
  viewerGo.innerHTML = `${it.name} 열기 ${svg('out')}`;

  const id = ytId(it.video);
  viewerMedia.classList.toggle('video', Boolean(id));
  if (id) {
    viewerMedia.innerHTML =
      `<iframe src="${ytEmbed(id, true)}" title="${it.name}" allowfullscreen
         allow="autoplay; accelerometer; encrypted-media; picture-in-picture; fullscreen"
         referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  } else {
    const src = imgFor(it) || shotUrl(it.url);
    viewerMedia.innerHTML = `
      <div class="viewer-fallback">${svg(it.icon)}<span>미리보기를 불러오는 중이에요</span></div>
      <img src="${src}" alt="${it.name} 대표 이미지" referrerpolicy="no-referrer"${it.small ? ' class="contain"' : ''}
        onerror="if(this.src!==${JSON.stringify(shotUrl(it.url))}){this.className='';this.src=${JSON.stringify(shotUrl(it.url))}}else{this.remove()}">`;
  }
  viewer.hidden = false;
  document.body.style.overflow = 'hidden';
  viewer.querySelector('.viewer-x').focus();
}

function closeViewer() {
  if (viewer.hidden) return;
  viewer.hidden = true;
  viewerMedia.innerHTML = '';   /* 영상 재생도 함께 멈춤 */
  document.body.style.overflow = '';
  if (lastOpener) lastOpener.focus();
}

async function shareCurrent() {
  if (!current) return;
  const data = { title: current.name, text: current.desc, url: current.url };
  try {
    if (navigator.share) { await navigator.share(data); return; }
    await navigator.clipboard.writeText(current.url);
    showToast('링크를 복사했어요');
  } catch (err) { /* 공유 창을 닫은 경우 */ }
}

document.addEventListener('click', (e) => {
  const soon = e.target.closest('[data-soon]');
  if (soon) { e.preventDefault(); showToast('아직 링크가 준비되지 않았어요'); return; }
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
  const app = e.target.closest('[data-open-app]');
  if (app) { e.preventDefault(); openApp(ITEMS[app.dataset.openApp]); return; }
  const opener = e.target.closest('[data-view]');
  if (opener) { e.preventDefault(); openViewer(ITEMS[opener.dataset.view], opener); return; }
  if (e.target.closest('[data-share]')) { shareCurrent(); return; }
  if (e.target.closest('[data-close]')) closeViewer();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeViewer(); });

/* 메뉴 검색 */
const q = document.getElementById('q');
const qClear = document.getElementById('q-clear');
const emptyEl = document.getElementById('empty');
function runSearch() {
  const term = q.value.trim().toLowerCase();
  qClear.hidden = !term;
  let total = 0;
  document.querySelectorAll('.section').forEach((sec) => {
    let shown = 0;
    sec.querySelectorAll('li').forEach((li) => {
      const hit = !term || li.dataset.q.toLowerCase().includes(term);
      li.hidden = !hit;
      if (hit) shown++;
    });
    sec.hidden = shown === 0;
    total += shown;
  });
  emptyEl.hidden = total !== 0;
  if (window.gsap) gsap.set('.card', { clearProps: 'opacity,transform' });
  if (window.ScrollTrigger) ScrollTrigger.refresh();
}
q.addEventListener('input', runSearch);
qClear.addEventListener('click', () => { q.value = ''; runSearch(); q.focus(); });

/* 움직임 (GSAP) — 모션 줄이기 설정이면 쓰지 않아요 */
(function initMotion() {
  if (!window.gsap || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const hasST = Boolean(window.ScrollTrigger);
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  /* 첫 화면: 머리말이 차례로 나타나고, 포인트 글씨에 형광펜이 그어져요 */
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.cross', { y: -20, opacity: 0, rotate: -14, duration: 0.7 })
    .from('.top h1', { y: 24, opacity: 0, duration: 0.8 }, '-=0.4')
    .fromTo('.top h1 em', { backgroundSize: '0% 100%' }, { backgroundSize: '100% 100%', duration: 0.7, ease: 'power2.inOut' }, '-=0.3')
    .from('.sub', { y: 12, opacity: 0, duration: 0.5 }, '-=0.5')
    .from('.stats', { y: 10, scale: 0.92, opacity: 0, duration: 0.5 }, '-=0.3')
    .from('.tabs a', { y: 10, opacity: 0, stagger: 0.07, duration: 0.4 }, '-=0.3')
    .from('.hero, .search', { y: 26, opacity: 0, stagger: 0.1, duration: 0.7, clearProps: 'transform,opacity' }, '-=0.4');

  if (!hasST) return;

  /* 스크롤하면 카드가 차례로 올라와요 */
  gsap.set('.card', { opacity: 0, y: 30 });
  ScrollTrigger.batch('.card', {
    start: 'top 94%',
    once: true,
    onEnter: (batch) => gsap.to(batch, {
      opacity: 1, y: 0, duration: 0.65, stagger: 0.09, ease: 'power3.out', overwrite: true,
      clearProps: 'transform,opacity',
    }),
  });

  /* 섹션 제목의 포인트 글씨에도 형광펜 */
  gsap.utils.toArray('.section-head h2 em').forEach((el) => {
    gsap.fromTo(el, { backgroundSize: '0% 100%' }, {
      backgroundSize: '100% 100%', duration: 0.7, ease: 'power2.inOut',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  /* 안전장치: 혹시 카드가 안 나타나면 보이게 */
  setTimeout(() => {
    document.querySelectorAll('.card').forEach((c) => { if (getComputedStyle(c).opacity === '0') c.style.opacity = 1; });
  }, 6000);
})();
