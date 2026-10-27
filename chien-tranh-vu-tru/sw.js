/* CHIẾN TRANH VŨ TRỤ — Service Worker (PWA)
   Chiến lược: HTML = network-first (bản đăng mới luôn tới được người đã cài),
   tài nguyên tĩnh (sprite/tiếng/icon/manifest) = cache-first.
   Đổi BUILD_ID mỗi lần phát hành để dọn cache cũ. */
const BUILD_ID = 'ctvt-v153-1';
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
  'robot','heavytank','heli','jet','gunship','bat','wasp','leviathan','scoutbot','artillery','colossus','scoutship','frigate','carrier','airfac','spire','stargate',
  /* v10: thân không súng + lớp vũ khí xoay · v11: sunken_spine (ngòi Sunken — Cường duyệt 2026-10-26 23:09) */
  'marine_body','marine_rifle','firebat_body','firebat_nozzle_r','firebat_nozzle_l','mech_body','mech_barrel_r','mech_barrel_l','robot_body','robot_barrel','heli_body','heli_chin','heavytank_hull','heavytank_turret','artillery_body','artillery_cannon','turret_base','turret_launcher','sunken_spine',
  /* v12: lớp chi route B (chân/hông) + rotor heli + cánh bat/wasp + dải xích cuộn theo bên */
  'scoutbot_legsL','scoutbot_legsR','scoutbot_torso','mech_legsL','mech_legsR','mech_torso','mech_bodyNL','robot_legsL','robot_legsR','robot_torso','robot_bodyNL','firebat_legsL','firebat_legsR','firebat_torso','firebat_bodyNL','heli_rotor','heli_nr','heli_body_nr','bat_wingL','bat_wingR','bat_bodyNW','wasp_wingL','wasp_wingR','wasp_bodyNW','heavytank_track','artillery_track'].map(function (n) { return 'assets/sprites/' + n + '.png'; });
/* v11: âm thanh TỔNG HỢP WebAudio toàn diện — không còn file tiếng tổng hợp nào để precache.
   v14: giọng THẬT cho ack quân (39 file mp3 trong voice/) — precache để chơi offline. */
const SOUNDS = [];
const VOICE = ['t-sel-1','t-sel-2','t-sel-3','t-move-1','t-move-2','t-move-3','t-atk-1','t-atk-2','t-atk-3','t-grb-1','t-grb-2','t-rdy-1','t-rdy-2',
  'z-sel-1','z-sel-2','z-sel-3','z-move-1','z-move-2','z-move-3','z-atk-1','z-atk-2','z-atk-3','z-grb-1','z-grb-2','z-rdy-1','z-rdy-2',
  'p-sel-1','p-sel-2','p-sel-3','p-move-1','p-move-2','p-move-3','p-atk-1','p-atk-2','p-atk-3','p-grb-1','p-grb-2','p-rdy-1','p-rdy-2']
  .map(function (n) { return 'voice/' + n + '.mp3'; });
const PRECACHE = CORE.concat(SPRITES, SOUNDS, VOICE);

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
