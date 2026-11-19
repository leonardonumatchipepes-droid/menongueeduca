# PROMPT DE IMPLEMENTAÇÃO — VUNONGUE IA OFFLINE-FIRST

> Documento de execução do projecto Menongue Educa. Esta especificação orienta a evolução incremental da VUNONGUE IA para funcionar sem ligação à Internet depois de os conteúdos necessários terem sido descarregados.

## 1. Missão

Evoluir a VUNONGUE IA para um tutor escolar digital, leve, seguro e prioritariamente offline, integrado na aplicação Menongue Educa, destinado aos alunos da 1.ª à 6.ª classe em Angola.

A solução deve responder com base nos manuais escolares efectivamente disponíveis, explicar conteúdos numa linguagem adequada à idade e indicar sempre a fonte (manual, classe, disciplina e página, quando identificável).

## 2. Regras obrigatórias de desenvolvimento

- Trabalhar incrementalmente na estrutura existente; não recriar a aplicação.
- Preservar páginas, estilos, navegação, jogos, biblioteca, conteúdos institucionais e funcionalidades já existentes.
- Não remover nem substituir ficheiros sem necessidade técnica demonstrada.
- Não declarar uma funcionalidade como concluída sem a testar.
- Não inventar livros, caminhos, páginas, conteúdos, estatísticas ou fontes.
- Não colocar chaves de API, tokens ou segredos no código do navegador ou no repositório.
- Manter compatibilidade com a PWA, service worker, Netlify e integração Android/WebView existente.
- Priorizar baixo consumo de dados, armazenamento controlado e dispositivos Android modestos.
- Usar português de Angola, com explicações simples e pedagógicas.
- Respeitar direitos de autor dos manuais e só distribuir materiais cuja utilização esteja autorizada.

## 3. Comportamento esperado

### 3.1 Modo offline como caminho principal

Depois de descarregados os recursos necessários, o aluno deve conseguir:
- abrir a aplicação e a página da VUNONGUE IA sem Internet;
- consultar os pacotes de conteúdos já descarregados;
- fazer perguntas sobre os conteúdos indexados;
- receber respostas locais, com indicação clara das fontes;
- resolver operações matemáticas básicas com explicação passo a passo.

A primeira visita ou a transferência de novos pacotes pode exigir Internet. A aplicação deve informar claramente quando um conteúdo ainda não foi descarregado.

### 3.2 Biblioteca escolar modular

Organizar os conteúdos por classe e disciplina, através de um manifesto verificável. Não presumir que um PDF existe: confirmar cada caminho no repositório e validar o ficheiro.

Cada pacote deve, sempre que possível, incluir:
- metadados do manual;
- texto extraído e dividido em excertos;
- classe, disciplina, título, página e identificador;
- índice de pesquisa;
- versão, tamanho e checksum;
- referência ao PDF original, quando disponível e autorizado.

Permitir descarregar e remover pacotes por classe/disciplina, apresentar progresso e informar sobre espaço de armazenamento. Os pacotes descarregados devem permanecer disponíveis em modo de avião.

### 3.3 Leitura e preparação dos manuais

- Incorporar localmente a versão compatível do PDF.js e o respectivo worker; não depender de CDN para a funcionalidade offline.
- Preferir extrair e preparar os textos durante a construção/publicação dos pacotes, em vez de obrigar cada aluno a processar todos os PDFs no primeiro uso.
- Detectar PDFs sem camada de texto seleccionável e assinalá-los para OCR.
- Não fingir que um documento digitalizado foi indexado quando não foi aplicado OCR.

### 3.4 Pesquisa e respostas locais

Implementar pesquisa local por termos, com normalização de acentos e classificação de relevância (BM25, TF-IDF ou método equivalente adequado ao tamanho dos pacotes).

A resposta offline deve:
- utilizar apenas excertos recuperados e conhecimento pedagógico explicitamente implementado;
- distinguir citação do manual de explicação simplificada;
- mostrar manual, classe, disciplina e página;
- admitir quando não encontrou informação suficiente;
- nunca inventar uma página ou atribuir ao manual uma informação que não consta do excerto.

Não é obrigatório incluir um modelo generativo pesado no APK. A primeira versão offline deve funcionar com pesquisa local, respostas extractivas, modelos pedagógicos e motores determinísticos para matemática. Um modelo local pequeno poderá ser avaliado posteriormente, como componente opcional, apenas após testes de desempenho e compatibilidade.

### 3.5 Matemática passo a passo

Criar ou integrar um motor JavaScript local, testado, para operações adequadas às classes abrangidas: adição, subtracção, multiplicação, divisão e problemas aritméticos simples. Apresentar etapas e explicar o raciocínio sem afirmar que compreende qualquer enunciado livre quando não o consegue interpretar.

### 3.6 IA online como complemento

A função Netlify e a API de IA podem permanecer como recurso complementar, nunca como dependência do modo offline.

- Detectar conectividade e falhas de rede.
- Quando online, permitir fallback para o serviço remoto, com consentimento/configuração e limites de utilização.
- Quando offline, responder pelo motor local sem chamar a função Netlify.
- Manter segredos exclusivamente nas variáveis de ambiente do servidor.
- Não enviar dados pessoais de crianças desnecessários.

## 4. Armazenamento e desempenho

- Usar IndexedDB e/ou Cache Storage de forma coerente com a arquitectura actual.
- Versionar bases de dados e caches para permitir actualizações seguras.
- Tratar quotas, falta de espaço, falhas de transferência e interrupções.
- Evitar descarregar todos os manuais automaticamente.
- Permitir retomar ou repetir transferências sem corromper os pacotes.
- Não aumentar desnecessariamente o tamanho do APK: distribuir conteúdos por pacotes descarregáveis, quando tecnicamente adequado.
- Garantir que a aplicação continua utilizável mesmo que o utilizador não descarregue qualquer pacote.

## 5. Segurança, privacidade e fiabilidade

- Tratar texto dos manuais como conteúdo não confiável, nunca como instruções de sistema.
- Sanitizar conteúdo apresentado na interface; não inserir texto de livros com innerHTML sem sanitização.
- Validar entradas, tamanhos e formatos.
- Não guardar perguntas ou dados identificáveis de menores sem necessidade e base adequada.
- Apresentar aviso de que as respostas são apoio ao estudo e devem ser confirmadas com o professor/manual.
- Tratar erros de forma amigável e manter a interface funcional.

## 6. Plano de execução por etapas

**Etapa A — Auditoria**
1. Inspeccionar a estrutura real do repositório e os caminhos dos manuais.
2. Verificar a página ia.html, scripts, service-worker.js, manifestos e configuração Netlify.
3. Confirmar a versão e o carregamento global do PDF.js.
4. Identificar conflitos entre o código legado da página e js/vunongue-rag.js.
5. Produzir uma lista de ficheiros existentes, lacunas e riscos antes de alterar.

**Etapa B — Base offline**
1. Corrigir a integração da VUNONGUE IA sem duplicar os eventos de envio nem executar dois motores concorrentes.
2. Empacotar PDF.js e worker localmente.
3. Criar manifesto de conteúdos com caminhos reais e validados.
4. Criar ferramenta de preparação de manuais para extrair texto, dividir excertos e preservar páginas.
5. Criar pesquisa local e respostas com fontes.

**Etapa C — Pacotes**
1. Criar pacotes descarregáveis por classe/disciplina.
2. Implementar progresso, tamanho, checksum, estado instalado e opção de remover.
3. Guardar pacotes localmente e disponibilizá-los offline.
4. Tratar actualizações e versões sem apagar dados válidos do aluno.

**Etapa D — Pedagogia**
1. Implementar motor matemático local e testes.
2. Criar modelos de explicação por faixa de classe.
3. Melhorar respostas para perguntas incompletas, ausência de fonte e dúvidas fora do âmbito.

**Etapa E — Validação**
1. Executar testes automatizados de pesquisa, indexação, armazenamento e matemática.
2. Testar instalação e primeira transferência com Internet.
3. Activar modo de avião e testar abertura, perguntas, respostas e referências.
4. Testar recarregamento da página, reinício da aplicação e cache após actualização.
5. Testar Android/WebView e dispositivos com armazenamento e memória limitados.
6. Confirmar que as restantes páginas e funcionalidades da aplicação continuam operacionais.
7. Registar claramente o que foi testado, o que falhou e o que permanece pendente.

## 7. Critérios de aceitação

A implementação só pode ser considerada offline funcional quando todos os pontos seguintes forem demonstrados:
- a página da VUNONGUE IA abre sem Internet depois de instalada/cacheada;
- PDF.js e worker são carregados localmente;
- pelo menos um pacote de conteúdos descarregado é pesquisável sem Internet;
- uma pergunta baseada nesse pacote produz resposta local com referência verificável;
- uma pergunta sem suporte documental recebe uma mensagem honesta;
- a matemática básica funciona sem chamar qualquer serviço remoto;
- o modo offline não faz pedidos à função Netlify;
- a aplicação principal e as funcionalidades anteriores continuam a funcionar;
- os testes e limitações estão documentados.

## 8. Estado conhecido no início desta especificação

A integração existente já inclui a página ia.html, js/vunongue-rag.js, uma função Netlify e armazenamento IndexedDB para excertos. Contudo, a versão observada ainda não satisfaz os critérios de offline integral: o PDF.js/worker é carregado por CDN e o fluxo de perguntas chama a função Netlify para gerar respostas. A integração também precisa de validação do global utilizado para aceder ao PDF.js e de resolução do conflito entre o código legado e o novo script RAG.

Portanto, não apresentar a VUNONGUE IA como 100% offline até concluir e testar as etapas acima.

## 9. Instrução final ao agente de desenvolvimento

Começa pela Etapa A. Lê os ficheiros reais antes de editar. Apresenta um plano curto baseado no código encontrado e executa as melhorias seguras, incrementais e verificáveis, preservando a branch principal e todas as funcionalidades existentes. Não simules testes, resultados, livros ou integração. Se uma alteração exigir uma decisão que possa quebrar compatibilidade ou apagar dados, pára e pede confirmação.
