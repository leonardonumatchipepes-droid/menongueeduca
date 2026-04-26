const CACHE_NAME = "menongue-lite-v2";
const PDF_CACHE = "pdf-cache-v1";

// 🔹 Apenas arquivos essenciais (APP leve)
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./jogos.html",
  "./estudo.html",
  "./ia.html",
  "./historia.html",
  "./institucional.html",

  "./imagens/icon-192.png",
  "./imagens/icon-512.png",
  "./imagens/vunoNgue.png",
  "./imagens/insignia.png",
  "./imagens/logo.png",
  "./imagens/jogo.png",
  "./imagens/livro.png",
  "./imagens/ia.png",
  "./imagens/historia.png",
  "./imagens/institucional.png"
];

// 🚀 Instalação (só app leve)
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// 🔄 Limpa versões antigas
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== PDF_CACHE)
          .map(key => caches.delete(key))
      )
    )
  );
});

// 🌐 Intercepta tudo
self.addEventListener("fetch", event => {
  const request = event.request;

  // 🔴 Se for PDF → estratégia especial
  if (request.url.includes(".pdf")) {
    event.respondWith(handlePDF(request));
    return;
  }

  // 🔵 Para o resto (APP)
  event.respondWith(
    caches.match(request).then(response => {
      return response || fetch(request).catch(() => {
        if (request.destination === "document") {
          return caches.match("./index.html");
        }
      });
    })
  );
});

// 📚 Função para PDFs (download sob demanda + offline)
async function handlePDF(request) {
  const cache = await caches.open(PDF_CACHE);
  const cached = await cache.match(request);

  // ✅ Se já existe → abre offline
  if (cached) return cached;

  try {
    // 🌐 Baixa da internet
    const response = await fetch(request);
    
    // 💾 Guarda no cache
    cache.put(request, response.clone());

    return response;

  } catch (error) {
    // ❌ Se offline e não existe
    return new Response("PDF não disponível offline ainda.", {
      status: 404,
      headers: { "Content-Type": "text/plain" }
    });
  }
}
