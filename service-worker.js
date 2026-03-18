const CACHE_NAME = "menongue-v1";

// URLs para cache (páginas, imagens, ícones)
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
];

// PDFs da base de livros
const livros = {
  1:[ "mat_1.pdf","lp_1.pdf","edm_1.pdf","ef_1.pdf","emp_1.pdf" ],
  2:[ "mat_2.pdf","lp_2.pdf","edm_2.pdf","ef_2.pdf","emp_2.pdf" ],
  3:[ "mat_3.pdf","lp_3.pdf","edm_3.pdf","ef_3.pdf","emp_3.pdf" ],
  4:[ "mat_4.pdf","lp_4.pdf","edm_4.pdf","ef_4.pdf","emp_4.pdf" ],
  5:[ "mat_5.pdf","lp_5.pdf","cn_5.pdf","geo_5.pdf","hist_5.pdf","emc_5.pdf" ],
  6:[ "mat_6.pdf","lp_6.pdf","cn_6.pdf","geo_6.pdf","hist_6.pdf","emc_6.pdf" ]
};

// Adiciona PDFs ao cache
for (const ano in livros) {
  livros[ano].forEach(file => urlsToCache.push(`./pfds/${file}`));
}

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
