// ===============================
// SISTEMA QUIZ - MENONGUE EDUCA
// ===============================

// Variáveis globais
let perguntasAtuais = [];
let perguntaAtualIndex = 0;
let pontuacao = 0;
let classeAtual = "";
let disciplinaAtual = "";

// ===============================
// FUNÇÃO EMBARALHAR
// ===============================
function embaralhar(array) {
    return array.sort(() => Math.random() - 0.5);
}

// ===============================
// GERAR QUIZ (5 fáceis + 5 difíceis)
// ===============================
function gerarQuiz(classe, disciplina) {

    classeAtual = classe;
    disciplinaAtual = disciplina;

    const faceis = bancoPerguntas.filter(p =>
        p.classe === classe &&
        p.disciplina === disciplina &&
        p.nivel === "basico"
    );

    const dificeis = bancoPerguntas.filter(p =>
        p.classe === classe &&
        p.disciplina === disciplina &&
        p.nivel === "dificil"
    );

    const sorteadasFaceis = embaralhar(faceis).slice(0, 5);
    const sorteadasDificeis = embaralhar(dificeis).slice(0, 5);

    perguntasAtuais = embaralhar([...sorteadasFaceis, ...sorteadasDificeis]);

    perguntaAtualIndex = 0;
    pontuacao = 0;

    mostrarPergunta();
}

// ===============================
// MOSTRAR PERGUNTA
// ===============================
function mostrarPergunta() {

    if (perguntaAtualIndex >= perguntasAtuais.length) {
        mostrarResultado();
        return;
    }

    const pergunta = perguntasAtuais[perguntaAtualIndex];

    document.getElementById("pergunta").innerText = pergunta.pergunta;

    const opcoesContainer = document.getElementById("opcoes");
    opcoesContainer.innerHTML = "";

    pergunta.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.innerText = opcao;
        botao.classList.add("opcao-btn");
        botao.onclick = () => verificarResposta(index);
        opcoesContainer.appendChild(botao);
    });

    document.getElementById("progresso").innerText =
        `Pergunta ${perguntaAtualIndex + 1} de ${perguntasAtuais.length}`;
}

// ===============================
// VERIFICAR RESPOSTA
// ===============================
function verificarResposta(indiceSelecionado) {

    const pergunta = perguntasAtuais[perguntaAtualIndex];

    if (indiceSelecionado === pergunta.resposta) {
        pontuacao++;
    }

    perguntaAtualIndex++;
    mostrarPergunta();
}

// ===============================
// MOSTRAR RESULTADO FINAL
// ===============================
function mostrarResultado() {

    const container = document.getElementById("quiz-container");

    container.innerHTML = `
        <h2>Resultado Final</h2>
        <p>Você acertou ${pontuacao} de ${perguntasAtuais.length} perguntas.</p>
        <button onclick="reiniciarQuiz()">Refazer Quiz</button>
    `;

    salvarResultado();
}

// ===============================
// SALVAR RESULTADO
// ===============================
function salvarResultado() {

    const resultado = {
        classe: classeAtual,
        disciplina: disciplinaAtual,
        pontuacao: pontuacao,
        total: perguntasAtuais.length,
        data: new Date().toLocaleString()
    };

    let historico = JSON.parse(localStorage.getItem("historicoQuiz")) || [];
    historico.push(resultado);

    localStorage.setItem("historicoQuiz", JSON.stringify(historico));
}

// ===============================
// REINICIAR QUIZ
// ============================
