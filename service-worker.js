const CACHE_NAME = "menongue-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./jogos.html",
  "./estudo.html",
  "./ia.html",
  "./historia.html",
  "./institucional.html",
  "./icon-192.png",
  "./icon-512.png",
  "./imagens/vunoNgue.png",
  "./imagens/insignia.png",
  "./imagens/logo.png",
  "./imagens/jogo.png",
  "./imagens/livro.png",
  "./imagens/ia.png",
  "./imagens/historia.png",
  "./imagens/institucional.png"
  // Se houver PDFs ou outros arquivos:
  // "./pdfs/material1.pdf",
  // "./pdfs/material2.pdf"
];

// Instalação do service worker e cache inicial
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Ativação e remoção de caches antigos
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

// Interceptação de requisições
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
