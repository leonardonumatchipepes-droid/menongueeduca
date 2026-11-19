/* VUNONGUE IA — pesquisa local de manuais + geração segura no servidor */
(() => {
  "use strict";
  const BOOKS = [
    { path: "pdfs/hist_nganguela.pdf", subject: "História Local", grade: "Cultura", title: "História do povo Nanguela" },
    ...[1,2,3,4,5,6].flatMap((n) => [
      { path: "pdfs/mat_" + n + ".pdf", subject: "Matemática", grade: n + "ª Classe", title: "Matemática " + n + "ª classe" },
      { path: "pdfs/lp_" + n + ".pdf", subject: "Língua Portuguesa", grade: n + "ª Classe", title: "Língua Portuguesa " + n + "ª classe" },
      ...(n <= 4 ? [{ path: "pdfs/edm_" + n + ".pdf", subject: "Estudo do Meio", grade: n + "ª Classe", title: "Estudo do Meio " + n + "ª classe" }] : [
        { path: "pdfs/cn_" + n + ".pdf", subject: "Ciências", grade: n + "ª Classe", title: "Ciências " + n + "ª classe" },
        { path: "pdfs/geo_" + n + ".pdf", subject: "Geografia", grade: n + "ª Classe", title: "Geografia " + n + "ª classe" },
        { path: "pdfs/hist_" + n + ".pdf", subject: "História", grade: n + "ª Classe", title: "História " + n + "ª classe" }
      ])
    ])
  ];
  const DB_NAME = "vunongue-knowledge-v1", STORE = "pages";
  const messages = document.getElementById("messages"), input = document.getElementById("input"), loading = document.getElementById("loading");
  let busy = false;
  function openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => { const db = request.result; if (!db.objectStoreNames.contains(STORE)) { const store = db.createObjectStore(STORE, { keyPath: "id" }); store.createIndex("book", "path", { unique: false }); } };
      request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error);
    });
  }
  async function getAllPages() {
    const db = await openDB();
    return new Promise((resolve, reject) => { const tx = db.transaction(STORE, "readonly"), req = tx.objectStore(STORE).getAll(); req.onsuccess = () => resolve(req.result || []); req.onerror = () => reject(req.error); tx.oncomplete = () => db.close(); });
  }
  async function savePages(rows) {
    const db = await openDB();
    return new Promise((resolve, reject) => { const tx = db.transaction(STORE, "readwrite"), store = tx.objectStore(STORE); rows.forEach((row) => store.put(row)); tx.oncomplete = () => { db.close(); resolve(); }; tx.onerror = () => { db.close(); reject(tx.error); }; });
  }
  function splitText(text, book, page) {
    const clean = text.replace(/\s+/g, " ").trim(); if (!clean) return [];
    const chunks = [], size = 1100, overlap = 180;
    for (let start = 0; start < clean.length; start += size - overlap) {
      const part = clean.slice(start, start + size).trim();
      if (part.length > 80) chunks.push({ id: book.path + ":" + page + ":" + start, path: book.path, book: book.title, grade: book.grade, subject: book.subject, page, text: part });
    }
    return chunks;
  }
  async function indexBook(book, pdfjs) {
    const existing = await getAllPages(); if (existing.some((row) => row.path === book.path)) return 0;
    const pdf = await pdfjs.getDocument({ url: new URL(book.path, document.baseURI).href }).promise;
    let batch = [];
    for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
      const page = await pdf.getPage(pageNo), content = await page.getTextContent();
      batch.push(...splitText(content.items.map((item) => item.str || "").join(" "), book, pageNo));
      if (pageNo % 15 === 0) { await savePages(batch); batch = []; }
    }
    if (batch.length) await savePages(batch);
    return pdf.numPages;
  }
  async function ensureIndex(status) {
    const pdfjs = window["pdfjs-dist/build/pdf"];
    if (!pdfjs) throw new Error("O leitor PDF não foi carregado. Actualiza a página e tenta novamente.");
    let pages = await getAllPages();
    let completed = 0, available = 0;
    for (const book of BOOKS) {
      status.textContent = "A preparar biblioteca escolar: " + book.title + "…";
      try { if (await indexBook(book, pdfjs)) available++; } catch (error) { console.warn("Livro indisponível ou não legível:", book.path, error?.message); }
      completed++; status.textContent = "A preparar biblioteca: " + completed + "/" + BOOKS.length + " livros verificados…";
    }
    pages = await getAllPages();
    if (!pages.length) throw new Error("Não foi possível ler os PDFs. Confirma os ficheiros na pasta /pdfs e a ligação à Internet.");
    status.textContent = pages.length + " excertos preparados; " + available + " livros lidos nesta sessão. A biblioteca ficará guardada neste dispositivo.";
    return pages;
  }
  function termsOf(query) { return query.toLocaleLowerCase("pt-AO").normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(/[a-z0-9]{3,}/g) || []; }
  function retrieve(query, pages) {
    const terms = [...new Set(termsOf(query))]; if (!terms.length) return [];
    const ranked = pages.map((page) => {
      const text = (page.text + " " + page.subject + " " + page.grade).toLocaleLowerCase("pt-AO").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let score = 0; for (const term of terms) score += Math.min(text.split(term).length - 1, 5) * (term.length > 5 ? 2 : 1);
      return { ...page, score };
    }).filter((page) => page.score > 0).sort((a,b) => b.score - a.score);
    const chosen = [], seen = new Set();
    for (const item of ranked) { const key = item.path + ":" + item.page; if (!seen.has(key)) { chosen.push(item); seen.add(key); } if (chosen.length === 8) break; }
    return chosen;
  }
  function addBubble(text, role) {
    const wrap = document.createElement("div"); wrap.className = "message " + role;
    const bubble = document.createElement("div"); bubble.className = "bubble"; bubble.textContent = text;
    wrap.appendChild(bubble); messages.appendChild(wrap); messages.scrollTop = messages.scrollHeight;
  }
  async function ask(query) {
    if (busy || !query.trim()) return;
    busy = true; addBubble(query, "user"); input.value = ""; loading.style.display = "block";
    const oldText = loading.textContent; loading.textContent = "A VUNONGUE IA está a pesquisar nos manuais…";
    try {
      const pages = await ensureIndex(loading), context = retrieve(query, pages);
      if (!context.length) throw new Error("Não encontrei conteúdo relacionado nos manuais disponíveis. Reformula a pergunta ou indica a classe e a disciplina.");
      loading.textContent = "A preparar uma explicação com base nos livros…";
      const response = await fetch("/.netlify/functions/vunongue", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: query, context }) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error || "Não foi possível obter a resposta.");
      const refs = [...new Map((data.sources || []).map((s) => [s.book + s.page, s])).values()].map((s) => "• " + s.book + " — " + s.grade + ", " + s.subject + ", página " + (s.page ?? "não identificada")).join("\n");
      addBubble(data.answer + (refs ? "\n\nFONTES CONSULTADAS\n" + refs : ""), "bot");
    } catch (error) { addBubble(error.message || "Ocorreu um erro. Tenta novamente.", "bot"); }
    finally { loading.style.display = "none"; loading.textContent = oldText; busy = false; }
  }
  window.send = () => ask(input.value);
  window.perguntar = (text) => { input.value = text; ask(text); };
})();
