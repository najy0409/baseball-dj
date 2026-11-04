// 앱 설치용 서비스 워커: 캐시하지 않는다. 페이지(index.html)는 열 때마다 새로 받아
// GitHub에 새 버전을 올리면 폰에서도 바로 반영되게 한다(브라우저가 예전 파일을 10분쯤 붙잡는 것 방지)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => fetch(e.request)));
});
