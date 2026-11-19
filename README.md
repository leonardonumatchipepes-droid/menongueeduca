# Menongue Educa 🎓

**Menongue Educa** é uma plataforma educacional futurista desenvolvida para apoiar alunos do ensino primário (1ª à 6ª classe) no município de Menongue, Angola. O aplicativo oferece uma experiência interativa com jogos, biblioteca digital e uma inteligência artificial interna.

---

## 🤖 VUNONGUE IA — Tutor Inteligente Offline

A **VUNONGUE IA** é o tutor digital do Menongue Educa. A sua evolução segue uma arquitectura *offline-first*: o objectivo é permitir pesquisa e respostas locais depois de descarregar os conteúdos necessários. **A versão actualmente integrada ainda não cumpre o funcionamento integral offline**; consultar a documentação técnica.

### Como funciona:
1.  **Pesquisa nos Livros**: A IA utiliza a tecnologia `PDF.js` para ler e indexar todos os manuais escolares (Português, Matemática, Ciências, História, Geografia, etc.) armazenados localmente na pasta `assets/pfds`.
2.  **Busca Inteligente**: Ao receber uma pergunta, a IA varre os livros em tempo real, identifica o assunto e extrai explicações claras e simplificadas para a criança.
3.  **Matemática Passo a Passo**: 
    *   Reconhece problemas matemáticos automaticamente.
    *   Resolve operações de soma, subtração, multiplicação e divisão.
    *   Apresenta a solução com uma metodologia didática, explicando o processo passo a passo.
4.  **Interface Amigável**: Respostas acompanhadas de ícones e referências diretas à fonte (Disciplina e Classe).

---

## 📚 Funcionalidades Principais

*   **🎮 Jogos Educativos**: Quiz de conhecimentos gerais e o jogo "Corrida Menongue", unindo diversão e aprendizado.
*   **📖 Estudo (Biblioteca)**: Acesso rápido a todos os livros da reforma educativa em formato PDF, organizados por classe.
*   **🇦🇴 História do Povo Nanguela**: Seção interativa dedicada à preservação da cultura e tradições locais.
*   **🏢 Institucional**: Informações sobre a Administração Municipal de Menongue e a Direção da Educação.

---

## 🛠️ Detalhes Técnicos

*   **Plataforma**: aplicação Web/PWA com integração Android/WebView.
*   **Tecnologias Web**: HTML5, CSS3 e JavaScript.
*   **Pesquisa local**: a integração RAG guarda excertos em IndexedDB no dispositivo.
*   **Geração remota**: a versão actual ainda depende de Internet e de uma função Netlify/API para gerar respostas.
*   **PDF.js**: a página actual carrega a biblioteca e o worker por CDN; o empacotamento local é uma tarefa pendente.
*   **Offline integral**: ainda não implementado nem validado. Os manuais disponíveis em cache podem abrir offline, mas isso não significa que todo o tutor funcione sem rede.

A especificação de execução está em [docs/PROMPT-IMPLEMENTACAO-VUNONGUE-OFFLINE.md](docs/PROMPT-IMPLEMENTACAO-VUNONGUE-OFFLINE.md).

---
*Administração Municipal de Menongue | Direção Municipal da Educação*
*© 2026 — Transformando a Educação através da Tecnologia.*


## 🤖 VUNONGUE IA — pesquisa nos manuais e respostas com IA

A VUNONGUE IA está a ser evoluída para uma arquitectura RAG incremental:

- O navegador extrai o texto dos PDFs configurados em `js/vunongue-rag.js` com PDF.js.
- Os excertos são guardados localmente em IndexedDB para reduzir leituras repetidas.
- A pesquisa selecciona excertos relevantes e envia apenas esse contexto para uma função segura no Netlify.
- A função utiliza a API OpenAI Responses; a chave permanece no servidor.

**Configuração obrigatória:** definir `OPENAI_API_KEY` nas variáveis de ambiente do Netlify e executar um novo deploy. Opcionalmente, definir `OPENAI_MODEL`. Sem a chave, o endpoint informa que falta configuração e não simula respostas.

**Nota sobre funcionamento:** a pesquisa dos conteúdos já indexados pode ocorrer no dispositivo; a geração de respostas pela IA requer Internet. PDFs digitalizados sem texto seleccionável necessitam de OCR. Consultar [a documentação de configuração](docs/VUNONGUE-IA-SETUP.md).
