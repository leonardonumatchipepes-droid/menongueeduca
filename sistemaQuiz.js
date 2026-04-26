// ===============================
// SISTEMA QUIZ - MENONGUE EDUCA
// ===============================

let perguntasAtuais = [];
let perguntaAtualIndex = 0;
let pontuacao = 0;
let classeAtual = "";
let disciplinaAtual = "";
let respondendo = false;

// ===============================
// FUNÇÃO EMBARALHAR
// ===============================
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ===============================
// GERAR QUIZ SEM REPETIÇÕES
// ===============================
function gerarQuiz(classe, disciplina) {
    classeAtual = classe;
    disciplinaAtual = disciplina;

    let bancoNome = "BancoPerguntas" + disciplina;
    let bancoOriginal = window[bancoNome] || [];

    let disponiveis = bancoOriginal.filter(p => p.grupoClasse === String(classe));

    let chaveHistorico = `usadas_${disciplina}_${classe}`;
    let usadas = JSON.parse(localStorage.getItem(chaveHistorico)) || [];

    let naoUsadas = disponiveis.filter(p => !usadas.includes(p.pergunta));

    if (naoUsadas.length < 5) {
        usadas = [];
        localStorage.setItem(chaveHistorico, JSON.stringify([]));
        naoUsadas = disponiveis;
    }

    let sorteadas = embaralhar(naoUsadas).slice(0, 10);

    perguntasAtuais = sorteadas;
    perguntaAtualIndex = 0;
    pontuacao = 0;
    respondendo = false;

    mostrarPergunta();
}

// ===============================
// MOSTRAR PERGUNTA
// ===============================
function mostrarPergunta() {
    respondendo = false;
    if (perguntaAtualIndex >= perguntasAtuais.length) {
        mostrarResultado();
        return;
    }

    const perguntaObj = perguntasAtuais[perguntaAtualIndex];
    document.getElementById("pergunta").innerText = perguntaObj.pergunta;

    const opcoesContainer = document.getElementById("opcoes");
    opcoesContainer.innerHTML = "";

    let opcoesComIndice = perguntaObj.opcoes.map((op, i) => ({ texto: op, original: i }));
    embaralhar(opcoesComIndice);

    opcoesComIndice.forEach((item) => {
        const botao = document.createElement("button");
        botao.innerText = item.texto;
        botao.classList.add("opcao-btn");
        botao.onclick = (e) => verificarResposta(item.original, perguntaObj.correta, e.target);
        opcoesContainer.appendChild(botao);
    });

    document.getElementById("progresso").innerHTML =
        `Pergunta <b>${perguntaAtualIndex + 1}/${perguntasAtuais.length}</b> | Acertos: <b style="color:#00ff95">${pontuacao}</b>`;
}

// ===============================
// VERIFICAR RESPOSTA COM SOM E COR
// ===============================
function verificarResposta(selecionado, correta, botaoElemento) {
    if (respondendo) return;
    respondendo = true;

    const perguntaObj = perguntasAtuais[perguntaAtualIndex];
    salvarQuestaoComoUsada(perguntaObj.pergunta);

    const todosBotoes = document.querySelectorAll(".opcao-btn");

    if (selecionado === correta) {
        pontuacao++;
        botaoElemento.style.backgroundColor = "#2ecc71"; // VERDE
        botaoElemento.style.borderColor = "#27ae60";
        // TOCAR SOM DE ACERTO
        try { document.getElementById("somCerto").play(); } catch(e) {}
    } else {
        botaoElemento.style.backgroundColor = "#e74c3c"; // VERMELHO
        botaoElemento.style.borderColor = "#c0392b";
        // TOCAR SOM DE ERRO
        try { document.getElementById("somErrado").play(); } catch(e) {}
    }

    todosBotoes.forEach(btn => btn.disabled = true);
    perguntaAtualIndex++;

    setTimeout(mostrarPergunta, 1000);
}

function salvarQuestaoComoUsada(perguntaTexto) {
    let chaveHistorico = `usadas_${disciplinaAtual}_${classeAtual}`;
    let usadas = JSON.parse(localStorage.getItem(chaveHistorico)) || [];
    if (!usadas.includes(perguntaTexto)) {
        usadas.push(perguntaTexto);
        localStorage.setItem(chaveHistorico, JSON.stringify(usadas));
    }
}

// ===============================
// MOSTRAR RESULTADO FINAL COM MEDALHAS
// ===============================
function mostrarResultado() {
    const container = document.getElementById("quiz-container");

    let medalha = "imagens/medalha_broze.png";
    let msg = "Continua a estudar! 📚";

    if (pontuacao >= 9) {
        medalha = "imagens/medalha_ouro.png";
        msg = "Excelente! 🌟";
    } else if (pontuacao >= 6) {
        medalha = "imagens/medalha_prata.png";
        msg = "Bom trabalho! 👍";
    }

    container.innerHTML = `
        <div class="resultado-box" style="text-align: center;">
            <h2>${msg}</h2>
            <img src="${medalha}" alt="Medalha" style="width: 120px; margin: 20px auto; display: block;">
            <p style="font-size: 1.2rem;">Acertaste <b>${pontuacao}</b> de <b>${perguntasAtuais.length}</b> questões.</p>
            <div style="margin-top: 30px;">
                <button class="btn-acao" onclick="location.reload()" style="background:#333; margin-right:10px;">Voltar ao Menu</button>
                <button class="btn-acao" onclick="gerarQuiz('${classeAtual}', '${disciplinaAtual}')">Novo Quiz</button>
            </div>
        </div>
    `;

    if (window.Android && window.Android.finalizarQuiz) {
        window.Android.finalizarQuiz(pontuacao);
    }
}
