/* CHIẾN TRANH VŨ TRỤ — Service Worker (PWA)
   Chiến lược: HTML = network-first (bản đăng mới luôn tới được người đã cài),
   tài nguyên tĩnh (sprite/tiếng/icon/manifest) = cache-first.
   Đổi BUILD_ID mỗi lần phát hành để dọn cache cũ. */
const BUILD_ID = 'ctvt-v6-5';
const CACHE = BUILD_ID;

const CORE = [
  './',
  'index.html',
  'assets/title-art.webp',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png',
  'apple-touch-icon.png'
];
const SPRITES = ['worker','marine','firebat','tank','mech','dropship','zergling','hydralisk','ultralisk',
  'drone','overlord','probe','zealot','dragoon','archon',
  'command','depot','barracks','factory','turret','refinery','hatchery',
  'extractor','spawningpool','zergden','sunkencolony','nexus','pylon','gateway','cybercore','cannon','assimilator',
  'mineral','geyser',
  /* FIX v5: sheet khung hình đi + bộ phận Xe Tăng */
  'marine_walk','worker_walk','zergling_walk','zealot_walk','tank_hull','tank_turret','tank_track',
  /* FIX v6: quân bay + quân/nhà mới */
  'robot','heavytank','heli','jet','gunship','bat','wasp','leviathan','scoutbot','artillery','colossus','scoutship','frigate','carrier','airfac','spire','stargate'].map(function (n) { return 'assets/sprites/' + n + '.png'; });
const SOUNDS = ['alarm','ambient','attack','build_done','error','explosion_big','explosion_small','harvest',
  'hit_tick','move','select','shoot_cannon','shoot_flame','shoot_laser','shoot_laser2','shoot_laser3','shoot_laser4',
  'shoot_spit','train_done','ui_click'].map(function (n) { return 'assets/sounds/' + n + '.ogg'; });
const PRECACHE = CORE.concat(SPRITES, SOUNDS);

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(PRECACHE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (k) { return k === CACHE ? null : caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var isDoc = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').indexOf('text/html') >= 0 ||
    url.pathname.endsWith('/') || url.pathname.endsWith('index.html');
  if (isDoc) {
    /* HTML: network-first, rớt mạng thì lấy bản cache gần nhất */
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put('index.html', copy); });
        return res;
      }).catch(function () {
        return caches.match('index.html', { ignoreSearch: true })
          .then(function (m) { return m || caches.match('./', { ignoreSearch: true }); });
      })
    );
    return;
  }
  /* Tĩnh: cache-first, thiếu thì tải mạng rồi lưu lại */
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && res.ok && url.origin === self.location.origin) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
