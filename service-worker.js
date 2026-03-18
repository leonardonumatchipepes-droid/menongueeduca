const CACHE_NAME = "menongue-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./jogos.html",
  "./estudo.html",
  "./ia.html",
  "./historia.html",
  "./institucional.html",

  // Ícones
  "./imagens/icon-192.png",
  "./imagens/icon-512.png",

  // Imagens
  "./imagens/vunoNgue.png",
  "./imagens/insignia.png",
  "./imagens/logo.png",
  "./imagens/jogo.png",
  "./imagens/livro.png",
  "./imagens/ia.png",
  "./imagens/historia.png",
  "./imagens/institucional.png",

  // PDFs do 1º ao 6º ano
  "./pfds/mat_1.pdf", "./pfds/lp_1.pdf", "./pfds/edm_1.pdf", "./pfds/ef_1.pdf", "./pfds/emp_1.pdf",
  "./pfds/mat_2.pdf", "./pfds/lp_2.pdf", "./pfds/edm_2.pdf", "./pfds/ef_2.pdf", "./pfds/emp_2.pdf",
  "./pfds/mat_3.pdf", "./pfds/lp_3.pdf", "./pfds/edm_3.pdf", "./pfds/ef_3.pdf", "./pfds/emp_3.pdf",
  "./pfds/mat_4.pdf", "./pfds/lp_4.pdf", "./pfds/edm_4.pdf", "./pfds/ef_4.pdf", "./pfds/emp_4.pdf",
  "./pfds/mat_5.pdf", "./pfds/lp_5.pdf", "./pfds/cn_5.pdf", "./pfds/geo_5.pdf", "./pfds/hist_5.pdf", "./pfds/emc_5.pdf",
  "./pfds/mat_6.pdf", "./pfds/lp_6.pdf", "./pfds/cn_6.pdf", "./pfds/geo_6.pdf", "./pfds/hist_6.pdf", "./pfds/emc_6.pdf"
];

// Instalação e cache inicial
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

// Intercepta requisições
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => {
        if(event.request.destination === "document") return caches.match("./index.html");
      })
  );
});
