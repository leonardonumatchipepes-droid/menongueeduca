# VUNONGUE IA — configuração e operação

## Arquitectura desta primeira integração

- A interface continua em HTML/CSS/JavaScript nativo, sem substituir a aplicação existente.
- PDF.js extrai o texto dos manuais disponíveis em /pdfs no dispositivo do utilizador.
- Os excertos são divididos e guardados em IndexedDB para evitar reler os PDFs em cada pergunta.
- A pesquisa local selecciona até oito excertos e envia apenas esse contexto para uma Netlify Function.
- A função mantém a chave do fornecedor de IA no servidor e usa a API OpenAI Responses. O modelo pode ser alterado por variável de ambiente.

## Configuração necessária no Netlify

Em Site configuration → Environment variables, definir:

- OPENAI_API_KEY: chave privada da API OpenAI (nunca colocar no HTML, JavaScript do browser ou GitHub).
- OPENAI_MODEL (opcional): modelo compatível com a API Responses. Por omissão: gpt-4.1-mini.

Depois de guardar as variáveis, executar um novo deploy. A função fica disponível em /.netlify/functions/vunongue.

## Ficheiros PDF

A lista de livros e caminhos encontra-se em js/vunongue-rag.js. Confirmar que cada PDF existe no caminho indicado. A indexação actual lê todas as páginas com texto seleccionável; PDFs digitalizados sem camada de texto precisam de OCR antes de serem pesquisáveis. A cache é local a cada navegador/dispositivo e é reconstruída quando os dados do site são limpos ou a versão da base muda.

## Limitações e próxima etapa

Esta integração é um primeiro RAG funcional no navegador. Não é ainda um índice central partilhado entre todos os alunos, não executa OCR no servidor e não sincroniza o índice entre dispositivos. Para uma biblioteca institucional escalável, a próxima etapa é um pipeline de ingestão no servidor (OCR, extracção, PostgreSQL/pgvector, controlo de direitos e painel de gestão), mantendo a mesma interface de chat.

## Segurança e validação

- A chave da API só existe nas variáveis de ambiente do Netlify.
- A função valida método, pergunta e tamanho dos excertos e não aceita instruções dos PDFs como instruções de sistema.
- Não colocar PDFs protegidos por direitos de autor em repositórios públicos sem autorização.
- Antes de produção, testar com PDFs reais, confirmar as páginas recuperadas, custos, limites de utilização e política de privacidade para menores.
